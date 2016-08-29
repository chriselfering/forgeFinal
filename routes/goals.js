var Goals = require('../models/model.goals')

module.exports = {
    get : (req, res) => {
        // Read

        // Without Populate, allows you to attach to userId
        Goals.find({
            userId: req.session.user._id       //eventually you may write if statement to check if user exists
        }, function(err, goals){
            res.json(goals);
        });
    },

    upsert : (req, res) =>{
        // Create / Update
        if(req.params.id){
            // Update existing document
        }
        else {
            // No id in the url, create a new document
            var newGoal = new Goal(req.body);

            // Save goal to DB
            newGoal.save(function(err, goal){
                if(err){
                    return res.status(500).json(err);
                }
                res.json(goal);
            });
        }
    },

    remove : (req, res) =>{
        // Delete
    }

}
