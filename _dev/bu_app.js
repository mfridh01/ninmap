var svgns = "http://www.w3.org/2000/svg";
var svg = document.getElementById('svg');

// Containers - elements.
var relations = []; // Relations table. between systems.

// Globals
const gridSpaceX = 15;
const gridSpaceY = 15;
const rectSizeX = 60;
const rectSizeY = 25;
const rectCenterX = rectSizeX / 2;
const rectCenterY = rectSizeY / 2;

// Startup.
fillRelationsTable();
drawLines();
drawSystems();
setSVGSize();

// This function will fill the releations table.
function fillRelationsTable() {
  var arrTest = [];

  // iterate through all systems and add all the relations.
  // Not sorted.
  for (var i = 0; i < solarSystems.length; i++) {
    var tempArr = createRelations(solarSystems[i].name);
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

// Create the system relations - table. (array)
// returns and array of objects with 2 props.
function createRelations(sys) {
  var solSys = getSolarSystem(sys);
  var adjSys = getSolarSystem(sys).adjacent;
  var tempRelations = [];

  // Iterate through all the adjacent systems.
  // then push them to the relations array.
  for (var i = 0; i < adjSys.length; i++) {
    var adj = getSolarSystem(adjSys[i]);

    // Check to se if the solarsystem we're checking against, is before or after.
    if ((solSys.row <= adj.row && solSys.col < adj.col) || (solSys.row < adj.row && solSys.col >= adj.col)) {
      tempRelations.push({
        "s1" : solSys.name,
        "s2" : adj.name
      });
    } else {
      tempRelations.push({
        "s1" : adj.name,
        "s2" : solSys.name
      });
    }

  }

  // returns an array of objects, in right order.
  return tempRelations;
}

// get the solarSystem Object from name (id)
function getSolarSystem(name) {
  var obj = solarSystems.filter(function ( obj ) {
      return obj.name === name;
  })[0];
  return obj;
}

// draw the systems.
function drawSystems() {
  for (var i = 0; i < solarSystems.length; i++) {
    // Create a group.
    var systemGroup = document.createElementNS(svgns, "g");
    systemGroup.appendChild(svgRect(solarSystems[i]));
    systemGroup.appendChild(svgText(solarSystems[i]));
    svg.appendChild(systemGroup);
  }
}

// draw the lines.
function drawLines() {
  for (var i = 0; i < relations.length; i++) {
    svg.appendChild(svgLine(relations[i]));
    console.log(svgLine(relations[i]));
  }
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
  var s1 = getSolarSystem(relation.s1);
  var s2 = getSolarSystem(relation.s2);
  var x1 = (s1.col * (rectSizeX + gridSpaceX)) + rectSizeX / 2;
  var y1 = (s1.row * (rectSizeY + gridSpaceY)) + rectSizeY / 2;
  var x2 = (s2.col * (rectSizeX + gridSpaceX)) + rectSizeX / 2;
  var y2 = (s2.row * (rectSizeY + gridSpaceY)) + rectSizeY / 2;

  var systemLine = document.createElementNS(svgns, "line");
  systemLine.setAttributeNS(null, "x1", x1);
  systemLine.setAttributeNS(null, "y1", y1);
  systemLine.setAttributeNS(null, "x2", x2);
  systemLine.setAttributeNS(null, "y2", y2);
  systemLine.setAttributeNS(null, "stroke", "grey");
  systemLine.setAttributeNS(null, "stroke-width", 2);

  return systemLine;
}

// create - RECTANGLE SVG tag.
// Takes a solarSystem Object as an argument.
function svgRect(sys) {
  // TODO Debugg, remove later.
  var TEST_color = "blue";
  if (sys.corner == 1) {TEST_color = "white";}
  // -----------------------------------------

  var rectX = sys.col * (rectSizeX + gridSpaceX);
  var rectY = sys.row * (rectSizeY + gridSpaceY);

  var systemRect = document.createElementNS(svgns, "rect");
  systemRect.setAttributeNS(null, "id", "rect-" + sys.name);
  systemRect.setAttributeNS(null, "x", rectX);
  systemRect.setAttributeNS(null, "y", rectY);
  systemRect.setAttributeNS(null, "rx", (rectSizeY / 2) * sys.corner);
  systemRect.setAttributeNS(null, "ry", (rectSizeY / 2) * sys.corner);
  systemRect.setAttributeNS(null, "width", rectSizeX);
  systemRect.setAttributeNS(null, "height", rectSizeY);
  systemRect.setAttributeNS(null, "stroke", "black");
  systemRect.setAttributeNS(null, "stroke-width", "2");
  systemRect.setAttributeNS(null, "fill", getColor(sys.status));

  return systemRect;
}


// create - TEXT SVG tag.
// Takes a solarSystem Object as an argument.
function svgText(sys) {

  var rectX = sys.col * (rectSizeX + gridSpaceX);
  var rectY = sys.row * (rectSizeY + gridSpaceY);
  var centerX = rectX + (rectSizeX / 2);
  var centerY = rectY + (rectSizeY / 2);

  var systemText = document.createElementNS(svgns, "text");
  systemText.setAttributeNS(null, "x", centerX);
  systemText.setAttributeNS(null, "y", centerY);
  systemText.setAttributeNS(null, "font-family", "calibri");
  systemText.setAttributeNS(null, "font-size", 10);
  systemText.setAttributeNS(null, "font-weight", "bold");
  systemText.setAttributeNS(null, "fill", "black");
  systemText.setAttributeNS(null, "text-anchor", "middle");
  systemText.setAttributeNS(null, "alignment-baseline", "middle");
  systemText.innerHTML = sys.name;

  return systemText;
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
    default:
      return "rgb(95, 130, 95)";
  }
}


function getColsRows() {
  return "colsRows";
}
