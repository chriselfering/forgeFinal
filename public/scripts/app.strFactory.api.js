angular.module('App')
    .factory('apiStrFactory', apiStrFact)

apiStrFact.$inject = ['$http']

// Our factory will be the MAIN place we make calls to the backend
function apiStrFact ($http){

    function getGoals () {
        return $http.get('/api/goals')
    }
    function createGoal (goalData) {
        return $http.post('/api/goals', goalData)
    }

    // This return value is exactly what we gain access to in the controller
    return {
        getGoals    : getGoals,
        createGoal  : createGoal,
    }
}
