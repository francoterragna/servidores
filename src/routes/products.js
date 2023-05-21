const express = require('express');
const fs = require('fs').promises;
const router = express.Router();
const ProductController = require('../controllers/product');



// = GET
router.get('/realtimeproducts', (req,res) => {
    res.render('realTimeProducts');
})

router.get('/:pid', ProductController.getProductById);

router.get('/', ProductController.getProducts);


// = POST

router.post('/', ProductController.createProduct);


// = PUT

router.put('/:pid', ProductController.updateProduct);

// = DELETE

router.delete('/:pid', ProductController.deleteProduct);


module.exports = router;