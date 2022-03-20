var grids = [
  {"region": "Land of Fire", "row":  2, "col": 0, "status": 0, "corner": 1, "name": "Tanzaku Castle", "adjacent": ["Tanzaku Quarters"]},
  {"region": "Land of Fire", "row":  2, "col": 5, "status": 0, "corner": 1, "name": "LV Summit", "adjacent": ["Leaf Village", "Mountain Side"]},
  {"region": "Land of Fire", "row":  2, "col": 6, "status": 0, "corner": 1, "name": "Mountain Side", "adjacent": ["LV Summit", "Mountain Peak"]},
  {"region": "Land of Fire", "row":  2, "col": 7, "status": 0, "corner": 1, "name": "Mountain Peak", "adjacent": ["Mountain Side"]},

  {"region": "Land of Fire", "row":  3, "col": 0, "status": 0, "corner": 1, "name": "Tanzaku Quarters", "adjacent": ["Tanzaku Q Entrance", "Tanzaku Castle"]},
  {"region": "Land of Fire", "row":  3, "col": 4, "status": 0, "corner": 1, "name": "LV Housing Dist I", "adjacent": ["Leaf Village"]},
  {"region": "Land of Fire", "row":  3, "col": 5, "status": 5, "corner": 0, "name": "Leaf Village", "adjacent": ["LV Summit", "LV Housing Dist I", "LV Entrance"]},

  {"region": "Land of Fire", "row":  4, "col": 4, "status": 0, "corner": 1, "name": "SW Outskirts", "adjacent": ["LV Entrance"]},
  {"region": "Land of Fire", "row":  4, "col": 5, "status": 0, "corner": 1, "name": "LV Entrance", "adjacent": ["Leaf Village", "LV S Outskirts", "SW Outskirts"]},

  {"region": "Land of Fire", "row":  5, "col": 0, "status": 0, "corner": 1, "name": "Tanzaku Q Entrance", "adjacent": ["End of the Valley", "Tanzaku Quarters"]},
  {"region": "Land of Fire", "row":  5, "col": 3, "status": 0, "corner": 1, "name": "Moist Plains", "adjacent": ["Larva Road", "Striped Lake"]},
  {"region": "Land of Fire", "row":  5, "col": 4, "status": 0, "corner": 1, "name": "Larva Road", "adjacent": ["LV S Outskirts", "Moist Plains"]},
  {"region": "Land of Fire", "row":  5, "col": 5, "status": 0, "corner": 1, "name": "LV S Outskirts", "adjacent": ["LV Entrance", "Larva Road", "3rd Training Grnd"]},
  {"region": "Land of Fire", "row":  5, "col": 6, "status": 0, "corner": 1, "name": "3rd Training Grnd", "adjacent": ["LV S Outskirts", "Outskrits Dead End"]},

  {"region": "Land of Fire", "row":  6, "col": 3, "status": 0, "corner": 5, "name": "Striped Lake", "adjacent": ["Moist Plains", "Valley of the End"]},
  {"region": "Land of Fire", "row":  6, "col": 5, "status": 0, "corner": 1, "name": "Outskrits Dead End", "adjacent": ["3rd Training Grnd"]},

  {"region": "Land of Fire", "row":  7, "col": 0, "status": 0, "corner": 5, "name": "End of the Valley", "adjacent": ["West of the Valley", "Tanzaku Q Entrance"]},
  {"region": "Land of Fire", "row":  7, "col": 1, "status": 0, "corner": 5, "name": "West of the Valley", "adjacent": ["Valley of the End", "End of the Valley"]},
  {"region": "Land of Fire", "row":  7, "col": 3, "status": 0, "corner": 3, "name": "Valley of the End", "adjacent": ["Striped Lake"]},

  {"region": "Land of Fire", "row":  6, "col": 5, "status": 0, "corner": 5, "name": "Water Crossing", "adjacent": ["LV S Outskirts", "Forest of Ambushes"]},

  {"region": "Land of Fire", "row":  8, "col": 5, "status": 0, "corner": 5, "name": "Forest of Ambushes", "adjacent": ["Water Crossing", "Into the Valley"]},

  {"region": "Land of Fire", "row":  9, "col": 5, "status": 0, "corner": 5, "name": "Into the Valley", "adjacent": ["Forest of Ambushes", "Near the Valley"]},


  {"region": "Land of Fire", "row":  10, "col": 3, "status": 0, "corner": 5, "name": "Forest n t Ledge", "adjacent": ["Near the Valley", "Ledge Forest"]},
  {"region": "Land of Fire", "row":  10, "col": 5, "status": 0, "corner": 5, "name": "Near the Valley", "adjacent": ["Into the Valley", "Forest n t Ledge", "Dark Clearing", "Mntn Sea Path"]},

  // SNAKES
  {"region": "Land of Fire", "row":  11, "col": 4, "status": 4, "corner": 5, "name": "SNAKES2", "adjacent": ["SNAKES"]},

  {"region": "Land of Fire", "row":  12, "col": 4, "status": 4, "corner": 5, "name": "SNAKES", "adjacent": ["Ledge Forest Enc", "SNAKES2"]},
  {"region": "Land of Fire", "row":  12, "col": 6, "status": 0, "corner": 5, "name": "Mntn Sea Path", "adjacent": ["Near the Valley", "Dark Clearing"]},
  {"region": "Land of Fire", "row":  12, "col": 7, "status": 0, "corner": 5, "name": "Mntn Sea Path II", "adjacent": ["Mntn Sea Path", "Aoki Sea Port"]},
  {"region": "Land of Fire", "row":  12, "col": 8, "status": 0, "corner": 5, "name": "Aoki Sea Port", "adjacent": ["Mntn Sea Path II"]},

  {"region": "Land of Fire", "row":  13, "col": 3, "status": 0, "corner": 5, "name": "Ledge Forest", "adjacent": ["Ledge Forest Enc", "Forest n t Ledge", "The Forest Exit"]},
  {"region": "Land of Fire", "row":  13, "col": 4, "status": 0, "corner": 5, "name": "Ledge Forest Enc", "adjacent": ["Dark Clearing", "SNAKES"]},
  {"region": "Land of Fire", "row":  13, "col": 5, "status": 0, "corner": 5, "name": "Dark Clearing", "adjacent": ["Near the Valley", "Mntn Sea Path", "Ledge Forest Enc"]},
  {"region": "Land of Fire", "row":  13, "col": 6, "status": 0, "corner": 5, "name": "Myst Rock Wall", "adjacent": ["River Bank"]},

  {"region": "Land of Fire", "row":  14, "col": 6, "status": 0, "corner": 5, "name": "River Bank", "adjacent": ["River Bend", "Myst Rock Wall"]},

  {"region": "Land of Fire", "row":  15, "col": 2, "status": 0, "corner": 5, "name": "Katabami Bridge", "adjacent": ["The Forest Exit"]},
  {"region": "Land of Fire", "row":  15, "col": 3, "status": 0, "corner": 5, "name": "The Forest Exit", "adjacent": ["Katabami Bridge", "LoR Bounty Station", "Ledge Forest"]},
  {"region": "Land of Fire", "row":  15, "col": 4, "status": 0, "corner": 5, "name": "LoR Bounty Station", "adjacent": ["The Forest Exit", "Path t t River Country"]},
  {"region": "Land of Fire", "row":  15, "col": 5, "status": 0, "corner": 5, "name": "Path t t River Country", "adjacent": ["LoR Bounty Station", "Rocky Steps", "River Bend"]},
  {"region": "Land of Fire", "row":  15, "col": 6, "status": 0, "corner": 5, "name": "River Bend", "adjacent": ["Path t t River Country", "River Bank"]},

  {"region": "Land of Fire", "row":  16, "col": 6, "status": 0, "corner": 5, "name": "Rocky Steps", "adjacent": ["Path t t River Country"]},

];

module.exports = grids;
