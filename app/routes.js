var Usuario = require('./modelo/usuario');
var Controller = require ('./controller');

module.exports = function(app) {

	// devolver todos los Usuarios
	app.get('/api/usuario', Controller.getUsuario);
	// Crear una nueva Usuario
	app.post('/api/usuario', Controller.setUsuario);
	// Modificar los datos de una Usuario
	app.put('/api/usuario/:usuario_id', Controller.updateUsuario);
	// Borrar una Usuario
	app.delete('/api/usuario/:usuario_id', Controller.removeUsuario);

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});
};