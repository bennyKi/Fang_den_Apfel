var greenApple = new Image();
    greenApple.src = "greenApple.png";
var redApple = new Image();
    redApple.src = "redApple.svg";
var rottenApple = new Image();
    rottenApple.src = "rottenApple.png";
var speed = 0;
var interval;
var appleX;
var appleY;
var appleNumber;
var appleImage;
var drawApple;
var score;
function startFall() {
    appleX = Math.floor(Math.random() * (canvas.clientWidth - 50));
    appleY = 0;
    appleNumber = Math.floor(Math.random() * 3);
    switch (appleNumber) {
        case 0:
            appleImage = redApple;
            break;
        case 1:
            appleImage = greenApple;
            break;
        default:
            appleImage = rottenApple;
            break;
    }
    interval = setInterval(fall, 0);
    
}
function fall() {
    if (start) {
            
            drawApple = true;
            ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
            if (!draw) {
                ctx.drawImage(img, x, y, img.naturalWidth / 2, img.naturalHeight / 2);
            }
            ctx.drawImage(appleImage, appleX, appleY, greenApple.naturalWidth / 2, greenApple.naturalHeight / 2);
            appleY += 1.5;
            drawApple = false;
            if (appleY >= canvas.clientHeight) {
                if (!isBasketTouchedWith(appleX) && appleNumber != 2) {
                    stopGame();
                    return;
                }
                clearInterval(interval);
                startFall();
                return;
            } else if (appleY >= y && isBasketTouchedWith(appleX)) {
                if (appleNumber == color) {
                    score++;
                    speed++;
                    document.getElementById("Score").innerHTML = score;
                    saveHighscore();
                    clearInterval(interval);
                    startFall();
                    return;
                } else {
                    stopGame();
                    return;
                }
            }    
        
        
    }
}