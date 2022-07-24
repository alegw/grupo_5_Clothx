const db = require("../database/models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

 
const controller = {
	// index: (req, res) => {
	// 	res.render('index', {products,
	// 		// visited,
	// 		// inSale,
	// 		toThousand
	// 	});
		 
	// },

	index: (req, res) => {
        db.Product.findAll({limit:4})
            .then(function(products){
                res.render("index", {products:products});
            })
	},


	// search: (req, res) => {
	// 	let search = req.query.keywords;
	// 	let productsToSearch = products.filter(product => product.name.toLowerCase().includes(search));	
	// 	res.render('results', { 
	// 		products: productsToSearch, 
	// 		search,
	// 		toThousand,
	// 	});
	// },

	search: (req, res) => {
		let search = req.query.keywords;
		db.Product.findAll({where:{
			name : {
				[Op.like] : `%${search}%`
			}
		}}).then(products => {
			res.render('results', { 
				products, 
				search,
			});
		})
	},




};

module.exports = controller;
