angular.module('App')
    .controller('goalsController', goalCtrl)

goalCtrl.$inject = ['apiFactory']

function goalCtrl (apiFactory){
    var gCtrl = this;
    gCtrl.newGoal = {
        name     : [''], // starting with an empty array element so the ngRepeat will show HTML
        goal : [''],
        byWhen : ['']
    };

    gCtrl.retrieveGoals = function(){
        apiFactory
            .getGoals()
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
