const helpetRoutes = require('../routes/users.routes')

const helpetController = {
/* home */


/* maps abrigos */


/* abrigos */


abrigosParceiros: (request, response) => {
       response.render('abrigos')
},

/* pag abrigos */

pagAbrigo: (request, response) => {
    response.render('PagParceiro')
},


/* Sobre nós */


sobreNos: (request, response) => {
    response.render('sobreNos') 
},


/* login  */


/* cadastro */


/* fale conosco */

/* const helpetController = {
    faleConosco: (request, response) => {
        response.render('faleConosco')
    }
}
 */
}


module.exports = helpetController