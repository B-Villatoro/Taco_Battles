
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
