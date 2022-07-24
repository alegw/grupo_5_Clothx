const { body } = require('express-validator');
const path = require("path");
const db = require('../database/models');

/*const validacionesUsuario = [*/
const validacionesUser = [
    body("name")
        .notEmpty().withMessage("Debes introducir tu nombre").bail()
        .isLength({ min: 2 }).withMessage("tu nombre debe tener mínimo 2 letras")
        .isAlpha().withMessage("solo puede introducir letras"),
    
    body("last_name")
        .notEmpty().withMessage("Debes introducir tu apellido").bail()
        .isLength({ min: 2 }).withMessage("tu apellido debe tener mínimo 2 letras")
        .isAlpha().withMessage("solo puede introducir letras"),

    body('email')
        .notEmpty().withMessage('Tienes que ingresar un email').bail()
        .isEmail().withMessage('Debes ingresar un formato de email valido').bail()
        .custom(value => {
            return db.User.findOne({
                where: {"email" : value}
            }).then(user => {
              if (user) {
                return Promise.reject('El email ya esta registrado.');
              }
            });
        }),
    
    /*body('phone')
        .notEmpty().withMessage("Debes introducir un numero telefónico")
        .isNumeric().withMessage("Solo puede ingresar caracteres numericos"), */
    
    body('password')
        .notEmpty().withMessage("Debes introducir una contraseña")
        .isLength({ min: 8 }).withMessage('La contraseña debe contener minimo 8 caracteres')  // validacion minimo y maximo de caracteres
        .isAlphanumeric().withMessage("La contraseña debe contener al menos un número y una letra"),   //validacion alfanumerica 
    
    body('avatar')
        .custom((value, { req }) => {
            let file = req.file;
            let extensionesValidas = ['.jpg', '.png', '.gif'];

            if (file) {
                let fileExtension = path.extname(file.originalname);
               if (!extensionesValidas.includes(fileExtension)) {
                    throw new Error(`Las extensiones de imagen permitidas son: ${extensionesValidas.join(', ')}`);
                }
            }
            return true;
            })
        .custom((value, { req }) => {
            let file = req.file
            if (file) {
                let tamaño = file.size
                if (parseInt(tamaño) > 1000000) {
                    throw new Error('El tamaño de imagen maximo permitido es de 1MB');
                }
            }
            return true;
        })
];

module.exports = validacionesUser
/*module.exports = validacionesUsuario;*/