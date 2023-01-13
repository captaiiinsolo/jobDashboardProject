// Calls the AccuWeather API (Nested Promise - First call to Location API to get location Key. Second Call to daily forecast API for weather information)
function getAccuWeatherAPI() {
    var searchCity = "san diego";
    var APIKey = "G7TFrvoMDfSH4fn8av5CZDJviR257GdG";
    var requestURL = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=" + APIKey + "&q=" + searchCity;

   fetch(requestURL)
   .then(function(response) {
    return response.json();
   })
   .then(function(data) {
    console.log(data);
    console.log(data[0].Key); //Logs the city key we need to make other requests using Accuweathers other APIs
    var cityKey = data[0].Key; 
    fetch("http://dataservice.accuweather.com/forecasts/v1/daily/1day/" + cityKey + "?apikey=" + APIKey)
   .then(function(response) {
    return response.json();
   })
   .then(function(data) {
    console.log(data);
   });

   }); 

   
}

getAccuWeatherAPI();




// Calls the adzuna job board API
function getJobsAPI() {
  var appID = "a1161bda";
  var jobsAPIKey = "3cbd548d24f2c7935ae4266b18c9a165";
  var jobsURL = "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=" + appID + "&app_key=" + jobsAPIKey + "&results_per_page=25&what=software%20engineer";

  fetch(jobsURL)
      .then(function(response) {
      return response.json();
      })
      .then(function(data) {
      console.log(data);
      });
}

getJobsAPI();


                                                                            
