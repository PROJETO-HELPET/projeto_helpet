const {usuarioModel, abrigoModel, enderecoModel, contato_abrigoModel, socialModel} = require('../database');

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
      console.log(usuario);
    response.render('usuario', { usuario })
},



editarUsuario: async (request, response) => {
    const { id } = request.params;

    const usuario = await usuarioModel.findByPk(id);

    response.render('usuario', { usuario })
  },

  editar: async (request, response) => {
    const {  nome, sobrenome, email, suafoto, sualogo, celular, fixo, senha, cep, cidade, rua, complemento, bairro, numero, nomeAbrigo, emailAbrigo, sobre, tipo, contato, facebook, instagram  } = request.body;
    const { id } = request.params;

    usuarioModel.update(
        {  nome, sobrenome, email, suafoto, sualogo, celular, fixo, senha, cep, cidade, rua, complemento, bairro, numero, nomeAbrigo, emailAbrigo, sobre, tipo, contato, facebook, instagram  },
        { where: { id } }
    );

    response.redirect(`/usuario/${id}`);
  },

deleteUsuario: async (request, response) => {
    const { id } = request.params;

    const movie = await usuarioModel.findByPk(id);

    response.render("usuarioDelete", { usuario });
  },
  delete: async (request, response) => {
    const { id } = request.params;

    // soft-delete
    await usuarioModel.destroy({ where: { id }, force: true });

    response.render("/");
  },

  logout: (request, response) => {

    request.session.destroy();
    response.redirect('/')
  }

}

module.exports = usuarioController;