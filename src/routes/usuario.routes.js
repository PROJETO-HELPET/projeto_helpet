const { Router }= require('express');
const helpetController = require ('../controllers/usuario.Controller')
const multer = require('multer');
const path = require('path');

const multerDiskStorage = multer.diskStorage({
    destination: (req,file,callback)=>{
       if(file.fieldname==='sualogo'){
        callback(null,'public/profile')
       }else{
        callback(null,'public/foto')
       }
        
    },
    filename: (req,file,callback)=>{
        callback(null,file.fieldname +'-'+ Date.now()+path.extname(file.originalname));
    }
});
const upload = multer({storage: multerDiskStorage});

const helpetRoutes = Router();

helpetRoutes.get("/logout", helpetController.logout);

helpetRoutes.get("/edit/:id", helpetController.buscarUsuario);
helpetRoutes.put(
    "/:id", 
    upload.fields([
        {name:'sualogo', maxCount:1},
        {name:'suafoto', maxCount:1}
    ]),
    helpetController.editar);

helpetRoutes.get("/delete/:id", helpetController.deleteUsuarioTela);
helpetRoutes.delete("/:id", helpetController.delete);



module.exports = helpetRoutes;