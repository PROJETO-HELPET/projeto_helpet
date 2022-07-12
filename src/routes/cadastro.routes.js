const { Router }= require('express');
const helpetController = require ('../controllers/cadastro.Controller')

const helpetRoutes = Router();


helpetRoutes.get("", helpetController.viewForm); 
helpetRoutes.post("", helpetController.dadosSalvos)


module.exports = helpetRoutes;