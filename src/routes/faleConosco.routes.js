const { Router }= require('express');
const helpetController = require ('../controllers/faleConosco.Controller')

const helpetRoutes = Router();

helpetRoutes.get("/", helpetController.faleConosco);


module.exports = helpetRoutes;