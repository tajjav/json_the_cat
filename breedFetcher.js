const request = require('request');

let cmdBreedName = process.argv[2];
//console.log(cmdBreedName);

request(`https://api.thecatapi.com/v1/breeds/search?q=${cmdBreedName}`,(error,response,body) => {
  if (error) {
    console.error('error message: ', error.message);
    return;
  }
  
  console.log('status code: ', response&&response.statusCode);
  //console.log('type of body: ', typeof body);
  //console.log('body: ', body);
  const data = JSON.parse(body);
  console.log('Number of Results: ', data.length);
  if (data.length === 0) {
    console.log("Search text did not math with any cat breed");
    return;
  }
  //console.log('type of data: ', typeof data);
  //console.log('weight: ', data[0].weight);
  console.log('data: ', data);
});