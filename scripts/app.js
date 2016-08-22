angular.module('App', ['ngRoute'])

angular.module('App')
    .factory('StrFactory', StrFactory)
    .factory('SpdFactory', SpdFactory)
    .factory('FinFactory', FinFactory)
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/views/home.html'
        });

        $routeProvider.when('/home', {
            templateUrl: '/views/home.html'
        });

        $routeProvider.when('/dashboard', {
            templateUrl: '/views/dashboard.html',
        });
        $routeProvider.when('/habits', {
            templateUrl: '/views/habits.html'
        });
        $routeProvider.when('/lists', {
            templateUrl: '/views/lists.html'
        });

        //default route
        $routeProvider.otherwise({ redirectTo: '/home' });
    });


    // ===============================================================
    // Strength Factory
    // ===============================================================

    function StrFactory() {
        console.log('Strength Factory reporting for duty!')

        var str = this;

        str.goalArray = [];

        function StrGoal(name, goal, current, byWhen) { //constructor
            this.name = name;
            this.goal = goal;
            this.current = current;
            this.byWhen = byWhen
        }

        str.addStrGoal = function(name, goal, current, byWhen) {
            console.log('Congratulations on submitting a goal!');

            var newStrGoal = new StrGoal(name, goal, current, byWhen)
            str.goalArray.push(newStrGoal)

            console.log("new STRENGTH object array", str.goalArray)
        }
        return str;
    }
    // ================================================================
    // Speed Factory
    // ================================================================

    function SpdFactory() {
        console.log('Speed Factory reporting for duty!')

        var spd = this;

        spd.goalArray = [];

        function SpdGoal(name, goal, current, byWhen) { //constructor
            this.name = name;
            this.goal = goal;
            this.current = current;
            this.byWhen = byWhen
        }

        spd.addSpdGoal = function(name, goal, current, byWhen) {
            console.log('Congratulations on submitting a SPEED goal!');

            var newSpdGoal = new SpdGoal(name, goal, current, byWhen)
            spd.goalArray.push(newSpdGoal)

            console.log("new SPEED object array", spd.goalArray)
        }
        return spd;
    }
    // ================================================================
    // Finance Factory
    // ================================================================

    function FinFactory() {
        console.log('Finance Factory reporting for duty!')

        var fin = this;

        fin.goalArray = [];

        function FinGoal(name, goal, current, byWhen) { //constructor
            this.name = name;
            this.goal = goal;
            this.current = current;
            this.byWhen = byWhen
        }

        fin.addFinGoal = function(name, goal, current, byWhen) {
            console.log('Congratulations on submitting a goal!');

            var newFinGoal = new FinGoal(name, goal, current, byWhen)
            fin.goalArray.push(newFinGoal)

            console.log("new object array", fin.goalArray)
        }
        return fin;
    }
