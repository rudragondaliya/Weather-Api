const getWeather = (city)=>{
  const apikey = '68fb8e651aeaecc849e9f1546c246ffc';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
   .then((res)=>{
    return res.json();
   })
   .then((data)=> (displayData(data)))
  .catch((Error)=>{
    console.log(Error)
  })
}

let form = document.getElementById("form");
form.addEventListener("submit",(e)=>{
  e.preventDefault();

  let cityval = document.getElementById("cityName").value
  getWeather(cityval);
})

const displayData =(data)=>{
  let weather = document.getElementById("weather");
  const temperatureVal = data.main.temp;
  const temperature = (temperatureVal - 273.15).toFixed(1);
  const description = data.weather[0].description;
  const city = data.name;

  weather.innerHTML =
  `
  <h2>${city}</h2>
  <p>${temperature}°C</p>
  <p><i class="bi bi-thermometer-sun"></i>${description}</p>


  `

};