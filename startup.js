var fs = require('fs')
// where the files are stored.
var dirname = './continents/'
// Read the directory and generate the SVG for all the files.

// startup.
startUp(dirname)




function startUp(dirname, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
      generateSVG(filename);
    });
  });
}

function generateSVG(region) {
  var fullSVG = require('./svg-generator.js')(region),
  fileName = region.replace(".js", ".svg");
  console.log("generating: "+fileName+" please wait ... ");

  fs.writeFile(__dirname + "/svg/" + fileName, fullSVG, function(err) {
      if(err) {
          return console.log(err);
      }
      region = region.replace(".js", "");
      console.log("done, SVG for Region: " + region + " generated successfully.");
  });
}
