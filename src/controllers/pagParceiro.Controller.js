const {usuarioModel, abrigoModel, enderecoModel, contato_abrigoModel, socialModel} = require('../database');

const pagParceiroController = {


  pagParceiro: async (request, response) => {
      const id = 7
      const abrigo = await usuarioModel.findByPk(1, {include: {
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
        
  response.render('pagParceiro', { abrigo });

},


}
 
module.exports = pagParceiroController;