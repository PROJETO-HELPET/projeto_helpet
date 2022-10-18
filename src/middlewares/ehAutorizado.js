const ehAutorizado = (request, response, next) => {
    try {
        
        if(request.session.ehAutorizado) {
            return next()
        }
    
        return response.redirect('/')
    } catch (error) {
        console.error(error);
    }
}

module.exports = ehAutorizado;