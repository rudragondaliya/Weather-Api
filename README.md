 🌦 Worldwide Weather App

A simple and beautiful weather application that allows users to get real-time weather information for any city in the world using the **OpenWeatherMap API**.

 🔗 Live Preview

👉 [Click here to try the app live](https://weather-api-app-drab.vercel.app/)  

 🚀 Features

- 🌍 Search weather by **city name**
- 🌡 Displays:
  - Temperature in °C
  - Weather condition description
  - City name
- 🎨 Simple and responsive UI with gradient background
- 🔥 Bootstrap Icons integration

 🛠 Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- OpenWeatherMap API
- Bootstrap Icons

 📁 Project Structure

 weather-app/ 
 │ ├── index.html # HTML structure of the app
 ├── style.css # Styling and layout 
 ├── script.js # JavaScript logic 
 └── README.md # Project documentation

⚙️ How It Works

1. User enters the name of a city in the input field.
2. On form submission, JavaScript fetches weather data using `fetch()` from OpenWeatherMap.
3. Data is parsed and displayed:
   - City name
   - Temperature (converted from Kelvin to Celsius)
   - Weather description

🔑 API Integration

Weather data is fetched from:
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}

📜 License
This project is open-source and free to use under the MIT License.


