var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name:           {type: String},
    password:       {type: String},
    email:          {type: String},
    goals:          {type: Array},
    habits:         {type: Array}
})

module.exports = mongoose.model('User', userSchema);
