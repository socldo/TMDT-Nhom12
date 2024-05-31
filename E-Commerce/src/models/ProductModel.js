const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        type: { type: String, required: true },
        price: { type: Number, required: true },
        countInStock: { type: Number, required: true },
        rating: { type: Number, required: true },
        description: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

// Create a model named 'Product' that maps to the 'products' collection
const Product = mongoose.model('products', productSchema);

module.exports = Product;
