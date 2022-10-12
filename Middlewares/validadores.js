const { check } = require('express-validator')
const path = require('path');
const { validationResult } = require('express-validator');

module.exports = [
    
    check('email').notEmpty().withMessage('É necessário um email').trim().normalizeEmail().isEmail().withMessage('Escreva um formato de email correto'),
    check('emailAbrigo').notEmpty().withMessage('É necessário um email').trim().normalizeEmail().isEmail().withMessage('Escreva um formato de email correto'),
    check('nome').notEmpty().withMessage('É necessário um nome').trim(),
    check('sobrenome').notEmpty().withMessage('É necessário um sobrenome').trim(),
    check('fixo').notEmpty().withMessage('É necessário informar um numero de telefone').isNumeric().trim(),
    check('celular').notEmpty().withMessage('É necessário informar um numero de telefone').isNumeric().trim(),
    check('nomeAbrigo').notEmpty().withMessage('É necessário um nome para o abrigo').trim(),
    check('cep').notEmpty().withMessage('É necessário informar um cep').isNumeric().trim(),
    check('cidade').notEmpty().withMessage('É necessário informar a cidade').trim(),
    check('rua').notEmpty().withMessage('É necessário informar a rua').trim(),
    check('senha').notEmpty().withMessage('A senha precisa ter mais de 6 caracteres').isLength({ min: 6 }).trim(),
    check('confirmarSenha').notEmpty().withMessage('A senha precisa ter mais de 6 caracteres').isLength({ min: 6 }).trim(),
    check('suafoto').custom((value, { req })=> {
        console.log(req.files);
        const file = req.files.suafoto[0]
        
        const acceptedExtensions = ['.jpg', '.png', '.gif'];
        if(!file) {
            throw new Error('Precisa escolher um arquivo');
        } else {
            let fileExtesion = path.extname(file.originalname);

            if(!acceptedExtensions.includes(fileExtesion)) {
                throw new Error(`as extensóes de arquivo permitidas são ${acceptedExtensions.join(', ')}`);
            }
        }
        return true
    }),

    check('sualogo').custom((value, { req })=> {
        const file = req.files.sualogo[0]
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