$(document).ready(() => {
    initializeCart();
});

function initializeCart() {
    const arr = JSON.parse(localStorage.getItem("cart"));
    console.log(arr);

    let total = 0;
    let count = 0;

    for (let item of arr) {
        const currentProduct = item.product;
        const subtotal = item.quantity * currentProduct.price;

        $('#cartList').prepend(`<a href="/products/desc/${currentProduct.id}"><li class="list-group-item d-flex justify-content-between lh-condensed">
        <img style="width: 15%; height: 15%" src="${currentProduct.url}">
          <div class="ml-3 mr-3 text-center">
            <h6 class="my-0">${currentProduct.name}</h6>
            <small class="text-muted">quantity : ${item.quantity}</small>
          </div>
          <span class="text-muted">$${subtotal}</span>
        </li></a>`);

        total += subtotal;
        count++;
    }

    $('#total').html(`$${total}`);
    $('#totalItems').html(count);
}

$('#checkoutForm').submit(async () => {
    let itemsArr = JSON.parse(localStorage.getItem(`cart`));
    localStorage.removeItem('cart');
    let total = 0;

    for (let item of itemsArr) {
        total += item.product.price * item.quantity;
    }

    if(itemsArr.length == 0) {
        return;
    }

    let orderObj = {};
    $.each($('#checkoutForm').serializeArray(), function (_, kv) {
        orderObj[kv.name] = kv.value;
    });

    const productItems = [];

    for (item of itemsArr) {
        productItems.push({product : item.product.id, quantity : item.quantity});
    }

    orderObj = {
        ...orderObj,
        productItems : productItems,
        totalPrice : total
    }

    const data = await axios.post('/checkout/order', orderObj);
    location.reload(true);
    console.log(`data : ${data}`);

});