const { Router }= require('express');
const helpetController = require ('../controllers/abrigosParceiros.Controller')

const helpetRoutes = Router();


helpetRoutes.get("/", helpetController.abrigosParceiros);


module.exports = helpetRoutes;