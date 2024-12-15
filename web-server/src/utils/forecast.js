const request = require("request");
const forecast = (latitude, longitude, units = f, callback) => {
  const url = `https://api.weatherstack.com/current?access_key=ae1349d0afef416b8d21064fea69d153&query=${latitude},${longitude}&units=${units}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const unitSymbol = units === "m" ? "°C" : units === "s" ? "K" : "°F";

      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          (units === "f" ? "°F" : unit === "m" ? "°C" : "K") +
          unitSymbol +
          " out. It feels like " +
          unitSymbol +
          body.current.feelslike +
          " out."
      );
    }
  });
};

module.exports = forecast;
