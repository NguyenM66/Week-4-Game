// objects: Mario, Luigi, Wario, Bowser

// Keys: Name, image, power level

// Methods: attack: increase power by unique factor for each character
// Make into outter funtion: defense power level remains the same,
$(document).ready(function() { 
// ......................................................
  var mario = {
    name: "Mario",
    image: "<img>",
    health: 100,
    powerFactor: 2,
    powerLevel: 10,

    attack : function() {
      this.powerLevel = powerLevel * powerFactor;
      health -= this.powerLevel;
    },
  }

  var luigi = {
    name: "Luigi",
    image: "<img>",
    health: 100,
    powerFactor: 2,
    powerLevel: 10,

    attack : function() {
      this.powerLevel = powerLevel * powerFactor;
      health -= this.powerLevel;
    },
  }

  var wario = {
    name: "Wario",
    image: "<img>",
    health: 100,
    powerFactor: 2,
    powerLevel: 10,

    attack : function() {
      this.powerLevel = powerLevel * powerFactor;
      health -= this.powerLevel;
    },
  }

  var bowser = {
    name: "Bowser",
    image: "<img>",
    health: 100,
    powerFactor: 2,
    powerLevel: 10,

    attack : function() {
      this.powerLevel = powerLevel * powerFactor;
      health -= this.powerLevel;
    },
  }

  var playerCount = 0;
  var userChar = 0;
  var userOpponent = 0;

  function defense() {
    //userchar.powerLevel = userchar.powerLevel - opponenet.powerlevel
  }

// make array with character objects and itterate through the array
  var charArray = [mario, luigi, wario, bowser];
  console.log(charArray);

// put the objects into the DOM/html make this into a function
  for (var i= 0; i < charArray.length; i++) {
    var charBtn = $("<button>");
    //$(".character").text
    $(charBtn).attr("id", i);
    $(charBtn).addClass("btn btn-primary charBtn");
    $(charBtn).attr("value", charArray[i].name);
    $(charBtn).text(charArray[i].name);
    $(".characters").append(charBtn);
  }

// ..........................................................
// on click for each character
  $(".charBtn").on("click", function() { 
// the user selects a character for himself
// the character icon goes to new panel
    var battleChar = $("<button>");
    var currentId = $(this).attr("id");

    $(battleChar).attr("id", currentId);
    $(battleChar).addClass("btn btn-primary charBtn");
    $(battleChar).text($(this).attr("value"));
    $(".battle").append(battleChar); 

    console.log("currentId ", currentId);

    playerCount += 1;

    console.log("playerCount ", playerCount);
    console.log("userChar ", userChar);
    console.log("userOpponent", userOpponent);
  });

    if (playerCount == 1) {
    userChar = currentId;
    idDiv = "#" + currentId;
    $("idDiv").css("visability", "hidden").is("hidden");
    }
    
    else if (playerCount ==2) {
      userOpponent = currentId;
    }
    //only if playerCount , 2
    // if (playerCount < 2) {
    //   userChar = currentId;
    //   if (userChar == 0) {

    //   }
    // }
//if I have 1 player chosed hide that id if i have more then 1 player chosen then change the visability/opacity on the container of ids
//hidden this.css hidden or visable

  //set mario to userpick, then remove mario in panel
  //first pick is userChar, seond pick is userOpponent if panel has char and opponent then play. if opponent health < 0 then pick new oppnenet
  // if ($(".battle"))
  // userChar = bowser
  // remove bowser from 
// the user selects an opponent

// the opponent icon goes to new panel 
// ..........................................................

// the user can press an attack button

// if the attack > the defense the user wins the points

// if the attack < the defense the user losses the points

// once the the character or opponent power level < 0 then the charater or opponenet wins
// ..........................................................

// then promt user to continue defeating all opponenets 

// when all opponenets are defeated you win.

// ask if they want to play again and restrat the whole game

// Bonus: add in mario video intro
});