const obterFotoUsuario = (request, response, next) => {
    if(request.session) {
        response.locals.usuario = request.session.usuario;
    }

    next();
}

module.exports = obterFotoUsuario;