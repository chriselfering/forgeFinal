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
    gCtrl.retrieveGoals = function(){
            apiFactory
                .getGoal()
                .then(function(response){
                    gCtrl.goalList = response.data;
                });
        }
        gCtrl.retrieveGoals();
        // console.log(apiFactory)

        gCtrl.makeAGoal = function () {
            apiFactory
                .createGoal(gCtrl.newGoal)
                .then(function(response){
                    console.log(response);
                    gCtrl.retrieveGoals();
                });
        }

        gCtrl.pwExtra = function (which) {
            gCtrl.newGoal[which].push('');
        }
}

// =============================================================
// Factory for BACKEND
// =============================================================

apiFact.$inject = ['$http']

// Our factory will be the MAIN place we make calls to the backend
function apiFact ($http){

   function getGoal () {
       return $http.get('/dashboard/goals')
   }
   function createGoal (goalsData) {
       return $http.post('/dashboard/goals', goalsData)
   }

   // This return value is exactly what we gain access to in the controller
   return {
       getGoal : getGoal,
       createGoal: createGoal,
   }
}
