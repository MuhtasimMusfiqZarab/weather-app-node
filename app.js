const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// get latitude and lonngitude
geocode("Dhaka", (error, data) => {
  console.log("Error", error);
  console.log("data", data);
});

//Fetch weather
forecast(23.7, 90.3, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
