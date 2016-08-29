angular.module('HeroesOfAjax')
    .controller('heroesController', heroCtrl)

heroCtrl.$inject = ['apiFactory']

function heroCtrl (apiFactory){
    var hCtrl = this;
    hCtrl.newHero = {
        powers     : [''], // starting with an empty array element so the ngRepeat will show HTML
        weaknesses : ['']
    };
    hCtrl.newHQ = {
        amenities : ['']
    }

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


    hCtrl.retrieveHQs = function(){
        apiFactory
            .getHQs()
            .then(function(response){
                hCtrl.hqList = response.data;
            });
    }

    hCtrl.retrieveHQs();

    hCtrl.makeAnHQ = function () {
        apiFactory
            .createHQ(hCtrl.newHQ)
            .then(function(response){
                console.log(response);
            });
    }

    hCtrl.addAmenity = function(){
        hCtrl.newHQ.amenities.push('');
    }

}
