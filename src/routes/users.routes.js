const { Router }= require('express');
const helpetController = require ('../controllers/usersController')

const helpetRoutes = Router();



helpetRoutes.get("/", helpetController.home);
helpetRoutes.get("/sobreNos", helpetController.sobreNos);
/*
helpetRoutes.get("/abrigos", helpetController.abrigos); 
helpetRoutes.get("/abrigosParceiros", helpetController.abrigosParceiros);
helpetRoutes.get("/abrigosParceiros/pagParceiro", helpetController.pagParceiro);
helpetRoutes.get("/login", helpetController.login);
helpetRoutes.get("/login/cadastro", helpetController.cadastro);
helpetRoutes.get("/faleConosco", helpetController.faleConosco); 
*/

module.exports = helpetRoutes;