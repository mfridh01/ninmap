var grids = [
  {"region": "Land of Water", "row":  4, "col": 3, "status": 4, "corner": 5, "name": "Sealed Temple", "adjacent": ["Bamboo Forest"]},

  {"region": "Land of Water", "row":  5, "col": 2, "status": 0, "corner": 5, "name": "Bloody Pond", "adjacent": ["Bamboo Forest", "Ant Tunnel"]},
  {"region": "Land of Water", "row":  5, "col": 3, "status": 0, "corner": 5, "name": "Bamboo Forest", "adjacent": ["Misty Hides", "Sealed Temple"]},

  {"region": "Land of Water", "row":  6, "col": 2, "status": 4, "corner": 5, "name": "Ant Tunnel", "adjacent": ["Bloody Pond"]},

  {"region": "Land of Water", "row":  7, "col": 3, "status": 0, "corner": 1, "name": "Misty Hides", "adjacent": ["3 Way Road Split", "Bamboo Forest"]},

  {"region": "Land of Water", "row":  8, "col": 6, "status": 0, "corner": 1, "name": "Mist Housing", "adjacent": ["Mist Village"]},
  {"region": "Land of Water", "row":  8, "col": 7, "status": 0, "corner": 1, "name": "Silky Crater", "adjacent": ["Mist Village EE"]},

  {"region": "Land of Water", "row":  9, "col": 2, "status": 0, "corner": 5, "name": "LoW Bounty Station", "adjacent": ["3 Way Road Split"]},
  {"region": "Land of Water", "row":  9, "col": 3, "status": 0, "corner": 1, "name": "3 Way Road Split", "adjacent": ["Slight Slope", "LoW Bounty Station", "Big Slope"]},
  {"region": "Land of Water", "row":  9, "col": 4, "status": 0, "corner": 1, "name": "Slight Slope", "adjacent": ["Mist Village WE", "3 Way Road Split"]},
  {"region": "Land of Water", "row":  9, "col": 5, "status": 0, "corner": 1, "name": "Mist Village WE", "adjacent": ["Mist Village", "Slight Slope"]},
  {"region": "Land of Water", "row":  9, "col": 6, "status": 5, "corner": 0, "name": "Mist Village", "adjacent": ["Mist Village WE", "Mist Housing", "Mist Village EE"]},
  {"region": "Land of Water", "row":  9, "col": 7, "status": 0, "corner": 1, "name": "Mist Village EE", "adjacent": ["Mist Village", "Silky Crater"]},
  {"region": "Land of Water", "row":  9, "col": 8, "status": 0, "corner": 1, "name": "Windy Pond", "adjacent": ["Mist Village EE"]},

  {"region": "Land of Water", "row":  10, "col": 0, "status": 0, "corner": 5, "name": "LoW Port", "adjacent": ["Totori Village", "SE Sea V"]},
  {"region": "Land of Water", "row":  10, "col": 1, "status": 0, "corner": 1, "name": "Totori Village", "adjacent": ["By The River", "LoW Port"]},
  {"region": "Land of Water", "row":  10, "col": 2, "status": 0, "corner": 5, "name": "By The River", "adjacent": ["Big Slope", "Totori Village"]},
  {"region": "Land of Water", "row":  10, "col": 3, "status": 0, "corner": 5, "name": "Big Slope", "adjacent": ["3 Way Road Split", "By The River"]},

  {"region": "Land of Water", "row":  14, "col": 0, "status": 3, "corner": 5, "name": "SE Sea", "adjacent": ["SE Sea II"]},
  {"region": "Land of Water", "row":  14, "col": 2, "status": 3, "corner": 5, "name": "SE Sea II", "adjacent": ["SE Sea", "SE Sea III"]},
  {"region": "Land of Water", "row":  14, "col": 4, "status": 3, "corner": 5, "name": "SE Sea III", "adjacent": ["SE Sea II", "SE Sea IV"]},
  {"region": "Land of Water", "row":  14, "col": 6, "status": 3, "corner": 3, "name": "SE Sea IV", "adjacent": ["SE Sea V", "SE Sea III"]},
  {"region": "Land of Water", "row":  14, "col": 8, "status": 3, "corner": 5, "name": "SE Sea V", "adjacent": ["LoW Port", "SE Sea IV"]},

];

module.exports = grids;
