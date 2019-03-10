const request = require("request");

// Darksku API for getting the weather
const URL =
  "https://api.darksky.net/forecast/9a98c19afa3eacb9244789b9a88001ae/23.77,90.399?units=si";

request({ url: URL, json: true }, (error, response) => {
  const data = response.body.currently;
  console.log(
    ` There is ${data.temperature} out there and ${
      data.precipProbability
    } % chance of rain`
  );
});

//Geocoding
const URL_geo =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiemFyYWIiLCJhIjoiY2p0Mm5sN2poMjh5dDQ5b2R3ZGx5aWdxcCJ9.KgU8OPkzcylxfbKMcFgEUQ";

request({ url: URL_geo, json: true }, (error, response) => {
  const data = response.body.features[0];
  const place = data.place_name;
  const latitude = data.center[1];
  const longitude = data.center[0];
  console.log(` The lan/long for ${place} is ${latitude} and ${longitude}`);
});
