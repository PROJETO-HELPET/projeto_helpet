const { Router }= require('express');
const helpetController = require ('../controllers/usuario.Controller')

const helpetRoutes = Router();

helpetRoutes.get("/logout", helpetController.logout);
helpetRoutes.get("/", helpetController.usuario);
helpetRoutes.get("/:id", helpetController.buscarUsuario);
helpetRoutes.put("/:id", helpetController.editar);



module.exports = helpetRoutes;