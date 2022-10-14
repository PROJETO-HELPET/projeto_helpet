const isAuthorized = (request, response, next) => {
    try {
        
        if(request.session.isAuthorized) {
            return next()
        }
    
        return response.redirect('/')
    } catch (error) {
        console.error(error);
    }
}

module.exports = isAuthorized;