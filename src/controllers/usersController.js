const helpetRoutes = require('../routes/users.routes')

const helpetController = {

/* home */
home: (request, response) => {
    response.render('home')
},

/* abrigos */
abrigos: (request, response) => {
    response.render('abrigos')
},


sobreNos: (request, response) => {
    response.render('sobreNos') 
},

}


module.exports = helpetController;