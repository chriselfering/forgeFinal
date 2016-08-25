angular.module('app.dashboard', [])
    .controller('DashboardController', Dashboard);
    .config(function($routeProvider) {
        function Dashboard() {
            console.info('Dashboard.initialized')
        }
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
    });
