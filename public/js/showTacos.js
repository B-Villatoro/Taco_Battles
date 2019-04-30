$(document).ready(function() {
    let selectArr = Array.from($('.list-group'));
    console.log(selectArr);

    // for now:
    // find tacos associated with the user selected

    // let dataid = document.querySelectorAll('select#user');
    // console.log(dataid);

    $('select#player-1').on('change', renderTacoList1);
    

    function renderTacoList1() {
        console.log("change");
        $('#tacos-1').empty();
        let player1Id = $('select#player-1')
            .find('option:selected')
            .attr('data-id');
        console.log(player1Id);

        $.get(`api/users/${player1Id}`, function(data) {
            if (data) {
                const tacosData = data[0].tacos;

                let i = 0;
                do {
                    let listOption = $('<option>');
                    listOption.attr('data-attack', tacosData[i].attack);
                    listOption.attr('data-health', tacosData[i].health);
                    listOption.html(tacosData[i].taco_name);
                    $('#tacos-1').append(listOption);
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
