const validarProduto = (req, res, next) => {
    const { nome, descricao, preco, categoria } = req.body;

    if (!nome || !descricao || preco === undefined || !categoria) {
        return res.status(400).json({
            sucesso: false,
            mensagem: 'Nome, descrição, preço e categoria são obrigatórios.'
        });
    }

    if (typeof preco !== 'number' || preco <= 0) {
        return res.status(400).json({
            sucesso: false,
            mensagem: 'O preço deve ser um número maior que zero.'
        });
    }

    next();
};

module.exports = validarProduto;