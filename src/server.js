const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());


const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');


const authRoutes = require('./routes/authRoutes');

const clienteRoutes = require('./routes/clienteRoutes');

const produtoRoutes = require('./routes/produtoRoutes');

const pedidoRoutes = require('./routes/pedidoRoutes');

const pagamentoRoutes = require('./routes/pagamentoRoutes');

const reservaRoutes = require('./routes/reservaRoutes');

const estoqueRoutes = require('./routes/estoqueRoutes');

const cupomRoutes = require('./routes/cupomRoutes');

const relatorioRoutes = require('./routes/relatorioRoutes');


app.use('/auth', authRoutes);
app.use('/clientes', clienteRoutes);
app.use('/produtos', produtoRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/pagamentos', pagamentoRoutes);
app.use('/reservas', reservaRoutes);
app.use('/estoque', estoqueRoutes);
app.use('/cupons', cupomRoutes);
app.use('/relatorios', relatorioRoutes);


app.get('/', (req, res) => {
    res.status(200).json({
        sucesso: true,
        mensagem: 'API da Cafeteria funcionando!'
    });
});


app.use(notFound);


app.use(errorHandler);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});