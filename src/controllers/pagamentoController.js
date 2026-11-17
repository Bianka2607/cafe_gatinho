const cadastrar = (req, res) => {
    res.status(501).json({ mensagem: 'Registro de pagamento aguardando integração.' });
};

const listar = (req, res) => {
    res.status(501).json({ mensagem: 'Listagem de pagamentos aguardando integração.' });
};

const buscarPorId = (req, res) => {
    res.status(501).json({ mensagem: 'Busca de pagamento aguardando integração.' });
};

const comprovante = (req, res) => {
    res.status(501).json({ mensagem: 'Comprovante aguardando integração.' });
};

module.exports = { cadastrar, listar, buscarPorId, comprovante };