$(document).ready(function() {
    function getIngredients() {
        $.get('/api/ingredients', renderIngredientList);
    }

    function renderIngredientList(data) {
        console.log(data);
        console.log(data[0]);

        var i = 0;
        createRow(data);
    }

    function createRow(ingredients) {
        var i = 0;
        do {
            var listOption = $('<option>');
            listOption.attr('value', ingredient[i].ingred_name);
            $(`#ing-${i}`).append(listOption);
            i++;
        } while (i < ingredients.length);
    }
    getIngredients();

    // Add the taco to the database:
});
