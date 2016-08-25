angular.module('app.dashboard', [])
    .controller('DashboardController', Dashboard);

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
$routeProvider.when('/login', {
    templateUrl: '/views/auth.html',
    controller: 'AuthController as auth'
});
