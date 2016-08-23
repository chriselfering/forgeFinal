var Auth = require('./auth')

module.exports = (app) => {
    app.get('/', (req,res) => {
        // res.redirect('/login'); // I don't have a landing page, so just redirect to the login page!
        res.render('landingPage.html')
    });

    app.get('/login', Auth.render)  // login page
    app.get('/logout', Auth.logout) // logout route + redirect

    app.post('/login', Auth.login);         // login form submission
    app.post('/register', Auth.register)    // register form submission

    app.all('/dashboard', Auth.middlewares.session);
    app.get('/dashboard', (req, res) => {
        res.render('dashboard.html', req.session);
    })
}
