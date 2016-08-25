angular.module('App')
    .factory('apiFactory', apiFact)

apiFact.$inject = ['$http']

// Our factory will be the MAIN place we make calls to the backend
function apiFact ($http){

    function getUser () {
        return $http.get('/api/user')
    }
    function createUser (goalData) {
        return $http.post('/api/user', userData)
    }

    // This return value is exactly what we gain access to in the controller
    return {
        getUser     : getUser,
        createUser  : createUser,
    }
}
