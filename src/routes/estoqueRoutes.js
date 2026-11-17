
const express = require('express');
const router = express.Router();

const controller = require('../controllers/estoqueController');

router.get('/', controller.listar);
router.put('/:produtoId', controller.atualizar);

module.exports = router;