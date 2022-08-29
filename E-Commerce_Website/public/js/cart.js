$(document).ready(() => {
    let val = 0;

    if (localStorage.getItem("cart") != null) {
        let arr = JSON.parse(localStorage.getItem("cart"));
        for (let item of arr) {
            val++;
        }
    }

    $('#cartNumber').html(val);
});

$('#cart').on('click', () => {

    const prod = {
        id : prodId,
        name : prodName,
        description : prodDescription,
        url : prodUrl,
        price : prodPrice,
    };

    let val = $('#cartNumber').html();

    if (localStorage.getItem("cart") == null) {
        const newArr = [{ product: prod, quantity: 1 }];
        console.log(JSON.stringify(newArr));
        localStorage.setItem(`cart`, JSON.stringify(newArr));
        val++;
        $('#cartNumber').html(val);
    } else {
        let arr = JSON.parse(localStorage.getItem("cart"));
        console.log(arr);

        let existingCartItem = arr.find(tempCartItem => tempCartItem.product.id === prodId);

        if (existingCartItem != undefined) {
            let quantity = parseInt(existingCartItem.quantity);
            quantity++;
            console.log(quantity);
            existingCartItem.quantity = quantity;
        } else {
            console.log('new item added');
            const newObj = { product: prod, quantity: 1 };
            arr.push(newObj);
            val++;
            $('#cartNumber').html(val);
        }
        localStorage.setItem(`cart`, JSON.stringify(arr));
    }
});

