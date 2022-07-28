const db = require('../../database/models');

const usersAPIController = {
    list: (req, res) => {
        db.User.findAll()
            .then(users => {

                let usuariosArray = [];

                users.forEach(users => {
                    let data = {
                        id: users.id,
                        name: users.name,
                        email: users.email,
                        detail: "/api/users/" + users.id
                    }
                    usuariosArray.push(data)
                })

                let respuesta = {
                    meta: {
                        status: 200,
                        url: "/api/users"
                    },
                    count: users.length,
                    data: usuariosArray
                }
                res.json(respuesta);
            })
    },

    detail: (req, res) => {
        db.User.findByPk(req.params.id, {

        }) 
            .then(user => {
               
                let respuesta = {
                    meta: {
                        status: 200,
                        url: "/api/users/" + user.id
                    },
                    data: {user}
                }
                res.json(respuesta)
            })

    }
}

module.exports = usersAPIController