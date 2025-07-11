const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discountPrice: { type: Number, default: 0 },
  brand: { type: String, required: true },
  images: [{ type: String }], // Cloudinary URLs
  countInStock: { type: Number, required: true, default: 0 },
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  category: {
    type: String, // e.g., "Kitchen"
    required: true,
  },
  subCategory: {
    type: String, // e.g., "Cookware", "Appliances"
    required: true,
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);