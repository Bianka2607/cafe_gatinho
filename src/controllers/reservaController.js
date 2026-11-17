const cadastrar = (req, res) => {
    res.status(501).json({ mensagem: 'Criação de reserva aguardando integração.' });
};

const listar = (req, res) => {
    res.status(501).json({ mensagem: 'Listagem de reservas aguardando integração.' });
};

const buscarPorId = (req, res) => {
    res.status(501).json({ mensagem: 'Busca de reserva aguardando integração.' });
};

const atualizar = (req, res) => {
    res.status(501).json({ mensagem: 'Atualização de reserva aguardando integração.' });
};

const cancelar = (req, res) => {
    res.status(501).json({ mensagem: 'Cancelamento de reserva aguardando integração.' });
};

module.exports = { cadastrar, listar, buscarPorId, atualizar, cancelar };