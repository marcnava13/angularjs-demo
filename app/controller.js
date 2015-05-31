var Usuario = require('./modelo/usuario');

exports.getUsuario = function (req, res){
    Usuario.find(
        function(err, usuario) {
            if (err)
                res.send(err);
                    res.json(usuario);      
                }
            );
};

exports.setUsuario = function(req, res) {

    Usuario.create(
        {nombre : req.body.nombre,  apellido: req.body.apellido, edad: req.body.edad}, 
        function(err, usuario) {
            if (err)
                res.send(err);

        Usuario.find(function(err, usuario) {
            if (err)
                res.send(err);
            res.json(usuario);
        });
    });

};

exports.updateUsuario = function(req, res){

    Usuario.update( {_id : req.params.usuario_id},
        {$set:{nombre : req.body.nombre, apellido: req.body.apellido, edad: req.body.edad}}, 
        function(err, usuario) {
            if (err)
                res.send(err);

        Usuario.find(function(err, usuario) {
            if (err)
                res.send(err);
            res.json(usuario);
        });
    });
};

exports.removeUsuario = function(req, res) {
    Usuario.remove({_id : req.params.usuario_id}, function(err, usuario) {
        if (err)
            res.send(err);

        Usuario.find(function(err, usuario) {
            if (err)
                res.send(err);
            res.json(usuario);
        });
    });
};