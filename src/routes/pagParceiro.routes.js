const { Router }= require('express');
const helpetController = require ('../controllers/pagParceiro.Controller')

const helpetRoutes = Router();

helpetRoutes.get("/", helpetController.pagParceiro);

module.exports = helpetRoutes;