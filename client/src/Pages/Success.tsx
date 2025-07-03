import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-green-50 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">🎉 Booking Confirmed!</h1>
      <p className="text-lg text-gray-700 mb-6">Thank you for booking with us. We’ve sent the details to the hotel owner.</p>
      <Link
        to="/"
        className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default Success;
