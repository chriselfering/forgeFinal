var mongoose = require('mongoose');

// Create a model / schema
var goalSchema = mongoose.Schema({
    name:       {type : String},
    powers:     {type : Array, default : []},
    weaknesses: {type : Array, default : []},
    headquarters:         {
            type : mongoose.Schema.ObjectId,
            ref  : 'HQ' // Collection name as MONGOOSE understands it - first arg to mongoose.model
    },
    // sidekick:   {
    //     name : {type : String},
    //     caped: {type : Boolean}
    // },
    masked:     {type : Boolean, default : false},
    origin:     {type : String},
});

// export the model
module.exports = mongoose.model('Hero', heroSchema, 'heroes'); // Our entrypoint into the heroes collection in the DB
// heroes
