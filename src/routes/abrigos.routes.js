const { Router }= require('express');
const helpetController = require ('../controllers/abrigos.Controller')

const helpetRoutes = Router();

helpetRoutes.get("/", helpetController.abrigos);
/* helpetRoutes.get("/:id", helpetController.buscarAbrigo); */


module.exports = helpetRoutes;