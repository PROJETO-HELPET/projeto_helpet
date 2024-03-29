const { validationResult } = require('express-validator') 
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10)
const {usuarioModel} = require('../database/');
const {abrigoModel} = require('../database/');
const {contato_abrigoModel} = require('../database/'); 
const {enderecoModel} = require('../database/');
const {socialModel} = require('../database/');

const cadastroController = {

viewForm: (request, response) => {
   return response.render('cadastro')
},
dadosSalvos: async (request, response) => {
    const erros = validationResult(request);
    console.log(erros.mapped())
    if(!erros.isEmpty()){
      return response.render('cadastro', { erros: erros.mapped() });
    }

    const {  nome, sobrenome, email, suafoto, sualogo, celular, fixo, senha, cep, cidade, rua, complemento, bairro, numero, nomeAbrigo, emailAbrigo, sobre, tipo, contato, facebook, instagram  } = request.body;

    try {
      const novoUsuario =  usuarioModel.create({
        nome,
        sobrenome,
        email,
        celular,
        fixo,
        suafoto:request.files.suafoto[0].filename,
        senha: bcrypt.hashSync(senha, salt),
      });
      const novoEndereco =  enderecoModel.create({
        cep,
        rua,
        complemento,
        bairro,
        cidade,
        numero
       
      });
      
      const [usuario, endereco] = await Promise.all([novoUsuario, novoEndereco]) 

      const novoAbrigo = await abrigoModel.create({
        usuarioId: usuario.id,
        nomeAbrigo,
        emailAbrigo,
        sualogo:request.files.sualogo[0].filename,
        enderecoId: endereco.id,
        sobre
      })

      const novoContatos = await contato_abrigoModel.create({
        tipo,
        contato,
        abrigoId: novoAbrigo.id
      })

      const novoSociais = await socialModel.create({
        facebook,
        instagram,
        abrigoId: novoAbrigo.id
      })
      return response.render('home');

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