const storage = new Storage();
const weatherLocation = storage.getCityData();
const weather = new Weather(weatherLocation.city, weatherLocation.state); 
const ui = new UI();

document.addEventListener('DOMContentLoaded', loadWeather);
document.getElementById('w-change-btn').addEventListener('click', (e) => {
   const city = document.getElementById('city').value;
   const state = document.getElementById('state').value;

   weather.changeLocation(city, state);

   storage.setCityData(city, state);

   loadWeather();

   $('#locModal').modal('hide')
});

function loadWeather () {
   weather.getWeather()
      .then(weatherInfo => {
         ui.paint(weatherInfo, weatherInfo.cityName)
      })
   
}