const express = require('express');
const router = express.Router();
const srv = require('../services/products')

router.get('/', srv.getProducts)
router.get('/:id', srv.getProductById)
router.post('/', srv.newProduct)
router.put('/:id', srv.updateProduct)
router.delete('/:id', srv.deleteProduct)

module.exports = router;