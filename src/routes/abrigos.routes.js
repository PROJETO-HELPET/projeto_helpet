const { Router }= require('express');
const helpetController = require ('../controllers/abrigos.Controller')

const helpetRoutes = Router();

helpetRoutes.get("/", helpetController.abrigos);


module.exports = helpetRoutes;