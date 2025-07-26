import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import i5 from '../assets/i5.jpg';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Deal = () => {
  const roomOptions = [
    {
      name: 'Deluxe Room',
      price: 2999,
      description: 'Spacious room with river view, AC and king bed.',
      images: [i5, i5],
    },
    {
      name: 'Suite Room',
      price: 5499,
      description: 'Luxury suite with balcony, minibar and living area.',
      images: [i5, i5],
    },
    {
      name: 'Budget Room',
      price: 1999,
      description: 'Cozy room with basic amenities, ideal for backpackers.',
      images: [i5, i5],
    },
  ];

  const initialQuantities: Record<string, number> = roomOptions.reduce((acc, room) => {
    acc[room.name] = 0;
    return acc;
  }, {} as Record<string, number>);

  const [quantities, setQuantities] = useState(initialQuantities);
  const [showModal, setShowModal] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleQuantityChange = (roomName: string, value: number) => {
    setQuantities((prev) => ({ ...prev, [roomName]: value }));
  };

  const total = Object.entries(quantities).reduce((acc, [roomName, qty]) => {
    const room = roomOptions.find((r) => r.name === roomName);
    return acc + (room ? room.price * qty : 0);
  }, 0);

  const handleBookingSubmit = async () => {
    if (!customerName || !customerPhone || !numberOfPeople || !checkInDate || !checkOutDate) {
      alert("Please fill all details including check-in and check-out dates.");
      return;
    }

    const stripe = await stripePromise;

    const response = await fetch('http://localhost:5000/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bookingDetails: {
          customerName,
          customerPhone,
          numberOfPeople,
          checkInDate,
          checkOutDate,
          total,
          rooms: Object.entries(quantities)
            .filter(([_, qty]) => qty > 0)
            .map(([name, qty]) => {
              const room = roomOptions.find((room) => room.name === name);
              return {
                name,
                quantity: qty,
                price: room?.price ?? 0,
                description: room?.description ?? '',
              };
            }),
        },
      }),
    });

    if (!response.ok) {
      alert('❌ Stripe session not created. Please try again.');
      return;
    }

    const session = await response.json();

    const result = await stripe?.redirectToCheckout({
      sessionId: session.id,
    });

    if (result?.error) {
      console.error(result.error.message);
      alert("Stripe Checkout failed. Please try again.");
    }
  };

  return (
    <div className="bg-white text-gray-800 px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Hotel Deals</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {roomOptions.map((room) => (
          <div key={room.name} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{room.name}</h2>
            <div className="flex gap-3 mb-3">
              {room.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="room"
                  className="w-32 h-24 object-cover rounded-lg shadow"
                />
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-2">{room.description}</p>
            <p className="text-indigo-600 font-bold text-lg mb-2">₹{room.price} / night</p>
            <div className="flex items-center gap-2">
              <label className="text-sm">Rooms:</label>
              <input
                type="number"
                min={0}
                value={quantities[room.name]}
                onChange={(e) => handleQuantityChange(room.name, parseInt(e.target.value) || 0)}
                className="w-16 border px-2 py-1 rounded text-sm"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition"
        >
          Book Now
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Booking Summary</h3>

            <input
              type="text"
              placeholder="Your Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full mb-2 px-3 py-2 border rounded-md text-sm"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="w-full mb-2 px-3 py-2 border rounded-md text-sm"
            />
            <input
              type="number"
              placeholder="No. of People"
              value={numberOfPeople}
              onChange={(e) => setNumberOfPeople(e.target.value)}
              className="w-full mb-2 px-3 py-2 border rounded-md text-sm"
            />
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="w-full mb-2 px-3 py-2 border rounded-md text-sm"
            />
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              className="w-full mb-4 px-3 py-2 border rounded-md text-sm"
            />

            {(Object.entries(quantities) as [string, number][])
              .filter(([, qty]) => qty > 0)
              .map(([roomName, qty], idx) => {
                const room = roomOptions.find((r) => r.name === roomName);
                const price = room?.price ?? 0;
                return (
                  <div key={idx} className="text-sm text-gray-700 mb-2">
                    {roomName}: {qty} × ₹{price} = ₹{qty * price}
                  </div>
                );
              })}

            <div className="mt-4 text-gray-800 font-semibold">
              Total Amount: <span className="text-green-600">₹{total}</span>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleBookingSubmit}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Deal;
