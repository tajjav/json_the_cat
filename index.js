const {fetchBreedDescription} = require("./breedFetcher");

// Drive Code
fetchBreedDescription('Siberian', (err,desc) => {
  if (err) {
    console.error('error: ', err);
  } else {
    //console.log("Number of Results: ", desc.length);
    console.log('desc: ', desc);
  }

})