$(document).ready(function () {

    //Horoscope Personality
    $('.group3').hide();
    $('#choose2').show();
    $(".form-control-prediction3").on('change', function () {
        console.log("changing info");
        var selectedVal = $(this).find('option:selected').attr('value');
        console.log("user selected horoscope....: " + selectedVal);
        

        $(".form-control-day3").on('change', function () {
            console.log("changing info");
            var selectedDay = $(this).find('option:selected').attr('value');
            console.log("user selected day....: " + selectedDay);
            $('.group3').hide();
            $('#'+$(this).val()).show();

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": 'https://raashiphal.herokuapp.com/?type=' + selectedDay + '&&sunsign=' + selectedVal + '',
                "method": "GET",
            }

            $.ajax(settings).done(function (response) {
                console.log(`Description:${response.horoscope}`);

                let horoMthDescription = response.horoscope;
                $("#horo-mth-description").html(horoMthDescription);
            });
        });

    });
});