angular.module('module.auth', []) // declaring an angular module
        .controller('module.auth.controller', Auth) // chaining a controller

    Auth.$inject = ['$http', '$window'] // injecting the $http service


    function Auth($http, $window) { // auth controller constructor function
        console.info("Auth.controller:loaded")

        var auth = this,
            alertError = ['alert','alert-danger']

        auth.payload = {}

        auth.login = {
            submit: function($event) {
                console.debug('Login.submit', $event)
                $http.post('/login', auth.payload).then(auth.login.success, auth.login.error)
            },
            success: function(res) {
                $window.localStorage._id=res.data._id
                location.href = '/dashboard'
            },
            error: function(err) {
                console.error('Login.error', err)
                auth.login.alert = alertError
                auth.login.message = err.data && err.data.message || 'Login failed!'
            }
        }
        auth.register = {
            submit: function($event) {
                $http.post('/register', auth.payload).then(auth.register.success, auth.register.error)
            },
            success: function(res) {
                location.href = '/dashboard'
            },
            error: function(err) {
                console.error('Register:error', err)
                auth.register.alert = alertError
                auth.register.message = err.data && err.data.message || 'Registration failed!'
            }
        }
    }
