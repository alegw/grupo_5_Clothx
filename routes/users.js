// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')
const { body } = require ('express-validator')
const validacionesUser = require("../middlewares/userValidations")
const adminMiddleware = require("../middlewares/adminMiddleware");
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
router.get('/admin', adminMiddleware, usuariosControllerDb.admin); 

/*** Reestablecer contraseña usuario ***/ 
router.get('/reestablecer', usuariosControllerDb.reestablecer); 

/*** CREATE ONE USER ***/ 
router.get('/create', usuariosControllerDb.create); 
router.post('/', [ upload.any(), validacionesUser ], usuariosControllerDb.store); 


/*** GET ONE USER ***/  
router.get('/:id', usuariosControllerDb.detail);  

/*** EDIT ONE USER ***/ 
router.get('/edit/:id', usuariosControllerDb.edit); 
router.patch('/edit/:id', upload.any(),usuariosControllerDb.update); 


/*** DELETE ONE USER***/ 
router.delete('/delete/:id', usuariosControllerDb.destroy); 


module.exports = router;
