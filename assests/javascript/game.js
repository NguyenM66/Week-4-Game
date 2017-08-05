// objects: Mario, Luigi, Wario, Bowser

// Keys: Name, image, power level

// Methods: attack: increase power by unique factor for each character
// Make into outter funtion: defense power level remains the same,

// ......................................................
 var mario = {
    name: "Mario",
    image: "<img>",
    health: 100,
    powerFactor: 2,
    powerLevel: 10;

    attack : function() {
      this.powerLevel = powerLevel * powerFactor;
    },
  }

 var luigi = {
    name: "Luigi",
    image: "<img>",
    health: 100,
    powerFactor: 2,
    powerLevel: 10;

    attack : function() {
      this.powerLevel = powerLevel * powerFactor;
    },
  }

 var wario = {
    name: "Wario",
    image: "<img>",
    health: 100,
    powerFactor: 2,
    powerLevel: 10;

    attack : function() {
      this.powerLevel = powerLevel * powerFactor;
    },
  }

 var bowser = {
    name: "Bowser",
    image: "<img>",
    health: 100,
    powerFactor: 2,
    powerLevel: 10;

    attack : function() {
      this.powerLevel = powerLevel * powerFactor;
    },
  }

  defense function () {
    //userchar.powerLevel = userchar.powerLevel - opponenet.powerlevel

  }

// make array with haracters and itterate throught the array

// put the objects into the DOM/html make this into a function

// like in the fridge game

// ..........................................................
// on click for each character

// the user selects a character for himself
//   set mario to usepick, then remove mario in panel and move mario to new panel

// the character icon goes to new panel

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
