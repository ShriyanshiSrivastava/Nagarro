module.exports = (req, res, next) => {
    if(!req.isAuthenticated()) {
        res.redirect('/auth/login');
    } else {
        next();
    }
}