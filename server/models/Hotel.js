import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true // This will store image URL (e.g., Cloudinary or Firebase URL)
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Hotel = mongoose.model('Hotel', hotelSchema);

export default Hotel;
