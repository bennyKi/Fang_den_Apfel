var greenBasket = new Image();
    greenBasket.src = "greenBasket.png";
var redBasket = new Image();
    redBasket.src = "redBasket.png";
var img = redBasket;
var x, y;
var color = 0;
var canvas = document.getElementById("canvas");
var draw = false;
var start = false;
var score = 0;
var ctx;
window.onload = function () {
    ctx = canvas.getContext("2d");
}
function changePosition(event) {
    if (start)  {
        x = event.clientX- 125;
        y = 550;
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        draw = true;
        ctx.drawImage(img, x, y, img.naturalWidth / 2, img.naturalHeight / 2);
        draw = false;
        if (!drawApple) {
            ctx.drawImage(appleImage, appleX, appleY, greenApple.naturalWidth / 2, greenApple.naturalHeight / 2);
        }
    }
}
function changeColor() {
    if (start) {
        color = Math.abs(color - 1);
        switch (color) {
            case 0:
                img = redBasket;
                break;
            default:
                img = greenBasket;
                break;
        }
    }
}
function isBasketTouchedWith(contact) {
    for (var i = 0; i < img.naturalWidth / 2; i++) {
        if (x + i == contact) {
            return true;
        }
    }
    return false;
}