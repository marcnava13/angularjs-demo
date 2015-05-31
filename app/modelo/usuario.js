var mongoose = require('mongoose');

module.exports = mongoose.model('users', {
	nombre: String,
	apellido: String,
	edad: String
});