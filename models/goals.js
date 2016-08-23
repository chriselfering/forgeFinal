var mongoose = require('mongoose');

// Create a model / schema
var goalSchema = mongoose.Schema({
    name:       {type : String},
    current:    {type : Number},
    byWhen:     {type : Date},
    stats: [{
                current    : {type: Number},
                date        : {type: Date}
            }]

// export the model
module.exports = mongoose.model('Goals', goalSchema, 'goals'); // Our entrypoint into the goals collection in the DB
