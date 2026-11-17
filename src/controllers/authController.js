const cadastrar = (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: 'Preencha nome, email e senha.' });
    }

    res.status(501).json({ mensagem: 'Cadastro aguardando integração com o banco.' });
};

const login = (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ mensagem: 'Informe email e senha.' });
    }

    res.status(501).json({ mensagem: 'Login aguardando integração com o banco.' });
};

const recuperarSenha = (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ mensagem: 'Informe seu email.' });
    }

    res.status(501).json({ mensagem: 'Recuperação de senha aguardando integração.' });
};

module.exports = { cadastrar, login, recuperarSenha };