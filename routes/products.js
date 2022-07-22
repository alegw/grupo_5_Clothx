// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')

// ************ Controller Require ************
const productsControllerDb = require('../controllers/productsControllerDb');

// ************ Multer ************ 
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/img/products')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})

/*** GET ALL PRODUCTS ***/ 
//router.get('/', productsController.index); 
router.get('/', productsControllerDb.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsControllerDb.create); 
router.post('/', upload.any(), productsControllerDb.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/:id', productsControllerDb.detail); 

/*** POR CATEGORIA ***/ 
//router.get('/category/:category', productsController.category); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsControllerDb.edit); 
router.patch('/edit/:id', upload.any(),productsControllerDb.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsControllerDb.destroy); 


 



module.exports = router;
