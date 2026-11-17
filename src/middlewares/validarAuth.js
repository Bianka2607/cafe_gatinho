const validarCadastro = (req, res, next) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({
            sucesso: false,
            mensagem: 'Nome, email e senha são obrigatórios.'
        });
    }

    if (!email.includes('@') || !email.includes('.')) {
        return res.status(400).json({
            sucesso: false,
            mensagem: 'Informe um email válido.'
        });
    }

    if (senha.length < 8) {
        return res.status(400).json({
            sucesso: false,
            mensagem: 'A senha deve ter pelo menos 8 caracteres.'
        });
    }

    next();
};

const validarLogin = (req, res, next) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({
            sucesso: false,
            mensagem: 'Email e senha são obrigatórios.'
        });
    }

    next();
};

module.exports = {
    validarCadastro,
    validarLogin
};