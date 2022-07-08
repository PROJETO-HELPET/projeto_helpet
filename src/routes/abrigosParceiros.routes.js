const { Router }= require('express');
const helpetController = require ('../controllers/abrigosParceiros.controller')

const helpetRoutes = Router();



helpetRoutes.get("/abrigosParceiros", helpetController.abrigosParceiros);
helpetRoutes.get("/abrigosParceiros/pagParceiro", helpetController.pagParceiro);

module.exports = helpetRoutes;