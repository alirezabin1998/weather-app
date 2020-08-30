const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];
if (!address) {
    console.log("please provide an address");
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error);
        }
        forecast(data.lat, data.long, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }

            console.log(data.location);
            console.log(forecastData);
        })
    })
}

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log("error", error);
//     console.log("data", data);
// })