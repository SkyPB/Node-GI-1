const request = require("postman-request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoic2t5c2hhbmljZSIsImEiOiJjbTRvY3ppZTMwaGw1MnFxMWVyeHNubGt1In0.BGGflX4hA_G_EWP9tPOSMw&limit=1`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!");
    } else if (!body.features || body.features.length === 0) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].geometry.coordinates[1],
        longitude: body.features[0].geometry.coordinates[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
