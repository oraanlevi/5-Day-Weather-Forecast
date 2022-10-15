var weatherApiKey = '82430ff11cad051f5a0fd1af1c0b8bfd';
const form = document.querySelector("form");
const input = document.querySelector("form input");
const msg = document.querySelector("#msg");

// const response = 

// $(document).ready(function () {
//   var searcnBtn = $("#searchBtn");

//   initLocalStorage();

//   if((localStorage.getItem('prevSearchWeather') !=[])) {
//     var currentSearchHistory = JSON.parse(localStorage.getItem('prevSearchWeather'));
//     renderLastCity(currentSearchHistory)[0];
//   };

//   displaySearchHist();

//   $(document).on('click', '.prvCity', function (e) {
//     e.preventDeafult();
//     var cityName= $(this).attr('id');
//     var apiKey = '82430ff11cad051f5a0fd1af1c0b8bfd';
//     var queryUrl = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${weatherApiKey}` + cityName + apiKey
 
//  $.ajax({
//   url: queryUrl,
//   method: "GET"
//  }).then(function (results) {
//   weatherForecast(results);
//  });

//  });

//  searchBtn.on('click', function (e) {
//   e.preventDeafult();
//   var CityName =$("userInput").val();
//   var queryURL ="";
//   $.ajax({
//    url: queryURL;
//     method: 'GET';
//   }).then(function (results) {
//     weatherForecast(results);
//     addToSearchHist(results.name);

//   });
//   $("#userInput").val('')
// });

// function weatherForecast(results) {
//   $(".hide").attr('class', 'row');
//   var currentCityName = results.name;
//   $
// }
//   })

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
    })
  })
  

})

function forecast(data) {
  const dayOneDate = document.querySelector('.day-one-date');
  const dayOneTemp = document.querySelector('.day-one-temperature');
  const dayOneWind = document.querySelector('.day-one-wind');
  const dayOneHumid = document.querySelector('.day-one-humidity');


  console.log(data.list)
  dayOneTemp.innerHTML = `Temp: ${data.list[0].main.temp}°F`
  dayOneDate.innerHTML =`Date: ${data.list[0].dt_txt}`
  dayOneWind.innerHTML = `Wind: ${data.list[0].wind.deg}MPH`
  dayOneHumid.innerHTML = `Humidity: ${data.list[0].main.humidity}%`

 
 
  const dayTwoWeather = document.querySelector('.day-two-wind');
  //dayTwoWeather.innerHTML = `Date: ${data.list[0].dt_txt}`
dayTwoWeather.innerHTML = `Temp: ${data.list[8].main.temp}`

}


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



// render currwent weather

// render forecast
// looping through weather data, inside that foor loop, you will attach that data to the card

// create a card that shows the forecast
