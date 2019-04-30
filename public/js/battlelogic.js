//Simple Version

// function attack(UserTaco, EnemyTaco){
//     if(UserTaco.attack > EnemyTaco.attack){
//         UserTaco.wins++;
//         EnemyTaco.losses++;
//     }
//     else{
//         EnemyTaco.wins++;
//         UserTaco.losses++;
//     }
// }

// //example ingredient data
// let ingredients = {
//     Chicken: {
//         attack: 20,
//         health: 20,
//     },
//     Lettuce: {
//         attack: 10,
//         health: 40,
//     },
//     Tomatos: {
//         attack: 10,
//         health: 40,
//     }
// }
// // example taco object
// let TacoEx = {
//     name: "Tacquito",
//     ingredients: [ingredients.Chicken, ingredients.Lettuce, ingredients.Tomatos],
//     attack: ingredients.Chicken.attack + ingredients.Lettuce.attack + ingredients.Tomatos.attack,
//     health: ingredients.Chicken.health + ingredients.Lettuce.health + ingredients.Tomatos.health,
//     wins: 0,
//     losses: 0,
//     UserId: 0001,
// }

// //other taco
// let TacoEn = {

//     name: "Tacoooooo",
//     attack: ingredients.Chicken.attack + ingredients.Chicken.attack + ingredients.Tomatos.attack,
//     health: ingredients.Chicken.health + ingredients.Chicken.health + ingredients.Tomatos.health,
//     wins: 0,
//     losses: 0,
//     UserId: 0001,
// }

//attack function
function attack(taco1, taco2) {
    taco1.health -= taco2.attack;
    taco2.health -= taco1.attack;

    // console.log(userTaco);
    // console.log(enemyTaco);

    // while (enemyTaco.health > 0 && userTaco.health > 0) {
    //     attack(userTaco, enemyTaco);
    // }
    // if (enemyTaco.health <= 0) {
    //     // userTaco.wins++;
    //     // enemyTaco.losses++;
    //     console.log('user taco wins');
    //     $('#versus').text(`${userTaco.name} wins`);
    // } else if (userTaco.health <= 0) {
    //     // userTaco.losses++;
    //     // enemyTaco.wins++;
    //     $('#versus').text(`${enemyTaco.name} wins`);
    // }
}
$(document).ready(function() {
    $(document).on('click', '.attackTaco', function() {
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

        if (userTaco.health > 0) {
            attack(userTaco, enemyTaco);
        }

        attack(userTaco, enemyTaco);

        // if (userTaco.health > 0) {
        //     attack(userTaco, enemyTaco);
        //     // $(`.${enemyTaco.name}-health`).text(`${enemyTaco.health}`);
        // }
        // if (enemyTaco.health > 0) {
        //     attack(enemyTaco, userTaco);
        //     // $(`.${userTaco.name}-health`).text(`${userTaco.health}`);
        // }
    });
});

// attack function pseudocode:
// when attack is triggered, attack value of usertaco and subtracted from health value of enemytaco and vice versa. New heatlh values are updated in the database. Whichever taco health falls below 0 loses.
