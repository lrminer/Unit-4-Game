$(document).ready(function () {
    //global variables
    // let HP = 100;
    // let AP = 20;
    // let CAP = 10;
    // let speed = 0;
    // let youChoseHero = false;
    // let youChoseEnemy = false;
    // let switch3 = false;
    // let switch4 = false;

    // let dmgGive = 0;
    // let dmgTake = 0;
    // let player = {};




    let targetNumber = 1000;
    let buttonValue = [0, 0, 0, 0];
    let totalScore = 0;
    let wins = 0;
    let losses = 0;

    let reset = true;
    console.log("reset = " + reset);

    let initializeTarget = function () {
        targetNumber = (Math.floor(Math.random() * 101) + 19);
        $("#displayTargetNumber").text(targetNumber);
    };

    let initializeButtons = function () {
        for (let i = 0; i < buttonValue.length; i++) {
            buttonValue[i] = (Math.floor(Math.random() * 12) + 1);
            console.log(buttonValue);
        }
    };

    let initializeBtnValueOne = function () {
        let pickOne = Math.floor(Math.random() * buttonValue.length);
        buttonValue[pickOne] = 1;
    };

    let resetFunction = function () {
        totalScore = 0;
        $("#displayScore").text(totalScore);
        if (reset) {
            initializeTarget();
            initializeButtons();
            if (buttonValue.includes(1)) {
                console.log("You are already including the number 1");
            } else {
                initializeBtnValueOne();
            }
            reset = false;
            alert("The game has been reset");
        }
    };

    resetFunction();





    console.log(buttonValue);





    $("#gem-buttons").on("click", "button", function () {
        $("#status").text("");
        value = $(this).attr("data-value");
        console.log(value);
        console.log("reset = " + reset);
        totalScore += buttonValue[value];
        $("#displayScore").text(totalScore);
        if (totalScore === targetNumber) {
            wins++;
            $("#status").text("YOU WIN!");
            $("#displayWins").text(wins);
            reset = true;
            resetFunction();
            


        }
        if (totalScore > targetNumber) {
            losses++;
            $("#status").text("YOU LOSE");
            $("#displayLosses").text(losses);
            reset = true;
            resetFunction();
            

        }
    });










    // $(".char").on("click", function () {
    //     var charVal = $(this).attr('value');
    //     console.log(charVal);
    //     console.log(characters[charVal].name);

    //     var charCard = $(this).html();
    //     console.log(charCard);




    //     //displays object details but does not 
    //     $("#your-character").append(characters[charVal].name);
    //     $("#your-character").append(characters[charVal].healthPoints);
    //     $("#your-character").append(characters[charVal].attackPower);
    //     $("#your-character").append(characters[charVal].counterAttack);

    // });


});