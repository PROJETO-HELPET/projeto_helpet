const bcrypt = require("bcrypt");
const { usuarioModel } = require('../database/');

const loginController = {

    login: async (request, response) => {
        const { email, senha } = request.body;

        const usuarioEncontrado = await usuarioModel.findOne({ where: { email } });

        console.log(usuarioEncontrado)

        if (!usuarioEncontrado) {
            return response.status(401).render('login', {
                error: 'Usuario ou senha incorreto'
            });
        }

        const ehSenhaCorreta = bcrypt.compareSync(senha, usuarioEncontrado.senha);

        if (!ehSenhaCorreta) {
            return response.status(401).render('login', {
                error: 'Usuario ou senha incorreto'
            });
        }
        request.session.isAuthorized = true
        request.session.usuario = {
            foto: usuarioEncontrado.suafoto,
            id: usuarioEncontrado.id
        }

        return response.render('home');
    },
    getlogin: (request, response) => {
        response.render('login')
    },
}



module.exports = loginController;
