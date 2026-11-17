const express = require('express');
const router = express.Router();

const controller = require('../controllers/pedidoController');

router.post('/', controller.cadastrar);
router.get('/', controller.listar);
router.get('/:id', controller.buscarPorId);
router.put('/:id/status', controller.atualizarStatus);
router.delete('/:id', controller.cancelar);

module.exports = router;