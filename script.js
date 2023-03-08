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
         
    
            console.log(apiResponse.list[5])
            $('#icon1').text(apiResponse.list[5].weather.object)
          $('#date1').text(apiResponse.list[5].dt_txt)
          $('#temp1').text(apiResponse.list[5].main.temp_max)
          $('#humidity1').text(apiResponse.list[5].main.humidity)
          $('#windspeed1').text(apiResponse.list[5].wind.speed)
        }
    })

   
    
}

$('#search').on('submit', searchCity)






