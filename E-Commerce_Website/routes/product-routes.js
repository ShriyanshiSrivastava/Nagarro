const router = require('express').Router();
const isLoggedIn = require('../middleware/auth-verification');
const Product = require('../models/product-model');

router.get('/products/:category', async (req, res) => {
    const prods = await Product.find({category : req.params.category});
    res.render('home', {user : req.user, products : prods});
});

router.get('/products/desc/:id', async (req, res) => {
    const prod = await Product.findOne({_id : req.params.id});

    const prods = await Product.find({_id : {'$not' : {'$in' : req.params.id}}, category : prod.category });

    res.render('product-page', {user : req.user, product : prod, products : prods});
});

router.get('/loadAllProducts', async (req, res) => {
    const prods = [
        // {
        //     name : 'Denim Shirt',
        //     description : "Blue faded casual denim shirt, has a mandarin collar, long sleeves, curved hem, one patch pocket",
        //     url : 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg',
        //     price : 120,
        //     category : 'Shirts',
        // },
        // {
        //     name : 'Sweatshirt',
        //     description : "Classic, athletic-inspired performance hoody features ultra-soft cotton/poly blend fabric, a full-zip front, kanga pockets for keeping your hands warm, extra-wide drawstrings and a contrast hood lining for added style.",
        //     url : 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg',
        //     price : 139,
        //     category : 'Sport wears',
        // },
        // {
        //     name : 'Grey blouse',
        //     description : "Basecamp of layering. Streamlined base layer with H2X-DRY® moisture management technology that wicks moisture away from the skin. The Base Thermal 1/4 Zip features a grid back fleece which offers superior thermal properties, while allowing for excellent airflow and breathability.",
        //     url : 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
        //     price : 99,
        //     category : 'Sport wears',
        // },
        // {
        //     name : 'Black Jacket',
        //     description : "Basecamp of layering. Streamlined base layer with H2X-DRY® moisture management technology that wicks moisture away from the skin. The Base Thermal 1/4 Zip features a grid back fleece which offers superior thermal properties, while allowing for excellent airflow and breathability.",
        //     url : 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg',
        //     price : 219,
        //     category : 'Outwears',
        // },
        // //
        // {
        //     name : 'Wrangler men premium denim Shirt',
        //     description : "One of the most versatile pieces of clothing a man can own is a classic denim shirt. The Wrangler® men’s premium slim fit denim shirt strikes the perfect balance between casual and dressy, making it ideal for everyday outfits. This button-down shirt is crafted from a comfortable cotton blend with just the right amount of stretch to keep you moving in total comfort. Whether you tuck it in or leave it untucked, you really can’t go wrong.",
        //     url : 'https://i5.walmartimages.com/asr/252f52a3-024b-45fd-825f-5b8696e8b95b.9e5eb992175360fc12b2d9da54e32bd0.jpeg',
        //     price : 140,
        //     category : 'Shirts',
        // },
        // {
        //     name : 'Computec Embroidery sports jacket',
        //     description : "Innovative TEK2 material, lighter insulation and an improved taffeta lining for easy movement have made this winter parka a perennial bestseller, keeping the weather out and the heat in for any winter adventure.",
        //     url : 'https://computecembroidery.com/wp-content/uploads/2015/09/sports_jacket11.png',
        //     price : 139,
        //     category : 'Sport wears',
        // },
        // {
        //     name : "Women's Dockyard Performance Full Zip Hoody - CFZ-6W",
        //     description : "Enjoy all day confidence with this classic, athletic-inspired performance hoody that features an ultra-soft cotton-poly blend treated with Polygiene Stays Fresh® Technology to control odor; wear more,wash less.A full-zip front with zippered welt pockets for keeping your hands warm, and ribbed cuffs and hem for premium design detailing.Adjustable hood with drawcord provides weather protection.",
        //     url : 'https://cdn.shopify.com/s/files/1/0017/2100/8243/products/CFZ-6W_FRONT_BLACK_2000x.jpg?v=1657085722',
        //     price : 199,
        //     category : 'Sport wears',
        // },
        // {
        //     name : "Dokotoo Women's Khaki Long Sleeve",
        //     description : "Welcome to Dokotoo, I hope you have a good shopping! Dokotoo is a professional fashion brand that focuses on fashion women's clothing, which can meet the actual needs for fashion and decent fashion. Package Content: Womens Solid Color Fleece Jacket Coat X 1 Fashion Thick Outwear is made of 100%Polyester, soft and cozy to wear. This shaggy crop fleece jacket could with basic crop top,leggings,jeans,shorts,skinny pants,knee high boots or high heels for a glamorous and fashion look.",
        //     url : 'https://i5.walmartimages.com/asr/fc436c13-c169-40c2-8628-818b139a6482.93850faddbea1b054d6894e1169523fa.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
        //     price : 198,
        //     category : 'Outwears'
        // }
    ];

    let arr = [];

    for (let product of prods) {
        const pr = await Product.create(product);
        arr.push(pr);
        console.log(pr);
    };

    res.json(arr);
})

module.exports = router;