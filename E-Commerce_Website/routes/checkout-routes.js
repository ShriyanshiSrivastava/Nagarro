const router = require('express').Router();
const isLoggedIn = require('../middleware/auth-verification');
const Order = require('../models/order-model');

router.get('/', isLoggedIn, (req, res) => {
    res.render('checkout', {user : req.user});
});

router.post('/order', async (req, res) => {
    console.log(req.body);
    // console.log(req.body.productItems);
    const {firstName, lastName, phoneNo, address, city, country, state, zipCode, productItems, totalPrice, email} = req.body;
    const newObj = {
        user : req.user._id,
        firstName : firstName,
        lastName : lastName,
        phoneNo : phoneNo,
        address : address,
        city : city,
        country : country,
        state : state,
        zipCode : zipCode,
        productItems : productItems,
        totalPrice : totalPrice,
        email : email
    }

    console.log(newObj.productItems);

    const data = (await Order.create(newObj));
    res.json(data);
});


module.exports = router;