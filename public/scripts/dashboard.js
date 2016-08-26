angular.module('app.dashboard', ['ngRoute'])
    .controller('DashboardController', Dashboard)
    .config(function($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: '/views/goals.html',
        });
        $routeProvider.when('/goals', {
            templateUrl: '/views/goals.html',
        });
        $routeProvider.when('/habits', {
            templateUrl: '/views/habits.html'
        });
        $routeProvider.when('/lists', {
            templateUrl: '/views/lists.html'
        });
        $routeProvider.when('/charts', {
            templateUrl: '/views/charts.html'
        });
        $routeProvider.otherwise({ redirectTo: '/' });

    });


function Dashboard() {
    console.info('Dashboard.initialized')}
