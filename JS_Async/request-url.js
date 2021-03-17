const request = require('request');
const requestFilms = require('request');

request(' https://swapi.dev/api/people/1/', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const luke = JSON.parse(body);
  console.log(luke.films[0]);

 requestFilms(luke.films[0], function (errorFilms, responseFilms, bodyFilms) {
  console.error('error:', errorFilms); // Print the error if one occurred
  console.log('statusCode:', responseFilms && response.statusCode); // Print the response status code if a response was received
  const lukeFilms = JSON.parse(bodyFilms);
  console.log(lukeFilms.title);
});

//    for(var k in luke.films){
//        console.log(k, luke.films[k]);
//     }
//     console.log(luke.films[0]);
});
