// Weather API Endpoint (Replace with your API key)
const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=CityName&appid=YOUR_API_KEY';

// Random User API Endpoint
const userAPI = 'https://randomuser.me/api/?results=5';

// Countries API Endpoint
const countriesAPI = 'https://restcountries.com/v3.1/all';

// Function to fetch and display weather data
function fetchWeather() {
    fetch(weatherAPI)
        .then(response => response.json())
        .then(data => {
            // Display weather data here
        })
        .catch(error => {
            console.error('Error fetching weather data: ', error);
        });
}

// Function to fetch and display random user profiles
function fetchUsers() {
    fetch(userAPI)
        .then(response => response.json())
        .then(data => {
            // Display user profiles here
        })
        .catch(error => {
            console.error('Error fetching user data: ', error);
        });
}

// Function to fetch and display country information
function fetchCountries() {
    fetch(countriesAPI)
        .then(response => response.json())
        .then(data => {
            // Display country information here
        })
        .catch(error => {
            console.error('Error fetching country data: ', error);
        });
}

// Call the fetch functions when the page loads
window.onload = function() {
    fetchWeather();
    fetchUsers();
    fetchCountries();
};
