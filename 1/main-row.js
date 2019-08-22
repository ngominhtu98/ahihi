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
                <td class="cart-item col-xs-3">
                    <a href=" "><img class="cart-item-img" src="${img.src}" alt=" ">
                        <p class="cart-item-title">${title.innerText}</p>
                    </a>
                </td>
                <td class="col-xs-1"><input class="cart-item-quantity" type="number" value="1" min="1"></td>
                <td class="cart-item-price col-xs-1">${price.innerText}</td>
                <td class="btnRemove col-xs-1"><button class="btnRemoveCart ">Remove</button></td>
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

// function checkCart

// var btns = document.getElementsByClassName("btn-product");
// Array.from(btns).forEach(function(btn1) {
//     btn1.addEventListener('click', function(e) {

//         if (e.target.className == "btn-product-show1") {
//             var li1 = e.target;
//             li1.classList.toggle("active");
//             document.getElementById("modal-image01").src = 'a.jpg';
//             document.getElementById("modal01").style.display = "block";
//         }

//     });
// });


// Button 2(Wishlist)