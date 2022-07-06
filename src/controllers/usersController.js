const helpetRoutes = require('../routes/users.routes')
const helpetController = {
    sobreNos: (request, response) => {
        response.render('sobre_nos')
    }
}

module.exports = helpetController