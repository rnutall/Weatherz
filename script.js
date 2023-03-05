var city = "";

function searchDes(event){
    //event.preventDefault();
    city = $("#city").val();
    console.log(city);

    for(i = 0; i < localStorage.length; i++) {
        
    }

    $.ajax({
        url: "https://home.openweathermap.org/api_keys" 
        data: {
            units: "imperial",
            apiKey: a0f632a8daa985723cec2b7f8cd3d812

        },
        dataType: "json",
        success: function(resposeApi) {
            var holdThis = JSON.parse
        }
    })
}
// apiKey: a0f632a8daa985723cec2b7f8cd3d812
