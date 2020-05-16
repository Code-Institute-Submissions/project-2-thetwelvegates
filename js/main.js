$(document).ready(function () {
    //Horoscope Personality - Compatibility
    $('.click').on('click', function(){
	    var value = $(this).attr("rel");
	    value++;
	    $('#select').find('option:nth-child(' + value + ')').prop('selected',true).trigger('change');
	    return false;
  });
  
  $('#clicknav').on('click', function(){
    var value = $(this).attr("rel");
    value++;
    $('#select').find('option:nth-child(' + value + ')').prop('selected',true).trigger('change');
    return false;
});
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
    $('.group').hide();
    $('#choose').show(); 

    

    //Horoscope Pridictions - Today, Tomorrow, Yesterday
    $(".form-control-prediction").on('change', function () {
      console.log("changing info");
      var selectedVal = $(this).find('option:selected').attr('value');
      console.log("user selected horoscope....: " + selectedVal);
        $('.group').hide();
        $('#'+$(this).val()).show();
  
    $(".form-control-day").on('change', function () {
      console.log("changing info");
      var selectedDay = $(this).find('option:selected').attr('value');
      console.log("user selected day....: " + selectedDay);
  
      var settings = {
        "async": true,
        "crossDomain": true,
        "url":'https://aztro.sameerkumar.website?sign='+selectedVal+'&day='+selectedDay+'',
        //"url": `https://aztro.sameerkumar.website/?sign='+${selectedVal}+'&day='+${day}+`,
        "method": "POST",
      }
      //make horoscope call
      $.ajax(settings)
        .done(function (response) {
  
          //do whatever I want here to update HTML
          console.log(`Current Date:${response.current_date}`);
          console.log(`Date Range:${response.date_range}`);
          console.log(`Horoscope: ${response.description}`);
          console.log(`Horoscope: ${response.compatibility}`);
          console.log(`Horoscope: ${response.color}`);
          console.log(`Horoscope: ${response.mood}`);
          console.log(`Horoscope: ${response.lucky_number}`);
          console.log(`Horoscope: ${response.lucky_time}`);
  
      let currentDate = "Horoscope Reading for " + response.current_date;
      $("#current-date").html(currentDate);
  
      let horoDescription = response.description;
      $("#horo-description").html(horoDescription);
  
      let horoDateRange = "Horoscope Date Range: " + response.date_range;
      $("#horo-date-range").html(horoDateRange);
  
      let horoCompatibility = "Compatible Horoscope: " + response.compatibility;
      $("#horo-compatibility").html(horoCompatibility);
  
      let horoColor = "Color: " + response.color;
      $("#horo-color").html(horoColor);
  
      let horoMood = "Mood: " + response.mood;
      $("#horo-mood").html(horoMood);
  
      let horoLuckyNum = "Lucky Number: " + response.lucky_number;
      $("#horo-lucky-num").html(horoLuckyNum);
  
      let horoLuckyTime = "Lucky Time: " + response.lucky_time;
      $("#horo-lucky-time").html(horoLuckyTime);
        });
      });
    });

  

// Clock Display
window.onload = initClock;
 
function initClock() {
  var now = new Date();
  var hr  = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  if (min < 10) min = "0" + min;  // insert a leading zero
  if (sec < 10) sec = "0" + sec;
  document.getElementById('clockDisplay').innerHTML
        = "Current Time is " + hr + ":" + min + ":" + sec;
  setTimeout('initClock()', 500);
}
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