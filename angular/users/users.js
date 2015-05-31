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

    $scope.borrarUsuario = function(newUsuarios) {
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
        console.log($scope.newUsuarios, $scope.selected);
    };

});
