// objects: Mario, Luigi, Wario, Bowser

// Keys: Name, image, power level

// Methods: attack: increase power by unique factor for each character
// Make into outter funtion: defense power level remains the same,
$(document).ready(function() { 
// ......................................................
  var mario = {
    name: "Mario",
    image: "assets/images/mario.jpg",
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
    image: "assets/images/luigi.png",
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
    image: "assets/images/wario.jpg",
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
    image: "assets/images/bowser.png",
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
    var charBtn = $("<img>");
    //$(".character").text
    $(charBtn).attr("id", i);
    $(charBtn).addClass("charBtn");
    $(charBtn).attr("src", charArray[i].image);
    $(charBtn).attr("value", charArray[i].name);
    $(charBtn).attr("style", "width:125px; height:125px");
    $(charBtn).text(charArray[i].name);
    $(".characters").append(charBtn);
  }

  // ..........................................................
  console.log("outside player count ", playerCount);

  
   // on click for each character
    $(".charBtn").on("click", function() { 
      if (playerCount < 2) {
        // the user selects a character for himself
        // the character icon goes to new panel
        var battleChar = $("<img>");
        var currentId = $(this).attr("id");

        $(battleChar).attr("id", currentId);
        $(battleChar).addClass("charBtn");
        $(battleChar).attr("src", charArray[currentId].image);
        $(battleChar).text($(this).attr("value"));
        $(battleChar).attr("style", "width:125px; height:125px");
        $(".battle").append(battleChar); 

        console.log("currentId ", currentId);

        playerCount += 1;

        if (playerCount == 1) {
          $(this).css("visibility", "hidden");
          console.log($(this).css("visibility", "hidden"));
        }
        
        else if (playerCount ==2) {
          $(this).css("visibility", "hidden");
          $(".characters").fadeTo("slow", 0.5);        
        }
      }

      console.log("playerCount ", playerCount);
      console.log("userChar ", userChar);
      console.log("userOpponent ", userOpponent);
    });
  
    //on click for fightBtn html button on click it fights
    // var fightBtn = $("<button>");
    // $(fightBtn).attr("id", fightBtn);
    // $(fightBtn).addClass("btn btn-primary fightBtn");
    // $(fightBtn).attr("value", fight);
    // $(fightBtn).text("Fight!");
    // $(".battle").append(fightBtn);

    $(".fightBtn").on("click", function() {
      if (playerCount == 2);
        $(".fightBtn").css("visibility", "hidden");

        //creat fight button\
        //
    });

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
