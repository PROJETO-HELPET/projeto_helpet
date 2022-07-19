const { Router }= require('express');
const helpetController = require ('../controllers/cadastro.Controller');
const multer = require('multer');
const path = require('path')

const multerDiskStorage = multer.diskStorage({
    destination: (req,file,callback)=>{
       
        callback(null,'public/profile');
    },
    filename: (req,file,callback)=>{
        callback(null,file.fieldname +'-'+ Date.now()+path.extname(file.originalname));
    }
});
const upload = multer({storage: multerDiskStorage});

const helpetRoutes = Router();


helpetRoutes.get("", helpetController.viewForm); 
helpetRoutes.post("", upload.single('sualogo'),helpetController.dadosSalvos)


module.exports = helpetRoutes;