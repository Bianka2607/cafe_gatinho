
const express = require('express');
const router = express.Router();

const controller = require('../controllers/pagamentoController');

router.post('/', controller.cadastrar);
router.get('/', controller.listar);
router.get('/:id', controller.buscarPorId);
router.get('/:id/comprovante', controller.comprovante);

module.exports = router;