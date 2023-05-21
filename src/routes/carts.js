const express = require('express');
const fs = require('fs').promises;
const CartsController = require('../controllers/cart')

const router = express.Router();

router.post('/', CartsController.createCart);

router.get('/:cid', CartsController.getCarts);

router.post('/:cid/product/:pid', CartsController.addProductToCart);

module.exports = router;
