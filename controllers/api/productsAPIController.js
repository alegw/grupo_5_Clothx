const db = require('../../database/models');

const productsAPIController = {
    list: async (req, res) => {
        let products = await db.Product.findAll({
            attributes: ["id","name"]
        });
        products.forEach(product => {
            product.dataValues.detail = `/api/products/${product.dataValues.id}`;
        })
        let categories = await db.Category.findAll({
            attributes: ["id","name"],
            include: [{association:"products"}]
        })
        let respuesta = {
            meta: {
                status: 200,
                url: "/api/products"
            },
            count: products.length,
            data: products,
            categories: categories
        }
        res.json(respuesta);
    },

    // list: (req, res) => {
    //     db.Product.findAll()
    //         .then(products => {

    //             let productosArray = [];

    //             products.forEach(products => {
    //                 let data = {
    //                     id: products.id,
    //                     name: products.name,
    //                     email: products.email,
    //                     detail: "/api/products/" + products.id
    //                 }
    //                 productosArray.push(data)
    //             })

    //             let respuesta = {
    //                 meta: {
    //                     status: 200,
    //                     url: "/api/products"
    //                 },
    //                 count: products.length,
    //                 data: productosArray
    //             }
    //             res.json(respuesta);
    //         })
    // },

    // detail: (req, res) => {
    //     db.Product.findByPk(req.params.id, {

    //     }) 
    //         .then(products => {
               
    //             let respuesta = {
    //                 meta: {
    //                     status: 200,
    //                     url: "/api/products/" + products.id
    //                 },
    //                 data: {products}
    //             }
    //             res.json(respuesta)
    //         })

    // }

    // list: (req, res) => {
       
    //     Promise.all([])
    //         .then(([products, categories]) => {

    //             let productosArray = [];
               

    //             products.forEach(products => {
                    
    //                // let urlImageproducts = "http://localhost:3001/img/products/" + products.dataValues.image
    //                 let data = {
    //                     id: products.id,
    //                     name: products.name,
    //                     //image: urlImageproducts, 
    //                     description: products.description,
    //                     relations: {
    //                         category_id: products.categories
    //                     },
                           
    //                     detail: "/api/products/detail/" + products.id

    //                 }
    //                 productosArray.push(data)
    //             })

    //             let respuesta = {
    //                 meta: {
    //                     status: 200,
    //                     url: "api/products"
    //                 },
    //                 count: products.length,
    //                 countByCategory:  cats,
    //                 data: productosArray
    //             }
    //             res.json(respuesta);
    //         })
    //     },
            detail: (req, res) => {
                db.Product.findByPk(req.params.id, {
                    include : ["categories"]

        
                }) 
                    .then(producto => {
                        //delete user.dataValues.password
                        console.log(producto)
                        let urlImageProducto = "http://localhost:3001/img/products/" + producto.image 
                        let categoria = producto.categories
                        delete producto.dataValues.categories

                        let respuesta = {
                            meta: {
                                status: 200,
                                url: "http://localhost:3001/api/products/detail/" + producto.id

                            },
                            relations: {
                                category: categoria
                            },


                            data: {producto, urlImageProducto}
                        }


                        res.json(respuesta);
                    })

                }

 

}

module.exports = productsAPIController;