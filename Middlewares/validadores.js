const { check } = require('express-validator')

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
    check('senha').notEmpty().withMessage('A senha precisa ter mais de 6 caracteres').isLength({ min: 6 }).bail().trim()
]