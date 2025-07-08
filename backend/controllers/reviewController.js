const Review = require('../models/Review');
const Product = require('../models/Product');
const cloudinary = require('../config/cloudinary');

const createReview = async (req, res) => {
  const { productId, rating, comment } = req.body;
  try {
    const images = [];
    if (req.files && req.files.images) {
      const files = Array.isArray(req.files.images) ? req.files.images : [req.files.images];
      for (const file of files) {
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
          folder: 'reviews',
        });
        images.push(result.secure_url);
      }
    }
    const review = await Review.create({
      product: productId,
      user: req.user._id,
      rating,
      comment,
      images,
    });
    const product = await Product.findById(productId);
    product.numReviews += 1;
    product.rating = ((product.rating * (product.numReviews - 1)) + rating) / product.numReviews;
    await product.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: 'Error creating review', error: error.message });
  }
};

const getProductReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.productId }).populate('user', 'name');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error: error.message });
  }
};

module.exports = { createReview, getProductReviews };