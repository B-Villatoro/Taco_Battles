$(document).ready(function () {

    function getUsersData(num) {
        $.get('/api/users', function(data){
            getUsers(data,num)
        });
    }

    function getUsers(data,num) {
        let i = 0;
        do {
            let listOption = $('<option>');
            listOption.attr('userId', data[i].id);
            listOption.html(data[i].name_user);
            $(`#player-`+num).append(listOption);
            i++;
        } while (i < data.length);
    }

    getUsersData(1)
    getUsersData(2)
})

