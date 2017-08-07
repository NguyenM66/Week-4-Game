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
    powerFactor: 1.5,
    powerLevel: 15,

    attack : function() {
      this.powerLevel = powerLevel * powerFactor;
      health -= this.powerLevel;
    },
  }

  var luigi = {
    name: "Luigi",
    image: "assets/images/luigi.png",
    health: 100,
    powerFactor: 1.75,
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
    powerLevel: 12,

    attack : function() {
      this.powerLevel = powerLevel * powerFactor;
      health -= this.powerLevel;
    },
  }

  var bowser = {
    name: "Bowser",
    image: "assets/images/bowser.png",
    health: 100,
    powerFactor: 2.5,
    powerLevel: 20,

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
  var userCharHealth = charArray[userChar].health;
  var userOpponentHealth = charArray[userOpponent].health;
  var userCharPL = charArray[userChar].powerLevel;
  var userOpponentPL = charArray[userOpponent].powerLevel;
  var userCharPF = charArray[userChar].powerFactor;
  var userOpponentPF = charArray[userOpponent].powerFactor;


// put the objects into the DOM/html make this into a function
  for (var i= 0; i < charArray.length; i++) {
    var charBtn = $("<img>");
    //$(".character").text
    $(charBtn).attr("id", i);
    $(charBtn).addClass("charBtn img-circle");
    $(charBtn).attr("src", charArray[i].image);
    $(charBtn).attr("value", charArray[i].name);
    $(charBtn).attr("style", "width:125px; height:125px");
    $(charBtn).text(charArray[i].name);
    $(".characters").append(charBtn);
  }

  // ..........................................................
  $("#fightBtn").css("visibility", "hidden");

  
   // on click for each character
    $(".charBtn").on("click", function() { 
      if (playerCount < 2) {
        // the user selects a character for himself
        // the character icon goes to new panel
        var battleChar = $("<img>");
        var currentId = $(this).attr("id");
        var deadOpponent = "." + currentId;

        $(battleChar).attr("id", currentId);
        $(battleChar).addClass("charBtn img-circle");
        $(battleChar).addClass(currentId);
        $(battleChar).attr("src", charArray[currentId].image);
        $(battleChar).text($(this).attr("value"));
        $(battleChar).attr("style", "width:125px; height:125px");
        $(".battle").append(battleChar); 

        console.log("currentId ", currentId);

        playerCount += 1;

        if (playerCount == 1) {
          userChar = currentId;
          console.log("userChar ", userChar);
          $(this).css("visibility", "hidden");
          $(".progress-bar").attr("style", "width:" + userCharHealth + "%");
          $(".progress-bar").text( userCharHealth + "%");
        }
        
        else if (playerCount ==2) {
          userOpponent = currentId;
          console.log("userOpponent ", userOpponent);
          $(this).css("visibility", "hidden");
          $(".progress-bar").attr("style", "width:" + userOpponentHealth + "%");
          $(".progress-bar").text( userOpponentHealth + "%");
          $("#fightBtn").css("visibility", "visible");
          $(".characters").fadeTo("slow", 0.5);  
        }
      }

      console.log("playerCount ", playerCount);
      console.log("deadOpponent", deadOpponent);

      if (playerCount ==2) {
        $("#fightBtn").on("click", function() {
          console.log("hit");

          userCharHealth -= userOpponentPL;
          $(".userChar").attr("style", "width:" + userCharHealth + "%");
          $(".userChar").text( userCharHealth + "%");

          userOpponentHealth -= userCharPL * userCharPF;
          $(".userOpponent").attr("style", "width:" + userOpponentHealth + "%");
          $(".userOpponent").text( userOpponentHealth + "%");

          if (userOpponentHealth <= 0) {
            playerCount = 1; //now you can pick a new opponent
            // $("#2").css("visibility", "hidden");
            $("#fightBtn").css("visibility", "hidden");
            $(deadOpponent).css("visibility", "hidden");

            //alert("Choose your next opponent!")      

          }

          if (userCharHealth <= 0) {
            $("#fightBtn").css("visibility", "hidden");
            //alert("You lost")
          }

          console.log("healthChar", userCharHealth);
          console.log("healthOpp", userOpponentHealth);
        });
      }
      // if (charArray.length == -1) {
        //ask if want to restrat whole game
      // }
    });
  

    // $("#fightBtn").on("click", function() {

    //     hit attck 
    //     wario.health - mariopowerlevel;
    //     mariohealth - wario powerlevel;
    //     mariopowerlevel * powerFactor;

    // });

  //first pick is userChar, seond pick is userOpponent if panel has char and opponent then play. if opponent health < 0 then pick new oppnenet
  // if ($(".battle"))
  // userChar = bowser
  // remove bowser from 
// the user selects an opponent

// the new opponent icon goes to new panel 
// ..........................................................

// then promt user to continue defeating all opponenets 

// when all opponenets are defeated you win.

// ask if they want to play again and restrat the whole game

// Bonus: add in mario video intro
  // Gets Link for Theme Song
  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "assets/images/castle1.mp3");
  // Theme Button
  $(".theme-button").on("click", function() {
    audioElement.loop = true;
    audioElement.play();
  });
  $(".pause-button").on("click", function() {
    audioElement.pause();
  });

});
