const examples = require('./examples.js');
let axios = require('axios');

let baseURL = {
  a: 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/',
  b: '?format=json&modelyear='
};
// Decode VIN (flat format)
// /vehicles/DecodeVinValues/5UXWX7C5*BA?format=xml&modelyear=2011 XML JSV CSV JSON
// Less Information
// The Decode VIN Flat Format API will decode the VIN and the decoded output will be made available in a flat file format. Model Year in the request allows for the decoding to specifically be done in the current, or older (pre-1980), model year ranges. It is recommended to always send in the model year. This API also supports partial VIN decoding (VINs that are less than 17 characters). In this case, the VIN will be decoded partially with the available characters. In case of partial VINs, a "*" could be used to indicate the unavailable characters.

examples.cars.forEach( function (x) {
  let yearChar = x.vin[9];
  let year = examples.year[yearChar];
  // .splice(9, 1);
  console.log('vin', x.vin);
  console.log('year character', yearChar);
  console.log('decoded year', examples.year[yearChar]);
  console.log('description', x.description);
  console.log('if ' + x.description + ' is identical to ' + examples.year[yearChar] + ' then it works!');

  let url = baseURL.a + x.vin + baseURL.b + year;

  console.log('30 year: ', url);

  let vehicleRequest = axios.create({
    timeout: 10000,
    method: 'get',
    url: url.replace(/\s/g, '')
  });

  vehicleRequest()
  .then(function (results) {
    console.log('results.data', results.data);
  });
});


// vehicleRequest().then(function (one) {
    // console.log(one.data.Results)
// })