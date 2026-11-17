const validarCliente = (req, res, next) => {
    const { nome, email, telefone } = req.body;

    if (!nome || !email || !telefone) {
        return res.status(400).json({
            sucesso: false,
            mensagem: 'Nome, email e telefone são obrigatórios.'
        });
    }

    if (!email.includes('@') || !email.includes('.')) {
        return res.status(400).json({
            sucesso: false,
            mensagem: 'Informe um email válido.'
        });
    }

    next();
};

module.exports = validarCliente;