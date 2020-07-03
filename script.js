var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0;
var countScore = 0;
var highScore = localStorage.getItem('HighScore');
var restrt = document.getElementById("restart");
var clearScore = document.getElementById("clearScore");

//Checks if the highscores exist
if (highScore !== null) {
    document.getElementById("high-score").innerHTML = "High score: " + highScore;
}

//Enables jump when Tab is pressed
function jump() {
    document.getElementById("change").src = "steven.gif";
    document.getElementById("block").style.animation = "block 2s infinite linear";
    document.getElementById("note").style.display = "none";
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
    score = score + 1;
    countScore = score - 1;
    document.getElementById("score").innerHTML = "Score: " + countScore;
}

//Checks if the character element and the block element are colliding.
var checkDead = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 60 && blockLeft > 5 && characterTop >= 15) { //checks if the elements colliding
        block.style.webkitAnimationPlayState = "paused";
        var x = document.getElementById("full");
        x.onkeypress = null;
        restrt.style.display = "block";
        clearScore.style.display = "block";
        document.getElementById("change").src = "rip.png";
        document.getElementById("change").style.width = "50px";
        document.getElementById("block").style.display = "none";

        if (highScore === null) {
            //Setting the highscores inside local storage
            localStorage.setItem('HighScore', countScore);
        } else {
            if (countScore > highScore) {
                //Stores the highscore inside localstorage
                localStorage.setItem('HighScore', countScore);
                highScore = countScore;
                document.getElementById("high-score").innerHTML = "High score: " + highScore;
            }
        }
    }

}, 10);

//Restart the game
function restart() {
    location.reload();
}

//Clear the high score
function clearSc() {
    highScore = 0;
    localStorage.setItem('HighScore', highScore);
    location.reload();
}