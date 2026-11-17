
const express = require('express');
const router = express.Router();

const controller = require('../controllers/cupomController');

router.post('/', controller.cadastrar);
router.get('/', controller.listar);
router.post('/validar', controller.validar);

module.exports = router;