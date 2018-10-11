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