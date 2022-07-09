const helpetRoutes = require('../routes/abrigos.routes')

const abrigosController = {

/* abrigos */
abrigos: (request, response) => {
    response.render('abrigos')
},


}

module.exports = abrigosController;