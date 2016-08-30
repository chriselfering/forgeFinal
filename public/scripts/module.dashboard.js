angular.module('module.dashboard', ['ngRoute'])
    // .controller('DashboardController', Dashboard)
    .controller('goalsController', goalsCtrl)
    .controller('chartsController', chartsCtrl)
    .factory('apiFactory', apiFact)
    .config(function($routeProvider) {

        $routeProvider.when('/goals', {
            templateUrl: '/views/dashboard.goals.html',
            controller: 'goalsController as gCtrl'
        });
        $routeProvider.when('/habits', {
            templateUrl: '/views/dashboard.habits.html'
        });
        $routeProvider.when('/lists', {
            templateUrl: '/views/dashboard.lists.html'
        });
        $routeProvider.when('/charts', {
            templateUrl: '/views/dashboard.charts.html',
            controller: 'chartsController as cCtrl'
        });
        $routeProvider.otherwise({ redirectTo: '/goals' });
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


    gCtrl.makeAGoal = function (type) {
        gCtrl.newGoal.type = type
        apiFactory
            .createGoal(gCtrl.newGoal)
            .then(function(response){
                console.log(response);
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

// ===============================================================
// D3 Chart for Strength Goal

// ===============================================================


// var data = apiFact.getGoal;
//
// var outerWidth = 1000;
// var outerHeight = 500;
// var margin = {
//     left: 200,
//     top: 0,
//     right: 50,
//     bottom: 30
// };
// var barPadding = 0.2;
//
// var xColumn = "startAmount";
// var yColumn = "name";
//
// var innerWidth = outerWidth - margin.left - margin.right;
// var innerHeight = outerHeight - margin.top - margin.bottom;
//
// var svg = d3.select(".strChart").append("svg")
//     .attr("width", outerWidth)
//     .attr("height", outerHeight);
// var g = svg.append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
// var xAxisG = g.append("g")
//     .attr("class", "x axis")
//     .attr("transform", "translate(0," + innerHeight + ")");
// var yAxisG = g.append("g")
//     .attr("class", "y axis");
//
// var xScale = d3.scale.linear().range([0, innerWidth]);
// var yScale = d3.scale.ordinal().rangeBands([0, innerHeight], barPadding);
//
// var xAxis = d3.svg.axis().scale(xScale).orient("bottom")
//     .ticks(5) // Use approximately 5 ticks marks.
//     .tickFormat(d3.format("s")) // Use intelligent abbreviations, e.g. 5M for 5 Million
//     .outerTickSize(0); // Turn off the marks at the end of the axis.
// var yAxis = d3.svg.axis().scale(yScale).orient("left")
//     .outerTickSize(0); // Turn off the marks at the end of the axis.
//
// function render(data) {
//
//     xScale.domain([0, d3.max(data, function(d) {
//         return d[xColumn];
//     })]);
//     yScale.domain(data.map(function(d) {
//         return d[yColumn];
//     }));
//
//     xAxisG.call(xAxis);
//     yAxisG.call(yAxis);
//
//     var bars = g.selectAll("rect").data(data);
//     bars.enter().append("rect")
//         .attr("height", yScale.rangeBand());
//     bars
//         .attr("x", 0)
//         .attr("y", function(d) {
//             return yScale(d[yColumn]);
//         })
//         .attr("width", function(d) {
//             return xScale(d[xColumn]);
//         })
//         .append("rect")
//             .attr("height", yScale.rangeBand())
//             .attr("width", function(d) {
//                 return xScale(100);
//             })
//     bars.exit().remove();
// }
//
// function type(d) {
//     d.population = +d.population;
//     return d;
// }
//
// render(data);

// =============================================================
// Charts Controller
// =============================================================

chartsCtrl.$inject = ['apiFactory']

function chartsCtrl (apiFactory){
    var cCtrl = this;
    cCtrl.retrieveGoals = function(){
        apiFactory
            .getGoal()
            .then(function(response){
                console.log(response)
                cCtrl.goalList = response.data;
            });
    }

    cCtrl.retrieveGoals();
}
// console.log(apiFactory)
