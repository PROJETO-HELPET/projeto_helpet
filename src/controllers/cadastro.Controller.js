const helpetRoutes = require('../routes/cadastro.routes')
const fs = require('fs')
const path = require('path')
const { json } = require('express')
const listaAbrigos = path.join(__dirname,'..','data','cadastroDataBase.json')
const bcrypt = require("bcrypt");
const usuario = require('../database/models/usuarioModel');
const abrigo = require('../database/models/abrigoModel');
const contato = require('../database/models/contato_abrigoModel'); 
const endereco = require('../database/models/enderecoModel');
const social = require('../database/models/socialModel');

const cadastroController = {

/* cadastro */
viewForm: (request, response) => {
   return response.render('cadastro')
},
dadosSalvos: async (request, response) => {
    const {  nome, sobrenome, email, celular, fixo, senha, cep, rua, complemento, bairro, numero, nomeAbrigo,
    sobre, tipo, contatos, facebook, instagram  } = request.body;

    try {
      const novoUsuario = await usuario.create({
        nome,
        sobrenome,
        email,
        celular,
        fixo,
        senha: bcrypt.hashSync(senha, 10),
      });
      const novoEndereco = await endereco.create({
        cep,
        rua,
        complemento,
        bairro,
        numero
       
      });

      const [usuario, endereco] = await Promise.all([novoUsuario, novoEndereco]) 

      const novoAbrigo = await abrigo.create({
        usuarioId: usuario.id,
        nomeAbrigo,
        enderecoId: endereco.id,
        sobre
      })

      const novoContatos = await contato.create({
        tipo,
        contatos,
        abrigoId: abrigo.id
      })

      const novoSociais = await social.create({
        facebook,
        instagram,
        abrigoId: abrigo.id
      })
      return response.status(201).json(novoUsuario);

    } catch (e) {
      console.log(e);
      if (e.name === "SequelizeConnectionRefusedError") {
        return response.status(500).json({
          error: true,
          msg: "Sem conexão com o banco de dados, tente novamente!",
        });
      }
      if (e.name === "SequelizeUniqueConstraintError") {
        return response.status(400).json(e.parent.sqlMessage);
      }
      return response.status(400).json({
        error: true,
        msg: "Erro na requisição tente novamente!",
      });
    }
  },

/* dadosSalvos: (req,res)=>{
    console.log(req.body) 
    let { NomeDoAbrigo, Email, NomeProprietario, Capacidade, Numero ,Endereco , Bairro, Senha, ConfirmarSenha, sobre, sualogo } = req.body;
    let dadosAbrigos = JSON.stringify([{ NomeDoAbrigo, Email, NomeProprietario, Capacidade, Numero,Endereco , Bairro, Senha, ConfirmarSenha, sobre, sualogo}]);
    fs.writeFileSync(listaAbrigos, dadosAbrigos);
    res.send('As informações do abrigo: ' + NomeDoAbrigo + ' foram enviadas com sucesso!')
}, */
}

module.exports = cadastroController;