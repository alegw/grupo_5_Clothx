const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

const usuariosFilePath = path.join(__dirname, '../data/users.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all usuarios
	index: (req, res) => {
		res.render('usuarios', { usuarios })
	},

	detail: (req, res) => {
		let id = req.params.id
		let user = usuarios.find(user => user.id == id)
		res.render('usuarioDetail', { user })
	},

	// Login de usuarios
	login: (req, res) => {
		res.render('userLogin')
	},
	// Recuperar contraseña usuario
	reestablecer: (req, res) => {
		res.render('reestablecerContraseña')
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('usuario-create-form')
	},

	// Create -  Method to store
	store: (req, res) => {
		let resultValidation = validationResult(req);
		if (resultValidation.errors.length > 0) {

			res.render('usuario-create-form', {
				errors: resultValidation.mapped(), oldData: req.body
			});
		} else {
			let image
			console.log(req.files);
			if (req.files[0] != undefined) {
				image = req.files[0].filename
			} else {
				image = 'default.jpg'
			}
			let nuevoUsuario = {
				id: usuarios[usuarios.length - 1].id + 1,
				...req.body,
				image: image
			};

			usuarios.push(nuevoUsuario)
			fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, ' '));
			res.redirect('/');
		}


	},

	// Update - Form to edit
	edit: (req, res) => {
		let id = req.params.id
		let usuarioEdit = usuarios.find(usuario => usuario.id == id)
		res.render('usuarios-edit-form', { usuarioEdit })
	},
	// Update - Method to update
	update: (req, res) => {
		let id = req.params.id;
		let usuarioEdit = usuarios.find(usuario => usuario.id == id)
		let image

		if (req.files[0] != undefined) {
			image = req.files[0].filename
		} else {
			image = usuarioEdit.image
		}

		usuarioEdit = {
			id: usuarioEdit.id,
			...req.body,
			image: image,
		};

		let newusuarios = usuarios.map(usuario => {
			if (usuario.id == usuarioEdit.id) {
				return usuario = { ...usuarioEdit };
			}
			return usuario;
		})



		fs.writeFileSync(usuariosFilePath, JSON.stringify(newusuarios, null, ' '));
		res.redirect('/');
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		let id = req.params.id;
		let finalusuarios = usuarios.filter(usuario => usuario.id != id);
		fs.writeFileSync(usuariosFilePath, JSON.stringify(finalusuarios, null, ' '));
		res.redirect('/');
	}
};

module.exports = controller;