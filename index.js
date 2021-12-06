document.querySelectorAll("button")[0].onclick = function() {

function diceRoll(n) {
    var randomNumber1 = Math.floor(Math.random()*6+1);

    var imageName = "dice" + randomNumber1 + ".png";

    var imageSource = imageName;

    var imageChange = document.querySelectorAll("img")[n];

    imageChange.setAttribute("src", imageSource);

    return randomNumber1
}


player1 = diceRoll(0);
player2 = diceRoll(1);

if (player1>player2) {
    document.querySelectorAll("h1")[0].innerHTML = "Player 1 drinks";
}

else if (player1<player2) {
    document.querySelectorAll("h1")[0].innerHTML = "Player 2 drinks";
}

else {
    document.querySelectorAll("h1")[0].innerHTML = "No one drinks";
};
};
