angular.module('App')
    .factory('apiSpdFactory', apiSpdFact)

apiSpdFact.$inject = ['$http']

// Our factory will be the MAIN place we make calls to the backend
function apiSpdFact ($http){

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
