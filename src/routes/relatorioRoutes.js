
const express = require('express');
const router = express.Router();

const controller = require('../controllers/relatorioController');

router.get('/vendas', controller.vendas);
router.get('/produtos', controller.produtos);

module.exports = router;