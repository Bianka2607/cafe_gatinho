const express = require('express');
const router = express.Router();

const controller = require('../controllers/clienteController');

const validarCliente = require('../middlewares/validarCliente');

router.post('/', validarCliente, controller.cadastrar);

router.get('/', controller.listar);

router.get('/:id', controller.buscarPorId);

router.put('/:id', validarCliente, controller.atualizar);

router.delete('/:id', controller.excluir);

module.exports = router;