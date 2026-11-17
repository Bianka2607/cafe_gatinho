const listar = (req, res) => {
    res.status(501).json({ mensagem: 'Consulta de estoque aguardando integração.' });
};

const atualizar = (req, res) => {
    res.status(501).json({ mensagem: 'Atualização de estoque aguardando integração.' });
};

module.exports = { listar, atualizar };