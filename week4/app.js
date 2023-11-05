// Step 1: Get your API key from OpenWeatherMap.
const apiKey = 'ad0c2e70fb6eece9a2e3cb1d3feb8e8d';

// Step 2: Create variables to store references to your input field, button, and weather info div.
const cityInput = document.getElementById('cityInput');
const getWeatherButton = document.getElementById('btn');
const weatherInfoContainer = document.getElementById('weather-info');

// Step 3: Add an event listener to the button to detect when it is clicked.
getWeatherButton.addEventListener('click', () => {
  // Step 4: Get the value of the input field (city name) and check if it's empty.
  const cityName = cityInput.value.trim();
  if (cityName === '') {
    alert('Please enter a city name.');
    return;
  }

  // Step 5: Make an HTTP request to the OpenWeatherMap API to fetch the weather data.
  const apiUrl = `api.openweathermap.org/data/2.5/forecast?q={cityName}&appid={apiKey}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Step 7: Once the data is returned from the API, parse it and update the weather info div.
      const weatherDescription = data.weather[0].description;
      const mainTemp = data.main.temp;
      const windSpeed = data.wind.speed;

      const weatherInfoHTML = `
        <p>Weather: ${weatherDescription}</p>
        <p>Main Temperature: ${mainTemp}°C</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
      `;

      weatherInfoContainer.innerHTML = weatherInfoHTML;
    })
    .catch((error) => {
      // Step 6: Handle errors
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
});
