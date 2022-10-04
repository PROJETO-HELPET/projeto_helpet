const { Router }= require('express');
const helpetController = require ('../controllers/cadastro.Controller');
const multer = require('multer');
const path = require('path');
const validadores = require('../../Middlewares/validadores');

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


helpetRoutes.get("", helpetController.viewForm); 
helpetRoutes.post(
    "",
    upload.fields([
        {name:'sualogo', maxCount:1},
        {name:'suafoto', maxCount:1}]),
    validadores,
    helpetController.dadosSalvos)


module.exports = helpetRoutes;