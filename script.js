var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0;
var countScore=0;
var highScore = localStorage.getItem('HighScore');
var restrt = document.getElementById("restart");
var clearScore = document.getElementById("clearScore");

if (highScore !== null) {
    document.getElementById("high-score").innerHTML = "High score: " + highScore;
}
 
function jump() {
    document.getElementById("change").src = "steven.gif";
    document.getElementById("block").style.animation = "block 2s infinite linear";
    document.getElementById("note").style.display="none";
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
    score = score + 1;
    countScore=score-1;
    document.getElementById("score").innerHTML = "Score: " + countScore;
}

var checkDead = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 60 && blockLeft > 5 && characterTop >= 15) {
        block.style.webkitAnimationPlayState = "paused";
        var x = document.getElementById("full");
        x.onkeypress= null;
        // score = score - 1;
        // document.getElementById("score").innerHTML = "Score: " + score;
        restrt.style.display = "block";
        clearScore.style.display = "block";
        document.getElementById("change").src = "rip.png";
        document.getElementById("change").style.width = "50px";
        document.getElementById("block").style.display = "none";
        if (highScore === null) {
            localStorage.setItem('HighScore', countScore);
        } else {
            if (countScore > highScore) {
                localStorage.setItem('HighScore', countScore);
                highScore = countScore;
                document.getElementById("high-score").innerHTML = "High score: " + highScore;
            }
        }
    }

}, 10);

function restart() {
    location.reload();
}

function clearSc(){
    highScore = 0;
    localStorage.setItem('HighScore', highScore);
    location.reload();
}