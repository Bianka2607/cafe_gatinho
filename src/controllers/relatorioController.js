const vendas = (req, res) => {
    res.status(501).json({ mensagem: 'Relatório de vendas aguardando integração.' });
};

const produtos = (req, res) => {
    res.status(501).json({ mensagem: 'Relatório de produtos aguardando integração.' });
};

module.exports = { vendas, produtos };