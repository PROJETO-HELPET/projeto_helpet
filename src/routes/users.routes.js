const { Router }= require('express');
const helpetController = require ('../controllers/usersController')

const helpetRoutes = Router();


/* home */


/* maps abrigos */


/* abrigos */

helpetRoutes.get("", helpetController.abrigosParceiros);

/* pag abrigos */

helpetRoutes.get("", helpetController.pagAbrigo);

/* sobre nos */

helpetRoutes.get("", helpetController.sobreNos);

/* login  */


/* cadastro */



/* fale conosco */

/* helpetRoutes.get("", helpetController.faleConosco); */

module.exports = helpetRoutes;