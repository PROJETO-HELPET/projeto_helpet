const express = require('express');
const path = require('path');
const helpetRoutes = require('./routes/users.routes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '..', 'public')));

/* console.log((path.join(__dirname, '..', 'public', 'css', 'headerFooter.css'))) */

/* app.use('/')
app.use('/abrigos') */
app.use('/abrigosParceiros', helpetRoutes)
app.use('/pagAbrigo', helpetRoutes)
app.use('/sobreNos', helpetRoutes)
/* app.use('/login')
app.use('/faleConosco' , helpetRouters) */


app.listen(8002, () => {
    console.log('Helpet rodando na porta 8002 🚀')
})
