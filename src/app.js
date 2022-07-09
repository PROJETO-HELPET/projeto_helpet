const express = require('express');
const path = require('path');
const helpetRoutes = require('./routes/users.routes');
const loginRoutes = require('./routes/login.routes');
const faleConoscoRoutes = require('./routes/faleConosco.routes');
const abrigosParceirosRoutes = require('./routes/abrigosParceiros.routes');
const abrigosRoutes = require ('./routes/abrigos.routes');
const cadastroRoutes = require ('./routes/cadastro.routes')
const pagParceiroRoutes = require ('./routes/pagParceiro.routes')


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '..', 'public')));


app.use('/', helpetRoutes);
app.use('/abrigos', abrigosRoutes)
app.use('/abrigosParceiros', abrigosParceirosRoutes);
app.use('/abrigosParceiros/pagParceiro', pagParceiroRoutes)
app.use('/login', loginRoutes);
app.use('/login/cadastro', cadastroRoutes);
app.use('/faleConosco', faleConoscoRoutes);


app.listen(8002, () => {
    console.log('Helpet rodando na porta 8002 🚀')
})