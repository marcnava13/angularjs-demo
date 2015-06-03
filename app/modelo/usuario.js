var mongoose = require('mongoose');

module.exports = mongoose.model('users', {
	nombre: String,
	email: String,
	password: String,
    activo: Number,
    bloqueado: Number,
    rol: Number
});