let random = Math.floor(Math.random()*6)+1;

// dice1 to dice6
// finding the image
// based on the number
let randomDiceImage = "dice" + random + ".png"; 

let imageSource = "images/" + randomDiceImage; 

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imageSource);

let secondRandom = Math.floor(Math.random()*6)+1;

let imageSource2 = "images/dice" + secondRandom + ".png";

//this replaces the images. 
document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

if(random > secondRandom) document.querySelector("h1").innerHTML = "player 1 wins";
else if(secondRandom > random) document.querySelector("h1").innerHTML = "player 2 wins";
else document.querySelector("h1").innerHTML = "Draw";

const refreshButton = document.querySelector('.container');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)