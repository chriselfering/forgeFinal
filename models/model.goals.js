var mongoose = require('mongoose'),

    GoalsSchema = new mongoose.Schema({
        userId      : String,
        name        : String,
        startAmount : Number,
        goalAmount  : Number,
        byWhen      : Date, // Date.now()
    });

module.exports = mongoose.model('Goals', GoalsSchema)
