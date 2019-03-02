const message = require("./consoleMessage");

const self = (module.exports = {
  /***** getWeather
   * TODO: use OpenWeatherMap API see https://openweathermap.org/guide#api
   */
  getWeather: () => {
    message.failure("its probably cold...");
  } // end getWeather
});
