cart();
checkCartQuantity()

function cart() {

    var cartRows = document.getElementsByClassName("cart-row");
    Array.from(cartRows).forEach(function(cartRow) {
        //remove Cart
        var removeCartItemButton = cartRow.querySelector(".btnRemoveCart");
        removeCartItemButton.addEventListener("click", function(event) {
            var buttonClick = event.target;
            buttonClick.parentElement.parentElement.remove();
            updateCartotal();
            checkCartQuantity();

            // removeClass"active3"
            var cartTitle = cartRow.querySelector(".cart-item-title");
            var products = document.getElementsByClassName("product-item");
            for (var i = 0; i < products.length; i++) {
                var productTitles = products[i].querySelector(".product-item-title");
                var btn3 = products[i].querySelector(".btn-product-show3");
                if (cartTitle.innerText == productTitles.innerHTML) {
                    btn3.classList.remove("active3");
                }
            }

        });
        var quantity = cartRow.querySelector(".cart-item-quantity");
        quantity.addEventListener("click", function(event) {
            updateCartotal();
        });
        quantity.addEventListener("keyup", function(event) {
            updateCartotal();
        });
    });
    updateCartotal();


}

function checkBtn3() {
    var products = document.getElementsByClassName("product-item");
    var cartTitles = document.getElementsByClassName("cart-item-title");
    for (var i = 0; i < products.length; i++) {
        var productTitles = products[i].querySelector(".product-item-title");
        var btn3 = products[i].querySelector(".btn-product-show3");
        for (var j = 0; j < cartTitles.length; j++) {
            if (cartTitles[j].innerText == productTitles.innerHTML) {
                btn3.classList.add("active3");
            }
        }
    }

}

function checkCartQuantity() {
    var a = document.querySelectorAll(".cart-row").length;
    if (a == 0) {
        document.querySelector(".carts-note").style.display = "block";
        document.querySelector(".carts-note").innerHTML = "Chưa có sản phẩm trong giỏ hàng của bạn!";
    } else {
        document.querySelector(".carts-note").style.display = "none";
    }
}


//Total
function updateCartotal() {
    var cartRows = document.getElementsByClassName("cart-row");
    var total = 0;
    Array.from(cartRows).forEach(function(cartRow) {
        var priceElement = cartRow.querySelector(".cart-item-price");
        var quantityElement = cartRow.querySelector(".cart-item-quantity");
        var price = parseFloat(priceElement.innerText.replace("vnd", ""));
        var quantity = quantityElement.value;
        total = total + (quantity * price);
    });
    document.querySelector(".totalPrice").innerText = formatNumber(total);

    var a = document.querySelectorAll(".cart-row").length;
    document.querySelector(".cart-information").innerText = `${a} Sản phẩm ${formatNumber(total)} vnd`;
}





function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}