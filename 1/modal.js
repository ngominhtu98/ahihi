var slideRowImages = document.getElementsByClassName("slide-row-image");
Array.from(slideRowImages).forEach(function(slideRowImage) {
    slideRowImage.addEventListener("click", function(e) {
        document.querySelector(".modal-slide-image").src = slideRowImage.src;
    })
});



function cancelModal() {
    var modals = document.getElementsByClassName("modal");
    Array.from(modals).forEach(function(modal) {
        modal.style.display = "none";

    })


}
var btnHeaderCart = document.querySelector(".btn-Header-Cart");
btnHeaderCart.addEventListener("click", function() {
    document.getElementById("modal02").style.display = "block";
});

var modal = document.getElementById("modal02");
// var modal = document.getElementsByClassName("modal")[0];
//
// Khi click ngoài Modal thì đóng Modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}