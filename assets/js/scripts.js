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


// Calls the adzuna jobboard API
//listens for jobs search click
//var userInput= document.getElementById('userInput');
//var userCitySearch = document.getElementById('userCitySearch');


document.querySelector("#jobbtn").addEventListener("click",function(event){
event.preventDefault();

console.log(document.getElementById('userCitySearch').value + document.getElementById('userInput').value)
 });



function getJobsAPI() {
  var appID = "a1161bda";
  var jobsAPIKey = "3cbd548d24f2c7935ae4266b18c9a165";
  var jobsURL = "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=" + appID + "&app_key=" + jobsAPIKey + "&results_per_page=25&what=software%20engineer";

fetch(jobsURL)
.then(function(response) {
if(!response.ok){
throw response.json();
}
return response.json();
 })
 .then(function(jobsData){

 console.log(jobsData);
 console.log(jobsData.results[0]);
 console.log(jobsData.results[0].location.display_name);
 



for (var i = 1; i <= 25; i++) {
  $("#results").append($("<tr><td>" + jobsData.results[i].title + "</td><td>"+ jobsData.results[i].location.display_name + "</td><td>$" + jobsData.results[i].salary_min + "-$" + jobsData.results[i].salary_max + "</td></tr>")); 
}
});
      
};
//getJobsAPI();


 

document.querySelector("#housingbtn").addEventListener("click",function(event){
  event.preventDefault()
  alert(event)

})

// Calls cola data USA API
function colaAPI(){
 
  var colaURL = "https://datausa.io/api/data?drilldowns=Place&measures=Population&year=latest"

  fetch(colaURL)
  .then(function(response){
    return response.json();
  })
  .then(function(coladata){
    console.log(coladata);
    console.log(coladata.results[0]);
    console.log(coladata.results[0].Place);
   
  });
  
}
colaAPI();



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


