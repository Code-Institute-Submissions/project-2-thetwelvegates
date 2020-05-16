$(document).ready(function () {

    $("#myModal").on('show.bs.modal', function (e) {
        var button = $(e.relatedTarget);
        var sign = button.attr('data-sign');
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": 'https://aztro.sameerkumar.website?sign=' + sign + '&day=today',
            "method": "POST",
        }

    
        //make horoscope call
        $.ajax(settings)
            .done(function (response) {

                //do whatever I want here to update HTML
                console.log(`Current Date:${response.current_date}`);
                console.log(`Horoscope: ${response.description}`);

            

                let currentDate = "Horoscope Reading for " + response.current_date;
                $(".modal-title").html(currentDate);

                let horoDescription = response.description;
                $(".modal-body").html(horoDescription);          
            });
    });
});
