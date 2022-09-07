const { Router }= require('express');
const helpetController = require ('../controllers/faleConosco.Controller')

const helpetRoutes = Router();

helpetRoutes.get("/cep", helpetController.faleConosco);


module.exports = helpetRoutes;