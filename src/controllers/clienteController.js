const cadastrar = (req, res) => {
    res.status(501).json({ mensagem: 'Cadastro de cliente aguardando integração.' });
};

const listar = (req, res) => {
    res.status(501).json({ mensagem: 'Listagem de clientes aguardando integração.' });
};

const buscarPorId = (req, res) => {
    res.status(501).json({ mensagem: 'Busca de cliente aguardando integração.' });
};

const atualizar = (req, res) => {
    res.status(501).json({ mensagem: 'Atualização de cliente aguardando integração.' });
};

const excluir = (req, res) => {
    res.status(501).json({ mensagem: 'Exclusão de cliente aguardando integração.' });
};

module.exports = { cadastrar, listar, buscarPorId, atualizar, excluir };