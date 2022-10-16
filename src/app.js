const express = require('express');
require('express-async-errors');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser')
const helpetRoutes = require('./routes/users.routes');
const loginRoutes = require('./routes/login.routes');
const faleConoscoRoutes = require('./routes/faleConosco.routes');
const abrigosParceirosRoutes = require('./routes/abrigosParceiros.routes');
const abrigosRoutes = require('./routes/abrigos.routes');
const cadastroRoutes = require('./routes/cadastro.routes')
const pagParceiroRoutes = require('./routes/pagParceiro.routes');
const usuarioRoutes = require('./routes/usuario.routes');
const obterFotoUsuario = require('./middlewares/obterFotoUsuario');
const methodOverride = require("method-override");

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'viraLata',
    resave: true,
    saveUninitialized: true,
}));
app.use(cookieParser());

app.use(obterFotoUsuario);

app.use('/', helpetRoutes);
app.use('/abrigos', abrigosRoutes)
app.use('/abrigosParceiros', abrigosParceirosRoutes);
app.use('/abrigosParceiros/pagParceiro', pagParceiroRoutes)
app.use('/login', loginRoutes);
app.use('/login/cadastro', cadastroRoutes);
app.use('/faleConosco', faleConoscoRoutes);
app.use('/usuario', usuarioRoutes);

app.use((err, req, res, next) => {
    console.error(err);

    next(err);
});


app.listen(8002, () => {
    console.log('Helpet rodando na porta 8002 🚀')
})