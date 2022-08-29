const router = require('express').Router();
const passport = require('passport');

// // login page
router.get('/login', (req, res) => {
    res.redirect('/auth/google');
})

// login with google
router.get('/google', passport.authenticate('google', {
    scope : ['profile']
}));

// callback from gooogle
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/');
})

// logout
router.get('/logout', (req, res) => {
    // passport code
    req.logout(() => {
        res.redirect('/');
    });
});

module.exports = router;