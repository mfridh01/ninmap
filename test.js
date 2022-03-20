


function genericPoemMaker(name) {
  console.log("Hej", name);
}

function getUserInput(fileName, callback) {
  var fullName = require('./svg-generator.js')(fileName);
  if (typeof callback === "function") {
    callback(fullName);
  }
}

getUserInput("The_Citadel.js", genericPoemMaker);
getUserInput("The_Forge.js", genericPoemMaker);
