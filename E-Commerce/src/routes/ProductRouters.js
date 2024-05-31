const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController')
const authentication = require('../middleware/AuthMiddleware');

router.get('/products', authentication.authMiddleware, productController.getListProduct);

module.exports = router;