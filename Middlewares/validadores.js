const { check } = require('express-validator')
const path = require('path');


module.exports = [

    check('email').notEmpty().withMessage('É necessário um email').bail().trim().bail()
        .normalizeEmail().bail().isEmail().withMessage('Escreva um formato de email correto'),
    check('nome').notEmpty().withMessage('É necessário um nome').bail().trim(),
    check('sobrenome').notEmpty().withMessage('É necessário um sobrenome').bail().trim(),
    check('fixo').notEmpty().withMessage('É necessário informar um numero de telefone').isNumeric().bail().trim(),
    check('celular').notEmpty().withMessage('É necessário informar um numero de telefone').isNumeric().bail().trim(),
    check('nomeAbrigo').notEmpty().withMessage('É necessário um nome para o abrigo').bail().trim(),
    check('cep').notEmpty().withMessage('É necessário informar um cep').isNumeric().bail().trim(),
    check('cidade').notEmpty().withMessage('É necessário informar a cidade').bail().trim(),
    check('rua').notEmpty().withMessage('É necessário informar a rua').bail().trim(),
    check('senha').notEmpty().withMessage('A senha precisa ter mais de 6 caracteres').isLength({ min: 6 }).bail().trim(),
    check('suafoto', 'sualogo').custom((value, { request })=> {
        let file = request.file
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        if(!file) {
            throw new Error('Precisa escolher um arquivo');
        } else {
            let fileExtesion = path.extname(file.originalname);

            if(!acceptedExtensions.includes(fileExtesion)) {
                throw new Error(`as extensóes de arquivo permitidas são ${acceptedExtensions.join(', ')}`);
            }
        }
        return true
    })



];