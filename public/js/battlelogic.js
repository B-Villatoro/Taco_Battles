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
function attack(userTaco, enemyTaco) {
    enemyTaco.health = enemyTaco.health - userTaco.attack;
    if (enemyTaco.health <= 0) {
        // userTaco.wins++;
        // enemyTaco.losses++;
        $("#versus").text(`${userTaco.name} wins`);
    }
    else if (userTaco.health <= 0) {
        // userTaco.losses++;
        // enemyTaco.wins++;
        $("#versus").text(`${enemyTaco.name} wins`);
    }
}
$(document).ready(function () {
    let myTaco = {
        name: $(".myTaco").attr("name"),
        attack: $(".myTaco").data("attack"),
        health: $(".myTaco").data("health")
    }
    let enemyTaco = {
        name: $(".enemyTaco").attr("name"),
        attack: $(".enemyTaco").data("attack"),
        health: $(".enemyTaco").data("health")
    }
    $(document).on("click",".attackTaco", function () {
        if (myTaco.health > 0) {
            attack(myTaco, enemyTaco);
            $(`.${enemyTaco.name}-health`).text(`${enemyTaco.health}`)
            if (enemyTaco.health > 0) {
                attack(enemyTaco, myTaco);
                $(`.${myTaco.name}-health`).text(`${myTaco.health}`)
            }
        }
    })
})
// user promp options
// //user clicks attack
// attack(TacoEx,TacoEn)
// //enemy turn
// attack(TacoEn,TacoEx)
