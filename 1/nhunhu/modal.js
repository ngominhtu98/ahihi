function onClick(element) {
    document.getElementById("modal-image01").src = document.getElementById("1").src;
    document.getElementById("modal01").style.display = "block";
}

function cancleModal() {
    var modal = document.getElementById("modal01");
    modal.style.display = "none";


}


var modal = document.getElementById("modal01");
// Khi click ngoài Modal thì đóng Modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}