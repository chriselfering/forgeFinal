angular.module('module.home',['ngRoute'])

angular.module('module.home')
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/views/home.home.html'
        });

        $routeProvider.when('/home', {
            templateUrl: '/views/home.home.html'
        });

        //default route
        $routeProvider.otherwise({ redirectTo: '/' });
    });
