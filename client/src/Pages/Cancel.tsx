
import { Link } from 'react-router-dom';

const Cancel = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-red-50 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">❌ Booking Cancelled</h1>
      <p className="text-lg text-gray-700 mb-6">Your payment was not completed. Please try again.</p>
      <Link
        to="/hotels/deal"
        className="bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 transition"
      >
        Try Again
      </Link>
    </div>
  );
};

export default Cancel;
