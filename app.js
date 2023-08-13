const search = document.querySelector(".input-box");
const searchButton = document.querySelector(".search-button");
const cityName = document.querySelector(".city");
const temperature = document.querySelector(".temperature");
const feelslike = document.querySelector(".feels");
const humdity = document.querySelector(".hum");
const description = document.querySelector(".description");
const weatherImg = document.querySelector(".weather-img");
const yourloc = document.querySelector(".yourloc");



async function checkwheather(city) {
  const apikey = "bfa5d8d1e2854cff0780db680f827f0f";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

  const weather = await fetch(`${url}`).then((response) => response.json());

  cityName.innerHTML = `${weather.name}`;
  temperature.innerHTML = `${Math.round(weather.main.temp - 273.15)}`;
  feelslike.innerHTML = `${weather.main.feels_like}`;
  humdity.innerHTML = `${weather.main.humidity}`;
  description.innerHTML = `${weather.weather[0].description}`;
  console.log(weather);

  switch (weather.weather[0].main) {
    case "Clouds":
      weatherImg.src = "assets/cloud.png";
      break;
    case "Clear":
      weatherImg.src = "assets/clear.png";
      break;
    case "Mist":
      weatherImg.src = "assets/mist.png";
      break;
    case "Rain":
      weatherImg.src = "assets/rain.png";
      break;
    case "Snow":
      weatherImg.src = "assets/snow.png";
      break;
  }
}

searchButton.addEventListener("click", () => {
  checkwheather(search.value);
});
