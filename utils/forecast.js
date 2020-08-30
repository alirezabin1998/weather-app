const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c6821dce40e936278d3ecb85bc420092`;
    request({url, json: true}, (error, response, body) => {
        if (error) {
            console.log("unable to connect to weather service!", undefined);
        } else if (body.error) { 
            console.log("unable to find the location!", undefined);
        } else {
            console.log(`it is currently ${body.main.temp} and there is ${body.clouds.all}% chance of rain.`);
        }
    })
}

module.exports = forecast;


// const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=c6821dce40e936278d3ecb85bc420092";

// request({url: weatherUrl, json: true}, (error, response, body) => {
//     if (error) {
//         console.log("unable to connect to weather service!");
//     } else if (body.error) { 
//         console.log("unable to find the location!");
//     } else {
//         console.log(`it is currently ${body.main.temp} and there is ${body.clouds.all}% chance of rain.`);
//     }
//     console.log(body);
// })