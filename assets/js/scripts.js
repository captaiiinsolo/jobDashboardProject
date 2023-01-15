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

    var cityKey = data[0].Key; // 347629 is the value of data[0].Key but console says its not defined.

    fetch("http://dataservice.accuweather.com/forecasts/v1/daily/1day/" + cityKey + "?apikey=" + APIKey)
   .then(function(response) {
    return response.json();
   })
   .then(function(weatherData) {
    console.log(weatherData);
   });

   });


}

//getAccuWeatherAPI();








// this function will be populating the job results query.
function populateresults(result){
  console.log(result[0])


for (var i = 1; i <= 25;){
  $("#searchCity"+i+" > .location").text(result(i).date.toString().substring(0,16))

}
}


 


// Calls the adzuna jobboard API


function getJobsAPI() {
  var appID = "a1161bda";
  var jobsAPIKey = "3cbd548d24f2c7935ae4266b18c9a165";
  var jobsURL = "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=" + appID + "&app_key=" + jobsAPIKey + "&results_per_page=25&what=software%20engineer";

  fetch(jobsURL)
      .then(function(response) {
      return response.json();
      })
      .then(function(jobsData) {
      console.log(jobsData);
      });

}
getJobsAPI();

//listens for jobs search click
document.querySelector("#jobbtn").addEventListener("click",function(event){
  event.preventDefault();
  var search=$("#searchCity").val();
 
 });
 




// Calls cola data USA API
function colaAPI(){
  var colaURL = "https://datausa.io/api/data?drilldowns=Place&measures=Population&year=latest";

  fetch(colaURL)
  .then(function(response){
    return response.json();
  })
  .then(function(colaData){
    console.log(colaData);
  })

}
document.querySelector("#housingbtn").addEventListener("click",function(event){
  event.preventDefault()
  alert(event)

})

//colaAPI();



// Toggles Jobs Container Visibility on nav link click
function showJobs() {
  $("#navJobs").on("click", function(){
    $("#jobsContainer").toggleClass("is-hidden");
  });
}




// Toggles Housing Container Visibilty on nav link click
function showHousing() {
  $("#navHousing").on("click", function(){
    $("#housingContainer").toggleClass("is-hidden");
  });
}

// Runs the following functions on document load
$(document).ready(function() {

  showJobs();
  showHousing();

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });

});


