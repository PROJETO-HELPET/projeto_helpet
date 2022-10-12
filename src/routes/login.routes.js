const { Router }= require('express');
const helpetController = require ('../controllers/login.Controller')

const helpetRoutes = Router();


helpetRoutes.get("/", helpetController.getlogin);
helpetRoutes.post("/", helpetController.login);

/* helpetRoutes.get("/login/cadastro", helpetController.cadastro);  */


module.exports = helpetRoutes;