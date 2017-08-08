// objects: Mario, Luigi, Wario, Bowser
// Keys: Name, image, power level
// Methods: attack: increase power by unique factor for each character
// Make into outter funtion: defense power level remains the same,
$(document).ready(function() { 
  // Gets Link for Theme Song
  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "assets/images/castle1.mp3");
  audioElement.loop = true;
  audioElement.play();
  // Theme Button
  $(".theme-button").on("click", function() {
    audioElement.loop = true;
    audioElement.play();
  });
  $(".pause-button").on("click", function() {
    audioElement.pause();
  });

// ......................................................
  var mario = {
    name: "Mario",
    image: "assets/images/mario2.png",
    health: 100,
    powerFactor: 2,
    powerLevel: 9,

    attack : function() {
      this.powerLevel = powerLevel * powerFactor;
      health -= this.powerLevel;
    },
  }

  var luigi = {
    name: "Luigi",
    image: "assets/images/luigi2.png",
    health: 100,
    powerFactor: 1.5,
    powerLevel: 10,

    attack : function() {
      this.powerLevel = powerLevel * powerFactor;
      health -= this.powerLevel;
    },
  }

  var wario = {
    name: "Wario",
    image: "assets/images/wario2.png",
    health: 100,
    powerFactor: 1.2,
    powerLevel: 6,

    attack : function() {
      this.powerLevel = powerLevel * powerFactor;
      health -= this.powerLevel;
    },
  }

  var bowser = {
    name: "Bowser",
    image: "assets/images/bowser2.png",
    health: 100,
    powerFactor: 1.1,
    powerLevel: 20,

    attack : function() {
      this.powerLevel = powerLevel * powerFactor;
      health -= this.powerLevel;
    },
  }

  // function defense() {
  // userchar.powerLevel = userchar.powerLevel - opponenet.powerlevel
  // }

  var playerCount = 0;
// make array with character objects and itterate through the array
  var charArray = [mario, luigi, wario, bowser];
  var deadCharArray = [];
  //console.log(charArray);

  var userChar;
  var userOpponent;
  var userCharHealth;
  var userOpponentHealth;
  var userCharPL;
  var userOpponentPL;
  var userCharPF;
  var userOpponentPF;
  var deadOpponent;

// put the objects into the DOM/html make this into a function
  for (var i= 0; i < charArray.length; i++) {
    var charBtn = $("<img>");
    //$(".character").text
    $(charBtn).attr("id", i);
    $(charBtn).addClass("charBtn img-rounded");
    $(charBtn).attr("src", charArray[i].image);
    $(charBtn).attr("value", charArray[i].name);
    $(charBtn).attr("style", "width:15%; height:auto");
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
        // same for opponent
        var currentId = $(this).attr("id");
        deadOpponent = "." + currentId;

        if(playerCount == 0){
          userChar = currentId;
          userCharHealth = charArray[userChar].health;
          userCharPL = charArray[userChar].powerLevel;
          userCharPF = charArray[userChar].powerFactor;
        }

        if(playerCount == 1){
          userOpponent = currentId;
          userOpponentHealth = charArray[userOpponent].health;
          userOpponentPL = charArray[userOpponent].powerLevel;
          userOpponentPF = charArray[userOpponent].powerFactor;
        }

        var battleChar = $("<img>");
        $(battleChar).attr("id", currentId);
        $(battleChar).addClass("charBtn img-rounded");  
        $(battleChar).addClass(currentId);
        $(battleChar).attr("src", charArray[currentId].image);
        $(battleChar).text($(this).attr("value"));
        $(battleChar).attr("style", "width:15%; height:auto");
        $(".battle-row").append(battleChar); 
        //console.log("currentId ", currentId);

        if (playerCount == 0) {
          userChar = currentId;
          //console.log("userChar ", userChar);
          $(this).css("visibility", "hidden");
          
        }
        
        else if (playerCount ==1) {
          userOpponent = currentId;
          //console.log("userOpponent ", userOpponent);
          $(this).css("visibility", "hidden");
          $(".userChar").attr("style", "width:" + charArray[userChar].health + "%");
          $(".userChar").text( charArray[userChar].health + "%");
          $(".userOpponent").attr("style", "width:" + userOpponentHealth + "%");
          $(".userOpponent").text( userOpponentHealth + "%");
          $("#fightBtn").css("visibility", "visible");
          $(".characters").fadeTo("slow", 0.5);  
        }
        playerCount += 1;
      }

      //console.log("playerCount ", playerCount);
      //console.log("deadOpponent", deadOpponent);

      if (playerCount ==2) {
        $("#fightBtn").on("click", function() {
          console.log("hit");

          charArray[userChar].health -= userOpponentPL;
          //charArray[userChar].attack.call(charArray[userOpponent], userOpponentPL);
          $(".userChar").attr("style", "width:" + charArray[userChar].health + "%");
          $(".userChar").text( charArray[userChar].health + "%");
          //console.log("user health ", userCharHealth);
          //console.log(userChar, userOpponent);

          charArray[userOpponent].health -= (userCharPL * userCharPF);
          $(".userOpponent").attr("style", "width:" + charArray[userOpponent].health + "%");
          $(".userOpponent").text( charArray[userOpponent].health + "%");
          //console.log("user health ", userOpponentHealth);

          if (charArray[userChar].health <= 0) {
            console.log("player 1 lost")
            $("#fightBtn").css("visibility", "hidden");
            //alert("You lost")
            //confirm("Would you like to play again?");
            //reset game
          }

          if (charArray[userOpponent].health <= 0) {
            console.log("player 1 won")
            console.log("deadOpponent: ", deadOpponent)

            playerCount = 1; //now you can pick a new opponent
            $("#fightBtn").css("visibility", "hidden");
            $(deadOpponent).css("visibility", "hidden");
            //alert("Choose your next opponent!")      

          }

          //console.log("healthChar", userCharHealth);
          //console.log("healthOpp", userOpponentHealth);
        });
      }
      // if (charArray.length == -1) {
        //ask if want to restrat whole game
      // }
    });
  

    // });

// ..........................................................

// when all opponenets are defeated you win.

// Bonus: add in mario video intro

});
