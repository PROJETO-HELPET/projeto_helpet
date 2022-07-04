const express = require('express');
const path = require('path');
const helpetRoutes = require('./routes/users.routes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/sobreNos', helpetRoutes)

/* app.get('/', (request, response) => {
    response.send("hello World")
}) */

app.listen(8002, () => {
    console.log('Helpet rodando na porta 8002 🚀')
})
