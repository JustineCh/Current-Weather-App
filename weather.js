function getIconUrl(iconID) {
   const prefix = iconID < 10 ? '0' : '';
   return `https://developer.accuweather.com/sites/default/files/${prefix}${iconID}-s.png`
};

class Weather {
   constructor(city, state) {
      this.apiKey = '80wt11FFYJVQgsGG2mQFAUACjdBBux8F';
      this.city = city;
   }

   async getWeather() {
      const locationResponse = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.apiKey}&q=${this.city}`);
      const locationResponseData = await locationResponse.json();
      const cityName = locationResponseData[0].LocalizedName;
      const stateName = locationResponseData[0].AdministrativeArea.LocalizedName;
      const locationKey = locationResponseData[0].Key;
      
      const weatherResponse = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${this.apiKey}&language=en-us&details=true`);
      const weatherResponseData = await weatherResponse.json();
      const weatherObject = weatherResponseData[0];
      const weatherIcon = getIconUrl(weatherObject.WeatherIcon);
      const weatherText = weatherObject.WeatherText;
      const temperature = `${weatherObject.Temperature.Metric.Value} ${weatherObject.Temperature.Metric.Unit}`;
      const fahrenheitTemperature = `${Math.round(parseInt(temperature)*1.8000+32)} F`;
      const realFeelTemperature = `${weatherObject.RealFeelTemperature.Metric.Value} ${weatherObject.RealFeelTemperature.Metric.Unit}`;
      const fahrenheitRFTemperature = `${Math.round(parseInt(realFeelTemperature)*1.8000+32)} F`;
      const wind = `${weatherObject.Wind.Speed.Metric.Value} ${weatherObject.Wind.Speed.Metric.Unit}`;

      return {
         cityName,
         stateName,
         weatherIcon,
         weatherText,
         temperature,
         fahrenheitTemperature,
         fahrenheitRFTemperature,
         realFeelTemperature,
         wind
      }
   }

   changeLocation(city, state) {
      this.city = city;
      this.state = state;
   }

}
