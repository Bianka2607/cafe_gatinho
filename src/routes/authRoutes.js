const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

const {
    validarCadastro,
    validarLogin
} = require('../middlewares/validarAuth');

router.post('/register', validarCadastro, authController.cadastrar);
router.post('/login', validarLogin, authController.login);
router.post('/forgot-password', authController.recuperarSenha);

module.exports = router;