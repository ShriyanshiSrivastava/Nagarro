const express = require('express');
const path = require('path');
const session = require('express-session');
const dotenv = require("dotenv")
dotenv.config();

const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const checkoutRoutes = require('./routes/checkout-routes');
const productRoutes = require('./routes/product-routes');
const orderRoutes = require('./routes/order-routes');

const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const Product = require('./models/product-model');

const app = express();

// connect to mongoDB

mongoose.connect(keys.mongoDB.dbURI).then(() => {
    console.log("db connected");
}).catch(() => {
    console.log("error");
});

app.use(session({
    secret: keys.session.cookieKey,
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}));

app.use(passport.initialize());
app.use(passport.session());

// set up view engines
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/checkout', checkoutRoutes);
app.use(productRoutes);
app.use(orderRoutes);

// rendering to the home page
app.get('/', async (req, res) => {
    const allProducts = await Product.find({});
    res.render("home", {user : req.user, products : allProducts});
})

// starting the server on port 3000
app.listen(process.env.PORT||3000, () => {
    console.log("E-commerce app listening on port 3000");
})