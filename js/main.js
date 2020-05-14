$(document).ready(function () {

    //Toggle Navbar open when collapse
    $(".navbar-toggler").click(function(){
      $(".collapse").collapse('toggle');
    });
    
    //Horoscope Personality
    $('.group2').hide();
    $('#select2').show();
    $(".form-control-prediction2").on('change', function () {
                $('.group2').hide();
                $('#'+$(this).val()).show();
        })
    
});