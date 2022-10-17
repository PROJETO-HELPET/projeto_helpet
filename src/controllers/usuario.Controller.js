const {usuarioModel, abrigoModel, enderecoModel, contato_abrigoModel, socialModel} = require('../database');
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

const usuarioController = {
  usuario: (request, response) => {
    response.render('usuario')
},
  buscarUsuario: async (request, response) => {
    const { id } = request.params;

    const usuario = await usuarioModel.findByPk(id, {include: {
        model: abrigoModel,
        as: 'abrigos',
        include: [{
            model: enderecoModel,
            as: 'endereco'

          },
          {
            model: socialModel,
            as: 'sociais'
  
          },
          {
          model: contato_abrigoModel,
          as: 'contatos'  

        }]
      }});
      /* console.log(usuario); */
    response.render('usuario', { usuario })
},

/* editarUsuario: async (request, response) => {
    const { id } = request.params;

    const usuario = await usuarioModel.findByPk(id);

    response.render('usuario', { usuario })
  }, */

  editar: async (request, response) => {
    const {  nome, sobrenome, email, suafoto, sualogo, celular, fixo, senha, cep, cidade, rua, complemento, bairro, numero, nomeAbrigo, emailAbrigo, sobre, tipo, contato, facebook, instagram  } = request.body;

    const { id } = request.params;

      const editarUsuario =  usuarioModel.update({
        nome,
        sobrenome,
        email,
        celular,
        fixo,
        suafoto:request.files.suafoto[0].filename,
        senha: bcrypt.hashSync(senha, salt),
      }, { where: {id}});


      const editarEndereco =  enderecoModel.update({
        cep,
        rua,
        complemento,
        bairro,
        cidade,
        numero
       
      }, { where: {id}});
      
      const [usuario, endereco] = await Promise.all([editarUsuario, editarEndereco]) 

      const editarAbrigo = await abrigoModel.update({
        usuarioId: usuario.id,
        nomeAbrigo,
        emailAbrigo,
        sualogo:request.files.sualogo[0].filename,
        enderecoId: endereco.id,
        sobre
      }, { where: {id}})

      const editarContatos = await contato_abrigoModel.update({
        tipo,
        contato,
        abrigoId: editarAbrigo.id
      }, { where: {id}})

      const editarSociais = await socialModel.update({
        facebook,
        instagram,
        abrigoId: editarAbrigo.id
      }, { where: {id}})
      
    response.redirect(`/`); 
  },

  deleteUsuarioTela:async (request, response) => {
    const { id } = request.params;

    const usuario = await usuarioModel.findByPk(id, {include: {
        model: abrigoModel,
        as: 'abrigos',
        include: [{
            model: enderecoModel,
            as: 'endereco'

          },
          {
            model: socialModel,
            as: 'sociais'
  
          },
          {
          model: contato_abrigoModel,
          as: 'contatos'  

        }]
      }});
      console.log(usuario.id);
    response.render('usuarioDelete', { usuario })
},

  delete: async (request, response) => {
    const { id } = request.params;

    // soft-delete
    await usuarioModel.destroy({ where: { id }, force: true });

    const deleteUsuario =  usuarioModel.destroy({
      nome,
      sobrenome,
      email,
      celular,
      fixo,
      suafoto,
      senha
    }, { where: {id}, force: true });

    const deleteEndereco =  enderecoModel.destroy({
      cep,
      rua,
      complemento,
      bairro,
      cidade,
      numero
     
    }, { where: {id}, force: true});
    
    const [usuario, endereco] = await Promise.all([deleteUsuario, deleteEndereco]) 

    const deleteAbrigo = await abrigoModel.destroy({
      usuarioId: usuario.id,
      nomeAbrigo,
      emailAbrigo,
      sualogo,
      enderecoId: endereco.id,
      sobre
    }, { where: {id}, force: true} )

    const deleteContatos = await contato_abrigoModel.destroy({
      tipo,
      contato,
      abrigoId: deleteAbrigo.id
    }, { where: {id}, force: true})

    const deleteSociais = await socialModel.destroy({
      facebook,
      instagram,
      abrigoId: deleteAbrigo.id
    }, { where: {id}, force: true})

    response.render("/");
  },

  logout: (request, response) => {

    request.session.destroy();
    response.redirect('/')
  }

}

module.exports = usuarioController;