const { Router }= require('express');
const helpetController = require ('../controllers/login.Controller')

const helpetRoutes = Router();


helpetRoutes.get("/", helpetController.login);

/* helpetRoutes.get("/login/cadastro", helpetController.cadastro); */


module.exports = helpetRoutes;