angular.module('MainApp.users', ['ngRoute'])

.config(function($routeProvider){
    
    $routeProvider
        .when('/', {
            templateUrl: 'users/users.html',
            controller: 'mainController'
        });
})

.controller('mainController', function($scope, $http){

    $scope.newUsuarios = {};
    $scope.usuarios = {};
    $scope.selected = false;
    $scope.form_new_user = true;
    $scope.btn_register = true;
    $scope.btn_guardar = true;

    $http.get('/api/usuario').success(function(data) {
        $scope.usuarios = data;
    })
    .error(function(data) {
        console.log('Error: ' + data);
    });


    $scope.registrarUsuario = function() {
        $http.post('/api/usuario', $scope.newUsuarios)
        .success(function(data) {
                $scope.newUsuarios = {};
                $scope.usuarios = data;
            })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };

    $scope.modificarUsuario = function(newUsuarios) {
        $http.put('/api/usuario/' + $scope.newUsuarios._id, $scope.newUsuarios)
        .success(function(data) {
                $scope.newUsuarios = {};
                $scope.usuarios = data;
                $scope.selected = false;
            })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };

    $scope.borrarUsuario = function(usuario) {
        $scope.newUsuarios = usuario;
        $scope.selected = true;
        $http.delete('/api/usuario/' + $scope.newUsuarios._id)
        .success(function(data) {
            $scope.newUsuarios = {};
            $scope.usuarios = data;
            $scope.selected = false;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };

    $scope.selectUser = function(usuario) {
        $scope.newUsuarios = usuario;
        $scope.selected = true;
        $scope.form_new_user = false;
        $scope.btn_register = true;
        $scope.btn_guardar = false;
    };

    $scope.toggleFormUser = function(){
        $scope.newUsuarios = {};
        $scope.form_new_user = $scope.form_new_user === false ? true: false;
        $scope.btn_register = false;
        $scope.btn_guardar = true;
    };

});
