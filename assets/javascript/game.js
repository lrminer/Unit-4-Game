$(document).ready(function () {
    //global variables
    let HP = 100;
    let AP = 20;
    let CAP = 10;
    let speed = 0;
    let youChoseHero = false;
    let youChoseEnemy = false;
    let switch3 = false;
    let switch4 = false;

    let dmgGive = 0;
    let dmgTake = 0;
    let player = {};


    let characters = [{
            name: "Luke Skywalker",
            healthPoints: 100,
            attackPower: 20,
            counterAttack: 10
        },

        {
            name: "Han Solo",
            healthPoints: 100,
            attackPower: 20,
            counterAttack: 10
        },

        {
            name: "Aayla Secura",
            healthPoints: 100,
            attackPower: 20,
            counterAttack: 10
        },

        {
            name: "Mace Windu",
            healthPoints: 100,
            attackPower: 20,
            counterAttack: 10
        },
    ];

    let reset = true;
    console.log("reset = " + reset);
    let buttonValue = [0, 0, 0, 0];
    let initializeButtons = function() {
        for (let i = 0; i < buttonValue.length; i++) {
            buttonValue[i] = (Math.floor(Math.random() * 12) + 1) ;
            console.log(buttonValue);
        }
    };
    let initializeBtnValueOne = function () {
        let pickOne = Math.floor(Math.random() * buttonValue.length);
        buttonValue[pickOne] = 1;
    }

    initializeButtons();

    if (buttonValue.includes(1)) {
        alert ("You are already including the number 1");
    } else {
        initializeBtnValueOne();
    }

    
    
    console.log(buttonValue);





    $("#gem-buttons").on("click", "button", function() {
        reset = false;
        value = $(this).
        console.log("reset = " + reset);
        
    });










    $(".char").on("click", function () {
        var charVal = $(this).attr('value');
        console.log(charVal);
        console.log(characters[charVal].name);

        var charCard = $(this).html();
        console.log(charCard);




        //displays object details but does not 
        $("#your-character").append(characters[charVal].name);
        $("#your-character").append(characters[charVal].healthPoints);
        $("#your-character").append(characters[charVal].attackPower);
        $("#your-character").append(characters[charVal].counterAttack);

    });


});