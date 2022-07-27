var width = localStorage.getItem("width") || 0;
var elem = document.getElementById("myBar");
elem.style.width = width + "%";
document.getElementById("progressValue").innerHTML = width + "%";
var increaseButton = document.getElementById("increase");
var decreaseButton = document.getElementById("decrease");

if (width >= 100) {
    increaseButton.disabled = true;
}
if (width <= 0) {
    decreaseButton.disabled = true;
}

function increase() {
    if (width < 100) {
        increaseButton.disabled = false;
        decreaseButton.disabled = false;
        width++;
        elem.style.width = width + "%";
        localStorage.setItem("width", width);
    }
    else {
        increaseButton.disabled = true;
    }
}

function decrease() {
    if (width > 0) {
        increaseButton.disabled = false;
        decreaseButton.disabled = false;
        width = width - 1
        elem.style.width = width + "%";
        localStorage.setItem("width", width);
    }
    else {
        decreaseButton.disabled = true;
    }
}

function reset() {
    width = 0;
    elem.style.width = width + "%";
    localStorage.setItem("width", width);
}

var buttonsList = document.getElementById("button-block");

buttonsList.addEventListener("click", function () {
    document.getElementById("progressValue").innerHTML = localStorage.getItem("width") + "%";
});
