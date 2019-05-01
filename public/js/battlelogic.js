//Simple Version

// //attack function
// function attack(taco1, taco2) {
//     taco1.health -= taco2.attack;
//     taco2.health -= taco1.attack;

//     console.log(taco1);
//     console.log(taco2);

//     while (taco1.health > 0 && taco2.health > 0) {
//         attack(taco1, taco2);
//     }
// }

function attack(taco1, taco2) {
    let complete = false
    for (let i = 0; complete != true; i++) {
        switch (i % 2) {
            case 0:
                taco2.health -= taco1.attack;
                if (taco2.health <= 0) {
                    $("h1.displayHeader").text(`${taco1.tacoName} Wins!`)
                    complete = true;
                }

                break;
            case 1:
                taco1.health -= taco2.attack;
                if (taco1.health <= 0) {
                    $("h1.displayHeader").text(`${taco2.tacoName} Wins!`)
                    complete = true;
                }

                break;
        }
    }
}

$(document).ready(function () {
    $(document).on('click', '.attackTaco', function () {
        let userTaco = {
            tacoName: $('select#tacos-1')
                .find('option:selected')
                .html(),
            attack: $('select#tacos-1')
                .find('option:selected')
                .data('attack'),
            health: $('select#tacos-1')
                .find('option:selected')
                .data('health')
        };

        console.log(userTaco);

        let enemyTaco = {
            tacoName: $('select#tacos-2')
                .find('option:selected')
                .html(),
            attack: $('select#tacos-2')
                .find('option:selected')
                .data('attack'),
            health: $('select#tacos-2')
                .find('option:selected')
                .data('health')
        };

        console.log(enemyTaco);
        if (userTaco.attack != null && enemyTaco.attack != null) {
            attack(userTaco, enemyTaco);
        }

    });
});

// attack function pseudocode:
// when attack is triggered, attack value of usertaco and subtracted from health value of enemytaco and vice versa. New heatlh values are updated in the database. Whichever taco health falls below 0 loses.
