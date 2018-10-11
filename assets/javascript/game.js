// variables

var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/blueCrystal.png", "./assets/images/redCrystal.png", 
"./assets/images/whiteCrystal.png", "./assets/images/greenCrystal.png"];

// functions

function randomTargetNumber() {
    targetNumber = Math.floor(Math.random() * 20) + 20;
}

function resetCrystals() {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 10) + 2));
        $(".crystal-images").append(crystal);
    }
}

function resetHTML() {
    $("#computerNumber").html(targetNumber);
    $("#totalScore").html("0");
    $("#wins").html(wins);
    $("#losses").html(losses);
    $(".totalScore").html(counter);
    $(".crystal-images").empty();
}

function totalReset() {
    randomTargetNumber();
    counter = 0;
    resetHTML();
    resetCrystals();
}

// Initialize
randomTargetNumber();
resetHTML();
resetCrystals();

// Click Functions
$(document).on("click", ".crystal", crystalClick);
function crystalClick() {
    counter += parseInt($(this).attr("value"));
    $("#totalScore").html(counter);
    if (counter == targetNumber) {
        alert("You win!");
        totalReset();
        wins++; 
    }
    else if (counter > targetNumber) {
        alert("you lose!");
        totalReset();
        losses++;
    };
};




















// //variables
// var computerNumber = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
//     73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
// var crystalNumber = [15, 10, 7, 5, 3, 1];
// var wins = 0;
// var losses = 0;
// var images = ["./assets/images/blueCrystal.png", "./assets/images/redCrystal.png", "./assets/images/whiteCrystal.png", "./assets/images/greenCrystal.png"];
// var randomNumber = $("#computerNumber");
// var userScore = $("totalScore");

// // random target number generation
// var randomComputerNumber = computerNumber[Math.floor(Math.random() * computerNumber.length)];
// console.log(randomComputerNumber);

// // random crystal number generation
// var randomCrystalNumber = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];

// //functions

// //assign random values to crystals
// function resetCrystals() {
//     for (var i = 0; i < images.length; i++) {
//         var crystal = $("<img>");
//         crystal.addClass("crystal");
//         crystal.attr("src", images[i]);
//         crystal.attr("value", randomCrystalNumber);
//         $(".crystal-images").append(crystal);
//     }
// }

// //reset game
// function resetHTML() {
//     $("#computerNumber").html(randomComputerNumber);
//     $(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
//     $(".wins").html(wins);
//     $(".losses").html(losses);
//     $(".crystal-images").empty();
// }

// resetHTML();
// resetCrystals();

// // Click Functions
// $(".crystal-images").on("click", function () {

// });
