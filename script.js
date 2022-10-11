var weatherApiKey = '82430ff11cad051f5a0fd1af1c0b8bfd';
const form = document.querySelector("form");
const input = document.querySelector("form input");
const msg = document.querySelector("#msg");

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

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${weatherApiKey}&units=metric`;

  // const forecastUrl = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`
  // fetch(forecastUrl)
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data)
  // })
  // .catch(() => {
  //   msg.textContent = "Please search for a valid city 😩";
  // });
  console.log(inputVal)
  console.log(event)
  fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        msg.textContent = data.name
       lat =  data.coord.lat
       lon =  data.coord.lon
      })
      .catch(() => {
        msg.textContent = "Please search for a valid city 😩";
      });
})

// render currwent weather

// render forecast
// looping through weather data, inside that foor loop, you will attach that data to the card

// create a card that shows the forecast 
