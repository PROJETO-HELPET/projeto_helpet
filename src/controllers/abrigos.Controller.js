const helpetRoutes = require('../routes/abrigos.routes')
const { usuarioModel } = require('../database/');

const abrigosController = {
    /* abrigos */
    abrigos: (request, response) => {
        response.render('abrigos')
    },
    buscarAbrigo: async (request, response) => {
        const { id } = request.params;

        const usuario = await usuarioModel.findByPk(id);

        response.render('cadastro', { usuario })
    },
}

module.exports = abrigosController;