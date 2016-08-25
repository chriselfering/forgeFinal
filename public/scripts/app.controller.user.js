angular.module('App')
    .controller('userController', userCtrl)

userCtrl.$inject = ['apiFactory']

function userCtrl (apiFactory){
    var uCtrl = this;
    uCtrl.newUser = {
        name        : [''], // starting with an empty array element so the ngRepeat will show HTML
        password    : [''],
        email       : [''],
        goals       : [],
        habits      : []
    };

    uCtrl.retrieveUser = function(){
        apiFactory
            .getUser()
            .then(function(response){
                uCtrl.userList = response.data;
            });
    }
    // uCtrl.retrieveUser();
    // console.log(apiFactory)

    uCtrl.makeAUser = function () {
        apiFactory
            .createUser(uCtrl.newUser)
            .then(function(response){
                console.log(response);
                uCtrl.retrieveUser();
            });
    }

    uCtrl.pwExtra = function (which) {
        uCtrl.newUser[which].push('');
    }
}
