const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController')
const authentication = require('../middleware/AuthMiddleware');

router.get('', authentication.authMiddleware, productController.getListProduct);

module.exports = router;