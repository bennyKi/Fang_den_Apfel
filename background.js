var highscore = 0;
function startGame() {
    start = true;
    clearInterval(interval);
    startFall();
    score = 0;
    if (localStorage.getItem("highscore")) {
        highscore = localStorage.getItem("highscore");
    }
    document.getElementById("Highscore").innerHTML = highscore;
}
function stopGame() {
    start = false;
    clearInterval(interval);
}
function saveHighscore() {
    if (score > highscore) {
        highscore = score;
    }
    localStorage.setItem("highscore", highscore);
    document.getElementById("Highscore").innerHTML = highscore;
}