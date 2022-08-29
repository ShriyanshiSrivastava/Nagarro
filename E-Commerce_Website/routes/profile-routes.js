const router = require('express').Router();
const isLoggedIn = require('../middleware/auth-verification');

router.get('/', isLoggedIn, (req, res) => {
    res.render('layouts/profile', {user : req.user});
});

module.exports = router;