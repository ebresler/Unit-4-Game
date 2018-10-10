//variables for each section
var computerNumber = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 
    73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
var crystalNumber = [15, 10, 7, 5, 3, 1];
var wins = 0;
var losses = 0;
var images = ["./assets/images/blueCrystal.png"];

var randomNumber = $("#computerNumber");
var randomBlueNumber = $("blueCrystal")
var userScore = $("totalScore");

//random computer number generation
var randomComputerNumber = computerNumber[Math.floor(Math.random() * computerNumber.length)];
console.log(randomComputerNumber)

//create reset function 

//


//have number from crystal show in user-score section

//have each click on crystal add to original score

//create statement that compares user guess to computer guess and outputs score 