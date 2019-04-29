$(document).ready(function() {
    // var option
    function getIngredients() {
        $.get('/api/ingredients', renderIngredientList);
    }

    function renderIngredientList(data) {
        console.log(data);

        for (let i = 1; i < 4; i++) {
            for (let j = 0; j < data.length; j++) {
                let listOption = $('<option>');
                listOption.attr('value', data[j].ingred_name);
                listOption.attr(`data-attack`, data[j].attack);
                listOption.attr(`data-health`, data[j].health);
                listOption.html(data[j].ingred_name);
                $(`#ing-${i}`).append(listOption);
                $(`#ing-${i}`).prop('selectedIndex', -1);
            }
        }
    }

    getIngredients();

    function getUsersData() {
        $.get('/api/users', getUsers);
    }

    function getUsers(data) {
        console.log(data.length);

        let i = 0;
        do {
            let listOption = $('<option>');
            listOption.attr('userId', data[i].id);
            listOption.html(data[i].name_user);
            $(`#user`).append(listOption);
            i++;
        } while (i < data.length);
    }

    getUsersData();

    // post/add taco

    $('.create-form').on('submit', postData);

    function postData(event) {
        event.preventDefault();
        let totalAttack = 0;
        let totalHealth = 0;
        let selectorsArray = Array.from($('.form-control'));

        console.log(selectorsArray);

        let i = 1;
        do {
            totalAttack += $(`select#ing-${i}`)
                .find('option:selected')
                .data('attack');
            totalHealth += $(`select#ing-${i}`)
                .find('option:selected')
                .data('health');
            i++;
        } while (i <= selectorsArray.length);

        var usersss = $('select#user')
            .find('option:selected')
            .attr('userid');
        var username = $('select#user')
            .find('option:selected')
            .html();

        console.log(usersss);
        let tacoData = {
            taco_name: $('#name').val(),
            attack: totalAttack,
            health: totalHealth,
            userId: usersss,
            name_user: username
        };
        console.log(tacoData);

        $.post('/api/tacos', tacoData, function() {
            window.location.href = '/';
        });
    }
});
