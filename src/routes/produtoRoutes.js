const express = require('express');
const router = express.Router();

const controller = require('../controllers/produtoController');

const validarProduto = require('../middlewares/validarProduto');

router.post('/', validarProduto, controller.cadastrar);

router.get('/', controller.listar);

router.get('/:id', controller.buscarPorId);

router.put('/:id', validarProduto, controller.atualizar);

router.delete('/:id', controller.excluir);

module.exports = router;