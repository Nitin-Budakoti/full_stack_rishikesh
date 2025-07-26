import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';
import transporter from '../config/email'; // ✅ Using shared email config

dotenv.config();

const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-06-30.basil',
});

// ✅ Define BookingDetails type
interface BookingDetails {
  customerName: string;
  customerPhone: string;
  numberOfPeople: number;
  checkInDate: string;
  checkOutDate: string;
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
      checkInDate,
      checkOutDate,
      total,
      rooms,
    }: BookingDetails = bookingDetails;

    console.log('✅ Received booking:', bookingDetails);

    // 🧾 Create Stripe session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: rooms.map((room) => ({
        price_data: {
          currency: 'inr',
          product_data: {
            name: room.name,
            description: room.description,
          },
          unit_amount: room.price * 100, // Stripe uses paise
        },
        quantity: room.quantity,
      })),
      mode: 'payment',
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/cancel',
    });

    // 📧 Email Content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: '📩 New Hotel Booking Request',
      html: `
        <h2>🛎️ New Booking Details</h2>
        <p><strong>Name:</strong> ${customerName}</p>
        <p><strong>Phone:</strong> ${customerPhone}</p>
        <p><strong>No. of People:</strong> ${numberOfPeople}</p>
        <p><strong>Check-In:</strong> ${checkInDate}</p>
        <p><strong>Check-Out:</strong> ${checkOutDate}</p>
        <p><strong>Total Price:</strong> ₹${total}</p>
        <h4>📦 Booked Rooms:</h4>
        <ul>
          ${rooms
            .map(
              (room) =>
                `<li>${room.quantity} × ${room.name} (₹${room.price})</li>`
            )
            .join('')}
        </ul>
      `,
    };

    // ✅ Send Email via shared transporter
    await transporter.sendMail(mailOptions);
    console.log('📨 Email sent successfully to hotel owner');

    // 🎯 Respond with Stripe session ID
    res.status(200).json({ id: session.id });

  } catch (error: any) {
    console.error('❌ Error creating session:', error.message);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

export default router;
