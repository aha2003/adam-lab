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

  // Step 5: Create an XMLHttpRequest object.
  const xhr = new XMLHttpRequest();

  
  // Step 6: Set the request method and URL.
  xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);


  // Step 7: Set the request headers.
  xhr.setRequestHeader('Accept', 'application/json');

  // Step 8: Add an event listener to the xhr object to detect when the request is complete.
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Step 9: Parse the JSON response data.
      const data = JSON.parse(xhr.responseText);

      // Step 10: Update the weather info div.
      const weatherDescription = data.weather[0].description;
      const mainTemp = data.main.temp;
      const windSpeed = data.wind.speed;

      const weatherInfoHTML = `
        <p>Weather: ${weatherDescription}</p>
        <p>Main Temperature: ${mainTemp}°C</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
      `;

      weatherInfoContainer.innerHTML = weatherInfoHTML;
    } else {
      // Step 11: Handle errors.
      console.error('Error:', xhr.statusText);
      alert('An error occurred. Please try again later.');
    }
  };

  // Step 12: Send the request.
  xhr.send();
});
