// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/search', mainController.search);


router.get("/productCart", function (req, res, next) {
  res.render("productCart", { title: "Express" });
});


router.get("/tyc", function (req, res, next) {
  res.render("tyc", { title: "Express" });
});



let routesProductsAPI = require ("./api/products");
let routesUsersAPI = require ("./api/users");

//rutas API
router.use("/api/products", routesProductsAPI);
router.use("/api/users", routesUsersAPI);



module.exports = router;
