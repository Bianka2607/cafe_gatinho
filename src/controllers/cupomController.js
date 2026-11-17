const cadastrar = (req, res) => {
    res.status(501).json({ mensagem: 'Cadastro de cupom aguardando integração.' });
};

const listar = (req, res) => {
    res.status(501).json({ mensagem: 'Listagem de cupons aguardando integração.' });
};

const validar = (req, res) => {
    res.status(501).json({ mensagem: 'Validação de cupom aguardando integração.' });
};

module.exports = { cadastrar, listar, validar };