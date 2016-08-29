angular.module('module.dashboard', ['ngRoute'])
    // .controller('DashboardController', Dashboard)
    .controller('goalsController', goalsCtrl)
    .factory('apiFactory', apiFact)
    .config(function($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: '/views/dashboard.goals.html',
            controller: 'goalsController as uCtrl'
        });
        $routeProvider.when('/goals', {
            templateUrl: '/views/dashboard.goals.html',
            controller: 'goalsController as uCtrl'
        });
        $routeProvider.when('/habits', {
            templateUrl: '/views/dashboard.habits.html'
        });
        $routeProvider.when('/lists', {
            templateUrl: '/views/dashboard.lists.html'
        });
        $routeProvider.when('/charts', {
            templateUrl: '/views/dashboard.charts.html'
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    });

// ========================================================
// Goals controller
// ========================================================

goalsCtrl.$inject = ['apiFactory']

function goalsCtrl (apiFactory){
    var gCtrl = this;

    gCtrl.newGoal = {
        // name        : String,         this is the Schema for Mongoose
        // startAmount : Number,
        // goalAmount  : Number,
        // byWhen      : Date
    };
    hCtrl.retrieveHeroes = function(){
            apiFactory
                .getHeroes()
                .then(function(response){
                    hCtrl.heroList = response.data;
                });
        }
        hCtrl.retrieveHeroes();
        // console.log(apiFactory)

        hCtrl.makeAHero = function () {
            apiFactory
                .createHero(hCtrl.newHero)
                .then(function(response){
                    console.log(response);
                    hCtrl.retrieveHeroes();
                });
        }

        hCtrl.pwExtra = function (which) {
            hCtrl.newHero[which].push('');
        }



}

// =============================================================
// Factory for BACKEND
// =============================================================

apiFact.$inject = ['$http']

// Our factory will be the MAIN place we make calls to the backend
function apiFact ($http){

   // function getUser () {
   //     return $http.get('/api/goals')
   // }
   // function createUser (goalsData) {
   //     return $http.post('/api/goals', goalsData)
   // }

   // This return value is exactly what we gain access to in the controller
   return {
       getGoal : getGoal,
       createGoal: createGoal,
   }
}
