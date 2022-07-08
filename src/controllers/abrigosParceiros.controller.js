const helpetRoutes = require('../routes/abrigosParceiros.routes');

const abrigosParceirosController = {


/* abrigos parceiros */
abrigosParceiros: (request, response) => {
    response.render('abrigosParceiros')
},

/* pag abrigos */
pagParceiro: (request, response) => {
 response.render('pagParceiro')
},


}
 
module.exports = abrigosParceirosController;