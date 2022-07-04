const { Router }= require('express');
const helpetController = require ('../controllers/usersController')

const helpetRoutes = Router();

helpetRoutes.get('/', helpetController.sobreNos);

module.exports = helpetRoutes;