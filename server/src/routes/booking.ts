import express from 'express';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// ✅ Initialize Stripe with correct API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-06-30.basil',
});

// 🔐 Type for bookingDetails
interface BookingDetails {
  customerName: string;
  customerPhone: string;
  numberOfPeople: number;
  total: number;
  rooms: {
    name: string;
    quantity: number;
    price: number;
    description: string;
  }[];
}

// 📦 Booking Route
router.post('/create-checkout-session', async (req, res) => {
  const { bookingDetails } = req.body;

  try {
    const {
      customerName,
      customerPhone,
      numberOfPeople,
      total,
      rooms,
    }: BookingDetails = bookingDetails;

    console.log('✅ Received rooms:', rooms);
    console.log('✅ Received total:', total);

    // ✅ Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: rooms.map((room) => ({
        price_data: {
          currency: 'inr',
          product_data: {
            name: room.name,
            description: room.description,
          },
          unit_amount: room.price * 100, // price in paise
        },
        quantity: room.quantity,
      })),
      mode: 'payment',
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/cancel',
    });

    // ✅ Email Setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO, // hotel owner's email
      subject: '📩 New Hotel Booking Request',
      html: `
        <h2>New Booking Details</h2>
        <p><strong>Name:</strong> ${customerName}</p>
        <p><strong>Phone:</strong> ${customerPhone}</p>
        <p><strong>No. of People:</strong> ${numberOfPeople}</p>
        <p><strong>Total Price:</strong> ₹${total}</p>
        <h4>Booked Rooms:</h4>
        <ul>
          ${rooms.map(
            (room) =>
              `<li>${room.quantity} x ${room.name} (₹${room.price})</li>`
          ).join('')}
        </ul>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('📨 Email sent to owner');

    // ✅ Send session ID to frontend
    res.status(200).json({ id: session.id });

  } catch (error: any) {
    console.error('❌ Error:', error.message);
    res.status(500).json({ error: 'Stripe session not created. Please try again.' });
  }
});

export default router;
