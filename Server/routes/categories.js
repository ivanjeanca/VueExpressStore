const express = require('express');
const router = express.Router();
const srv = require('../services/categories')

router.get('/', srv.getCategories)
router.get('/:id', srv.getCategoryById)
router.post('/', srv.newCategory)
router.put('/:id', srv.updateCategory)
router.delete('/:id', srv.deleteCategory)

module.exports = router;