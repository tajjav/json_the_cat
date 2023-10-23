const request = require('request');

/**
 * fetchBreedDescription function definition
 * @param {String} breedName 
 * @param {Function} callback 
 */
const fetchBreedDescription = function(breedName, callback) {

  function validReqCallback(err, response, body) {
    if (err) {
      return callback(err.message, null);

    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      callback("Breed not found", null);
    }
  }

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, validReqCallback);

}
module.exports = { fetchBreedDescription };