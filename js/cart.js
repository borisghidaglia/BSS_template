var list_dict = []; // will contain dict of quantity/obj_price for each table row
// get the table cells we're insterested in
var quantity = document.getElementsByClassName('quantity'),
obj_price = document.getElementsByClassName('price'),
obj_pro = document.getElementsByClassName('pro-price'),
product_ids = document.querySelectorAll('td[product-id]');

(function() {

    for (var i = 0; i < quantity.length; i++) {

        quantity[i].addEventListener('keyup', refresh);
        quantity[i].parentNode.querySelector('button[left]').addEventListener('click',refresh.bind(quantity[i]));
        quantity[i].parentNode.querySelector('button[right]').addEventListener('click',refresh.bind(quantity[i]));

        if (!obj_pro[0]) {
            dict = {
                quantity : quantity[i],
                obj_price : obj_price[i],
                unit_price : obj_price[i].getAttribute('unit-price'),
            }

        } else {
            dict = {
                quantity : quantity[i],
                obj_price : obj_price[i],
                unit_price : obj_price[i].getAttribute('unit-price'),
                obj_pro : obj_pro[i],
                pro_price : obj_pro[i].getAttribute('pro-price'),
            }
        }

        list_dict[i] = dict;
    }

    refresh();
})();

function refresh(evt) {
    for (var i = 0; i < list_dict.length; i++) {
        quant = list_dict[i].quantity;
        if (quant == this || !evt) {
            refresh_prices(list_dict[i])
        }
    }
    refresh_total();
}

function refresh_prices(row) {
    if (!obj_pro[0]) {
        [row.obj_price.innerText] = [
            (row.quantity.value * row.unit_price).toFixed(2) + "€"
        ]
    } else {
        [row.obj_price.innerText, row.obj_pro.innerText] = [
            (row.quantity.value * row.unit_price).toFixed(2) + "€",
            (row.quantity.value * row.pro_price).toFixed(2) + "€"
        ]
    }
}

function refresh_total(obj,evt) {
    total = 0;
    total_pro = 0;
    for (var i = 0; i < list_dict.length; i++) {
        price = parseFloat(list_dict[i].obj_price.innerText);
        total += price;
        if (obj_pro[0]) {
            pro_price = parseFloat(list_dict[i].obj_pro.innerText);
            total_pro += pro_price;
        }
    }
    total = total.toFixed(2);
    obj_total = document.getElementById('total');
    obj_total.innerText = total + "€";
    if (obj_pro[0]) {
        total_pro = total_pro.toFixed(2);
        obj_total_pro = document.getElementById('total-pro');
        obj_total_pro.innerText = total_pro + "€";
    }
}

function submit_cart() {
    //create a form
    var form = document.getElementById('submit-cart');

    //create input element
    var i = document.createElement("input");
    i.type = "text";
    i.name = "user_name";
    i.id = "user_name1";

    for (var i = 0; i < product_ids.length; i++) {
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = product_ids[i].getAttribute('product-id');
        input.value = quantity[i].value;
        form.appendChild(input);
    }
    form.submit();
}
