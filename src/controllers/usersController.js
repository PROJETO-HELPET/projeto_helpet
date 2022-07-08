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

/* abrigos parceiros 
abrigosParceiros: (request, response) => {
       response.render('abrigosParceiros')
},

 pag abrigos 
pagParceiro: (request, response) => {
    response.render('pagParceiro')
},*/

/* Sobre nós */
sobreNos: (request, response) => {
    response.render('sobreNos') 
},

/*   login  
login: (request, response) => {
    response.render('login')
},

 cadastro 
cadastro: (request, response) => {
    response.render('cadastro')
}, */

/* fale conosco 
faleConosco: (request, response) => {
    response.render('faleConosco')
}
*/

}


module.exports = helpetController;