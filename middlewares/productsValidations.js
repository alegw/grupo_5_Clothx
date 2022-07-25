const { body } = require('express-validator');
const path = require("path");


const validacionesProductos = [
    body("name")
        .notEmpty().withMessage("Debes introducir un producto")
        .isLength({min:5}).withMessage("Debes introducir un nombre mas largo"),
    
    body("description")
        .notEmpty().withMessage("Debes introducir una descripción")
        .isLength({min:20}).withMessage("Debes introducir una descripción mas larga"),
    
    body("color")
       .notEmpty().withMessage("Debes introducir un color"),
    
   
    body("category_id")
       .notEmpty().withMessage("Debes introducir una categoria del producto"), 
   

    body("price")
      .notEmpty().withMessage("Debes introducir un precio")
      .isNumeric().withMessage("Solo puede ingresar caracteres numericos"),

    /* body('image')  ****VER QUE PASA QUE NO FUNCIONA ***
        .custom((value, { req }) => {
            let file = req.file;
            let extensionesValidas = ['.jpg', '.png', '.gif'];

            if (!file) {
                throw new Error('Tenes que seleccionar una imagen');

            } else if (file) {
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
 */
]

module.exports = validacionesProductos;