$(document).ready(function () {

    $(document).on('change', 'select.roster', function (event) {
       let tacoName = $(this).find("option:selected").attr("value");
       let tacoId = (this.id)
        $(`#${tacoId}-char`).empty();
        $(`#${tacoId}-char`).append(
            `<h3>${tacoName}</h3>
            <img src="https://www.tacobell.com/images/22101_crunchy_taco_supreme_269x269.jpg" height="200" width="200">`
        )

    })

})