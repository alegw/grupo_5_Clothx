const db = require("../database/models");

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
    // Recuperar contraseña usuario
    reestablecer: (req, res) => {
        res.render("reestablecerContraseña");
    },

    // Create - Form to create
    create: (req, res) => {
        res.render("usuario-create-form-db");
    },

// Create -  Method to store
store: (req, res) => {
	
    let avatar
    console.log(req.files);
    if (req.files[0] != undefined){
        avatar = req.files[0].filename
    } else {
        avatar = 'default.jpg'
    }
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