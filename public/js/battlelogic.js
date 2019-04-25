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

//example ingredient data
let ingredients = {
    Chicken: {
        attack: 20,
        health: 20,
    },
    Lettuce: {
        attack: 10,
        health: 40,
    },
    Tomatos: {
        attack: 10,
        health: 40,
    }
}
// example taco object
let TacoEx = {
    name: "Tacquito",
    ingredients: [ingredients.Chicken, ingredients.Lettuce, ingredients.Tomatos],
    attack: ingredients.Chicken.attack + ingredients.Lettuce.attack + ingredients.Tomatos.attack,
    health: ingredients.Chicken.health + ingredients.Lettuce.health + ingredients.Tomatos.health,
    wins: 0,
    losses: 0,
    UserId: 0001,
}   

//other taco
let TacoEn = {

    name: "Tacoooooo",
    attack: ingredients.Chicken.attack + ingredients.Chicken.attack + ingredients.Tomatos.attack,
    health: ingredients.Chicken.health + ingredients.Chicken.health + ingredients.Tomatos.health,
    wins: 0,
    losses: 0,
    UserId: 0001,
}   


//attack function
function attack(userTaco, enemyTaco){

    enemyTaco.health = enemyTaco.attack - userTaco.attack;
    console.log(enemyTaco.health);
    if(enemyTaco.health <= 0){
        userTaco.wins++;
        enemyTaco.losses++;
        console.log(userTaco.name +" wins");
    }
    else if(userTaco.health <= 0){
        userTaco.losses++;
        enemyTaco.losses++;
        console.log(userTaco.name+ " loses");
    }
}


// user promp options 
//user clicks attack
attack(TacoEx,TacoEn)
//enemy turn
attack(TacoEn,TacoEx)
