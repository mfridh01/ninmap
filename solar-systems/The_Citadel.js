var solarSystems = [
  {"region": "The Citadel", "row":  0, "col":  2, "status": 0, "corner": 1, "name": "Kaimon", "adjacent": ["Kausaaja", "Alikara", "Oiniken"]},
  {"region": "The Citadel", "row":  0, "col":  5, "status": 0, "corner": 1, "name": "Kausaaja", "adjacent": ["Kaimon", "Auviken", "Ahynda"]},
  {"region": "The Citadel", "row":  0, "col":  7, "status": 0, "corner": 1, "name": "Uhvosa", "adjacent": ["Auviken", "Jeras"]},
  {"region": "The Citadel", "row":  0, "col": 12, "status": 0, "corner": 0, "name": "Mara", "adjacent": ["Hasama"]},

  {"region": "The Citadel", "row":  1, "col":  4, "status": 0, "corner": 0, "name": "Vellaine", "adjacent": ["Alikara"]},
  {"region": "The Citadel", "row":  1, "col":  6, "status": 0, "corner": 1, "name": "Auviken", "adjacent": ["Kausaaja", "Uhvosa", "Oijamon"]},
  {"region": "The Citadel", "row":  1, "col":  7, "status": 0, "corner": 1, "name": "Oijamon", "adjacent": ["Auviken", "Saikanen", "Jeras"]},
  {"region": "The Citadel", "row":  1, "col":  8, "status": 0, "corner": 1, "name": "Jeras", "adjacent": ["Oijamon", "Usi"]},
  {"region": "The Citadel", "row":  1, "col":  9, "status": 0, "corner": 1, "name": "Usi", "adjacent": ["Jeras", "Ishomilk"]},
  {"region": "The Citadel", "row":  1, "col": 10, "status": 0, "corner": 1, "name": "Ishomilk", "adjacent": ["Usi", "Wikkishima", "Uuna"]},
  {"region": "The Citadel", "row":  1, "col": 11, "status": 0, "corner": 1, "name": "Wikkishima", "adjacent": ["Ishomilk", "Hasama"]},
  {"region": "The Citadel", "row":  1, "col": 12, "status": 0, "corner": 1, "name": "Hasama", "adjacent": ["Wikkishima", "Mara"]},

  {"region": "The Citadel", "row":  2, "col":  3, "status": 0, "corner": 1, "name": "Aikoro", "adjacent": ["Alikara", "Isikemi", "Funtanai", "Oiniken"]},
  {"region": "The Citadel", "row":  2, "col":  4, "status": 0, "corner": 1, "name": "Alikara", "adjacent": ["Vellaine", "Aikoro", "Isanamo", "New Caldari"]},
  {"region": "The Citadel", "row":  2, "col":  6, "status": 0, "corner": 1, "name": "Kakki", "adjacent": ["Auviken", "Saikanen"]},
  {"region": "The Citadel", "row":  2, "col":  7, "status": 0, "corner": 1, "name": "Saikanen", "adjacent": ["Oijamon", "Kakki"]},
  {"region": "The Citadel", "row":  2, "col": 10, "status": 0, "corner": 1, "name": "Uuna", "adjacent": ["Ishomilk", "Hanjona"]},
  {"region": "The Citadel", "row":  2, "col": 11, "status": 0, "corner": 1, "name": "Hanjona", "adjacent": ["Uuna", "Mushikegi"]},
  {"region": "The Citadel", "row":  2, "col": 12, "status": 0, "corner": 0, "name": "Mushikegi", "adjacent": ["Hanjona"]},

  {"region": "The Citadel", "row":  3, "col":  0, "status": 0, "corner": 1, "name": "Horkkisen", "adjacent": ["Eitu"]},
  {"region": "The Citadel", "row":  3, "col":  1, "status": 0, "corner": 1, "name": "Erila", "adjacent": ["Eitu", "Inoue"]},
  {"region": "The Citadel", "row":  3, "col":  4, "status": 0, "corner": 0, "name": "Isanamo", "adjacent": ["Alikara"]},
  {"region": "The Citadel", "row":  3, "col":  6, "status": 0, "corner": 0, "name": "New Caldari", "adjacent": ["Alikara", "Jita"]},
  {"region": "The Citadel", "row":  3, "col":  7, "status": 0, "corner": 0, "name": "Jita", "adjacent": ["New Caldari", "Maurasi", "Huvolail"]},
  {"region": "The Citadel", "row":  3, "col":  8, "status": 0, "corner": 0, "name": "Maurasi", "adjacent": ["Jita", "Huvolail"]},

  {"region": "The Citadel", "row":  4, "col":  0, "status": 0, "corner": 1, "name": "Eitu", "adjacent": ["Horkkisen", "Erila", "Konola"]},
  {"region": "The Citadel", "row":  4, "col":  1, "status": 0, "corner": 1, "name": "Inoue", "adjacent": ["Erila", "Isaziwa"]},
  {"region": "The Citadel", "row":  4, "col":  3, "status": 0, "corner": 0, "name": "Isikemi", "adjacent": ["Aikoro", "Funtanai"]},
  {"region": "The Citadel", "row":  4, "col":  4, "status": 0, "corner": 0, "name": "Funtanai", "adjacent": ["Aikoro", "Isikemi"]},
  {"region": "The Citadel", "row":  4, "col":  7, "status": 0, "corner": 1, "name": "Huvolail", "adjacent": ["Jita", "Maurasi", "Paara", "Annaro"]},

  {"region": "The Citadel", "row":  5, "col":  0, "status": 0, "corner": 1, "name": "Konola", "adjacent": ["Eitu", "Isaziwa"]},
  {"region": "The Citadel", "row":  5, "col":  1, "status": 0, "corner": 1, "name": "Isaziwa", "adjacent": ["Inoue", "Konola", "Oiniken"]},
  {"region": "The Citadel", "row":  5, "col":  2, "status": 0, "corner": 1, "name": "Oiniken", "adjacent": ["Kaimon", "Aikoro", "Isaziwa", "Ahynda"]},
  {"region": "The Citadel", "row":  5, "col":  5, "status": 0, "corner": 1, "name": "Ahynda", "adjacent": ["Kausaaja", "Oiniken", "Paara", "Tunttaras", "Komo"]},
  {"region": "The Citadel", "row":  5, "col":  7, "status": 0, "corner": 1, "name": "Paara", "adjacent": ["Huvolail", "Ahynda", "Annaro"]},
  {"region": "The Citadel", "row":  5, "col":  8, "status": 0, "corner": 1, "name": "Annaro", "adjacent": ["Huvolail", "Paara", "Isutaka"]},
  {"region": "The Citadel", "row":  5, "col":  9, "status": 0, "corner": 1, "name": "Isutaka", "adjacent": ["Annaro", "Iasabesh"]},
  {"region": "The Citadel", "row":  5, "col": 10, "status": 0, "corner": 1, "name": "Iasabesh", "adjacent": ["Isutaka", "Ono"]},
  {"region": "The Citadel", "row":  5, "col": 11, "status": 0, "corner": 1, "name": "Ono", "adjacent": ["Iasabesh"]},

  {"region": "The Citadel", "row":  6, "col":  1, "status": 0, "corner": 1, "name": "Tannolen", "adjacent": ["Tierijev", "Onatoh"]},
  {"region": "The Citadel", "row":  6, "col":  2, "status": 0, "corner": 1, "name": "Onatoh", "adjacent": ["Tannolen", "Eranakko", "Sujarento"]},
  {"region": "The Citadel", "row":  6, "col":  3, "status": 0, "corner": 1, "name": "Eranakko", "adjacent": ["Onatoh", "Sujarento"]},
  {"region": "The Citadel", "row":  6, "col":  6, "status": 0, "corner": 1, "name": "Komo", "adjacent": ["Ahynda", "Oichya"]},
  {"region": "The Citadel", "row":  6, "col":  8, "status": 0, "corner": 1, "name": "Motsu", "adjacent": ["Oichya", "Laah"]},

  {"region": "The Citadel", "row":  7, "col":  0, "status": 0, "corner": 0, "name": "Tierijev", "adjacent": ["Tannolen"]},
  {"region": "The Citadel", "row":  7, "col":  2, "status": 0, "corner": 1, "name": "Sujarento", "adjacent": ["Onatoh", "Eranakko", "Tama"]},
  {"region": "The Citadel", "row":  7, "col":  3, "status": 0, "corner": 1, "name": "Tama", "adjacent": ["Sujarento", "Norwuken", "Kedama"]},
  {"region": "The Citadel", "row":  7, "col":  4, "status": 0, "corner": 0, "name": "Norwuken", "adjacent": ["Tama", "Tunttaras"]},
  {"region": "The Citadel", "row":  7, "col":  7, "status": 0, "corner": 1, "name": "Oichya", "adjacent": ["Komo", "Motsu", "Laah", "Isenaios"]},
  {"region": "The Citadel", "row":  7, "col":  9, "status": 0, "corner": 1, "name": "Laah", "adjacent": ["Motsu", "Oichya", "Aramachi"]},

  {"region": "The Citadel", "row":  8, "col":  3, "status": 0, "corner": 0, "name": "Kedama", "adjacent": ["Tama"]},
  {"region": "The Citadel", "row":  8, "col":  5, "status": 0, "corner": 0, "name": "Tunttaras", "adjacent": ["Ahynda", "Norwuken", "Serekuwa"]},
  {"region": "The Citadel", "row":  8, "col":  7, "status": 0, "corner": 1, "name": "Isenaios", "adjacent": ["Oichya", "Uotila", "Saila"]},
  {"region": "The Citadel", "row":  8, "col":  9, "status": 0, "corner": 1, "name": "Aramachi", "adjacent": ["Laah", "Saila"]},

  {"region": "The Citadel", "row":  9, "col":  1, "status": 0, "corner": 0, "name": "Deven", "adjacent": ["Nagama"]},
  {"region": "The Citadel", "row":  9, "col":  2, "status": 0, "corner": 1, "name": "Nagama", "adjacent": ["Sujarento", "Deven", "Hasmija"]},
  {"region": "The Citadel", "row":  9, "col":  4, "status": 0, "corner": 1, "name": "Kaunokka", "adjacent": ["Ytia", "Venilen"]},
  {"region": "The Citadel", "row":  9, "col":  5, "status": 0, "corner": 0, "name": "Kino", "adjacent": ["Venilen"]},
  {"region": "The Citadel", "row":  9, "col":  6, "status": 0, "corner": 0, "name": "Serekuwa", "adjacent": ["Tunttaras", "Halaima"]},
  {"region": "The Citadel", "row":  9, "col":  7, "status": 0, "corner": 1, "name": "Uotila", "adjacent": ["Isenaios", "Waira"]},
  {"region": "The Citadel", "row":  9, "col":  8, "status": 0, "corner": 1, "name": "Saila", "adjacent": ["Isenaios", "Aramachi"]},

  {"region": "The Citadel", "row": 10, "col":  1, "status": 0, "corner": 1, "name": "Oto", "adjacent": ["Nagama"]},
  {"region": "The Citadel", "row": 10, "col":  2, "status": 0, "corner": 1, "name": "Hasmija", "adjacent": ["Nagama", "Hysera"]},
  {"region": "The Citadel", "row": 10, "col":  3, "status": 0, "corner": 1, "name": "Oisio", "adjacent": ["Ytia", "Hysera", "Oshaima"]},
  {"region": "The Citadel", "row": 10, "col":  4, "status": 0, "corner": 1, "name": "Ytia", "adjacent": ["Kaunokka", "Oisio"]},
  {"region": "The Citadel", "row": 10, "col":  5, "status": 0, "corner": 1, "name": "Venilen", "adjacent": ["Kaunokka", "Kino", "Hogimo"]},
  {"region": "The Citadel", "row": 10, "col":  7, "status": 0, "corner": 1, "name": "Waira", "adjacent": ["Uotila", "Sankkas"]},

  {"region": "The Citadel", "row": 11, "col":  2, "status": 0, "corner": 1, "name": "Hysera", "adjacent": ["Hasmija", "Oisio", "Oshaima"]},
  {"region": "The Citadel", "row": 11, "col":  3, "status": 0, "corner": 1, "name": "Oshaima", "adjacent": ["Oisio", "Ytia", "Hysera"]},
  {"region": "The Citadel", "row": 11, "col":  4, "status": 0, "corner": 1, "name": "Kulelen", "adjacent": ["Ytia", "Tunudan"]},
  {"region": "The Citadel", "row": 11, "col":  5, "status": 0, "corner": 1, "name": "Hogimo", "adjacent": ["Venilen", "Huttaken"]},
  {"region": "The Citadel", "row": 11, "col":  6, "status": 0, "corner": 1, "name": "Halaima", "adjacent": ["Serekuwa", "Sankkas", "Huttaken", "Kamio"]},
  {"region": "The Citadel", "row": 11, "col":  7, "status": 0, "corner": 1, "name": "Sankkas", "adjacent": ["Waira", "Halaima", "Tintoh"]},
  {"region": "The Citadel", "row": 10, "col":  8, "status": 0, "corner": 1, "name": "Tintoh", "adjacent": ["Sankkas", "Santola"]},
  {"region": "The Citadel", "row": 11, "col":  9, "status": 0, "corner": 1, "name": "Kaapute", "adjacent": ["Niarja", "Kamio"]},
  {"region": "The Citadel", "row": 11, "col": 10, "status": 0, "corner": 1, "name": "Niarja", "adjacent": ["Kaapute"]},

  {"region": "The Citadel", "row": 12, "col":  3, "status": 0, "corner": 1, "name": "Tunudan", "adjacent": ["Kulelen", "Enderailen"]},
  {"region": "The Citadel", "row": 12, "col":  5, "status": 0, "corner": 1, "name": "Huttaken", "adjacent": ["Hogimo", "Halaima", "Rairomon"]},
  {"region": "The Citadel", "row": 12, "col":  6, "status": 0, "corner": 1, "name": "Kamio", "adjacent": ["Halaima", "Kaapute", "Ikao"]},
  {"region": "The Citadel", "row": 12, "col":  8, "status": 0, "corner": 1, "name": "Santola", "adjacent": ["Tintoh", "Ikao"]},

  {"region": "The Citadel", "row": 13, "col":  3, "status": 0, "corner": 1, "name": "Enderailen", "adjacent": ["Tunudan", "Rairomon", "Kubinen"]},
  {"region": "The Citadel", "row": 13, "col":  4, "status": 0, "corner": 1, "name": "Rairomon", "adjacent": ["Huttaken", "Enderailen"]},
  {"region": "The Citadel", "row": 13, "col":  6, "status": 0, "corner": 1, "name": "Ikao", "adjacent": ["Kamio", "Santola", "Waskisen", "Uedama", "Irjunen"]},
  {"region": "The Citadel", "row": 13, "col":  8, "status": 0, "corner": 1, "name": "Waskisen", "adjacent": ["Ikao", "Inaro", "Irjunen"]},
  {"region": "The Citadel", "row": 13, "col":  9, "status": 0, "corner": 1, "name": "Inaro", "adjacent": ["Kaapute", "Waskisen", "Sirseshin", "Sirppala"]},
  {"region": "The Citadel", "row": 13, "col": 10, "status": 0, "corner": 0, "name": "Sirseshin", "adjacent": ["Inaro"]},

  {"region": "The Citadel", "row": 14, "col":  0, "status": 0, "corner": 0, "name": "Synchelle", "adjacent": ["Kassigai", "Algogille"]},
  {"region": "The Citadel", "row": 14, "col":  3, "status": 0, "corner": 1, "name": "Kubinen", "adjacent": ["Enderailen", "Uedama", "Sivala"]},
  {"region": "The Citadel", "row": 14, "col":  5, "status": 0, "corner": 1, "name": "Uedama", "adjacent": ["Ikao", "Kubinen", "Sivala", "Juunigai", "Haatomo"]},
  {"region": "The Citadel", "row": 14, "col":  8, "status": 0, "corner": 1, "name": "Irjunen", "adjacent": ["Ikao", "Waskisen", "Inari"]},

  {"region": "The Citadel", "row": 15, "col":  1, "status": 0, "corner": 1, "name": "Kassigai", "adjacent": ["Synchelle", "Hatakani", "Algogille", "Rashunen"]},
  {"region": "The Citadel", "row": 15, "col":  2, "status": 0, "corner": 1, "name": "Hatakani", "adjacent": ["Kassigai", "Sivala", "Rashunen", "Tennen"]},
  {"region": "The Citadel", "row": 15, "col":  3, "status": 0, "corner": 1, "name": "Sivala", "adjacent": ["Kubinen", "Uedama", "Hatakani", "Livinen"]},
  {"region": "The Citadel", "row": 15, "col":  6, "status": 0, "corner": 1, "name": "Juunigai", "adjacent": ["Uedama", "Isikesu", "Suroken", "Anttiri"]},
  {"region": "The Citadel", "row": 15, "col":  7, "status": 0, "corner": 1, "name": "Isikesu", "adjacent": ["Juunigai", "Anttiri"]},
  {"region": "The Citadel", "row": 15, "col":  8, "status": 0, "corner": 1, "name": "Inari", "adjacent": ["Irjunen"]},

  {"region": "The Citadel", "row": 16, "col":  0, "status": 0, "corner": 0, "name": "Algogille", "adjacent": ["Synchelle", "Kassigai"]},
  {"region": "The Citadel", "row": 16, "col":  1, "status": 0, "corner": 1, "name": "Rashunen", "adjacent": ["Kassigai", "Hatakani", "Tennen", "Jolevier"]},
  {"region": "The Citadel", "row": 16, "col":  2, "status": 0, "corner": 1, "name": "Tennen", "adjacent": ["Hatakani", "Rashunen", "Livinen", "Unel"]},
  {"region": "The Citadel", "row": 16, "col":  3, "status": 0, "corner": 1, "name": "Livinen", "adjacent": ["Sivala", "Tennen"]},
  {"region": "The Citadel", "row": 16, "col":  5, "status": 0, "corner": 1, "name": "Haatomo", "adjacent": ["Uedama", "Suroken"]},
  {"region": "The Citadel", "row": 16, "col":  6, "status": 0, "corner": 1, "name": "Suroken", "adjacent": ["Juunigai", "Haatomo", "Anttiri", "Kusomo"]},
  {"region": "The Citadel", "row": 16, "col":  7, "status": 0, "corner": 1, "name": "Anttiri", "adjacent": ["Juunigai", "Isikesu", "Suroken", "Sirppala"]},
  {"region": "The Citadel", "row": 16, "col":  9, "status": 0, "corner": 1, "name": "Sirppala", "adjacent": ["Inaro", "Anttiri", "Urhinichi", "Urlen"]},
  {"region": "The Citadel", "row": 16, "col": 10, "status": 0, "corner": 1, "name": "Urhinichi", "adjacent": ["Sirppala"]},

  {"region": "The Citadel", "row": 17, "col":  1, "status": 0, "corner": 0, "name": "Jolevier", "adjacent": ["Rashunen"]},
  {"region": "The Citadel", "row": 17, "col":  2, "status": 0, "corner": 0, "name": "Unel", "adjacent": ["Tennen"]},
  {"region": "The Citadel", "row": 17, "col":  6, "status": 0, "corner": 1, "name": "Kusomo", "adjacent": ["Suroken", "Urlen"]},
  {"region": "The Citadel", "row": 17, "col":  8, "status": 0, "corner": 0, "name": "Urlen", "adjacent": ["Sirppala", "Kusomo"]},

];

module.exports = solarSystems;
