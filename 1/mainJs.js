// Button1(Qick)
var products = document.getElementsByClassName("product-item");
Array.from(products).forEach(function(product) {

    var img = product.querySelector(".item-image");
    var title = product.querySelector(".product-item-title");
    var price = product.querySelector(".product-item-price");
    // var price = parseFloat(price.innerText.replace("vnd", ""));


    //Quick Shop
    var btn1 = product.querySelector(".btn-product-show1");
    btn1.addEventListener('click', function(e) {
        btn1.classList.toggle("active1");
        document.querySelector(".modal-slide-image").src = img.src;
        document.getElementById("modal01").style.display = "block";
        document.querySelector(".modal-Name-Product").innerText = title.innerText;
        document.querySelector(".modal-price").innerText = price.innerText;

        // modal AddToCart
        var modalAddToCart = document.querySelector(".modalAddToCart");
        modalAddToCart.addEventListener("click", function() {
            var cartRow = document.createElement("tr");
            var cartItems = document.querySelector(".cart-items");
            cartRow.classList.add("cart-row");

            // Kiểm tra giỏ hàng
            var cartItemTitles = document.getElementsByClassName("cart-item-title");
            for (var i = 0; i < cartItemTitles.length; i++) {
                if (cartItemTitles[i].innerText == title.innerText) {
                    alert(`Sản phẩm ${title.innerText} này đã có trong giỏ hàng ahihi đồ ngốc`);
                    return
                    // console.log(cartItemTitle.innerText);
                    // console.log(title.innerText);
                }
            };
            alert(`Đã thêm ${title.innerText} vào giỏ hàng`);

            // add element
            var cartRowContenst = `
            <tr class="cart-row">
                <td class="col-xs-1"> <input class="check" type="checkbox"></td>
                <td class="cart-item col-xs-5">
                    <a href=" "><img class="cart-item-img" src="${img.src}" alt=" ">
                        <p class="cart-item-title">${title.innerText}</p>
                    </a>
                </td>
                <td class="col-xs-2"><input class="cart-item-quantity" type="number" value="1" min="1"></td>
                <td class="cart-item-price col-xs-2">${price.innerText}</td>
                <td class="btnRemove col-xs-2"><button class="btnRemoveCart ">Remove</button></td>
            </tr>
        `;
            cartRow.innerHTML = cartRowContenst;
            cartItems.append(cartRow);

            cart();
            checkCartQuantity();

            // kiểm tra sản phẩm có trên cart (addClass active3 vào btn3)
            checkBtn3();

        });

    });

    //Add To WishList
    var btn2 = product.querySelector(".btn-product-show2");
    btn2.addEventListener('click', function(e) {
        btn2.classList.toggle("active2");
    });


    // addProduct
    var btn3 = product.querySelector(".btn-product-show3");
    btn3.addEventListener("click", function addToCart() {

        var cartRow = document.createElement("tr");
        var cartItems = document.querySelector(".cart-items");
        cartRow.classList.add("cart-row");

        // Kiểm tra giỏ hàng
        var cartItemTitles = document.getElementsByClassName("cart-item-title");
        for (var i = 0; i < cartItemTitles.length; i++) {
            if (cartItemTitles[i].innerText == title.innerText) {
                alert(`Sản phẩm ${title.innerText} này đã có trong giỏ hàng ahihi đồ ngốc`);
                return
                // console.log(cartItemTitle.innerText);
                // console.log(title.innerText);
            }
        };


        // add element
        var cartRowContenst = `
            <tr class="cart-row">
                <td class="col-xs-1"> <input class="check" type="checkbox"></td>
                <td class="cart-item col-xs-5">
                    <a href=" "><img class="cart-item-img" src="${img.src}" alt=" ">
                        <p class="cart-item-title">${title.innerText}</p>
                    </a>
                </td>
                <td class="col-xs-2"><input class="cart-item-quantity" type="number" value="1" min="1"></td>
                <td class="cart-item-price col-xs-2">${price.innerText}</td>
                <td class="btnRemove col-xs-2"><button class="btnRemoveCart ">Remove</button></td>
            </tr>
        `;
        cartRow.innerHTML = cartRowContenst;
        cartItems.append(cartRow);
        alert(`Đã thêm ${title.innerText} vào giỏ hàng`);

        cart();
        checkCartQuantity();

        // kiểm tra sản phẩm có trên cart (addClass active3 vào btn3)
        checkBtn3();

    });



});



// Search
var rows = document.getElementsByClassName("product-row");
var searchBar = document.querySelector(".search-txt");
searchBar.addEventListener("keyup", function(e) {
    Array.from(rows).forEach(function(row) {
        var tern = e.target.value.toLowerCase();
        var title = row.querySelector(".product-item-title").textContent;
        if (title.toLowerCase().indexOf(tern) != -1) {
            row.style.display = "block";
        } else {
            row.style.display = "none";


        }
        if (document.querySelector(".product-row").style.display == "none") {
            document.querySelector(".items-note").style.display = "block";
            document.querySelector(".items-note").innerHTML = "Không tìm thấy sản phẩm!";



        } else {
            document.querySelector(".items-note").style.display = "none";
        }
    });
});

// Modal cancle
var slideRowImages = document.getElementsByClassName("slide-row-image");
Array.from(slideRowImages).forEach(function(slideRowImage) {
    slideRowImage.addEventListener("click", function(e) {
        document.querySelector(".modal-slide-image").src = slideRowImage.src;
    })
});



function cancleModal() {
    var modal = document.getElementById("modal01");
    modal.style.display = "none";


}

// cart
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