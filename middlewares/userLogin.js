const { body } = require('express-validator');
const path = require("path");
const db = require('../database/models');

/*const validacionesUsuario = [*/
const validacionLogin = [
    body("email")
    .notEmpty().withMessage('Tienes que ingresar un email').bail()
    .isEmail().withMessage('Debes ingresar un formato de email valido').bail(),
    
    body('password')
        .notEmpty().withMessage("Debes introducir una contraseña")

];

module.exports = validacionLogin