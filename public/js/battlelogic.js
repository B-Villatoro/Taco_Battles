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
    for (let i = Math.floor(Math.random() * 2); complete != true; i++) {
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
            let modalBody = $('.modal-body');
            let iframe = $(
                '<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/l2JIl2RIdkUg4skCs" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/tacobell-taco-tacos-bell-l2JIl2RIdkUg4skCs">via GIPHY</a></p>'
            );
            modalBody.empty();
            modalBody.append(iframe);
            $('#myModal').modal('show');
            
            setTimeout(() => {
                $('#myModal').modal("hide")
                attack(userTaco, enemyTaco);
                
            }, 4500);
        }

    });
});

// attack function pseudocode:
// when attack is triggered, attack value of usertaco and subtracted from health value of enemytaco and vice versa. New heatlh values are updated in the database. Whichever taco health falls below 0 loses.
