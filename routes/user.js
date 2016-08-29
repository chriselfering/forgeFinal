// User Controller

// Require the model so we can access the collection
var User = require('../models/model.user');

module.exports = {
    get : (req, res) => {
        // Read

        // Without Populate
        // Goal.find({}, function(err, goals){
        //     res.json(goals);
        // });

        // With Populate
        User.find({})
            .exec(function(err, user){
                res.json(user);
            }); // exec gives us a place to pass in the callback function find used to take.  Like a 'then' method for mongoose
            Goal.find({})
                .exec(function(err, goals){
                    res.json(goals);
                });
    // /api/goals
    // /api/goals/:id
    // /api/goals/53982034abdsjc893
    // /api/v2/evolution-chain/215
    upsert : (req, res) => {
        // Create / Update
        if(req.params.id){
            // Update existing document
        }
        else {
            // No id in the url, create a new document
            var newGoal = new Goal(req.body);

            // Or, if req.body doesn't match your schema - manually construct the object you pass to new Goal
            // var newGoal = new Goal({
            //     name : req.body.firstName + ' ' + req.body.lastName,
            //     powers : req.body.powers.split(', '),
            //     weaknesses : someOtherObj.stuff,

            // })

            // Save goal to DB
            newGoal.save(function(err, goal){
                if(err){
                    return res.json(err);
                }
                res.json(goal);
            });
        }
    },

    remove : (req, res) =>{
        // Delete
    }
}
