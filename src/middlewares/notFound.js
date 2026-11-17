const notFound = (req, res, next) => {
    res.status(404).json({
        sucesso: false,
        mensagem: 'Rota não encontrada.'
    });
};

module.exports = notFound;