const cadastrar = (req, res) => {
    res.status(501).json({ mensagem: 'Criação de pedido aguardando integração.' });
};

const listar = (req, res) => {
    res.status(501).json({ mensagem: 'Listagem de pedidos aguardando integração.' });
};

const buscarPorId = (req, res) => {
    res.status(501).json({ mensagem: 'Busca de pedido aguardando integração.' });
};

const atualizarStatus = (req, res) => {
    res.status(501).json({ mensagem: 'Atualização do status aguardando integração.' });
};

const cancelar = (req, res) => {
    res.status(501).json({ mensagem: 'Cancelamento de pedido aguardando integração.' });
};

module.exports = { cadastrar, listar, buscarPorId, atualizarStatus, cancelar };