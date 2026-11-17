const cadastrar = (req, res) => {
    res.status(501).json({ mensagem: 'Cadastro de produto aguardando integração.' });
};

const listar = (req, res) => {
    res.status(501).json({ mensagem: 'Listagem de produtos aguardando integração.' });
};

const buscarPorId = (req, res) => {
    res.status(501).json({ mensagem: 'Busca de produto aguardando integração.' });
};

const atualizar = (req, res) => {
    res.status(501).json({ mensagem: 'Atualização de produto aguardando integração.' });
};

const excluir = (req, res) => {
    res.status(501).json({ mensagem: 'Exclusão de produto aguardando integração.' });
};

module.exports = { cadastrar, listar, buscarPorId, atualizar, excluir };