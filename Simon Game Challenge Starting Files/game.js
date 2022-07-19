
let buttonColours = ["red", "blue", "green", "yellow"];


let gamePattern = [];


let userClickedPattern = [];


$(".btn").click(function() {

 
  let userChosenColour = $(this).attr("id");

  
  userClickedPattern.push(userChosenColour);

  console.log(userClickedPattern);

});


function nextSequence() {

  
  let randomNumber = Math.floor(Math.random() * 4);

  
  let randomChosenColour = buttonColours[randomNumber];

  
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

}

function playSound(name) {

  switch (name) {
    case "blue":
      let blue = new Audio("sounds/blue.mp3");
      blue.play();
      break;

    case "green":
      let green = new Audio("sounds/green.mp3");
      green.play();
      break;

    case "wrong":
      let wrong = new Audio('sounds/wrong.mp3');
      wrong.play();
      break;

    case "yellow":
     let yellow = new Audio('sounds/yellow.mp3');
      yellow.play();
      break;

    default: console.log(name);

  }
}


