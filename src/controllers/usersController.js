const helpetController = {

home: (request, response) => {
    response.render('home')
},

abrigos: (request, response) => {
    response.render('abrigos')
},


sobreNos: (request, response) => {
    response.render('sobreNos') 
},

}


module.exports = helpetController;