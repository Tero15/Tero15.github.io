var timerE1 = document.querySelector(".timer-count");
var wordBlanks = document.querySelector(".word-blanks");
var start = document.querySelector(".start-button");

console.log (timerE1);
console.log (startButton);

//startButton.addEventListener("click", function(event){};

var timeLeft =10;

function countdown() {
    timeLeft =10;


    var timeInterval = setInterval(function () {
        timeLeft--;
        timerE1.textcontent = timeLeft

        if (timeLeft = 0) {
            clearInterval(timeInterval)
        }
    }, 1000);
}

startButton.addEventListener( "click", countdown );