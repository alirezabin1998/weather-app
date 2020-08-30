const request = require("request");

const geocode = (address, callback) => {
    const locationUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYWxpcmV6YWJpbjE5OTgiLCJhIjoiY2tlZm1jazZlMHJtbjJ4bjczOWRnMzJ2ZyJ9.hGgBWC1Kq_ORvica66bkfA`;
    request({url: locationUrl, json: true}, (error, response, {features}) => {
        if(error){
            callback("unable to connect to coordinates service!", undefined);
        } else if (features.length === 0) {
            callback("unable to find the coordinates!", undefined);
        } else {
            callback(undefined, {
                location: features[0].place_name,
                long: features[0].center[0],
                lat: features[0].center[1]
            })
        }
    })
}

module.exports = geocode;


// const locationUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWxpcmV6YWJpbjE5OTgiLCJhIjoiY2tlZm1jazZlMHJtbjJ4bjczOWRnMzJ2ZyJ9.hGgBWC1Kq_ORvica66bkfA"

// request({url: locationUrl, json: true}, (error, response, body) => {
//     if (error) {
//         console.log("unable to connect to coordinates service!")
//     } else if (body.features.length === 0) {
//         console.log("unable to find the coordinates");
//     } else {
//         const long = body.features[0].center[0];
//         const lat = body.features[0].center[1];
//         console.log(`longtitude: ${long} \nlatitude: ${lat}`);
//     }
// }) 