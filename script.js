var weatherApiKey = '82430ff11cad051f5a0fd1af1c0b8bfd';
const form = document.querySelector("form");
const input = document.querySelector("form input");
const msg = document.querySelector("#msg");



form.addEventListener("submit", event => {
  event.preventDefault()
  let inputVal = input.value;
  let lat = ''
  let lon = ''

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${weatherApiKey}&units=imperial`;


  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    msg.textContent = data.name
    lat =  data.coord.lat
    lon =  data.coord.lon
    console.log(lat, lon);
    displayWeather(data);
    
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`
    fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
      forecast(data)

    
      var formSubmitHandler = function (event) {
        event.preventDefault();
        if (data) {
          searchHistoryArray.push(data);
          localStorage.setItem("weatherSearch", JSON.stringify(searchHistoryArray));
          var searchHistoryEl = document.createElement('button');
          searchHistoryEl.className = "btn";
          searchHistoryEl.setAttribute("data-city", data)
          searchHistoryEl.innerHTML = data;
          historyButtonsEl.appendChild(searchHistoryEl);
          historyCardEl.removeAttribute("style")
          cityNameInputEl.value = "";
      }
      else {
          alert("Please enter a City name");
      }
      
      }
      
        var loadHistory = function () {
        searchArray = JSON.parse(localStorage.getItem("weatherSearch"));
      
        if (searchArray) {
            searchHistoryArray = JSON.parse(localStorage.getItem("weatherSearch"));
            for (let i = 0; i < searchArray.length; i++) {
                var searchHistoryEl = document.createElement('button');
                searchHistoryEl.className = "btn";
                searchHistoryEl.setAttribute("data-city", searchArray[i])
                searchHistoryEl.innerHTML = searchArray[i];
                historyButtonsEl.appendChild(searchHistoryEl);
                historyCardEl.removeAttribute("style");
            }
      
        }
      }
      
      // Search weather using search history buttons
      var buttonClickHandler = function (event) {
        var data = event.target.getAttribute("data-city");
        if (data) {
            getWeatherInfo(data);
        }
      }
      
      // Clear Search History
      var clearHistory = function (event) {
        localStorage.removeItem("weatherSearch");
        historyCardEl.setAttribute("style", "display: none");
      }
      //var cityFormEl = function () {
      cityFormEl.addEventListener("submit", formSubmitHandler);
      historyButtonsEl.addEventListener("click", buttonClickHandler);
      
      loadHistory();
      
      
    })
  })
  
  function displayWeather(data) {
        console.log(data);
        const humidity = data.main.humidity;
        const temp = data.main.temp;
        const wind = data.wind.deg;
        const humid = data.main.humidity;
        const currentHumid = document.querySelector('#currentHumid');
        const currentTemp = document.querySelector('#currentTemp');
        const currentWind = document.querySelector('#currentWind');
        console.log(currentTemp)
        currentTemp.innerHTML = `Temp: ${temp}°F`
        currentWind.innerHTML = `Wind: ${wind} MPH`
        currentHumid.innerHTML = `Humidity: ${humid}%`
        console.log(humidity)
      
     
      
      }
})
var cityFormEl = document.querySelector("#city-form");
var cityNameInputEl = document.querySelector("#cityname");
var currentWeatherEl = document.querySelector('#current-weather');
var weatherStatusEl = document.querySelector('#weather-status');
var searchEl = document.querySelector('#search');
var historyButtonsEl = document.querySelector("#history-buttons")
var historyCardEl = document.querySelector("#history")
var searchHistoryArray = []


function forecast(data) {
 //Day One
  const dayOneDate = document.querySelector('.day-one-date');
  const dayOneTemp = document.querySelector('.day-one-temperature');
  const dayOneWind = document.querySelector('.day-one-wind');
  const dayOneHumid = document.querySelector('.day-one-humidity');


  console.log(data.list)
  dayOneDate.innerHTML =`Date: ${data.list[0].dt_txt}`;
  dayOneTemp.innerHTML = `Temp: ${data.list[0].main.temp}°F`;
  dayOneWind.innerHTML = `Wind: ${data.list[0].wind.deg}MPH`;
  dayOneHumid.innerHTML = `Humidity: ${data.list[0].main.humidity}%`;

 //Day Two
 
  const dayTwoDate = document.querySelector('.day-two-date');
  const dayTwoTemp = document.querySelector('.day-two-temperature');
  const dayTwoWind = document.querySelector('.day-two-wind');
  const dayTwoHumid = document.querySelector('.day-two-humidity');

  dayTwoDate.innerHTML = `Date: ${data.list[8].dt_txt}`;
  dayTwoTemp.innerHTML = `Temp: ${data.list[8].main.temp}°F`;
  dayTwoWind.innerHTML = `Wind: ${data.list[8].wind.deg}MPH`;
  dayTwoHumid.innerHTML = `Humidity: ${data.list[8].main.humidity}%`;


//Day Three
const dayThreeDate = document.querySelector('.day-three-date');
  const dayThreeTemp = document.querySelector('.day-three-temperature');
  const dayThreeWind = document.querySelector('.day-three-wind');
  const dayThreeHumid= document.querySelector('.day-three-humidity');

  dayThreeDate.innerHTML = `Date: ${data.list[14].dt_txt}`;
  dayThreeTemp.innerHTML = `Temp: ${data.list[14].main.temp}°F`;
  dayThreeWind.innerHTML = `Wind: ${data.list[14].wind.deg}MPH`;
  dayThreeHumid.innerHTML = `Humidity: ${data.list[14].main.humidity}%`;

//Day Four
const dayFourDate = document.querySelector('.day-four-date');
  const dayFourTemp = document.querySelector('.day-four-temperature');
  const dayFourWind = document.querySelector('.day-four-wind');
  const dayFourHumid = document.querySelector('.day-four-humidity');

  dayFourDate.innerHTML = `Date: ${data.list[22].dt_txt}`;
  dayFourTemp.innerHTML = `Temp: ${data.list[22].main.temp}°F`;
  dayFourWind.innerHTML = `Wind: ${data.list[22].wind.deg}MPH`;
  dayFourHumid.innerHTML = `Humidity: ${data.list[22].main.humidity}%`;

  //Day Five
  const dayFiveDate = document.querySelector('.day-five-date');
  const dayFiveTemp = document.querySelector('.day-five-temperature');
  const dayFiveWind = document.querySelector('.day-five-wind');
  const dayFiveHumid = document.querySelector('.day-five-humidity');

  dayFiveDate.innerHTML = `Date: ${data.list[30].dt_txt}`;
  dayFiveTemp.innerHTML = `Temp: ${data.list[30].main.temp}°F`;
  dayFiveWind.innerHTML = `Wind: ${data.list[30].wind.deg}MPH`;
  dayFiveHumid.innerHTML = `Humidity: ${data.list[30].main.humidity}%`;

 }