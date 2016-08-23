angular.module('App')
    .factory('apiFinFactory', apiFinFact)

apiFinFact.$inject = ['$http']

// Our factory will be the MAIN place we make calls to the backend
function apiFinFact ($http){

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
