const db = require("../database/models");
const bcryptjs = require ('bcryptjs')

const controller = {
	// Root - Show all Users

    index: (req, res) => {
        db.User.findAll()
            .then(function(users){
				console.log(users)
                 res.render("usuarios", {users:users});
            })
	},

    detail: (req, res) => {
		db.User.findByPk(req.params.id)
		.then(user => {
			res.render("usuarioDetail", {user});
		})
	},

    login: (req, res) => {
        res.render("userLogin");
    },

    procesoLogin: async (req, res) => {
        console.log(req.body)
        let user = await db.User.findOne({where: {email : req.body.email}});
        if(user != null){ // Si existe el usuario
            let verificarPassword = bcryptjs.compareSync(req.body.password, user.password);
            if(verificarPassword){
                delete user.password; // Eliminamos del usuario encontrado la prop contraseña (no de la base de datos)
                req.session.userLogeado = user; // Guardamos en session la info del usuario
                res.redirect("/");
            } else {
                res.redirect("/users/login");
            }
        } else {
            res.redirect("/users/login");
        }
    },
    logout: (req, res) => {
        delete req.session.userLogeado;
        res.locals.isLogged = false;
        delete res.locals.userLogged;
        res.redirect("/");
    },
    
    // Recuperar contraseña usuario
    reestablecer: (req, res) => {
        res.render("reestablecerContraseña");
    },

    admin: (req, res) => {
        res.render("administrador");
      },

    // Create - Form to create
    create: (req, res) => {
        res.render("usuario-create-form-db");
    },

    // Create -  Method to store
    store: (req, res) => { 
        let avatar;
        if (req.files[0] != undefined){
            avatar = req.files[0].filename
        } else {
            avatar = 'default.jpg'
        }
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
        let newUser = {
            ...req.body,
            avatar: avatar,
        };    
        db.User.create(newUser)
        .then(()=>{
            res.redirect("/")
        })
    },

        edit: (req, res) => {
            db.User.findByPk(req.params.id)
                .then(user => {
                    res.render("usuarios-edit-form-db", {user});
                })
        },

  update: async (req, res) => {
    try{
        let user = await db.User.findOne({where: {id:req.params.id}});
        let avatar;
        if(req.files[0] != undefined){
            avatar = req.files[0].filename
        } else {
            avatar = user.avatar
        }
        let userToEdit = {
            ...req.body,
            avatar: avatar,
        };
        await db.User.update(userToEdit, {where: {id: req.params.id}});
        res.redirect('/');
    }catch(e){
        console.log(e)
    }
},
destroy : (req, res) => {
    db.User.destroy({where: {id : req.params.id}}).then(res.redirect("/"));
}



};





module.exports = controller;