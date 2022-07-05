// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')

// ************ Controller Require ************
const usuariosController = require('../controllers/usuariosController');

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
router.get('/', usuariosController.index); 

/*** Login usuarios ***/ 
router.get('/login', usuariosController.login); 

/*** Reestablecer contraseña usuario ***/ 
router.get('/reestablecer', usuariosController.reestablecer); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', usuariosController.create); 

router.post('/', [ upload.any() ] , usuariosController.store); 


/*** GET ONE USER ***/  
router.get('/:id', usuariosController.detail);  

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', usuariosController.edit); 
router.patch('/edit/:id', upload.any(),usuariosController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', usuariosController.destroy); 


module.exports = router;
