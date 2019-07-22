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