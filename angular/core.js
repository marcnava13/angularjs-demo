angular.module('MainApp', [
        'ngRoute',
        'MainApp.users'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/users'});
}]);