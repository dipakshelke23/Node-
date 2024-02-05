// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create a new product
router.post('/products', productController.createProduct);

// Get all products
router.get('/products', productController.getAllProducts);

// Get a specific product by ID
router.get('/product/:id', productController.getProductById);

// Update a product by ID
router.put('/product/:id', productController.updateProduct);

// Delete a product by ID
router.delete('/product/:id', productController.deleteProduct);

module.exports = router;
