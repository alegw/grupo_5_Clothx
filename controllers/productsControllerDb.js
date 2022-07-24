const db = require("../database/models");
const bcryptjs = require ('bcryptjs')
const { validationResult } = require("express-validator");

const controller = {
	// Root - Show all products

	
	index: (req, res) => {
        db.Product.findAll()
            .then(function(products){
				console.log(products)
                 res.render("products", {products:products});
    
            })
	},

	// Filtrado por Categoria
	category: (req, res) => {
		db.Product.findAll({
			where:{ category:req.params.category },
			include:[{ association: "category"}]
		})
		.then(product => {
			res.render('category', {
				category,
				product
			});
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		db.Product.findOne({
			where:{ id:req.params.id },
			include:[{ association: "category"}]
		})
		.then(product => {
			res.render("detail", {product});
		})
	},

	// Create - Form to create
	create: (req, res) => {
		db.Category.findAll()
		.then(categories => {
			res.render('product-create-form', {categories})
		}) 

		

	},
		// Create -  Method to store
	store: (req, res) => { 

	/* Pregunta si hay error en la validacion, si no hay pasa a guardar todo */

	let resultValidation = validationResult(req);
	if (resultValidation.errors.length > 0) {
	  res.render("product-create-form", {
		errors: resultValidation.mapped(),
		oldData: req.body,
	  });
	} else {
		 /* Si no tiene imagen que ponga una por defecto */
		let image;
		if (req.files[0] != undefined){
			image = req.files[0].filename
		} else {
			image = 'default.jpg'
		}

		/* Crea nuevo producto en la BD */
		let newProduct = {
			...req.body,
			image: image,
		};    
		db.Product.create(newProduct)
		
		.then(()=>{
			res.redirect("/")
		})
	}
},

	// Update - Form to edit
	edit: async (req, res) => {
		try{
			let categories = await db.Category.findAll();
			let productToEdit = await db.Product.findOne({
				where:{id:req.params.id},
				include:[{association:"category"}]
			})
			res.render("product-edit-form", {productToEdit, categories})
		}catch(e){
			console.log(e);
		}
	},
	

	update: async (req, res) => {
		try{
			let product = await db.Product.findOne({where: {id:req.params.id}, include:["category"]});
			let image;
			if(req.files[0] != undefined){
				image = req.files[0].filename
			} else {
				image = product.image
			}
			let productToEdit = {
				...req.body,
				image: image,
			};
			await db.Product.update(productToEdit, {where: {id: req.params.id}});
			res.redirect('/');
		}catch(e){
			console.log(e)
		}
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		db.Product.destroy({where: {id : req.params.id}}).then(res.redirect("/"));
	}
};





module.exports = controller;