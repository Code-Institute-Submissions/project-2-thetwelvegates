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

//Display Horoscope by Birthdate
function zodiac(day, month) {
    // returns the zodiac sign according to day and month ( https://coursesweb.net/ ) 
    var zodiac = ['', 'You are a Capricorn <img src="img/10_sign_capricon.png" width="50px">', 
    'You are an Aquarius <img src="img/11_sign_aquarius.png" width="50px">', 
    'You are a Pisces <img src="img/12_sign_pisces.png" width="50px">', 
    'You are an Aries <img src="img/01_sign_aries.png" width="50px">', 
    'You are a Taurus <img src="img/02_sign_taurus.png" width="50px">', 
    'You are a Gemini <img src="img/03_sign_gemini.png" width="50px">', 
    'You are a Cancer <img src="img/04_sign_cancer.png" width="50px">', 
    'You are a Leo <img src="img/05_sign_leo.png" width="50px">',
    'You are a Virgo <img src="img/06_sign_virgo.png" width="50px">',
    'You are a Libra <img src="img/07_sign_libra.png" width="50px">',
    'You are a Scorpio <img src="img/08_sign_scorpio.png" width="50px">', 
    'You are a Sagittarius <img src="img/09_sign_sagittarius.png" width="50px">', 
    'You are a Capricorn <img src="img/10_sign_capricon.png" width="50px">'];
    var last_day = ['', 19, 18, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21, 19];
    return (day > last_day[month]) ? zodiac[month * 1 + 1] : zodiac[month];
  }
  document.getElementById('test_z').onclick = function () {
    document.getElementById('s_zodiac').innerHTML = zodiac(document.getElementById('s_days').value, document.getElementById('s_m').value);
  }