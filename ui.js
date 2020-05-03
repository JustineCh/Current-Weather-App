class UI {
   constructor() {
      this.city = document.getElementById('w-city');
      this.desc = document.getElementById('w-desc');
      this.state = document.getElementById('w-state');
      this.details = document.getElementById('w-details');
      this.icon = document.getElementById('w-icon');
      this.temperature = document.getElementById('w-temperature');
      this.feelsLike = document.getElementById('w-feels-like');
      this.wind = document.getElementById('w-wind');
   }

   paint(weatherInfo, cityName) {
       this.city.textContent = cityName;
       this.state.textContent = `, ${weatherInfo.stateName}`;
       this.desc.textContent = weatherInfo.weatherText;
       this.icon.src = weatherInfo.weatherIcon;
       this.temperature.textContent = `Temperature: ${weatherInfo.temperature} (${weatherInfo.fahrenheitTemperature})`;
       this.feelsLike.textContent = `Real Feel Temperature: ${weatherInfo.realFeelTemperature} (${weatherInfo.fahrenheitRFTemperature})`;
       this.wind.textContent = `Wind Speed: ${weatherInfo.wind}`;
   }
}