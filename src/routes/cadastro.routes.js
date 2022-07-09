const { Router }= require('express');
const helpetController = require ('../controllers/cadastro.Controller')

const helpetRoutes = Router();


helpetRoutes.get("/", helpetController.cadastro); 


module.exports = helpetRoutes;