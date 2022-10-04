const ehAutorizado = (request, response, next) => {
    if(request.session.ehAutorizado) {
        return next()
    }

    return response.redirect('/')
}

module.exports = ehAutorizado;