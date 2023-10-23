const {fetchBreedDescription} = require("./breedFetcher");

//let cmdBreedName = process.argv[2];
//console.log(cmdBreedName);


// Drive Code
fetchBreedDescription('Siberian', (err,desc) => {
  if (err) {
    console.error('error: ', err);
  } else {
    //console.log("Number of Results: ", desc.length);
    console.log('desc: ', desc);
  }

})