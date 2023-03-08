/* $.ajax({
    url: 'http://api.weatherstack.com/current',
    data: {
      access_key: '',
      query: '78249',
      units: 'f'
    },
    dataType: 'json',
    success: function(apiResponse) {
        console.log(apiResponse);
        var holdThis = JSON.stringify(apiResponse);
        localStorage.setItem('holdThis', holdThis)
      console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
    }
  }); */

const knownCities = [];

/* If statement
Form posting from the page with the city that will be assigned to the variable */

function searchCity(event){
    event.preventDefault();
    var city = $('#city').val();
    console.log(city);

    // for(i=0; i < localStorage.length; i++){
        
    // }
    

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/forecast',
        data: {
            //lat:44.34,
            //lon:10.99,
            q: city,
            //zip: 78249,
            units: 'imperial',
            appid: 'a0f632a8daa985723cec2b7f8cd3d812',
        },
        dataType: 'json',
        success: function(apiResponse) {
         
          $('#icon0').text(apiResponse.list[5])
          $('#date0').text(apiResponse.list[5].dt_txt)
          $('#temp0').text(apiResponse.list[5].main.temp_max)
          $('#humidity0').text(apiResponse.list[5].main.humidity)
          $('#windspeed0').text(apiResponse.list[5].wind.speed)

           // console.log(apiResponse.list[5])
          $('#icon1').text(apiResponse.list[5].weather)
          $('#date1').text(apiResponse.list[5].dt_txt)
          $('#temp1').text(apiResponse.list[5].main.temp_max)
          $('#humidity1').text(apiResponse.list[5].main.humidity)
          $('#windspeed1').text(apiResponse.list[5].wind.speed)
          
          console.log(apiResponse.list)
          $('#icon2').text(apiResponse.list[13])
          $('#date2').text(apiResponse.list[13].dt_txt)
          $('#temp2').text(apiResponse.list[13].main.temp_max)
          $('#humidity2').text(apiResponse.list[13].main.humidity)
          $('#windspeed2').text(apiResponse.list[13].wind.speed)

          $('#icon3').text(apiResponse.list[21])
          $('#date3').text(apiResponse.list[21].dt_txt)
          $('#temp3').text(apiResponse.list[21].main.temp_max)
          $('#humidity3').text(apiResponse.list[21].main.humidity)
          $('#windspeed3').text(apiResponse.list[21].wind.speed)

          $('#icon4').text(apiResponse.list[29])
          $('#date4').text(apiResponse.list[29].dt_txt)
          $('#temp4').text(apiResponse.list[29].main.temp_max)
          $('#humidity4').text(apiResponse.list[29].main.humidity)
          $('#windspeed4').text(apiResponse.list[29].wind.speed)

          $('#icon5').text(apiResponse.list[37])
          $('#date5').text(apiResponse.list[37].dt_txt)
          $('#temp5').text(apiResponse.list[37].main.temp_max)
          $('#humidity5').text(apiResponse.list[37].main.humidity)
          $('#windspeed5').text(apiResponse.list[37].wind.speed)
        }
    })

   
    
}

$('#search').on('submit', searchCity)






