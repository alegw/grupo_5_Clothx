// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')
const { body } = require ('express-validator')

// ************ Controller Require ************
const usuariosControllerDb = require('../controllers/usuariosControllerDb');

// ************ Multer ************ 
var configuracion = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/img/usuarios')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: configuracion})

/*** GET ALL usuarios ***/ 
router.get('/', usuariosControllerDb.index); 

/*** Login usuarios ***/ 
router.get('/login', usuariosControllerDb.login);
router.post('/login', usuariosControllerDb.procesoLogin);
router.get("/logout", usuariosControllerDb.logout);

/*** Usuario administrador ***/ 
router.get('/admin', usuariosControllerDb.admin); 

/*** Reestablecer contraseña usuario ***/ 
router.get('/reestablecer', usuariosControllerDb.reestablecer); 

/*** CREATE ONE USER ***/ 
router.get('/create', usuariosControllerDb.create); 
router.post('/', upload.any(), usuariosControllerDb.store); 



//const validaciones = [
    //body('first_name').notEmpty().withMessage('Debe completar su nombre.'),
    //body('last_name').notEmpty().withMessage('Debe completar su apellido.'),
    //body('email').notEmpty().withMessage('Email no valido.'),
    //body('phone').notEmpty().withMessage('Debe completar su teléfono.'),
    //body('password').notEmpty().withMessage('Debe completar su contraseña.')/* ,
    //body('image').notEmpty().withMessage('Debe subir un archivo válido.') */
   // ];
  

//router.post('/', [ upload.any() ] , validaciones , usuariosController.store); 


/*** GET ONE USER ***/  
router.get('/:id', usuariosControllerDb.detail);  

/*** EDIT ONE USER ***/ 
router.get('/edit/:id', usuariosControllerDb.edit); 
router.patch('/edit/:id', upload.any(),usuariosControllerDb.update); 


/*** DELETE ONE USER***/ 
router.delete('/delete/:id', usuariosControllerDb.destroy); 


module.exports = router;
