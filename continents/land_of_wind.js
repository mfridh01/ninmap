var grids = [
  {"region": "Land of Wind", "row":  8, "col": 2, "status": 4, "corner": 5, "name": "Deeper Desert Cavern", "adjacent": ["Secret Desert Cavern"]},

  {"region": "Land of Wind", "row":  9, "col": 0, "status": 4, "corner": 5, "name": "Blood Puppet Fact", "adjacent": ["Old Komori Village"]},
  {"region": "Land of Wind", "row":  9, "col": 2, "status": 4, "corner": 1, "name": "Secret Desert Cavern", "adjacent": ["Desert Cave Ent", "Deeper Desert Cavern"]},
  {"region": "Land of Wind", "row":  9, "col": 6, "status": 0, "corner": 5, "name": "Desert Road", "adjacent": ["Infested Desert Road", "Desert Plains"]},
  {"region": "Land of Wind", "row":  9, "col": 7, "status": 0, "corner": 5, "name": "Desert Plains", "adjacent": ["Desert Road", "Desert Exit"]},
  {"region": "Land of Wind", "row":  9, "col": 8, "status": 0, "corner": 5, "name": "Desert Exit", "adjacent": ["Desert Plains"]},

  {"region": "Land of Wind", "row":  10, "col": 0, "status": 0, "corner": 5, "name": "Old Komori Village", "adjacent": ["Desert Oasis", "Blood Puppet Fact"]},
  {"region": "Land of Wind", "row":  10, "col": 2, "status": 0, "corner": 1, "name": "Desert Cave Ent", "adjacent": ["Sand Hive Grnd", "Secret Desert Cavern"]},
  {"region": "Land of Wind", "row":  10, "col": 5, "status": 0, "corner": 5, "name": "E Desert Valley", "adjacent": ["Desert Palms", "Infested Desert Road"]},
  {"region": "Land of Wind", "row":  10, "col": 6, "status": 0, "corner": 5, "name": "Infested Desert Road", "adjacent": ["E Desert Valley", "Desert Road"]},

  {"region": "Land of Wind", "row":  11, "col": 0, "status": 0, "corner": 1, "name": "Desert Oasis", "adjacent": ["W Desert Valley", "Old Komori Village"]},
  {"region": "Land of Wind", "row":  11, "col": 1, "status": 0, "corner": 1, "name": "W Desert Valley", "adjacent": ["Sand Hive Grnd", "Desert Oasis"]},
  {"region": "Land of Wind", "row":  11, "col": 2, "status": 0, "corner": 1, "name": "Sand Hive Grnd", "adjacent": ["Sand Nesting Grnd", "W Desert Valley", "Desert Cave Ent"]},
  {"region": "Land of Wind", "row":  11, "col": 3, "status": 0, "corner": 1, "name": "Sand Nesting Grnd", "adjacent": ["SV N Entrance", "Sand Hive Grnd"]},
  {"region": "Land of Wind", "row":  11, "col": 4, "status": 0, "corner": 1, "name": "SV N Entrance", "adjacent": ["Sand Village", "Sand Nesting Grnd", "Desert Palms"]},
  {"region": "Land of Wind", "row":  11, "col": 5, "status": 0, "corner": 1, "name": "Desert Palms", "adjacent": ["SV N Entrance"]},
  {"region": "Land of Wind", "row":  11, "col": 6, "status": 1, "corner": 3, "name": "Desert Warzone", "adjacent": ["Desert Palms", "Infested Desert Road"]},

  {"region": "Land of Wind", "row":  12, "col": 4, "status": 5, "corner": 0, "name": "Sand Village", "adjacent": ["SV S Entrance"]},

  {"region": "Land of Wind", "row":  13, "col": 3, "status": 0, "corner": 1, "name": "Crestfallen Tree", "adjacent": ["SV S Entrance"]},
  {"region": "Land of Wind", "row":  13, "col": 4, "status": 0, "corner": 1, "name": "SV S Entrance", "adjacent": ["Sand Village", "Crestfallen Tree", "Howling Canyon"]},
  {"region": "Land of Wind", "row":  13, "col": 5, "status": 0, "corner": 1, "name": "Howling Canyon", "adjacent": ["SV S Entrance"]},
];

module.exports = grids;
