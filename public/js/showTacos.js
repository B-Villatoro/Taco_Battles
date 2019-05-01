$(document).ready(function() {
    let selectArr = Array.from($('.list-group'));
    // console.log(selectArr);

    // for now:
    // find tacos associated with the user selected

    $(`select.fighters`).on('change', getUserId);

    function getUserId() {
        switch (this.id) {
            case 'player-1':
                let player1 = '1';
                $(`#tacos-${player1}`).empty();
                renderTacoList(player1);
                break;
            case 'player-2':
                let player2 = '2';
                $(`#tacos-${player2}`).empty();
                renderTacoList(player2);
                break;
            default:
                return;
        }
    }

    function renderTacoList() {
        let player = arguments[0];
        // console.log(player);

        let playerId = $(`select#player-${player}`)
            .find('option:selected')
            .attr('data-id');

        $.get(`api/users/${playerId}`, function(data) {
            if (data) {
                let placeholder = `<option selected="selected" disabled hidden>Select Taco</option>`;
                $(`#tacos-${player}`).append(placeholder);
                const tacosData = data[0].tacos;

                let i = 0;
                do {
                    let listOption = $('<option>');
                    listOption.attr('id', tacosData[i].id);
                    listOption.attr('value', tacosData[i].taco_name);
                    listOption.attr('data-attack', tacosData[i].attack);
                    listOption.attr('data-health', tacosData[i].health);
                    listOption.html(tacosData[i].taco_name);
                    $(`#tacos-${player}`).append(listOption);
                    i++;
                } while (i < data[0].tacos.length);
            }
        });
    }

    $('#battle').on('click', function(event) {
        event.preventDefault();
        // first find the id of the user

        let player2Id = $('select#player-2')
            .find('option:selected')
            .attr('data-id');
        console.log(player2Id);

        // now find tacos associated with the users
        // $.get(`api/users/${player1Id}`, function(data) {
        //     if (data) {
        //         console.log(data);
        //     }
        // });
    });
});
