//var svgns = "http://www.w3.org/2000/svg";
//var svg = document.getElementById('svg');
var landOfWater = require('./continents/land_of_water');
var landOfFire = require('./continents/land_of_fire');
var landOfWind = require('./continents/land_of_wind');
var continents;

// Containers - elements.
var relations = []; // Relations table. between systems.

// Globals
const gridSpaceX = 15;
const gridSpaceY = 15;
const rectSizeX = 90;
const rectSizeY = 25;
const rectCenterX = rectSizeX / 2;
const rectCenterY = rectSizeY / 2;

// Startup.
module.exports = function svgGen(region) {
  relations = [];
  //continents = require('./continents/' + region);
  continents = getRegion(region);
  fillRelationsTable();
  var fullSVG = "";
  fullSVG = fullSVG + '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg" width="962" height="704">\n';
  fullSVG = fullSVG + '<image href="../images/world_map.png" width="962" height="704" style="filter: brightness(120%);"/>\n';
  fullSVG = fullSVG + drawLines();
  fullSVG = fullSVG + drawGrids();
  fullSVG = fullSVG + '</svg>';
  return fullSVG;
}
//setSVGSize();

// This function will fill the releations table.
function fillRelationsTable() {
  var arrTest = [];

  // iterate through all systems and add all the relations.
  // Not sorted.
  for (var i = 0; i < continents.length; i++) {
    var tempArr = createRelations(continents[i].name);
    for (var j = 0; j < tempArr.length; j++) {
      arrTest.push(tempArr[j]);
    }
  }

  var relationsTemp = false;
  for (var i = 0; i < arrTest.length; i++) {
    for (var j = 0; j < relations.length; j++) {
      // if the relation exist inside of relations array.
      // skip it.
      if (JSON.stringify(relations[j]) === JSON.stringify(arrTest[i])){
        relationsTemp = true;
        break;
      }
    }
    // If it doesn't exist, push it.
    if (!relationsTemp) {
      relations.push(arrTest[i]);
    }
    relationsTemp = false;
  }
}

// Create the grid relations - table. (array)
// returns and array of objects with 2 props.
function createRelations(sys) {
  var mapGrid = getMapGrid(sys);
  var adjGrid = getMapGrid(sys).adjacent;
  var tempRelations = [];

  // Iterate through all the adjacent grids.
  // then push them to the relations array.
  for (var i = 0; i < adjGrid.length; i++) {
    var adj = getMapGrid(adjGrid[i]);

    // Check to se if the continent we're checking against, is before or after.
    if ((mapGrid.row <= adj.row && mapGrid.col < adj.col) || (mapGrid.row < adj.row && mapGrid.col >= adj.col)) {
      tempRelations.push({
        "s1" : mapGrid.name,
        "s2" : adj.name
      });
    } else {
      tempRelations.push({
        "s1" : adj.name,
        "s2" : mapGrid.name
      });
    }

  }

  // returns an array of objects, in right order.
  return tempRelations;
}

// get the grid Object from name (id)
function getMapGrid(name) {
  var obj = continents.filter(function ( obj ) {
      return obj.name === name;
  })[0];
  return obj;
}

// draw the grid.
function drawGrids() {
  var drawGrid = "";
  for (var i = 0; i < continents.length; i++) {
    // Create a group.
    // var gridGroup = document.createElementNS(svgns, "g");
    // gridGroup.appendChild(svgRect(continents[i]));
    // gridGroup.appendChild(svgText(continents[i]));
    // svg.appendChild(gridGroup);
    var gridGroup = '<g>\n';
    gridGroup = gridGroup + svgRect(continents[i]);
    gridGroup = gridGroup + svgText(continents[i]);
    gridGroup = gridGroup + '</g>\n';
    drawGrid = drawGrid + gridGroup;
  }
  return drawGrid;
}

// draw the lines.
function drawLines() {
  var drawLin = "";
  for (var i = 0; i < relations.length; i++) {
    // svg.appendChild(svgLine(relations[i]));
    drawLin = drawLin + svgLine(relations[i]);
  }
  return drawLin;
}

// Set SVG size.
function setSVGSize() {
  svg.setAttributeNS(null, "width", 962);
  svg.setAttributeNS(null, "height", 704);
}

// create - LINE SVG tag.
// takes a relation object as argument;
// returns a tag.
function svgLine(relation) {
  var s1 = getMapGrid(relation.s1);
  var s2 = getMapGrid(relation.s2);
  var x1 = (s1.col * (rectSizeX + gridSpaceX)) + rectSizeX / 2;
  var y1 = (s1.row * (rectSizeY + gridSpaceY)) + rectSizeY / 2;
  var x2 = (s2.col * (rectSizeX + gridSpaceX)) + rectSizeX / 2;
  var y2 = (s2.row * (rectSizeY + gridSpaceY)) + rectSizeY / 2;

  var systemLine = '<line ';
  systemLine = systemLine + 'x1="' + x1 + '" ';
  systemLine = systemLine + 'y1="' + y1 + '" ';
  systemLine = systemLine + 'x2="' + x2 + '" ';
  systemLine = systemLine + 'y2="' + y2 + '" ';
  systemLine = systemLine + 'stroke="black" ';
  systemLine = systemLine + 'stroke-width="2"';
  systemLine = systemLine + '></line>\n'

  return systemLine;
}

// create - RECTANGLE SVG tag.
// Takes a grid Object as an argument.
function svgRect(grid) {
  // TODO Debugg, remove later.
  var TEST_color = "black";
  if (grid.corner == 1) {TEST_color = "green";}
  if (grid.corner == 2) {TEST_color = "blue";}
  if (grid.corner == 3) {TEST_color = "red";}
  if (grid.corner == 4) {TEST_color = "yellow";}
  if (grid.corner == 5) {TEST_color = "orange";}
  if (grid.corner == 6) {TEST_color = "gray";}
  if (grid.corner != 0) { grid.corner = 1; }
  // -----------------------------------------

  var rectX = grid.col * (rectSizeX + gridSpaceX);
  var rectY = grid.row * (rectSizeY + gridSpaceY);

  var gridRect = '<rect ';
  gridRect = gridRect + 'id="rect-' + grid.name.replace(/\s/g, '') + '" ';
  gridRect = gridRect + 'x="' + rectX + '" ';
  gridRect = gridRect + 'y="' + rectY + '" ';
  gridRect = gridRect + 'rx="' + (rectSizeY / 2) * grid.corner + '" ';
  gridRect = gridRect + 'ry="' + (rectSizeY / 2) * grid.corner + '" ';
  gridRect = gridRect + 'width="' + rectSizeX + '" ';
  gridRect = gridRect + 'height="' + rectSizeY + '" ';
  gridRect = gridRect + 'stroke="' + TEST_color + '" ';
  gridRect = gridRect + 'stroke-width="2" ';
  gridRect = gridRect + 'fill="' + getColor(grid.status) + '"';
  gridRect = gridRect + '></rect>\n'
  return gridRect;
}


// create - TEXT SVG tag.
// Takes a solarSystem Object as an argument.
function svgText(grid) {

  var rectX = grid.col * (rectSizeX + gridSpaceX);
  var rectY = grid.row * (rectSizeY + gridSpaceY);
  var centerX = rectX + (rectSizeX / 2);
  var centerY = rectY + (rectSizeY / 2);

  var gridText = '<text ';
  gridText = gridText + 'x="' + centerX + '" ';
  gridText = gridText + 'y="' + centerY + '" ';
  gridText = gridText + 'font-family="calibri" ';
  gridText = gridText + 'font-size="11" ';
  gridText = gridText + 'font-weight="bold" ';
  gridText = gridText + 'fill="black" ';
  gridText = gridText + 'text-anchor="middle" ';
  gridText = gridText + 'alignment-baseline="middle"';
  gridText = gridText + '>' + grid.name + '</text>\n'

  return gridText;
}

function getColor(status, cornerRad) {
  // dark
  // blue = rgb(35, 60, 97);
  // yellow = rgb(140, 120, 0);
  // red = rgb(157, 0, 0);
  // green = rgb(0, 157, 0);

  // light
  // green = rgb(0, 157, 0);

  // other regions, if safe.
  // if (status === 0 && cornerRad === 0) {
  //   return "rgb(35, 60, 97)";
  // }

  // status colors
  switch (status) {
    case 1:
      return "rgb(160, 115, 115)";
    case 2:
      return "rgb(150, 150, 45)";
    case 3: // blue
      return "rgb(160, 200, 250)";
    case 4: //Gray
      return "rgb(210, 210, 210)";
    case 5: // orange
      return "orange";
    default:
      return "rgb(255, 255, 255)";
  }
}


function getColsRows() {
  return "colsRows";
}


function getRegion(region) {
  switch(region) {
    case "land_of_water.js":
      return landOfWater;
    case "land_of_fire.js":
      return landOfFire;
    case "land_of_wind.js":
      return landOfWind;
    default: null;
  }
}
