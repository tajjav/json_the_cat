const { fetchBreedDescription } = require("./breedFetcher");

let cmdBreedName = process.argv[2];

// Drive Code
fetchBreedDescription(cmdBreedName, (err, desc) => {
  if (err) {
    console.error('error: ', err);
  } else {
    console.log('desc: ', desc);
  }

})