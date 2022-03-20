const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");

let svgObject = null;
let svgContent = null;

let ninMobs = mobs;
let locations = [];
let filteredMobs = [];
let oldMobs = [];

svgObject = document.getElementById('map');

svgObject.addEventListener("load", function() {
  svgContent = svgObject.contentDocument;
}, false);

searchBar.addEventListener("keyup", (e) => {
  const searchString  = e.target.value.toLowerCase();

  filteredMobs = ninMobs.filter(mob => {
    return mob.name.toLowerCase().includes(searchString);
  });

  if (e.key == "Enter") {
     search();
  }

});

function getMobLocations(mob) {

  let locations = "";
  mob.locations.map((loc) => {
    locations = locations + ", " + loc;
  });

  return locations;
}

function getFilteredMobs() {
  let names = "";
  filteredMobs.map((mob) => {
    names = names + "&nbsp <b>" + mob.name + "</b>" + getMobLocations(mob) + "<br/>";
  });

  return names;
};

function search() {

    if (oldMobs.length >> 0) {
      oldMobs.map((mob) => {
        for (let i = 0; i < mob.locations.length; i++) {
          let idName = mob.locations[i].replace(/\s/g, '');
          let element = svgContent.getElementById("rect-" + idName);
          let bgColor = element.getAttributeNS(null, "fill");
          element.setAttributeNS(null, "fill", "white");
        }
      });
    }
     oldMobs = filteredMobs;
     displayMobs(filteredMobs);
     document.activeElement.blur();
     console.log(filteredMobs);

     let numMobs = filteredMobs.length;
     let numLocations = 0;

     let searchText = "<b><u>Monsters: " + numMobs + "</u></b><br/>" + getFilteredMobs();
     let searchClose = '<a href="">Close</a>';

     document.getElementById("searchBox").style.visibility = "visible";
     document.getElementById("searchBox").innerHTML = searchText + searchClose;

     searchBar.value = "";
};

searchButton.addEventListener("click", (e)=> {
  search();
});

const displayMobs = (mobs) => {
  const htmlString = mobs.map((mob) => {

    if (mob.locations.length >> 0) {
      for (let i = 0; i < mob.locations.length; i++) {
          let idName = mob.locations[i].replace(/\s/g, '');
          let element = svgContent.getElementById("rect-" + idName);
          let bgColor = element.getAttributeNS(null, "fill");
          element.setAttributeNS(null, "fill", "lightgreen");
      }
    }
  });
};