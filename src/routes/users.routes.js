const { Router }= require('express');
const helpetController = require ('../controllers/usersController')

const helpetRoutes = Router();

/* home */


/* maps abrigos */


/* abrigos */



/* pag abrigos */


/* sobre nos */

helpetRoutes.get("", helpetController.sobreNos);

/* login  */


/* cadastro */



/* fale conosco */

/* helpetRoutes.get("", helpetController.faleConosco); */

module.exports = helpetRoutes;