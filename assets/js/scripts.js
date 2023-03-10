// Calls the AccuWeather API (Nested Promise - First call to Location API to get location Key. Second Call to daily forecast API for weather information)
function getAccuWeatherAPI() {
  var searchCity = $("#userWeatherInput").val();
  var APIKey = "mobJh4usQlzPJNXy13N6BV9ShPTAiU0g";
  var requestURL = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=" + APIKey + "&q=" + searchCity;

   fetch(requestURL)
   .then(function(response) {
    return response.json();
   })
   .then(function(dataRequest) {
    console.log(dataRequest);
    console.log(dataRequest[0].Key); //Logs the city key we need to make other requests using Accuweathers other APIs

    var cityKey = dataRequest[0].Key; // 347629 is the value of data[0].Key but console says its not defined.

    fetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + cityKey + "?apikey=" + APIKey)
   .then(function(response) {
    return response.json();
   })

   .then(function(data5day) {
    console.log(data5day);
    console.log(data5day.DailyForecasts);
    console.log(data5day.Headline);



    // Appending the data to each daily card for the 5 day section

    // Day 1
    $("#day0").append(dayjs(data5day.DailyForecasts[0].Date).format(" dddd MMMM DD, YYYY "));
    $("#current-temp0").append(data5day.DailyForecasts[0].Temperature.Maximum.Value + "F");
    $("#temp-phrase0").append(data5day.DailyForecasts[0].Day.IconPhrase);


    // Day2
    $("#day1").append(dayjs(data5day.DailyForecasts[1].Date).format(" dddd MMMM DD, YYYY  "));
    $("#current-temp1").append(data5day.DailyForecasts[1].Temperature.Maximum.Value + "F");
    $("#temp-phrase1").append(data5day.DailyForecasts[1].Day.IconPhrase);

    //Day3
    $("#day2").append(dayjs(data5day.DailyForecasts[2].Date).format(" dddd MMMM DD, YYYY  "));
    $("#current-temp2").append(data5day.DailyForecasts[2].Temperature.Maximum.Value + "F");
    $("#temp-phrase2").append(data5day.DailyForecasts[2].Day.IconPhrase);

    //Day4
    $("#day3").append(dayjs(data5day.DailyForecasts[3].Date).format(" dddd MMMM DD, YYYY  "));
    $("#current-temp3").append(data5day.DailyForecasts[3].Temperature.Maximum.Value + "F");
    $("#temp-phrase3").append(data5day.DailyForecasts[3].Day.IconPhrase);

    //Day5
    $("#day4").append(dayjs(data5day.DailyForecasts[4].Date).format(" dddd MMMM DD, YYYY   "));
    $("#current-temp4").append(data5day.DailyForecasts[4].Temperature.Maximum.Value + "F");
    $("#temp-phrase4").append(data5day.DailyForecasts[4].Day.IconPhrase);


    });
  });
}

// Calls the adzuna job board API
function getJobsAPI() {
  var appID = "59959f13";
  var userjobinput = $("#userjobinput").val();
  var userJobCitySearch =$("#userJobCitySearch").val();
  var jobsAPIKey = "009140e57af618149df1a7e6ca66d05b";
  var jobsURL = "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=" + appID + "&app_key=" + jobsAPIKey + "&results_per_page=25&what=" + userjobinput + "&where=" + userJobCitySearch;

  fetch(jobsURL)
  .then(function(response) {
    return response.json();
   })

 .then(function(jobsData){

 console.log(jobsData);
 console.log(jobsData.results[0]);
 console.log(jobsData.results[0].location.display_name);


for (var i = 1; i <= 25; i++) {
  $("#results").append($("<tr><td>" + jobsData.results[i].title + "</td><td>" + jobsData.results[i].description + "</td><td>" + jobsData.results[i].location.display_name + "</td><td>$" + jobsData.results[i].salary_min + "-$" + jobsData.results[i].salary_max + "</td></tr>"));
}
});
}

//  Calls cola data USA API
 function getcolaAPI(){
 var userhousingsearch =$("#userhousingsearch").val()
 var colaURL = "https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest" + userhousingsearch;

  fetch(colaURL)
   .then(function(response){

   return response.json();
   })
   .then(function(coladata){




 for (var i = 1; i<=52; i++){
 $("#housingresults").append($("<tr><td>" + coladata.data[i].Population + "</td><td>" + coladata.data[i].State + "</td><td>" + coladata.data[i].Year + "</td></tr>" ));
 }

  });

 }

// Toggles Weather Container Visibility on nav link click
 function showWeather() {
  $("#navWeather").on("click", function() {
    $("#weatherContainer").toggleClass("is-hidden");
  });
 }

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

  showWeather();
  showJobs();
  showHousing();

  // Check for click events on the navbar burger icon
 $(".navbar-burger").click(function() {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
     $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });


 });


 // Weather Modal Close on click
$(".modal-close").on("click", function() {
  $("#weatherModal").removeClass("is-active");
});

// Jobs Modal Close on click
$(".modal-close").on("click", function() {
 $("#jobsModal").removeClass("is-active");
});

// Housing Modal Close on click
$(".modal-close").on("click", function() {
 $("#housingModal").removeClass("is-active");
});

// Weather Button Parsely.js validation function
$(function () {
  $('#userCitySearch').parsley().on('field:validated', function() {
    var ok = $('.parsley-error').length === 0;
    $("#weatherModal").toggleClass('is-active hidden', !ok);
  })
  $(document).on("submit", function(clickCity){
    clickCity.preventDefault();
    console.log(clickCity);

    $("#day0").empty();
    $("#day1").empty();
    $("#day2").empty();
    $("#day3").empty();
    $("#day4").empty();
    $("#current-temp0").empty();
    $("#current-temp1").empty();
    $("#current-temp2").empty();
    $("#current-temp3").empty();
    $("#current-temp4").empty();
    $("#temp-phrase0").empty();
    $("#temp-phrase1").empty();
    $("#temp-phrase2").empty();
    $("#temp-phrase3").empty();
    $("#temp-phrase4").empty();

    getAccuWeatherAPI();

  });
});

// Jobs Button Parsely.js validation function
$(function () {
  $('#jobsSearch').parsley().on('field:validated', function() {
    var ok = $('.parsley-error').length === 0;
    $("#jobsModal").toggleClass('is-active hidden', !ok);
  })
  .on('form:submit', function() {
    $("#results").empty();
    getJobsAPI(); // Get JobsAPI function goes here.
  });
});

// Housing Button Parsely.js validation function
$(function () {
  $('#housingSearch').parsley().on('field:validated', function() {
    var ok = $('.parsley-error').length === 0;
    $("#housingModal").toggleClass('is-active hidden', !ok);
  })
  .on('form:submit', function() {
    $("#housingresults").empty();
    getcolaAPI();

  });
});

// Intro.Js tour start
introJs().start();
