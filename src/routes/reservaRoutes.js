
const express = require('express');
const router = express.Router();

const controller = require('../controllers/reservaController');

router.post('/', controller.cadastrar);
router.get('/', controller.listar);
router.get('/:id', controller.buscarPorId);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.cancelar);

module.exports = router;