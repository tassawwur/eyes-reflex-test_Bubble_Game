var score = 0;
var timer = 60;
var hitrn = 0;

function updateScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function bubbleMaker() {
    var clutter = "";
    for (var i = 1; i <= 126; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer() {
    var timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerInt);
            document.querySelector("#pbottom").innerHTML = ""; // Clear bubbles
            alert("Game Over! Your final score is: " + score);
        }
    }, 1000);
}

document.querySelector("#pbottom").addEventListener("click", function (dets) {
    if (dets.target.classList.contains("bubble")) { // Ensure clicked element is a bubble
        var clickedNumber = Number(dets.target.textContent);
        if (clickedNumber === hitrn) {
            updateScore();
            bubbleMaker();
            getNewHit();
        }
    }
});

// Initialize game
bubbleMaker();
runTimer();
getNewHit();






