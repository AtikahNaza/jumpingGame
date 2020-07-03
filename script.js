var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0;
var highScore = localStorage.getItem('HighScore');
var restrt = document.getElementById("restart");

if (highScore != null) {
    document.getElementById("high-score").innerHTML = "High score: " + highScore;
}
 
function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
    score = score + 1;
    if (block.style.webkitAnimationPlayState == "paused") {
        score = score - 1;
    }
    document.getElementById("score").innerHTML = "Score: " + score;
}

var checkDead = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 60 && blockLeft > -3 && characterTop >= 15) {
        block.style.webkitAnimationPlayState = "paused";
        restrt.style.display = "block";
        document.getElementById("change").src = "rip.png";
        document.getElementById("change").style.width = "50px";
        document.getElementById("block").style.display = "none";
        if (highScore == null) {
            localStorage.setItem('HighScore', score);
        } else {
            if (score > highScore) {
                localStorage.setItem('HighScore', score);
                highScore = score;
                document.getElementById("high-score").innerHTML = "High score: " + highScore;
            }
        }
    }

}, 10);

function restart() {
    location.reload();
}