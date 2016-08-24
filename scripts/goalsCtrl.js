angular.module('App')
    .controller('Goals', Goals)
// ========================================================================
// All 3 Factories injected to Goals Controller
// ========================================================================
Goals.$inject = ['StrFactory', 'SpdFactory', 'FinFactory']

function Goals(StrFactory, SpdFactory, FinFactory) {
    console.log('GoalsCtrl / Factories reporting for duty!')

    var Goals = this;

    Goals.phys  = true;
    Goals.fin   = true;

    Goals.addStrGoal = function(name, goal, current, byWhen) {
        StrFactory.addStrGoal(name, goal, current, byWhen)
        Goals.strName = '' //clear the form value for the input
        Goals.strGoal = ''
        Goals.strCurrent = ''
        Goals.strByWhen = ''
    }

    Goals.addSpdGoal = function(name, goal, current, byWhen) {
        SpdFactory.addSpdGoal(name, goal, current, byWhen)
        Goals.spdName = '' //clear the form value for the input
        Goals.spdGoal = ''
        Goals.spdCurrent = ''
        Goals.spdByWhen = ''
    }

    Goals.addFinGoal = function(name, goal, current, byWhen) {
        FinFactory.addFinGoal(name, goal, current, byWhen)
        Goals.finName = '' //clear the form value for the input
        Goals.finGoal = ''
        Goals.finCurrent = ''
        Goals.finByWhen = ''
    }

    // ===============================================================
    // Goals Controller styling
    // ===============================================================
    Goals.accent = {}

    Goals.setAccent = function() {
        if(Object.keys(Goals.accent).length === 0) {
            Goals.accent = {
                'border-radius': '20px',
                'position': 'relative',
                'transition-property': 'background-color, color',
                'transition-duration': '1s',
                'transition-timing-function': 'ease-out',
                'background-color': '#1f0971',
                'padding-bottom': '7px'
            }
        } else {Goals.accent = {}}
    };
    Goals.accent2 = {}

    Goals.setAccent2 = function() {
        if(Object.keys(Goals.accent2).length === 0) {
            Goals.accent2 = {
                'border-radius': '20px',
                'position': 'relative',
                'transition-property': 'background-color, color',
                'transition-duration': '1s',
                'transition-timing-function': 'ease-out',
                'background-color': '#1f0971',
                'padding-bottom': '7px'
            }
        } else {Goals.accent2 = {}}
    };
    Goals.accent3 = {}

    Goals.setAccent3 = function() {
        if(Object.keys(Goals.accent3).length === 0) {
            Goals.accent3 = {
                'border-radius': '20px',
                'position': 'relative',
                'transition-property': 'background-color, color',
                'transition-duration': '1s',
                'transition-timing-function': 'ease-out',
                'background-color': '#1f0971',
                'padding-bottom': '7px'
            }
        } else {Goals.accent3 = {}}
    };
};
