const helpetRoutes = require('../routes/login.routes')

const loginController = {


/* login  */
login: (request, response) => {
    response.render('login')
},

/* cadastro 
cadastro: (request, response) => {
    response.render('cadastro')
}, */

}
module.exports = loginController;