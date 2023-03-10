# FullSpectrum Job Dashboard

# Table of Contents
- Description
- Installation Instructions
- GitHub Account
- Contacts
- Images
- Code Snippets
- Resources
- Collaborators
- Learning Points


# Description
FullSpectrum is a website that was created to optimize your inquiries about your job search and housing located in the city that you are interested in. The website will provide the maximum/minimum salary, along with the job listing link. To make an easier decision to be made FullSpectrum housing section provides information about household income, median age range, median property value, and population. The weather section gives a brief insight into the five-day forecasts so you can picture what your future week would look like. FullSpecturm is your one-stop for weather, jobs, and city census data


# Installation Instructions
### Site Tour
![Site Tour](./assets/gifs/introJS_Tour.gif)

# Github Accounts
- Deployed Link - [https://captaiiinsolo.github.io/jobDashboardProject/]

- Ashley Sese - https://github.com/ashrean
- Edwin Hernandez - https://github.com/EdwinHdz04
- Solomon Santos - https://github.com/captaiiinsolo

# Contacts
- Linkedin
    - Ashley [https://www.linkedin.com/in/ashleyrean/]
    - Edwin [https://www.linkedin.com/in/edwin-hernandez-0294aa13/]
    - Solomon  [https://www.linkedin.com/in/solomon-santos/]

# Images

### Weather Section
 Weather Visibility
![Weather Visibility](./assets/gifs/weather_Visibility.gif)

Weather Functionality
![Weather Functionaliy](./assets/gifs/weather_Functionality.gif)


### Jobs Section
Jobs Visibilty
![Jobs Visibilty](./assets/gifs/jobs_Visibility.gif)

Jobs Functionality
![Jobs Functionality](./assets/gifs/jobs_Functionality.gif)


### Census Section
Census Visibilty
![Jobs Visibilty](./assets/gifs/Census_Visibility.gif)

Census Functionality
![Jobs Functionality](./assets/gifs/census_Functionality.gif)


# Code Snippets
- Weather
    This weather section of the code displays the day, date the current temp 
  ```  $("#day0").append(dayjs(data5day.DailyForecasts[0].Date).format(" dddd MMMM DD, YYYY "));
   ``` $("#current-temp0").append(data5day.DailyForecasts[0].Temperature.Maximum.Value);
   ``` $("#temp-phrase0").append(data5day.DailyForecasts[0].Day.IconPhrase);

- Jobs
    This Job section of the code appends the chosen data to the webpage.
 ```$("#results").append($("<tr><td>" + jobsData.results[i].title + "</td><td>" + jobsData.results
 ```[i].description + "</td><td>" + jobsData.results[i].location.display_name + "</td><td>$" + ```jobsData.results[i].salary_min + "-$" + jobsData.results[i].salary_max + "</td></tr>"));

-Census Data
    This Census Data of the code appends the chosen data to the webpage.
```$("#housingresults").append($("<tr><td>" + coladata.data[i].Population + "</td><td>" + coladata.```data[i].State + "</td><td>" + coladata.data[i].Year + "</td></tr>" ));


# Resources
- API Documents
    - Accu Weather [https://developer.accuweather.com/accuweather-forecast-api/apis]
    - Adzuna [https://developer.adzuna.com/]
    - DataUSA [https://datausa.io/about/api/]

- Libraries
    - Intro.JS [https://introjs.com/]
    - Parsley.JS [https://parsleyjs.org/]

- Books:
    - Javascipt (6th Edition) by Mike McGrath

# Collaborators
- Ashley Sese
- Edwin Hernandez
- Solomon Santos

