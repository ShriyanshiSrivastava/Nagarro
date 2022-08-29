const router = require('express').Router();
const isLoggedIn = require('../middleware/auth-verification');
const Order = require('../models/order-model');
const Product = require('../models/product-model');

router.get('/orders', isLoggedIn, async (req, res) => {
    const allOrders = await Order.find({user : req.user._id});
    allOrders.reverse();
    res.render('order-page', {orders : allOrders, user : req.user});
});

router.get('/orders/:orderId', isLoggedIn, async (req, res) => {
    const order = await Order.findOne({_id : req.params.orderId});

    for (let item of order.productItems) {
        item.product = await Product.findOne({_id : item.product});
    }

    console.log(order);

    res.render('single-order-page', {order : order, user : req.user});
})

module.exports = router;