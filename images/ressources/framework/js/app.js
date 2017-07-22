var player = 1;
var globalScore = 0;
var roundScore = 0;

var rollDice = function() { 
    var images = ["images/dice-1.png", "images/dice-2.png", "images/dice-3.png", "images/dice-4.png", "images/dice-5.png", "images/dice-6.png"];
    var r = Math.floor((Math.random() * 6) + 1);
    document.getElementById("demo").innerHTML = r; 
    roundScore += r;
    var currentScore = document.querySelector('.player-one');
    currentScore.innerHTML = roundScore;
    var changeDiceImage = document.querySelector('.dice'); 
    changeDiceImage.src = images[r - 1];

    var changedImage = images[r - 1];
    if(changedImage == images[0]) {
        roundScore -= roundScore;;
        currentScore.innerHTML = roundScore;
    }else hold();
}


