// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/search', mainController.search);

router.get("/login", function (req, res, next) {
    res.render("login", { title: "Express" });
});
router.get("/register", function (req, res, next) {
    res.render("register", { title: "Express" });
});
router.get("/productCart", function (req, res, next) {
    res.render("productCart", { title: "Express" });
  });
  router.get("/reestablecer", function (req, res, next) {
    res.render("reestablecer", { title: "Express" });
  });

  router.get("/users/user", function (req, res, next) {
    res.render("user", { title: "Express" });
});
router.get("/tyc", function (req, res, next) {
  res.render("tyc", { title: "Express" });
});



module.exports = router;
