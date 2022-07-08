const helpetRoutes = require('../routes/faleConosco.routes')

const faleconoscoController = {

/* fale conosco */
faleConosco: (request, response) => {
    response.render('faleConosco')
},


}

module.exports = faleconoscoController;