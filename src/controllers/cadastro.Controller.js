const helpetRoutes = require('../routes/cadastro.routes')
const fs = require('fs')
const path = require('path')
const { json } = require('express')
const listaAbrigos = path.join(__dirname,'..','data','cadastroDataBase.json')

const cadastroController = {

/* cadastro */
viewForm: (request, response) => {
   return response.render('cadastro')
},

dadosSalvos: (req,res)=>{
    console.log(req.body) 
    let { NomeDoAbrigo, Email, NomeProprietario, Capacidade, Numero ,Endereco , Bairro, Senha, ConfirmarSenha, sobre, sualogo } = req.body;
    let dadosAbrigos = JSON.stringify([{ NomeDoAbrigo, Email, NomeProprietario, Capacidade, Numero,Endereco , Bairro, Senha, ConfirmarSenha, sobre, sualogo}]);
    fs.writeFileSync(listaAbrigos, dadosAbrigos);
    res.send('As informações do abrigo: ' + NomeDoAbrigo + ' foram enviadas com sucesso!')
},
}

module.exports = cadastroController;