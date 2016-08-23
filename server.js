require('colors');

/**
 * 1. touch server.js
 * 2. npm init
 * 3. npm i --save express mongoose morgan body-parser
 * 4. pull in deps, init a cononical express app
 * 5. initialize mongoose
 */

var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Routes = require('./routes'),
    path = require('path'),
    port = process.env.PORT || 1337,
    app = express();

app.use(express.static(path.join(__dirname,'public')));

// make sure you have mongod running!
// connection string: 'mongodb://localhost/<db-name>'
mongoose.connect('mongodb://localhost/heroes-of-ajax', (error) => {
    if(error) {
        console.error('Oh no, could not start mongoose!', error);
        process.exit(1); // exits a node application, anything other than 0 is considered an error
    } else {
        console.log('Mongoose started successfully.'.cyan);
    }
});

app.post('*', bodyParser.json(), bodyParser.urlencoded({ extended: true }));

Routes(app);

app.listen(port, (error)=>{
    if(error) {
        console.error('Oh no, the server could not start!', error);
        process.exit(1); // exits a node application, anything other than 0 is considered an error
    } else {
        console.log('Our heroesy server is making hero noises.'.yellow);
    }
});
