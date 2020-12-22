const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/weekendactivities"
);

const hotspringSeed = [
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-131.661, 55.983]},
  spring_name: "BAILEY HOT SPRING",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "KETCHIKAN (D-5) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-134.839, 57.085]},
  spring_name: "BARANOF WARM SPRINGS",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "SITKA (A-3) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-131.882, 56.68]},
  spring_name: "BARNES LAKE HOT SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(BRADFIELD CANAL (C-6) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-131.559, 55.933]},
  spring_name: "BELL ISLAND HOT SPRINGS",
  degrees_f: "165",
  degrees_c: "74",
  usgs_quadrangle: "KETCHIKAN (D-5) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-131.267, 56.233]},
  spring_name: "BRADFIELD CANAL HOT SPRINGS",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "(BRADFIELD CANAL (A-4) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-146.057, 65.053]},
  spring_name: "CHENA HOT SPRINGS",
  degrees_f: "153",
  degrees_c: "67",
  usgs_quadrangle: "CIRCLE (A-5) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-132.005, 56.717]},
  spring_name: "CHIEF SHAKES HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "(PETERSBURG (C-1) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-169.9, 52.84]},
  spring_name: "CHUGINADAK HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "SAMALGA ISLAND"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-144.637, 65.483]},
  spring_name: "CIRCLE HOT SPRINGS",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "CIRCLE (B-2) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-162.3, 64.85]},
  spring_name: "CLEAR CREEK HOT SPRINGS",
  degrees_f: "149",
  degrees_c: "65",
  usgs_quadrangle: "(SOLOMON (D-1) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-149.547, 66.217]},
  spring_name: "DALL HOT SPRINGS",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "(BEAVER (A-6) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-133.641, 55.334]},
  spring_name: "DALTON (CRAIG) HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "CRAIG (B-5) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-154.993, 65.908]},
  spring_name: "DENIKTOW RIDGE HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "MELOZITNA (D-4) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-161.961, 55.368]},
  spring_name: "FUMAROLE",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "PORT MOLLER"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-178.793, 51.775]},
  spring_name: "FUMAROLES ON GARELOI ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "GARELOI ISLAND"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-178.77, 51.762]},
  spring_name: "FUMAROLES ON GARELOI ISLAND",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "GARELOI ISLAND"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-177.16, 51.925]},
  spring_name: "FUMAROLES ON KANAGA ISLAND",
  degrees_f: "219",
  degrees_c: "104",
  usgs_quadrangle: "ADAK"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [178.547, 51.944]},
  spring_name: "FUMAROLES ON LITTLE SITKIN ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "RAT ISLANDS"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [178.491, 51.963]},
  spring_name: "FUMAROLES ON LITTLE SITKIN ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "RAT ISLANDS"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [178.444, 51.967]},
  spring_name: "FUMAROLES ON LITTLE SITKIN ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "RAT ISLANDS"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-156.499, 57.865]},
  spring_name: "GAS ROCKS HOT SPRING",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "(UGASHIK (D-2) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-135.374, 56.836]},
  spring_name: "GODDARD HOT SPRINGS",
  degrees_f: "153",
  degrees_c: "67",
  usgs_quadrangle: "PORT ALEXANDER (D-5) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-161.25, 65.367]},
  spring_name: "GRANITE MOUNTAIN HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "(CANDLE (B-5) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-154.837, 64.924]},
  spring_name: "HORNER HOT SPRINGS",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "RUBY (D-4) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-151.238, 61.267]},
  spring_name: "HOT LAKE IN BOTTOM OF CRATER PEAK",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(TYONEK (B-6) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-162.137, 55.334]},
  spring_name: "HOT SPRING AT WEST END EMMONS LAKE",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "COLD BAY"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-153.883, 67.403]},
  spring_name: "HOT SPRING NEAR ARRIGETCH PEAKS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "SURVEY PASS"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-135.385, 57.348]},
  spring_name: "HOT SPRING NEAR FISH BAY",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "SITKA (B-5) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-157.933, 62.45]},
  spring_name: "HOT SPRING NEAR FLAT",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(IDITAROD (B-4) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-155.09, 58.24]},
  spring_name: "HOT SPRING NEAR KATMAI PASS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(MT. KATMAI (A-4) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-162.467, 64.7]},
  spring_name: "HOT SPRING NEAR KWINIUK RIVER",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "(SOLOMON (C-1) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-150, 65.45]},
  spring_name: "HOT SPRING NEAR LITTLE MINOOK CR",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(TANANA (B-1) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-157.015, 57.178]},
  spring_name: "HOT SPRING NEAR MOTHER GOOSE LAKE",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "(UGASHIK (A-4) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-160.493, 55.863]},
  spring_name: "HOT SPRING NEAR PORT MOLLER",
  degrees_f: "160",
  degrees_c: "71",
  usgs_quadrangle: "PORT MOLLER (D-2) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-160.692, 61.058]},
  spring_name: "HOT SPRING NEAR TULUKSAK RIVER",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(RUSSIAN MISSION (A-5) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-135.82, 57.771]},
  spring_name: "HOT SPRING NORTH ARM PERIL STRAIT",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "(SITKA (D-6) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-162.885, 54.9]},
  spring_name: "HOT SPRING ON AMAGAT ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(FALSE PASS (D-3) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [173.13, 52.87]},
  spring_name: "HOT SPRING ON ATTU ISLAND",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "ATTU"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-142.848, 65.047]},
  spring_name: "HOT SPRING ON FLAT CREEK",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(CHARLEY RIVER (A-4) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-169.71, 52.96]},
  spring_name: "HOT SPRING ON KAGAMIL ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "SAMALGA ISLAND"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [178.5, 51.94]},
  spring_name: "HOT SPRING ON LITTLE SITKIN ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "RAT ISLANDS"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-172.317, 52.358]},
  spring_name: "HOT SPRING ON SEGUAM ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "SEGUAM"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-177.79, 51.81]},
  spring_name: "HOT SPRING ON TANAGA ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "ADAK"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-156.3, 64.002]},
  spring_name: "HOT SPRING ON TRIBUTARY OF INNOKO R",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(NULATO (A-1) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-142.42, 60.837]},
  spring_name: "HOT SPRING ON TWELVEMILE CREEK",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "BERING GLACIER"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-168.3, 53.233]},
  spring_name: "HOT SPRING ON UMNAK ISLAND",
  degrees_f: "149",
  degrees_c: "65",
  usgs_quadrangle: "UMNAK"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-164.55, 54.66]},
  spring_name: "HOT SPRING ON UNIMAK ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "UNIMAK"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-153.98, 58.92]},
  spring_name: "HOT SPRING WEST OF CAPE DOUGLAS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(AFOGNAK (D-6) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-162.483, 55.217]},
  spring_name: "HOT SPRINGS EAST OF COLD BAY",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "COLD BAY"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-150.717, 63.883]},
  spring_name: "HOT SPRINGS EAST OF DIAMOND",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(MT. MCKINLEY (D-2)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-156.767, 66.367]},
  spring_name: "HOT SPRINGS NEAR DIVISION BM",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-155.28, 65.267]},
  spring_name: "HOT SPRINGS NEAR DULBI RIVER",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "(MELOZITNA (B-5) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-168.463, 53.213]},
  spring_name: "HOT SPRINGS NEAR GEYSER BIGHT",
  degrees_f: "216",
  degrees_c: "102",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-168.445, 53.207]},
  spring_name: "HOT SPRINGS NEAR GEYSER BIGHT",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-168.477, 53.223]},
  spring_name: "HOT SPRINGS NEAR GEYSER BIGHT",
  degrees_f: "214",
  degrees_c: "101",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-151.233, 63.683]},
  spring_name: "HOT SPRINGS NEAR GLACIER",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(MT. MCKINLEY (C-3)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-165.85, 54.157]},
  spring_name: "HOT SPRINGS NEAR HOT SPRINGS BAY",
  degrees_f: "181",
  degrees_c: "83",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-168.365, 53.242]},
  spring_name: "HOT SPRINGS NEAR HOT SPRINGS COVE",
  degrees_f: "192",
  degrees_c: "89",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-168.358, 53.253]},
  spring_name: "HOT SPRINGS NEAR HOT SPRINGS COVE",
  degrees_f: "158",
  degrees_c: "70",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-137.09, 58.37]},
  spring_name: "HOT SPRINGS NEAR ICY POINT",
  degrees_f: "153",
  degrees_c: "67",
  usgs_quadrangle: "(MT. FAIRWEATHER (B-4) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-162.9, 65.217]},
  spring_name: "HOT SPRINGS NEAR LAVA CREEK",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "(BENDELEBEN (A-2) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-166.873, 53.848]},
  spring_name: "HOT SPRINGS NEAR MAKUSHIN VOLCANO",
  degrees_f: "94",
  degrees_c: "34",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-166.918, 53.851]},
  spring_name: "HOT SPRINGS NEAR MAKUSHIN VOLCANO",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-163.251, 54.944]},
  spring_name: "HOT SPRINGS NEAR MORZHOVOI",
  degrees_f: "145",
  degrees_c: "63",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-154.89, 58.27]},
  spring_name: "HOT SPRINGS NEAR MT KATMAI",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(MT. KATMAI (B-3) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-159.863, 61.2]},
  spring_name: "HOT SPRINGS NEAR OPHIR CREEK",
  degrees_f: "145",
  degrees_c: "63",
  usgs_quadrangle: "(RUSSIAN MISSION (A-2) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-157.117, 66.15]},
  spring_name: "HOT SPRINGS NEAR SOUTH BM",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-166.448, 53.877]},
  spring_name: "HOT SPRINGS NEAR SUMMER BAY",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-136.017, 58.033]},
  spring_name: "HOT SPRINGS NORTH END TENAKEE INLET",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "(MT. FAIRWEATHER (A-1) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-176.61, 51.97]},
  spring_name: "HOT SPRINGS ON ADAK ISLAND",
  degrees_f: "154",
  degrees_c: "68",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-165.41, 54.18]},
  spring_name: "HOT SPRINGS ON AKUN ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-165.66, 54.23]},
  spring_name: "HOT SPRINGS ON AKUN ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-174.25, 52.19]},
  spring_name: "HOT SPRINGS ON ATKA ISLAND",
  degrees_f: "167",
  degrees_c: "75",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-174.26, 52.34]},
  spring_name: "HOT SPRINGS ON ATKA ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-174.042, 52.27]},
  spring_name: "HOT SPRINGS ON ATKA ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-144.483, 65.233]},
  spring_name: "HOT SPRINGS ON BIG WINDY CREEK",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(CIRCLE (A-1) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-168.037, 53.95]},
  spring_name: "HOT SPRINGS ON BOGOSLOF ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-176.108, 52.042]},
  spring_name: "HOT SPRINGS ON GREAT SITKIN ISLAND",
  degrees_f: "210",
  degrees_c: "99",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-157.583, 66.233]},
  spring_name: "HOT SPRINGS ON HAWK RIVER",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-150.56, 65.983]},
  spring_name: "HOT SPRINGS ON LOWER RAY RIVER",
  degrees_f: "142",
  degrees_c: "61",
  usgs_quadrangle: "(TANANA (D-2) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-157.733, 61.363]},
  spring_name: "HOT SPRINGS ON UPPER CHUILNUK RIVER",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(SLEETMUTE (B-4) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-149.993, 65.216]},
  spring_name: "HUTLINANA HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "LIVENGOOD (A-6) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-150.85, 66.342]},
  spring_name: "KANUTI HOT SPRINGS",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "(BETTLES (B-2) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-151.237, 65.81]},
  spring_name: "KILO HOT SPRING",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "TANANA (D-3)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-153.312, 65.459]},
  spring_name: "LITTLE MELOZITNA HOT SPRINGS",
  degrees_f: "176",
  degrees_c: "80",
  usgs_quadrangle: "MELOZITNA (B-1) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-166.93, 53.892]},
  spring_name: "MAKUSHIN VOLCANO FUMAROLES",
  degrees_f: "310",
  degrees_c: "154",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-150.633, 65.006]},
  spring_name: "MANLEY HOT SPRINGS",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "TANANA (A-2)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-154.692, 65.129]},
  spring_name: "MELOZI (MELOZITNA) SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "MELOZITNA (A-4) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-145.222, 62.058]},
  spring_name: "MINERAL SPRING (LOWER KLAWASI CONE)",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "GULKANA (A-3) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-135.333, 57.644]},
  spring_name: "NYLEN HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "(SITKA (C-5) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-144.044, 69.33]},
  spring_name: "OKPILAK SPRINGS",
  degrees_f: "119",
  degrees_c: "49",
  usgs_quadrangle: "(MT. MICHELSON (B-1) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-164.922, 65.093]},
  spring_name: "PILGRIM SPRINGS",
  degrees_f: "178",
  degrees_c: "81",
  usgs_quadrangle: "BENDELEBEN (A-6) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-154.033, 65.97]},
  spring_name: "POCAHONTAS HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "MELOZITNA (D-3) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-150.919, 65.963]},
  spring_name: "RAY RIVER HOT SPRING",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "TANANA (D-2) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-146.027, 69.627]},
  spring_name: "RED HILL SPRING",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "MT. MICHELSON (C-4)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-155.067, 67.283]},
  spring_name: "REED RIVER HOT SPRING",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-164.71, 65.858]},
  spring_name: "SERPENTINE HOT SPRINGS",
  degrees_f: "171",
  degrees_c: "77",
  usgs_quadrangle: "BENDELEBEN (D-6) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-132.18, 56.58]},
  spring_name: "SOUTH STIKINE SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(PETERSBURG (C-1) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-158.12, 56.928]},
  spring_name: "SURPRISE LAKE HOT SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(CHIGNIK (D-1) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-135.217, 57.781]},
  spring_name: "TENAKEE HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "SITKA (D-4) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-168.092, 53.443]},
  spring_name: "THERMAL SPRINGS IN OKMOK CALDERA",
  degrees_f: "212",
  degrees_c: "100",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-148.847, 65.274]},
  spring_name: "TOLOVANA HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "LIVENGOOD (B-4) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-154.006, 66.197]},
  spring_name: "TUNALKTEN LAKE HOT SPRING",
  degrees_f: null,
  degrees_c: null,
  usgs_quadrangle: "HUGHES (A-3) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-132.28, 56.667]},
  spring_name: "TWIN LAKES HOT SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(PETERSBURG (C-1) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-145.007, 62.081]},
  spring_name: "UPPER KLAWASI WARM SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "GULKANA (A-3) 15"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-156.513, 57.831]},
  spring_name: "W UKINEK SPRING",
  degrees_f: "178",
  degrees_c: "81",
  usgs_quadrangle: "(UGASHIK (D-2) 15)"
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-157.517, 66.383]},
  spring_name: "WARM SPRING NEAR PURCELL MOUNTAIN",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: null
  },
  {
  state_code: "AK",
  loc: { type: "Point", coordinates: [-136.341, 57.807]},
  spring_name: "WHITE SULPHUR SPRINGS (HOONIAH H S)",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "SITKA (D-8) 15"
  },
  {
  state_code: "AR",
  loc: { type: "Point", coordinates: [-93.024, 34.542]},
  spring_name: "BIG CHALYBEATE SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "HOT SPRINGS NORTH 7.5"
  },
  {
  state_code: "AR",
  loc: { type: "Point", coordinates: [-93.607, 34.384]},
  spring_name: "CADDO GAP SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "(GLENWOOD 15)"
  },
  {
  state_code: "AR",
  loc: { type: "Point", coordinates: [-93.053, 34.513]},
  spring_name: "HOT SPRINGS",
  degrees_f: "147",
  degrees_c: "64",
  usgs_quadrangle: "HOT SPRINGS NORTH 7.5"
  },
  {
  state_code: "AR",
  loc: { type: "Point", coordinates: [-93.908, 34.406]},
  spring_name: "SPRING ON LITTLE MISSOURI RIVER",
  degrees_f: "74",
  degrees_c: "23",
  usgs_quadrangle: "(ATHENS 15)"
  },
  {
  state_code: "AR",
  loc: { type: "Point", coordinates: [-93.739, 34.321]},
  spring_name: "SPRING ON REDLAND MOUNTAIN",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(GLENWOOD 15)"
  },
  {
  state_code: "AR",
  loc: { type: "Point", coordinates: [-91.053, 36.48]},
  spring_name: "WARM SPRINGS",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "WARM SPRINGS 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-110.73, 32.281]},
  spring_name: "AGUA CALIENTE",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "BELLOTA RANCH 15"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-110.963, 31.695]},
  spring_name: "AGUA CALIENTE SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "MOUNT WRIGHTSON 15"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-113.324, 32.984]},
  spring_name: "AGUA CALIENTE SPRINGS",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "AGUA CALIENTE 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-109.902, 31.673]},
  spring_name: "ANTELOPE SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "HAY MOUNTAIN 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-109.265, 31.362]},
  spring_name: "ASTIN SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "COLLEGE PEAKS 15"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-114.221, 34.925]},
  spring_name: "CALICHE SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "YUCCA NW 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-113.425, 35.213]},
  spring_name: "CASA GRANDE SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: null
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-110.403, 33.51]},
  spring_name: "CASSADORE SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "CASSADORE SPRING 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-112.362, 33.988]},
  spring_name: "CASTLE HOT SPRINGS",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "GOVERNORS PEAK 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-109.295, 33.055]},
  spring_name: "CLIFTON HOT SPRINGS",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "(CLIFTON 15)"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-113.572, 34.695]},
  spring_name: "COFER HOT SPRING",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "WIKIEUP 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-111.852, 36.509]},
  spring_name: "COLORADO POOL",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "(EMMETT WASH 15)"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-110.528, 33.17]},
  spring_name: "COOLIDGE DAM WARM SPRING",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "COOLIDGE DAM 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-109.44, 33.046]},
  spring_name: "EAGLE CREEK HOT SPRINGS",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "CLIFTON 15"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-113.851, 35.169]},
  spring_name: "FROST MINE SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(HUALAPAI PEAK NE 7.5)"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-109.35, 32.971]},
  spring_name: "GILLARD HOT SPRINGS",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "GUTHRIE 15"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-109.778, 33.008]},
  spring_name: "GRAPEVINE SPRING",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(FORT THOMAS 15)"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-109.152, 33.4]},
  spring_name: "HANNAH HOT SPRING",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "DUTCH BLUE CREEK 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-110.24, 32.336]},
  spring_name: "HOOKERS HOT SPRINGS",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "WINCHESTER MTS. 15"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-114.742, 35.984]},
  spring_name: "HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "RINGBOLT RAPIDS 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-109.303, 33.08]},
  spring_name: "HOT SPRING",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "CLIFTON 15"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-114.725, 35.96]},
  spring_name: "HOT SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "RINGBOLT RAPIDS 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-109.901, 32.998]},
  spring_name: "INDIAN HOT SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "THATCHER 15"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-113.497, 34.563]},
  spring_name: "KAISER HOT SPRING",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: null
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-113.081, 36.196]},
  spring_name: "LAVA WARM SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "VULCANS THRONE 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-109.51, 31.592]},
  spring_name: "LEWIS SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(SWISSHELM MTN. 15)"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-110.708, 32.337]},
  spring_name: "MERCER SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "BELLOTA RANCH 15"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-110.639, 33.152]},
  spring_name: "MESCAL WARM SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "MESCAL WARM SPRING 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-112.332, 33.915]},
  spring_name: "MITCHELL SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "GOVERNORS PEAK 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-110.703, 31.637]},
  spring_name: "MONKEY SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "SONOITA 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-110.228, 32.327]},
  spring_name: "N-O SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "WINCHESTER MTS. 15"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-114.308, 34.896]},
  spring_name: "OATMAN WARM SPRINGS",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "WARM SPRINGS 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-113.956, 36.418]},
  spring_name: "PAKOON SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "PAKOON SPRINGS 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-110.818, 33.209]},
  spring_name: "PIONEER SPRING",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(EL CAPITAN MTN. 7.5)"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-113.013, 31.943]},
  spring_name: "QUITOBAQUITO SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "QUITOBAQUITO SPRINGS 15"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-114.068, 32.741]},
  spring_name: "RADIUM HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "WELLTON MESA 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-111.165, 33.669]},
  spring_name: "ROOSEVELT DAM SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "THEODORE ROOSEVELT DAM 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-109.402, 34.436]},
  spring_name: "SALADO SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "SALADO 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-110.574, 33.831]},
  spring_name: "SALT BANKS",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "(BLUE HOUSE MTN. 15)"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-109.298, 33.075]},
  spring_name: "SEEP",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "(CLIFTON 15)"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-111.744, 34.649]},
  spring_name: "SODA SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "CASNER BUTTE 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-111.602, 34.405]},
  spring_name: "SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "STRAWBERRY 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-110.703, 33.253]},
  spring_name: "SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(CUTTER 7.5)"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-110.662, 33.163]},
  spring_name: "SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "MESCAL WARM SPRING 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-112.693, 34.445]},
  spring_name: "SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "KIRKLAND 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-111.708, 34.076]},
  spring_name: "SPRING (HOT)",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "CHALK MOUNTAIN 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-113.913, 36.895]},
  spring_name: "SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "LITTLEFIELD 15"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-113.608, 34.91]},
  spring_name: "TOM BROWN WARM SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "TOM BROWN CANYON 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-111.453, 34.32]},
  spring_name: "TONTO NATURAL BRIDGE SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "BUCKHEAD MESA 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-113.267, 35.077]},
  spring_name: "TROUT CREEK SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: null
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-111.71, 34.357]},
  spring_name: "VERDE HOT SPRINGS",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "VERDE HOT SPRINGS 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-109.975, 33.068]},
  spring_name: "WARM SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "FORT THOMAS 15"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-109.482, 33.062]},
  spring_name: "WARM SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(CLIFTON 15)"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-110.317, 33.78]},
  spring_name: "WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "CARRIZO SE 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-110.373, 32.983]},
  spring_name: "WARM SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "COBRE GRANDE MTN. 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-110.247, 32.345]},
  spring_name: "WARM SPRINGS",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(WINCHESTER MTS. 15)"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-110.213, 33.438]},
  spring_name: "WARM SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "BRONCO GULCH 7.5"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-110.668, 33.198]},
  spring_name: null,
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "(MESCAL WARM SPRING"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-110.235, 33.748]},
  spring_name: null,
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "(FORKS BUTTE 7.5)"
  },
  {
  state_code: "AZ",
  loc: { type: "Point", coordinates: [-113.81, 35.11]},
  spring_name: null,
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(DEAN PEAK 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.444, 39.022]},
  spring_name: "ABBOTT MINE",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "WILBUR SPRINGS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.484, 38.654]},
  spring_name: "AETNA SPRINGS",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "AETNA SPRINGS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.56, 34.538]},
  spring_name: "AGUA CALIENTE SPRING",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "HILDRETH PEAK 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.305, 32.947]},
  spring_name: "AGUA CALIENTE SPRINGS",
  degrees_f: "101",
  degrees_c: "38",
  usgs_quadrangle: "AGUA CALIENTE 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.017, 33.363]},
  spring_name: "AGUA TIBIA SPRING",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "(PALA 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.904, 37.503]},
  spring_name: "ALAMEDA WARM SPRINGS",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "NILES 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.195, 40.302]},
  spring_name: "AMEDEE HOT SPRINGS",
  degrees_f: "203",
  degrees_c: "95",
  usgs_quadrangle: "WENDEL 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.705, 38.773]},
  spring_name: "ANDERSON SPRINGS",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "WHISPERING PINES 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.262, 34.185]},
  spring_name: "ARROWHEAD SPRINGS WATERMAN HOT SPR",
  degrees_f: "194",
  degrees_c: "90",
  usgs_quadrangle: "SAN BERNARDINO NORTH 7.5"
  },
  
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.667, 38.85]},
  spring_name: "BAD CREEK SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "(WHISPERING PINES 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.38, 35.842]},
  spring_name: "BAINTER SPRING",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "TRONA 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.533, 38.892]},
  spring_name: "BAKER SODA SPRING",
  degrees_f: "76",
  degrees_c: "24",
  usgs_quadrangle: "LOWER LAKE 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.032, 41.167]},
  spring_name: "BARE RANCH SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(SNAKE LAKE 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.7, 39.183]},
  spring_name: "BARTLETT SPRINGS",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "CLEARLAKE OAKS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.11, 41.143]},
  spring_name: "BASSETT HOT SPRINGS",
  degrees_f: "174",
  degrees_c: "79",
  usgs_quadrangle: "BIEBER 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.532, 37.802]},
  spring_name: "BENTON HOT SPRINGS",
  degrees_f: "134",
  degrees_c: "57",
  usgs_quadrangle: "GLASS MOUNTAIN 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.487, 37.888]},
  spring_name: "BERTRAND RANCH SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "BENTON 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.924, 41.025]},
  spring_name: "BIG BEND HOT SPRINGS",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "BIG BEND 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.787, 39.006]},
  spring_name: "BIG SODA SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "LUCERNE 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.881, 37.234]},
  spring_name: "BLANEY MEADOWS HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "BLACKCAP MTN. 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.432, 39.032]},
  spring_name: "BLANK SPRING MANZANITA MINE SPRS",
  degrees_f: "112",
  degrees_c: "45",
  usgs_quadrangle: "WILBUR SPRINGS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.369, 41.919]},
  spring_name: "BOGUS SODA SPRINGS",
  degrees_f: "76",
  degrees_c: "24",
  usgs_quadrangle: "COPCO 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.399, 40.434]},
  spring_name: "BOILING SPRINGS LAKE",
  degrees_f: "190",
  degrees_c: "88",
  usgs_quadrangle: "MT. HARKNESS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.538, 34.423]},
  spring_name: "BORON SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(CARPINTERIA 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.01, 39.226]},
  spring_name: "BROCKWAY HOT SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "(KINGS BEACH 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.326, 38.237]},
  spring_name: "BUCKEYE HOT SPRING",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "MATTERHORN PEAK 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.501, 40.455]},
  spring_name: "BUMPASS HELL",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "LASSEN PEAK 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.635, 37.847]},
  spring_name: "BYRON HOT SPRINGS",
  degrees_f: "96",
  degrees_c: "36",
  usgs_quadrangle: "BYRON HOT SPRINGS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.67, 35.881]},
  spring_name: "CALIFORNIA HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "CALIFORNIA HOT SPRINGS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.575, 38.58]},
  spring_name: "CALISTOGA HOT SPRINGS",
  degrees_f: "172",
  degrees_c: "78",
  usgs_quadrangle: "CALISTOGA 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.25, 35.4]},
  spring_name: "CAMETA WARM SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(LA PANZA RANCH 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.348, 39.573]},
  spring_name: "CAMPBELL HOT SPRINGS",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "SIERRAVILLE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-115.654, 33.545]},
  spring_name: "CANYON SPRING",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "HAYFIELD 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.799, 38.916]},
  spring_name: "CARLSBAD SPRING",
  degrees_f: "76",
  degrees_c: "24",
  usgs_quadrangle: "KELSEYVILLE 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.846, 35.439]},
  spring_name: "CARNEROS SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "CARNEROS ROCKS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.859, 37.647]},
  spring_name: "CASA DIABLO HOT POOL",
  degrees_f: "165",
  degrees_c: "74",
  usgs_quadrangle: "MT. MORRISON 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.914, 37.648]},
  spring_name: "CASA DIABLO HOT SPRINGS AND GEYSER",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "MT. MORRISON 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.717, 38.768]},
  spring_name: "CASTLE ROCK SPRINGS",
  degrees_f: "163",
  degrees_c: "73",
  usgs_quadrangle: "WHISPERING PINES 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.887, 37.638]},
  spring_name: "CHANCE SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(MT. MORRISON 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.189, 35.946]},
  spring_name: "CHAPPO SPRING",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "TECOPA 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.555, 36.144]},
  spring_name: "COALINGA MINERAL SPRINGS",
  degrees_f: "112",
  degrees_c: "44",
  usgs_quadrangle: "SHERMAN PEAK 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-115.325, 33.625]},
  spring_name: "CORN SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "CHUCKWALLA MOUNTAINS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.769, 36.045]},
  spring_name: "COSO HOT SPRINGS",
  degrees_f: "207",
  degrees_c: "97",
  usgs_quadrangle: "HAIWEE RESERVOIR 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.821, 39.292]},
  spring_name: "CRABTREE HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "POTATO HILL 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.762, 37.632]},
  spring_name: "CROHARE SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(LIVERMORE 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.642, 38.995]},
  spring_name: "DAVIS SODA SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(CLEARLAKE HIGHLANDS 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.324, 33.436]},
  spring_name: "DE LUZ WARM SPRINGS",
  degrees_f: "85",
  degrees_c: "29",
  usgs_quadrangle: "(FALLBROOK 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.79, 37.677]},
  spring_name: "DEHY HOT SPRING",
  degrees_f: "134",
  degrees_c: "57",
  usgs_quadrangle: "(MT. MORRISON 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.612, 35.558]},
  spring_name: "DELONEGHA HOT SPRINGS",
  degrees_f: "112",
  degrees_c: "44",
  usgs_quadrangle: "MIRACLE HOT SPRINGS"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.665, 35.528]},
  spring_name: "DEMOCRAT HOT SPRINGS",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "DEMOCRAT HOT SPRINGS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.802, 36.036]},
  spring_name: "DEVILS KITCHEN",
  degrees_f: "207",
  degrees_c: "97",
  usgs_quadrangle: "HAIWEE RESERVOIR 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.434, 40.44]},
  spring_name: "DEVILS KITCHEN",
  degrees_f: "203",
  degrees_c: "95",
  usgs_quadrangle: "MT. HARKNESS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.948, 36.33]},
  spring_name: "DIRTY SOCKS HOT SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "KEELER 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.584, 36.084]},
  spring_name: "DOLANS HOT SPRING",
  degrees_f: "98",
  degrees_c: "37",
  usgs_quadrangle: "LOPEZ POINT 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-115.827, 33.512]},
  spring_name: "DOS PALMAS SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "OROCOPIA CANYON 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.409, 40.444]},
  spring_name: "DRAKESBAD",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "MT. HARKNESS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.057, 33.896]},
  spring_name: "EDEN HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "EL CASCO 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.499, 34.159]},
  spring_name: "EL ENCINO SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "VAN NUYS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.475, 39.057]},
  spring_name: "ELGIN MINE",
  degrees_f: "156",
  degrees_c: "69",
  usgs_quadrangle: "WILBUR SPRINGS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.882, 38.897]},
  spring_name: "ENGLAND SPRINGS",
  degrees_f: "76",
  degrees_c: "24",
  usgs_quadrangle: "(HIGHLAND SPRINGS 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.7, 41.492]},
  spring_name: "ESSEX SPRINGS",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "ALTURAS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.913, 33.664]},
  spring_name: "FAIRVIEW HOT SPRING",
  degrees_f: "96",
  degrees_c: "36",
  usgs_quadrangle: "(NEWPORT BEACH 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.4, 38.348]},
  spring_name: "FALES HOT SPRINGS",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "FALES HOT SPRINGS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.025, 37.532]},
  spring_name: "FISH CREEK HOT SPRINGS",
  degrees_f: "110",
  degrees_c: "43",
  usgs_quadrangle: "DEVILS POSTPILE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.035, 33.407]},
  spring_name: "FISH SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(OASIS 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.158, 41.86]},
  spring_name: "FORT BIDWELL HOT SPRING",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "FORT BIDWELL 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.668, 39.348]},
  spring_name: "FOUTS SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "FOUTS SPRINGS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.833, 36.031]},
  spring_name: "FUMAROLE",
  degrees_f: "203",
  degrees_c: "95",
  usgs_quadrangle: "HAIWEE RESERVOIR 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.659, 38.979]},
  spring_name: "FUMAROLE",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(CLEARLAKE HIGHLANDS 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.028, 37.622]},
  spring_name: "FUMAROLES",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(DEVILS POSTPILE 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.988, 33.835]},
  spring_name: "GILMAN HOT SPRINGS",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "SAN JACINTO 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.478, 37.108]},
  spring_name: "GILROY HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "GILROY HOT SPRINGS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.495, 33.753]},
  spring_name: "GLEN IVY HOT SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "LAKE MATTHEWS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.731, 38.835]},
  spring_name: "GORDON WARM SPRINGS",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "(WHISPERING PINES 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.383, 37.029]},
  spring_name: "GRAPEVINE SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "UBEHEBE CRATER 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.498, 39.002]},
  spring_name: "GRIZZLY SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "WILBUR SPRINGS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.846, 38.699]},
  spring_name: "GROVERS HOT SPRINGS",
  degrees_f: "147",
  degrees_c: "64",
  usgs_quadrangle: "MARKLEEVILLE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.507, 40.393]},
  spring_name: "GROWLER HOT SPRING",
  degrees_f: "203",
  degrees_c: "95",
  usgs_quadrangle: "LASSEN PEAK 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.655, 38.785]},
  spring_name: "HARBIN SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "WHISPERING PINES 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.007, 40.245]},
  spring_name: "HIGH ROCK SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "DOYLE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.942, 33.969]},
  spring_name: "HIGHLAND SPRINGS",
  degrees_f: "112",
  degrees_c: "44",
  usgs_quadrangle: "BEAUMONT 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.907, 38.936]},
  spring_name: "HIGHLAND SPRINGS",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "HIGHLAND SPRINGS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.77, 38.925]},
  spring_name: "HILDEBRANDE SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(KELSEYVILLE 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-123.17, 38.8]},
  spring_name: "HOODS HOT SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "(HOPLAND 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.742, 38.994]},
  spring_name: "HORSESHOE SPRING",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "(CLEARLAKE HIGHLANDS 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.828, 37.665]},
  spring_name: "HOT CREEK GORGE SPRINGS",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "MT. MORRISON 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.834, 37.656]},
  spring_name: "HOT CREEK SPRINGS",
  degrees_f: "171",
  degrees_c: "77",
  usgs_quadrangle: "(MT. MORRISON 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.523, 41.607]},
  spring_name: "HOT SPOT",
  degrees_f: "191",
  degrees_c: "88",
  usgs_quadrangle: "MEDICINE LAKE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.813, 37.708]},
  spring_name: "HOT SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "MT. MORRISON 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.081, 38.048]},
  spring_name: "HOT SPRING",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "BODIE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.408, 35.727]},
  spring_name: "HOT SPRING",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "LAKE ISABELLA NORTH"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.243, 40.364]},
  spring_name: "HOT SPRING",
  degrees_f: "204",
  degrees_c: "96",
  usgs_quadrangle: "WENDEL 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.197, 41.407]},
  spring_name: "HOT SPRING FUMAROLES",
  degrees_f: "183",
  degrees_c: "84",
  usgs_quadrangle: "SHASTA 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.274, 41.012]},
  spring_name: "HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "FALL RIVER MILLS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.806, 37.648]},
  spring_name: "HOT SPRINGS",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "MT. MORRISON 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.08, 41.266]},
  spring_name: "HOT SPRINGS (MENLO BATHS)",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "EAGLEVILLE 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.078, 41.534]},
  spring_name: "HOT SPRINGS (SURPRISE VALLEY)",
  degrees_f: "208",
  degrees_c: "98",
  usgs_quadrangle: "CEDARVILLE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.42, 40.44]},
  spring_name: "HOT SPRINGS VALLEY",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "(MT HARKNESS 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.671, 38.858]},
  spring_name: "HOWARD SPRINGS",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "WHISPERING PINES 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.926, 41.036]},
  spring_name: "HUNT HOT SPRING",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "BIG BEND 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.935, 40.142]},
  spring_name: "INDIAN VALLEY HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "GREENVILLE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.898, 36.773]},
  spring_name: "IRIDAT SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "ORTIGALITA PEAK 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-123.585, 39.657]},
  spring_name: "JACKSON VALLEY MUD SPRINGS",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "CAHTO PEAK 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.189, 32.617]},
  spring_name: "JACUMBA HOT SPRINGS",
  degrees_f: "101",
  degrees_c: "38",
  usgs_quadrangle: "(JACUMBA 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.445, 39.033]},
  spring_name: "JONES FOUNTAIN OF LIFE SPRING",
  degrees_f: "142",
  degrees_c: "61",
  usgs_quadrangle: "WILBUR SPRINGS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.302, 36.229]},
  spring_name: "JORDAN HOT SPRINGS",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "HOCKETT PEAK 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.923, 36.675]},
  spring_name: "KEANE WONDER SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "CHLORIDE CLIFF 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.028, 41.126]},
  spring_name: "KELLOG HOT SPRINGS",
  degrees_f: "172",
  degrees_c: "78",
  usgs_quadrangle: "BIEBER 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.834, 41.45]},
  spring_name: "KELLY HOT SPRING",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "CANBY 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.373, 37.253]},
  spring_name: "KEOUGH HOT SPRINGS",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "BISHOP 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.404, 36.477]},
  spring_name: "KERN HOT SPRING",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "KERN PEAK 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.202, 41.973]},
  spring_name: "KLAMATH HOT SPRING",
  degrees_f: "156",
  degrees_c: "69",
  usgs_quadrangle: "MACDOEL 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.206, 41.67]},
  spring_name: "LAKE CITY HOT SPRINGS",
  degrees_f: "207",
  degrees_c: "97",
  usgs_quadrangle: "CEDARVILLE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.145, 33.837]},
  spring_name: "LAKEVIEW HOT SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "PERRIS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.219, 34.503]},
  spring_name: "LAS CRUCES HOT SPRINGS",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "SOLVANG 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.088, 41.6]},
  spring_name: "LEONARDS HOT SPRINGS",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "CEDARVILLE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.613, 34.537]},
  spring_name: "LITTLE CALIENTE SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "HILDRETH PEAK 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.748, 38.767]},
  spring_name: "LITTLE GEYSERS",
  degrees_f: "210",
  degrees_c: "99",
  usgs_quadrangle: "(WHISPERING PINES 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.839, 37.692]},
  spring_name: "LITTLE HOT CREEK SPRING",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "MT. MORRISON 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.405, 41.229]},
  spring_name: "LITTLE HOT SPRING",
  degrees_f: "169",
  degrees_c: "76",
  usgs_quadrangle: "FALL RIVER MILLS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.848, 36.698]},
  spring_name: "LITTLE HUNTER CANYON SPRINGS",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "NEW YORK BUTTE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.445, 37.573]},
  spring_name: "LONE TREE MINERAL SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "LONE TREE CREEK 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.552, 38.394]},
  spring_name: "LOS GUILICOS WARM SPRINGS",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "KENWOOD 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.771, 36.806]},
  spring_name: "LOWER WARM SPRINGS",
  degrees_f: "110",
  degrees_c: "43",
  usgs_quadrangle: "WAUCOBA WASH 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.72, 38.55]},
  spring_name: "MARK WEST SPRINGS",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "MARK WEST SPRINGS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.302, 34.482]},
  spring_name: "MATILIJA HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "MATILIJA 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-114.907, 33.733]},
  spring_name: "MCCOY SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "MCCOY SPRING 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.547, 39.728]},
  spring_name: "MCLEAR WARM SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "SIERRA CITY 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.86, 36.703]},
  spring_name: "MERCEY HOT SPRINGS",
  degrees_f: "119",
  degrees_c: "48",
  usgs_quadrangle: "MERCEY HOT SPRINGS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.545, 40.457]},
  spring_name: "MILL CREEK SPRINGS",
  degrees_f: "150",
  degrees_c: "66",
  usgs_quadrangle: "(LASSEN PEAK 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.794, 37.398]},
  spring_name: "MINERAL SPRINGS",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "CALAVERAS RESERVOIR"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.534, 35.575]},
  spring_name: "MIRACLE HOT SPRS HOBO HOT SPRS",
  degrees_f: "119",
  degrees_c: "48",
  usgs_quadrangle: "MIRACLE HOT SPRINGS"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.917, 35.483]},
  spring_name: "MIZE SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(LAS YEGUAS RANCH 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.902, 38.033]},
  spring_name: "MONO BASIN WARM SPRINGS",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "TRENCH CANYON 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.018, 37.327]},
  spring_name: "MONO HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "KAISER PEAK 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.637, 34.461]},
  spring_name: "MONTECITO HOT SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "SANTA BARBARA 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.513, 40.382]},
  spring_name: "MORGAN HOT SPRING",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "LASSEN PEAK 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-115.577, 33.201]},
  spring_name: "MUD POTS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "NILAND 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-115.591, 33.212]},
  spring_name: "MUD POTS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "NILAND 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-115.575, 33.332]},
  spring_name: "MUD VOLCANOES",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(WISTER 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-115.583, 33.328]},
  spring_name: "MUD VOLCANOES",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(WISTER 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-115.577, 33.312]},
  spring_name: "MUD VOLCANOES",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(WISTER 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-115.575, 33.288]},
  spring_name: "MUD VOLCANOES",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(WISTER 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-115.592, 33.28]},
  spring_name: "MUD VOLCANOES",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(WISTER 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-115.573, 33.343]},
  spring_name: "MUD VOLCANOES",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(WISTER 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-115.588, 33.345]},
  spring_name: "MUD VOLCANOES",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(WISTER 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-115.605, 33.313]},
  spring_name: "MUD VOLCANOES",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(WISTER 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-123.308, 39.429]},
  spring_name: "MUIR SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(WILLITS 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.154, 33.558]},
  spring_name: "MURRIETTA HOT SPRINGS",
  degrees_f: "132",
  degrees_c: "56",
  usgs_quadrangle: "MURRIETTA 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.025, 38.85]},
  spring_name: "MYERS WARM SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(ECHO LAKE 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.26, 38.519]},
  spring_name: "NAPA ROCK SODA SPRING PHILLIPS SOD",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "CHILES VALLEY 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.259, 38.339]},
  spring_name: "NAPA VICHY SPRINGS",
  degrees_f: "76",
  degrees_c: "24",
  usgs_quadrangle: "NAPA 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.821, 36.512]},
  spring_name: "NEVARES SPRINGS",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "CHLORIDE CLIFF 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.677, 34.826]},
  spring_name: "NEWBERRY SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "NEWBERRY 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.714, 39.196]},
  spring_name: "NEWMAN SPRINGS",
  degrees_f: "94",
  degrees_c: "35",
  usgs_quadrangle: "CLEARLAKE OAKS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.542, 35.122]},
  spring_name: "NEWSOM SPRINGS",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "OCEANO 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.357, 38.833]},
  spring_name: "ONE SHOT MINING CO",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(KNOXVILLE 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-123.362, 39.227]},
  spring_name: "ORRS SPRINGS",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "BOONVILLE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.763, 36.814]},
  spring_name: "PALM SPRING",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "WAUCOBA WASH 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.542, 33.823]},
  spring_name: "PALM SPRINGS (AGUA CALIENTE SPRING)",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "PALM SPRINGS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.838, 34.271]},
  spring_name: "PAN HOT SPRINGS",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "(BIG BEAR CITY 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.028, 37.993]},
  spring_name: "PAOHA ISLAND SPRINGS",
  degrees_f: "181",
  degrees_c: "83",
  usgs_quadrangle: "(MONO CRATERS 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.813, 35.143]},
  spring_name: "PARADISE SPRING",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "LANE MOUNTAIN 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.367, 36.331]},
  spring_name: "PARAISO SPRINGS (SULPHUR SPRING)",
  degrees_f: "98",
  degrees_c: "37",
  usgs_quadrangle: "PARAISO SPRINGS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.692, 35.663]},
  spring_name: "PASO ROBLES ARTESIAN SPRING",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "(PASO ROBLES 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.851, 35.269]},
  spring_name: "PECHO WARM SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "(MORRO BAY SOUTH 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-123.478, 39.697]},
  spring_name: "PINCHES SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "LAYTONVILLE 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.693, 38.85]},
  spring_name: "PINE CONE SPRING",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "(WHISPERING PINES 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-123.518, 38.874]},
  spring_name: "POINT ARENA HOT SPRINGS",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "(GUALALA 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.917, 41.828]},
  spring_name: "POTHOLE SPRING",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "STEELE SWAMP 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.505, 39.198]},
  spring_name: "PSEUDO COMPLEXION SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "(CLEARLAKE OAKS 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.597, 39.053]},
  spring_name: "QUIGLEY SODA SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "CLEARLAKE OAKS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.074, 37.618]},
  spring_name: "REDS MEADOW HOT SPRINGS",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "DEVILS POSTPILE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.153, 35.879]},
  spring_name: "RESTING SPRING",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "TECOPA 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.701, 38.958]},
  spring_name: "RIVIERA BEACH SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "(CLEARLAKE HIGHLANDS 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.627, 37.88]},
  spring_name: "ROCKY POINT SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(BOLINAS 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.308, 37.432]},
  spring_name: "SALT GRASS SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "COPPER MTN. 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.511, 33.589]},
  spring_name: "SAN JUAN HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "CANADA GOBERNADORA 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.879, 34.537]},
  spring_name: "SAN MARCOS HOT SPRING",
  degrees_f: "110",
  degrees_c: "43",
  usgs_quadrangle: "LAKE CACHUMA 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.666, 35.582]},
  spring_name: "SANTA YSABEL SPRINGS (SULPHUR SPR)",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "TEMPLETON 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.422, 35.682]},
  spring_name: "SARATOGA SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "AVAWATZ PASS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.565, 36.938]},
  spring_name: "SARGENT ESTATE WARM SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "CHITTENDEN 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.473, 35.62]},
  spring_name: "SCOVERN HOT SPRINGS",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "LAKE ISABELLA SOUTH"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.689, 38.873]},
  spring_name: "SEIGLER SPRINGS",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "WHISPERING PINES 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.325, 40.568]},
  spring_name: "SELLICKS SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "KARLO 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.998, 34.596]},
  spring_name: "SESPE HOT SPRINGS",
  degrees_f: "194",
  degrees_c: "90",
  usgs_quadrangle: "DEVILS HEART PEAK 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.102, 41.615]},
  spring_name: "SEYFERTH HOT SPRINGS",
  degrees_f: "185",
  degrees_c: "85",
  usgs_quadrangle: "CEDARVILLE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.359, 35.588]},
  spring_name: "SHEEP CREEK SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "AVAWATZ PASS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.273, 35.978]},
  spring_name: "SHOSHONE SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "SHOSHONE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-123.024, 38.691]},
  spring_name: "SKAGGS SPRINGS",
  degrees_f: "135",
  degrees_c: "56",
  usgs_quadrangle: "SKAGGS SPRINGS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.64, 36.123]},
  spring_name: "SLATES HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "LOPEZ POINT 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.927, 33.8]},
  spring_name: "SOBODA HOT SPRINGS",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "SAN JACINTO 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.816, 36.13]},
  spring_name: "SODA SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "SPRINGVILLE 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.572, 38.95]},
  spring_name: "SODA SPRING IN CACHE FORMATION",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(LOWER LAKE 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.176, 36.21]},
  spring_name: "SODA SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "MONACHE MTN. 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.101, 35.141]},
  spring_name: "SODA STATION SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "SODA LAKE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.653, 38.838]},
  spring_name: "SPIERS SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(WHISPERING PINES 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.036, 40.019]},
  spring_name: "SPRING",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "ALMANOR 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.764, 41.484]},
  spring_name: "SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "CANBY 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.901, 36.765]},
  spring_name: "SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "ORTIGALITA PEAK 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.604, 33.514]},
  spring_name: "SPRING",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "CANADA GOBERNADORA 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.651, 35.536]},
  spring_name: "SPRING (HOT)",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "DEMOCRAT HOT SPRINGS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.042, 37.083]},
  spring_name: "SPRING IN ONEILL FOREBAY",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(SAN LUIS DAM 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.735, 37.719]},
  spring_name: "SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "CASA DIABLO MTN. 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.475, 41.196]},
  spring_name: "SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "TULE MOUNTAIN 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.965, 37.929]},
  spring_name: "SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "CLAYTON 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.258, 35.888]},
  spring_name: "SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "SHOSHONE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.893, 36.495]},
  spring_name: "SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "KEELER 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.72, 37.635]},
  spring_name: "SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "CASA DIABLO MTN. 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.903, 43.513]},
  spring_name: "SPRINGS AT TECOLOTE TUNNEL",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "(LAKE CACHUMA 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.066, 41.219]},
  spring_name: "SQUAW BATHS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "(SNAKE LAKE 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.498, 38.49]},
  spring_name: "ST HELENA WHITE SULPHUR SPRING",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "(RUTHERFORD 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.341, 34.498]},
  spring_name: "STINGLEYS HOT SPRINGS",
  degrees_f: "123",
  degrees_c: "51",
  usgs_quadrangle: "MATILIJA 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.747, 40.223]},
  spring_name: "STINKING SPRINGS",
  degrees_f: "101",
  degrees_c: "38",
  usgs_quadrangle: "COLD FORK 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.664, 39.002]},
  spring_name: "SULPHUR BANK",
  degrees_f: "156",
  degrees_c: "69",
  usgs_quadrangle: "CLEARLAKE OAKS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.777, 38.788]},
  spring_name: "SULPHUR CREEK",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "(THE GEYSERS 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.845, 36.618]},
  spring_name: "SULPHUR HOT SPRING",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "(SEASIDE 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.525, 39.088]},
  spring_name: "SULPHUR SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "CLEARLAKE OAKS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.046, 37.924]},
  spring_name: "SULPHUR SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(WALNUT CREEK 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.538, 39.43]},
  spring_name: "SULPHUR SPRING SALT SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "STONYFORD 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.985, 36.295]},
  spring_name: "SULPHUR SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "LONOAK 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-123.319, 41.659]},
  spring_name: "SULPHUR SPRINGS",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "UKONOM LAKE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.536, 40.447]},
  spring_name: "SULPHUR WORKS TOPHET HOT SPRINGS",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "LASSEN PEAK 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.367, 35.908]},
  spring_name: "TABLE MOUNTAIN (SPRING)",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "(THE DARK HOLE 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.546, 36.234]},
  spring_name: "TASSAJARA HOT SPRINGS",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "TASSAJARA HOT SPRINGS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.23, 35.871]},
  spring_name: "TECOPA HOT SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "TECOPA 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.167, 33.551]},
  spring_name: "TEMECULA HOT SPRINGS",
  degrees_f: "116",
  degrees_c: "47",
  usgs_quadrangle: "MURRIETTA 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.375, 40.421]},
  spring_name: "TERMINAL GEYSER",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "MT. HARKNESS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.81, 38.802]},
  spring_name: "THE GEYSERS",
  degrees_f: "214",
  degrees_c: "101",
  usgs_quadrangle: "THE GEYSERS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.217, 38.225]},
  spring_name: "THE HOT SPRINGS",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "BODIE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.802, 37.664]},
  spring_name: "THE TUB",
  degrees_f: "167",
  degrees_c: "75",
  usgs_quadrangle: "(MT. MORRISON 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.265, 40.58]},
  spring_name: "TIPTON SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "KARLO 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.053, 38.31]},
  spring_name: "TOLENAS SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "FIARFIELD NORTH 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.205, 38.245]},
  spring_name: "TRAVERTINE HOT SPRINGS",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "BODIE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.829, 36.441]},
  spring_name: "TRAVERTINE SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "FURNACE CREEK 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.11, 40.238]},
  spring_name: "TUSCAN SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "TUSCAN SPRINGS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.483, 34.228]},
  spring_name: "TYLERS BATH SPRING",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "(DEVORE 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.736, 36.83]},
  spring_name: "UPPER WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "DRY MOUNTAIN 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.423, 32.97]},
  spring_name: "VALLECITOS SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "MONUMENT PEAK 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.188, 38.125]},
  spring_name: "VALLEJO WHITE SULPHUR SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "BENICIA 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.827, 38.192]},
  spring_name: "VALLEY SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "VALLEY SPRINGS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-123.159, 39.166]},
  spring_name: "VICHY SPRINGS",
  degrees_f: "85",
  degrees_c: "29",
  usgs_quadrangle: "UKIAH 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.346, 34.502]},
  spring_name: "VICKERS HOT SPRINGS",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "(WHEELER SPRINGS 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.776, 36.117]},
  spring_name: "WARD SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "GLOBE 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.931, 35.967]},
  spring_name: "WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "WINGATE WASH 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.561, 34.605]},
  spring_name: "WARM SPRING",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "WARM SPRINGS MOUNTAIN 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.403, 41.16]},
  spring_name: "WARM SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "TULE MOUNTAIN 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.118, 38.203]},
  spring_name: "WARM SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "BODIE 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.521, 41.252]},
  spring_name: "WARM SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "ALTURAS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.936, 41.959]},
  spring_name: "WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "STEELE SWAMP 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.783, 35.148]},
  spring_name: "WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "ARVIN 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.173, 34.34]},
  spring_name: "WARM SPRING HOT SPRING",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "LAKE ARROWHEAD 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.217, 36.122]},
  spring_name: "WARM SULPHUR SPRINGS",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "TELESCOPE PEAK 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.631, 33.284]},
  spring_name: "WARNER HOT SPRING",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "WARNER SPRINGS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.257, 40.355]},
  spring_name: "WENDEL HOT SPRINGS",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "LITCHFIELD 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.383, 41.19]},
  spring_name: "WEST VALLEY RESERVOIR HOT SPRING",
  degrees_f: "171",
  degrees_c: "77",
  usgs_quadrangle: "(TULE MOUNTAIN 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.291, 34.507]},
  spring_name: "WHEELER SPRINGS",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "WHEELER SPRINGS 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.348, 33.731]},
  spring_name: "WHITES POINT HOT SPRINGS",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "(SAN PEDRO 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.808, 37.63]},
  spring_name: "WHITMORE HOT SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "MT. MORRISON 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.421, 39.039]},
  spring_name: "WILBUR SPRINGS",
  degrees_f: "153",
  degrees_c: "67",
  usgs_quadrangle: "WILBUR SPRINGS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.044, 34.582]},
  spring_name: "WILLETT HOT SPRINGS",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "(TOPATOPA MOUNTAINS"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-115.58, 33.217]},
  spring_name: "WISTER MUD POT",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "NILAND 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.325, 33.67]},
  spring_name: "WRENDEN HOT SPRS ELSINORE HOT SPRS",
  degrees_f: "125",
  degrees_c: "52",
  usgs_quadrangle: "(ELSINORE 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.478, 35.433]},
  spring_name: "YATES HOT SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "PIUTE PEAK 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.024, 39.922]},
  spring_name: "ZAMBONI HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "CONSTANTIA 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.285, 38.755]},
  spring_name: "ZIM ZIM SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(KNOXVILLE 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.713, 38.773]},
  spring_name: null,
  degrees_f: "149",
  degrees_c: "65",
  usgs_quadrangle: "(MT. SIEGEL 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.504, 38.627]},
  spring_name: null,
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(TOPAZ LAKE 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.736, 38.986]},
  spring_name: null,
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "(CLEARLAKE HIGHLANDS 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.724, 38.963]},
  spring_name: null,
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(CLEARLAKE HIGHLANDS 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.654, 38.95]},
  spring_name: null,
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(CLEARLAKE HIGHLANDS 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-116.742, 33.54]},
  spring_name: null,
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(IDYLLWILD 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.103, 33.865]},
  spring_name: null,
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(LAKEVIEW 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.393, 33.802]},
  spring_name: null,
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(REDONDO BEACH 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.078, 34.124]},
  spring_name: null,
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(YUCAIPA 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.684, 36.64]},
  spring_name: null,
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(CHOUNET RANCH 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.843, 36.331]},
  spring_name: null,
  degrees_f: "114",
  degrees_c: "46",
  usgs_quadrangle: "(BIG SUR 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.567, 41.542]},
  spring_name: null,
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "(BIG SAGE RESERVOIR"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.525, 41.466]},
  spring_name: null,
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "ALTURAS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.723, 41.36]},
  spring_name: null,
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "(ALTURAS 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.054, 41.208]},
  spring_name: null,
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "(SNAKE LAKE 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.139, 37.413]},
  spring_name: null,
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "(KAISER PEAK 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.874, 37.895]},
  spring_name: null,
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(ANTIOCH SOUTH 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-117.903, 35.94]},
  spring_name: null,
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "(LITTLE LAKE 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.727, 35.363]},
  spring_name: null,
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "(REWARD 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.687, 35.649]},
  spring_name: null,
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "(PASO ROBLES 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.763, 38.777]},
  spring_name: null,
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "(THE GEYSERS 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.567, 38.389]},
  spring_name: null,
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "KENWOOD 7.5"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.509, 38.357]},
  spring_name: null,
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(GLEN ELLEN 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.271, 38.321]},
  spring_name: null,
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "(NAPA 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.169, 38.101]},
  spring_name: null,
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(BENICIA 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-120.064, 39.98]},
  spring_name: null,
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "(CONSTANTIA 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.725, 39.2]},
  spring_name: null,
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(CLEARLAKE OAKS 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-122.592, 39.022]},
  spring_name: null,
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "CLEARLAKE OAKS 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-121.683, 36.25]},
  spring_name: null,
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(PARTINGTON RIDGE 7.5)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.781, 37.667]},
  spring_name: null,
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "(MT. MORRISON 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.764, 37.657]},
  spring_name: null,
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "(MT. MORRISON 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.925, 37.653]},
  spring_name: null,
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(MT. MORRISON 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.756, 37.639]},
  spring_name: null,
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "(MT. MORRISON 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.808, 37.607]},
  spring_name: null,
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(MT. MORRISON 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-118.272, 37.268]},
  spring_name: null,
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "BISHOP 15"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.139, 37.989]},
  spring_name: null,
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(MONO CRATERS 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.036, 37.941]},
  spring_name: null,
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(MONO CRATERS 15)"
  },
  {
  state_code: "CA",
  loc: { type: "Point", coordinates: [-119.016, 37.836]},
  spring_name: null,
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "(MONO CRATERS 15)"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-107.034, 37.741]},
  spring_name: "ANTELOPE SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "WORKMAN CREEK 7.5"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-107.054, 37.728]},
  spring_name: "BIRDSIE WARM SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "(WORKMAN CREEK 7.5)"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-106.056, 38.653]},
  spring_name: "BROWNS CANYON WARM SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(PONCHA SPRINGS 15)"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-106.072, 38.634]},
  spring_name: "BROWNS GROTTO WARM SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(PONCHA SPRINGS 15)"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-105.261, 38.433]},
  spring_name: "CANON CITY HOT SPRINGS",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "(ROYAL GORGE 15)"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-107.1, 38.272]},
  spring_name: "CEBOLLA HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "POWDERHORN 7.5"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-106.825, 38.836]},
  spring_name: "CEMENT CREEK HOT SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "CEMENT MTN. 7.5"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-106.891, 39.012]},
  spring_name: "CONUNDRUM HOT SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "MAROON BELLS 7.5"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-106.226, 38.812]},
  spring_name: "COTTONWOOD HOT SPRINGS",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "BUENA VISTA 15"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-105.784, 37.294]},
  spring_name: "DEXTER SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "PIKES STOCKADE 7.5"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-107.106, 39.628]},
  spring_name: "DOTSERO WARM SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(GLENWOOD SPRINGS 15)"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-108.091, 37.771]},
  spring_name: "DUNTON HOT SPRING",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "DOLORES PEAK 7.5"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-105.277, 39.932]},
  spring_name: "ELDORADO SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "ELDORADO SPRINGS 7.5"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-108.117, 37.747]},
  spring_name: "GEYSER WARM SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "(RICO 7.5)"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-107.322, 39.548]},
  spring_name: "GLENWOOD SPRINGS",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "GLENWOOD SPRINGS 7.5"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-105.793, 39.017]},
  spring_name: "HARTSEL HOT SPRINGS",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "HARTSEL 7.5"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-106.178, 38.732]},
  spring_name: "HORTENSE HOT SPRING",
  degrees_f: "181",
  degrees_c: "83",
  usgs_quadrangle: "PONCHA SPRINGS 15"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-106.113, 40.073]},
  spring_name: "HOT SULPHUR SPRINGS",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "HOT SULPHUR SPRINGS"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-105.512, 39.739]},
  spring_name: "IDAHO SPRINGS",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "IDAHO SPRINGS 7.5"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-107.952, 40.467]},
  spring_name: "JUNIPER HOT SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "JUNIPER HOT SPRINGS"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-108.054, 38.014]},
  spring_name: "LEMON HOT SPRING",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(PLACERVILLE 7.5)"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-106.515, 38.517]},
  spring_name: "LOWER WAUNITA HOT SPRINGS",
  degrees_f: "167",
  degrees_c: "75",
  usgs_quadrangle: "(PITKIN 7.5)"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-105.924, 38.168]},
  spring_name: "MINERAL HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "VILLA GROVE 7.5"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-106.162, 38.733]},
  spring_name: "MOUNT PRINCETON HOT SPRINGS",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "PONCHA SPRINGS 15"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-107.736, 38.133]},
  spring_name: "ORVIS HOT SPRING",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "DALLAS 7.5"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-107.672, 38.021]},
  spring_name: "OURAY HOT SPRINGS",
  degrees_f: "156",
  degrees_c: "69",
  usgs_quadrangle: "(OURAY 7.5)"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-107.011, 37.263]},
  spring_name: "PAGOSA SPRINGS",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "PAGOSA SPRINGS 7.5"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-108.131, 37.752]},
  spring_name: "PARADISE WARM SPRING",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "(GROUNDHOG MOUNTAIN"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-107.224, 39.227]},
  spring_name: "PENNY HOT SPRINGS",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "REDSTONE 7.5"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-107.344, 37.313]},
  spring_name: "PIEDRA RIVER HOT SPRINGS",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "(DEVIL MOUNTAIN 7.5)"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-107.803, 37.453]},
  spring_name: "PINKERTON HOT SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(HERMOSA 7.5)"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-106.076, 38.498]},
  spring_name: "PONCHA HOT SPRINGS",
  degrees_f: "160",
  degrees_c: "71",
  usgs_quadrangle: "BONANZA 15"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-106.945, 37.511]},
  spring_name: "RAINBOW HOT SPRINGS",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "SPAR CITY 15"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-106.873, 38.816]},
  spring_name: "RANGER HOT SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "CEMENT MTN. 7.5"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-106.062, 39.164]},
  spring_name: "RHODES WARM SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "FAIRPLAY WEST 7.5"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-106.849, 40.559]},
  spring_name: "ROUTT HOT SPRINGS",
  degrees_f: "147",
  degrees_c: "64",
  usgs_quadrangle: "ROCKY PEAK 7.5"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-106.317, 37.751]},
  spring_name: "SHAW SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "TWIN MOUNTAINS SE 7.5"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-107.412, 39.552]},
  spring_name: "SOUTH CANYON HOT SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "(STORM KING MOUNTAIN 7.5)"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-106.827, 40.483]},
  spring_name: "STEAMBOAT SPRINGS",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "STEAMBOAT SPRINGS 7.5"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-106.805, 37.033]},
  spring_name: "STINKING SPRINGS",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "CHROMO 15"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-105.891, 38.479]},
  spring_name: "SWISSVALE WARM SPRINGS",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "(HOWARD 15)"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-107.846, 37.391]},
  spring_name: "TRIMBLE HOT SPR STRATTEN WARM SPR",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "(HERMOSA 7.5)"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-107.849, 37.4]},
  spring_name: "TRIPP HOT SPRINGS",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "(HERMOSA 7.5)"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-106.508, 38.514]},
  spring_name: "UPPER WAUNITA HOT SPRINGS",
  degrees_f: "176",
  degrees_c: "80",
  usgs_quadrangle: "PITKIN 7.5"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-105.816, 38.192]},
  spring_name: "VALLEY VIEW HOT SPRINGS",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "VALLLEY VIEW HOT SPRINGS 7."
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-106.831, 37.747]},
  spring_name: "WAGON WHEEL GAP HOT SPRINGS",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "SPAR CITY 15"
  },
  {
  state_code: "CO",
  loc: { type: "Point", coordinates: [-105.91, 38.485]},
  spring_name: "WELLSVILLE WARM SPRING",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(HOWARD 15)"
  },
  {
  state_code: "FL",
  loc: { type: "Point", coordinates: [-82.233, 27.074]},
  spring_name: "LITTLE SALT SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "MURDOCK 7.5"
  },
  {
  state_code: "FL",
  loc: { type: "Point", coordinates: [-82.261, 27.06]},
  spring_name: "WARM MINERAL SPRINGS (BIG SALT SPR)",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "MYAKKA RIVER 7.5"
  },
  {
  state_code: "GA",
  loc: { type: "Point", coordinates: [-84.438, 32.92]},
  spring_name: "BARKER SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "SUNSET VILLAGE 7.5"
  },
  {
  state_code: "GA",
  loc: { type: "Point", coordinates: [-84.374, 33.037]},
  spring_name: "LIFSEY SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "ZEBULON 7.5"
  },
  {
  state_code: "GA",
  loc: { type: "Point", coordinates: [-84.65, 32.862]},
  spring_name: "PARKMAN SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "SHILOH 7.5"
  },
  {
  state_code: "GA",
  loc: { type: "Point", coordinates: [-84.327, 33.018]},
  spring_name: "TAYLOR SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "ZEBULON 7.5"
  },
  {
  state_code: "GA",
  loc: { type: "Point", coordinates: [-84.499, 32.964]},
  spring_name: "THUNDERING SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "SUNSET VILLAGE 7.5"
  },
  {
  state_code: "GA",
  loc: { type: "Point", coordinates: [-84.547, 32.873]},
  spring_name: "TOM BROWN SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "MANCHESTER 7.5"
  },
  {
  state_code: "GA",
  loc: { type: "Point", coordinates: [-84.69, 32.893]},
  spring_name: "WARM SPRINGS",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "WARM SPRINGS 7.5"
  },
  {
  state_code: "HI",
  loc: { type: "Point", coordinates: [-154.928, 19.593]},
  spring_name: "AKINS SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "(PAHOA NORTH 7.5)"
  },
  {
  state_code: "HI",
  loc: { type: "Point", coordinates: [-154.847, 19.46]},
  spring_name: "ISAAC HALE PARK SPRING",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "(KAPOHO 7.5)"
  },
  {
  state_code: "HI",
  loc: { type: "Point", coordinates: [-154.943, 19.466]},
  spring_name: "STEAM VENTS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(PAHOA SOUTH 7.5)"
  },
  {
  state_code: "HI",
  loc: { type: "Point", coordinates: [-155.272, 19.434]},
  spring_name: "STEAM VENTS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "KILAUEA CRATER 7.5"
  },
  {
  state_code: "HI",
  loc: { type: "Point", coordinates: [-155.188, 19.373]},
  spring_name: "STEAM VENTS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(MAKAOPUHI CRATER 7.5)"
  },
  {
  state_code: "HI",
  loc: { type: "Point", coordinates: [-155.598, 19.486]},
  spring_name: "STEAM VENTS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(MAUNA LOA 7.5)"
  },
  {
  state_code: "HI",
  loc: { type: "Point", coordinates: [-155.62, 19.421]},
  spring_name: "STEAM VENTS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(MAUNA LOA 7.5)"
  },
  {
  state_code: "HI",
  loc: { type: "Point", coordinates: [-155.277, 19.407]},
  spring_name: "STEAM VENTS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(KILAUEA CRATER 7.5)"
  },
  {
  state_code: "HI",
  loc: { type: "Point", coordinates: [-155.311, 19.39]},
  spring_name: "STEAM VENTS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(KILAUEA CRATER 7.5)"
  },
  {
  state_code: "HI",
  loc: { type: "Point", coordinates: [-155.384, 19.201]},
  spring_name: "WAIWELAWELA POINT SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(PAHALA 7.5)"
  },
  {
  state_code: "HI",
  loc: { type: "Point", coordinates: [-154.876, 19.496]},
  spring_name: "WARM VAPOR",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(PAHOA SOUTH 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-112.004, 43.038]},
  spring_name: "ALKALI FLATS WARM SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "YANDELL SPRINGS 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.109, 43.227]},
  spring_name: "ALPINE WARM SPRING",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "(ALPINE 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.045, 44.64]},
  spring_name: "ARLING HOT SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "CASCADE 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.142, 42.405]},
  spring_name: "ARTESIAN CITY HOT SPRINGS",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "(MURTAUGH 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.458, 44.091]},
  spring_name: "ASHTON WARM SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(ASHTON 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.116, 43.811]},
  spring_name: "ATLANTA HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "ATLANTA EAST 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.985, 44.621]},
  spring_name: "BADLEY WARM SPRING",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "(GOLD FORK 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.826, 42.688]},
  spring_name: "BANBURY HOT SPRING",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "THOUSAND SPRINGS 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-113.449, 44.269]},
  spring_name: "BARNEY HOT SPRINGS",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "GILMORE 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.908, 43.293]},
  spring_name: "BARRONS HOT SPRING",
  degrees_f: "167",
  degrees_c: "75",
  usgs_quadrangle: "(FAIRFIELD 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.046, 45.512]},
  spring_name: "BARTH HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "SHEEP HILL 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.818, 44.264]},
  spring_name: "BASIN CREEK HOT SPRING",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "(EAST BASIN CREEK 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.563, 43.718]},
  spring_name: "BASSET HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(SHEEP CREEK 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.723, 42.797]},
  spring_name: "BAT HOT SPRING PENCE HOT SPRING",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "HOT SPRING 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.928, 42.133]},
  spring_name: "BATTLE CREEK HOT SPRINGS",
  degrees_f: "183",
  degrees_c: "84",
  usgs_quadrangle: "BANIDA 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.07, 43.603]},
  spring_name: "BAUMGARTNER HOT SPRING",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "JUMBO MTN. 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.264, 42.115]},
  spring_name: "BEAR LAKE HOT SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "BEAR LAKE NORTH 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.239, 44.445]},
  spring_name: "BEAR VALLEY HOT SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "CAPE HORN LAKES 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.173, 44.523]},
  spring_name: "BEARDSLEY HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "CHALLIS 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.037, 44.465]},
  spring_name: "BELVIDERE HOT SPRING",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "(SMITHS FERRY 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.338, 45.307]},
  spring_name: "BIG CREEK HOT SPRINGS",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "SHOUP 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-113.504, 44.64]},
  spring_name: "BIG EIGHTMILE CREEK WARM SPRING",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(PATTERSON 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.738, 43.701]},
  spring_name: "BIG SMOKEY HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "BAKER PEAK 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-112.696, 44.454]},
  spring_name: "BIG SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "EDIE RANCH 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.663, 44.77]},
  spring_name: "BILLY HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "WHITE ROCK PEAK 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.592, 42.928]},
  spring_name: "BLACKFOOT RESERVOIR WARM SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(HENRY 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.743, 42.986]},
  spring_name: "BLACKFOOT RIVER WARM SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(HENRY 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-113.39, 42.107]},
  spring_name: "BLM WELL (FRAZIER HOT SPRING)",
  degrees_f: "203",
  degrees_c: "95",
  usgs_quadrangle: "CHOKECHERRY CANYON 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.856, 44.364]},
  spring_name: "BOILING SPRINGS",
  degrees_f: "185",
  degrees_c: "85",
  usgs_quadrangle: "BOILING SPRINGS 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.314, 44.157]},
  spring_name: "BONNEVILLE HOT SPRINGS",
  degrees_f: "185",
  degrees_c: "85",
  usgs_quadrangle: "EIGHTMILE MTN. 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.312, 45.201]},
  spring_name: "BOULDER CREEK SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "INDIAN MOUNTAIN 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.288, 43.54]},
  spring_name: "BRIDGE HOT SPRINGS",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "(FEATHERVILLE 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.495, 43.21]},
  spring_name: "BROCKMAN CREEK HOT SPRING",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "HERMAN 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.486, 43.779]},
  spring_name: "BROWN CREEK HOT SPRING",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "(GRAND MTN. 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.742, 42.798]},
  spring_name: "BRUNEAU HOT SPRING",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "HOT SPRING 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.715, 42.779]},
  spring_name: "BUCKAROO HOT SPRING",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "(HOT SPRING 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.762, 44.43]},
  spring_name: "BULL CREEK HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "BOILING SPRINGS 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.912, 45.277]},
  spring_name: "BURGDORF HOT SPRINGS",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "BURGDORF 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.031, 44.416]},
  spring_name: "CABARTON HOT SPRING",
  degrees_f: "160",
  degrees_c: "71",
  usgs_quadrangle: "(SMITHS FERRY 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.149, 44.398]},
  spring_name: "CAPE HORN WARM SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "CAPE HORN LAKES 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.112, 44.583]},
  spring_name: "CASCADE RESERVOIR HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(CASCADE 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.415, 43.561]},
  spring_name: "CLARENDON HOT SPRINGS",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "MAHONEY BUTTE 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.716, 42.333]},
  spring_name: "CLEVELAND HOT SPRINGS",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "ONEIDA NARROWS RESERVOIR 7."
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.939, 46.466]},
  spring_name: "COLGATE WARM SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "BEAR MOUNTAIN 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-113.918, 43.327]},
  spring_name: "CONDIE HOT SPRINGS",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: null
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.842, 44.045]},
  spring_name: "CORDER HOT SPRING",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "GARDEN VALLEY 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.305, 44.669]},
  spring_name: "COUNCIL MTN HOT SPRINGS",
  degrees_f: "154",
  degrees_c: "68",
  usgs_quadrangle: "COUNCIL 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.71, 44.211]},
  spring_name: "COVE CREEK HOT SPRING",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "(HOLLAND GULCH 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.015, 45.431]},
  spring_name: "COW FLATS HOT SPRING",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "(KELLY MOUNTAIN 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.855, 44.785]},
  spring_name: "COX HOT SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "RAMEY HILL 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.34, 43.129]},
  spring_name: "COYOTE HOT SPRING",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "(BENNETT MTN. 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.745, 44.306]},
  spring_name: "CRANE CREEK HOT SPRINGS",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "(CRANE CREEK RESERVOIR 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.016, 44.72]},
  spring_name: "CRONKS CANYON HOT SPRING",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "CHALLIS 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.295, 44.516]},
  spring_name: "DAGGER CREEK HOT SPRING",
  degrees_f: "110",
  degrees_c: "43",
  usgs_quadrangle: "(CHINOOK MTN. 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.829, 44.051]},
  spring_name: "DAN HODGES HOT SPRING",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "(GARDEN VALLEY 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.819, 44.06]},
  spring_name: "DANSKIN CREEK HOT SPRING",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "GARDEN VALLEY 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.841, 44.382]},
  spring_name: "DASH CREEK HOT SPRINGS",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "BOILING SPRINGS 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.052, 44.092]},
  spring_name: "DEER HOT SPRINGS",
  degrees_f: "176",
  degrees_c: "80",
  usgs_quadrangle: "BANKS 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.703, 44.717]},
  spring_name: "DOLLAR CREEK WARM SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(WARM LAKE 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.851, 44.044]},
  spring_name: "DONLAY RANCH HOT SPRING",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "(GARDEN VALLEY 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-112.085, 42.388]},
  spring_name: "DOWNATA HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "DOWNEY EAST 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-113.632, 42.102]},
  spring_name: "DURFEE SPRING",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "(ALMO 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.434, 43.789]},
  spring_name: "DUTCH FRANK HOT SPRING",
  degrees_f: "149",
  degrees_c: "65",
  usgs_quadrangle: "GRAND MTN. 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.539, 43.779]},
  spring_name: "EASLEY HOT SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "EASLEY HOT SPRINGS 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.627, 43.423]},
  spring_name: "ELK CREEK HOT SPRING",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "BLAINE 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.885, 44.245]},
  spring_name: "ELKHORN HOT SPRING",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "(STANLEY 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.715, 43.66]},
  spring_name: "ELKHORN WARM SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "HEISE 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.754, 44.531]},
  spring_name: "FAIRCHILD HOT SPRING",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "STURGILL PEAK 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.414, 43.423]},
  spring_name: "FALL CREEK MINERAL SPRINGS",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "CONANT VALLEY 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.563, 44.896]},
  spring_name: "FORGE CREEK HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "YELLOWJACKET 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.652, 44.661]},
  spring_name: "FOSTER RANCH HOT SPRINGS",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "ROCK CREEK 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.707, 43.414]},
  spring_name: "GIVENS HOT SPRINGS",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "GIVENS HOT SPRINGS 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.82, 44.4]},
  spring_name: "GOAT HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "BOILING SPRINGS 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.943, 44.676]},
  spring_name: "GOLD FORK HOT SPRING",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "GOLD FORK 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-113.929, 44.905]},
  spring_name: "GOLDBUG HOT SPRING",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "(GOLDBUG RIDGE 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.167, 44.16]},
  spring_name: "GRANDJEAN HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "GRANDJEAN 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.401, 43.803]},
  spring_name: "GRANITE CREEK HOT SPRING",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "GRAND MTN. 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-113.564, 42.085]},
  spring_name: "GRAPE CREEK WARM SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "JIM SAGE CANYON 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.834, 44.392]},
  spring_name: "GROUND HOG HOT SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "BOILING SPRINGS 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.41, 43.684]},
  spring_name: "GUYER HOT SPRINGS",
  degrees_f: "158",
  degrees_c: "70",
  usgs_quadrangle: "GRIFFIN BUTTE 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.354, 43.506]},
  spring_name: "HAILEY HOT SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "HAILEY 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.553, 44.077]},
  spring_name: "HAVEN LODGE HOT SPRING",
  degrees_f: "147",
  degrees_c: "64",
  usgs_quadrangle: "(LOWMAN 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.687, 43.644]},
  spring_name: "HEISE HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "HEISE 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.556, 42.911]},
  spring_name: "HENRY WARM SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "HENRY 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.396, 43.831]},
  spring_name: "HIGHLAND LAND CO WARM SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "MONTOUR 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.696, 44.847]},
  spring_name: "HOLDOVER HOT SPRING",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "WHITE ROCK PEAK 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.463, 45.503]},
  spring_name: "HORSE CREEK HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "PAINTED ROCKS LAKE 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.79, 44.836]},
  spring_name: "HOSPITAL HOT SPRING",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "RAMEY HILL 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.505, 44.9]},
  spring_name: "HOT CREEK WARM SPRING",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "CATON LAKE 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.907, 44.054]},
  spring_name: "HOT SPRING CAMPGROUND",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "GARDEN VALLEY 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.518, 43.155]},
  spring_name: "HOT SPRINGS",
  degrees_f: "158",
  degrees_c: "70",
  usgs_quadrangle: "MOUNTAIN HOME 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.859, 42.692]},
  spring_name: "HOT SULPHUR (MIRACLE HOT) SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "THOUSAND SPRINGS 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.929, 43.047]},
  spring_name: "HOT SULPHUR LAKE",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "DAVIS MOUNTAIN 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.739, 42.762]},
  spring_name: "INDIAN BATHTUB HOT SPRINGS",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "HOT SPRING 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.129, 44.799]},
  spring_name: "INDIAN CREEK HOT SPRING",
  degrees_f: "190",
  degrees_c: "88",
  usgs_quadrangle: "(BIG BALDY 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.65, 42.333]},
  spring_name: "INDIAN HOT SPRINGS",
  degrees_f: "160",
  degrees_c: "71",
  usgs_quadrangle: null
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-112.872, 42.725]},
  spring_name: "INDIAN SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "INDIAN SPRINGS 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.872, 46.463]},
  spring_name: "JERRY JOHNSON HOT SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "TOM BEAL PEAK 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.732, 44.495]},
  spring_name: "KEITHLY WARM SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "(CRANE CREEK RESERVOIR 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-112.436, 42.339]},
  spring_name: "KENT WARM SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(DANIELS 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.543, 44.072]},
  spring_name: "KIRKHAM HOT SPRINGS",
  degrees_f: "149",
  degrees_c: "65",
  usgs_quadrangle: "LOWMAN 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.203, 44.971]},
  spring_name: "KRIGBAUM HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "MEADOWS 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.215, 44.831]},
  spring_name: "KWISKWIS HOT SPRING",
  degrees_f: "156",
  degrees_c: "69",
  usgs_quadrangle: "BIG BALDY 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-113.107, 42.625]},
  spring_name: "LAKE WALCOTT HOT SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(YALE 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.63, 44.586]},
  spring_name: "LAKEY HOT SPRING",
  degrees_f: "158",
  degrees_c: "70",
  usgs_quadrangle: "(CAMBRIDGE 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.305, 43.116]},
  spring_name: "LATTY HOT SPRING",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "BENNETT MTN. 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-112.008, 42.621]},
  spring_name: "LAVA HOT SPRINGS",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "LAVA HOT SPRINGS 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.046, 43.817]},
  spring_name: "LEGGIT CREEK HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(ATLANTA EAST 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.826, 45.07]},
  spring_name: "LICK CREEK WARM SPRING",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(ENOS LAKE 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-112.554, 44.145]},
  spring_name: "LIDY HOT SPRINGS",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "LIDY HOT SPRINGS 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.948, 43.605]},
  spring_name: "LIGHTFOOT HOT SPRINGS",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "BOARDMAN CREEK 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.088, 44.382]},
  spring_name: "LITTLE ANTELOPE FLAT WARM SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "LITTLE ANTELOPE FLAT 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.604, 43.724]},
  spring_name: "LOFTUS HOT SPRING",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "SHEEP CREEK 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.368, 42.865]},
  spring_name: "LOWER BIRCH SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "ROUGH MOUNTAIN 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.499, 43.974]},
  spring_name: "LOWER BOWERY HOT SPRING",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "(RYAN PEAK 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.725, 42.767]},
  spring_name: "LOWER INDIAN BATHTUB HOT SPRINGS",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "HOT SPRING 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.806, 44.799]},
  spring_name: "LOWER LOON CREEK HOT SPRING",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "RAMEY HILL 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.504, 42.013]},
  spring_name: "MAGIC HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: null
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.399, 43.328]},
  spring_name: "MAGIC HOT SPRINGS",
  degrees_f: "163",
  degrees_c: "73",
  usgs_quadrangle: "BELLEVUE 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-112.239, 42.173]},
  spring_name: "MALAD WARM SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(MALAD CITY EAST 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.707, 42.308]},
  spring_name: "MAPLE GROVE HOT SPRINGS",
  degrees_f: "172",
  degrees_c: "78",
  usgs_quadrangle: "ONEIDA NARROWS RESERVOIR 7."
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-113.523, 42.447]},
  spring_name: "MARSH CREEK HOT SPRING",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "(ALBION 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-113.511, 42.449]},
  spring_name: "MARSH GULLY HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "ALBION 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.021, 46.006]},
  spring_name: "MARTEN HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "MINK PEAK 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.123, 44.813]},
  spring_name: "MIDDLE FORK INDIAN CREEK HOT SPRING",
  degrees_f: "162",
  degrees_c: "72",
  usgs_quadrangle: "PUNGO MOUNTAIN 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-113.779, 43.363]},
  spring_name: "MILFORD SWEAT HOT SPRING",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: null
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.693, 44.642]},
  spring_name: "MOLLYS HOT SPRING",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "(WARM LAKE 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.988, 43.588]},
  spring_name: "MORES CREEK HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(ARROWROCK DAM 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.838, 44.26]},
  spring_name: "MORMON BEND HOT SPRING",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "(EAST BASIN CREEK 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.704, 44.951]},
  spring_name: "MORMON RANCH WARM SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "APAREJO POINT 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.829, 43.255]},
  spring_name: "MORMON RESERVOIR WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(FAIRFIELD 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.726, 42.374]},
  spring_name: "MOUND VALLEY WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "ONEIDA NARROWS RESERVOIR 7."
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.363, 42.032]},
  spring_name: "MURPHY HOT SPRINGS",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: null
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.509, 42.337]},
  spring_name: "NAT-SOO-PAH WARM SPRING",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "HOLLISTER 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.571, 43.755]},
  spring_name: "NINEMEYER HOT SPRINGS",
  degrees_f: "169",
  degrees_c: "76",
  usgs_quadrangle: "BARBER FLAT 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-113.861, 42.173]},
  spring_name: "OAKLEY HOT SPRING",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "BASIN 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-117.071, 44.354]},
  spring_name: "OLD HOMESTEAD WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "OLDS FERRY SE 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.734, 44.652]},
  spring_name: "OWEN CABIN HOT SPRING",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "ROCK CREEK 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.463, 45.344]},
  spring_name: "OWL CREEK HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "SHOUP 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.267, 43.553]},
  spring_name: "PARADISE HOT SPRINGS",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "FEATHERVILLE 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.378, 42.426]},
  spring_name: "PESCADERO WARM SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "NOUNAN 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.8, 43.99]},
  spring_name: "PIERSON HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "ALTURAS LAKE 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.435, 43.791]},
  spring_name: "PINCOCK (GREEN CANYON) HOT SPRINGS",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "WRIGHT CREEK 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.685, 44.062]},
  spring_name: "PINE FLAT HOT SPRINGS",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "PINE FLAT 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.207, 44.721]},
  spring_name: "PISTOL CREEK HOT SPRINGS",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "GREYHOUND RIDGE 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-112.348, 42.156]},
  spring_name: "PLEASANTVIEW WARM SPRINGS",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "MALAD CITY WEST 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.892, 42.637]},
  spring_name: "POISON SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "BUHL 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.56, 43.76]},
  spring_name: "POOL CREEK HOT SPRING",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "(BARBER FLAT 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.983, 42.781]},
  spring_name: "PORTNEUF RIVER WARM SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "(PORTNEUF 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.83, 43.576]},
  spring_name: "PREIS HOT SPRING",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "SYDNEY BUTTE 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-112.226, 42.025]},
  spring_name: "PRICES WARM SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(HENDERSON CREEK 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.707, 46.235]},
  spring_name: "PROSPECTOR HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(WAHOO PEAK 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.192, 43.831]},
  spring_name: "QUEENS RIVER HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "ATLANTA WEST 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.664, 43.605]},
  spring_name: "RATTLESNAKE HOT SPRING",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "(LONG GULCH 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.198, 45.788]},
  spring_name: "RED RIVER HOT SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "SABLE HILL 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-113.446, 42.286]},
  spring_name: "RICE SPRING WARD SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "NIBBS CREEK 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.172, 45.416]},
  spring_name: "RIGGINS HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "RIGGINS HOT SPRINGS"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.676, 44.247]},
  spring_name: "ROBINSON BAR HOT SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "ROBINSON BAR 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-112.906, 42.545]},
  spring_name: "ROCKLAND WARM SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "ROCKLAND WEST 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.891, 44.253]},
  spring_name: "ROCKY CANYON HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "BOILING SPRINGS 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.865, 44.101]},
  spring_name: "ROSALYS WARM SPRING",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "OBSIDIAN 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.353, 43.951]},
  spring_name: "ROYSTONE HOT SPRINGS",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "MONTOUR 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.937, 45.852]},
  spring_name: "RUNNING WARM SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "THREE PRONG MTN. 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-113.884, 43.367]},
  spring_name: "RUSH WARM SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: null
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.585, 43.805]},
  spring_name: "RUSSIAN JOHN HOT SPRING",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "EASLEY HOT SPRINGS 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.177, 44.16]},
  spring_name: "SACAJAWEA HOT SPRINGS",
  degrees_f: "153",
  degrees_c: "67",
  usgs_quadrangle: "GRANDJEAN 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.856, 42.704]},
  spring_name: "SALMON FALLS HOT SPRING",
  degrees_f: "153",
  degrees_c: "67",
  usgs_quadrangle: "(THOUSAND SPRINGS 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-113.836, 45.095]},
  spring_name: "SALMON HOT SPRING",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "SALMON 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-113.588, 42.24]},
  spring_name: "SEARS SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "(ELBA 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.807, 45.17]},
  spring_name: "SECESH HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(LOON LAKE 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-113.605, 45.013]},
  spring_name: "SHARKEY HOT SPRING",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "GOLDSTONE MTN. 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.658, 43.696]},
  spring_name: "SHEEP CREEK BRIDGE HOT SPRING",
  degrees_f: "142",
  degrees_c: "61",
  usgs_quadrangle: "TWIN SPRINGS 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.561, 45.035]},
  spring_name: "SHEEP CREEK HOT SPRING",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "(PARKS PEAK 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.197, 44.628]},
  spring_name: "SHEEPEATER HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "GREYHOUND RIDGE 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.601, 44.628]},
  spring_name: "SHOWER BATH SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "SHELDON PEAK 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.802, 44.33]},
  spring_name: "SILVER CREEK HOT SPRING",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "BOILING SPRINGS 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.816, 43.647]},
  spring_name: "SKILLERN HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "PARADISE PEAK 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.624, 44.171]},
  spring_name: "SLATE CREEK HOT SPRING",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "LIVINGSTON CREEK 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.617, 43.72]},
  spring_name: "SMITH CABIN HOT SPRING",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "SHEEP CREEK 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.616, 45.042]},
  spring_name: "SNOWSHOE JOHNSONS HOT SPRING",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "(HOODOO MEADOWS 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.604, 42.657]},
  spring_name: "SODA SPRINGS",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "SODA SPRINGS 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.697, 44.632]},
  spring_name: "SOUTH FORK PLUNGE",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "(WARM LAKE 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.928, 42.119]},
  spring_name: "SQUAW HOT SPRINGS",
  degrees_f: "163",
  degrees_c: "73",
  usgs_quadrangle: "WESTON 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.929, 44.224]},
  spring_name: "STANLEY HOT SPRING",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "STANLEY 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.258, 46.316]},
  spring_name: "STANLEY HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "HUCKLEBERRY BUTTE 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.442, 44.853]},
  spring_name: "STARKEY HOT SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "NEW MEADOWS 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.643, 42.655]},
  spring_name: "STEAMBOAT HOT SPRING",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "(SODA SPRINGS 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.296, 45.152]},
  spring_name: "STINKY WARM SPRING",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "INDIAN MOUNTAIN 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.444, 43.788]},
  spring_name: "STRAIGHT CREEK HOT SPRING",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "(GRAND MTN. 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.09, 46.138]},
  spring_name: "STUART HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "BIG ROCK MTN. 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.443, 44.254]},
  spring_name: "SULLIVAN HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "CLAYTON 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.301, 44.554]},
  spring_name: "SULPHUR CREEK HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(CHINOOK MTN. 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.072, 44.585]},
  spring_name: "SULPHUR CREEK HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(GREYHOUND RIDGE 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.748, 44.268]},
  spring_name: "SUNBEAM HOT SPRINGS",
  degrees_f: "169",
  degrees_c: "76",
  usgs_quadrangle: "SUNBEAM 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.018, 44.733]},
  spring_name: "SUNFLOWER FLAT HOT SPRING",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "(GREYHOUND RIDGE 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.993, 44.73]},
  spring_name: "SUNFLOWER HOT SPRINGS",
  degrees_f: "149",
  degrees_c: "65",
  usgs_quadrangle: "SLIDEROCK RIDGE 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.325, 43.972]},
  spring_name: "SWEET WARM SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(MONTOUR 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-112.458, 42.957]},
  spring_name: "TADPOLE WARM SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "POCATELLO NORTH 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.189, 43.607]},
  spring_name: "TAYLOR SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "DRIGGS 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.722, 44.914]},
  spring_name: "TEAPOT HOT SPRING",
  degrees_f: "142",
  degrees_c: "61",
  usgs_quadrangle: "TEAPOT MTN. 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.208, 43.677]},
  spring_name: "TERTELING HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "BOISE NORTH 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.01, 44.721]},
  spring_name: "THOMAS CREEK RANCH HOT SPRING",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "GREYHOUND RIDGE 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.332, 43.161]},
  spring_name: "THOMAS FLATS WARM SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "WILD HORSE BUTTE 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.237, 42.015]},
  spring_name: "THOROUGHBRED WARM SPRINGS",
  degrees_f: "69",
  degrees_c: "21",
  usgs_quadrangle: null
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.308, 43.5]},
  spring_name: "TOWNE CREEK WARM SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(PINE 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.749, 44.626]},
  spring_name: "TRAIL CREEK HOT SPRING",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "(WARM LAKE 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.726, 42.337]},
  spring_name: "TREASURETON HOT SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "ONEIDA NARROWS RESERVOIR 7."
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.988, 43.038]},
  spring_name: "TSCHANNE HOT SPRING",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "(DAVIS MOUNTAIN 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.696, 43.671]},
  spring_name: "TWIN SPRINGS",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "TWIN SPRINGS 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.739, 44.645]},
  spring_name: "UPPER LOON CREEK HOT SPRINGS",
  degrees_f: "145",
  degrees_c: "63",
  usgs_quadrangle: "ROCK CREEK 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.583, 43.738]},
  spring_name: "VAUGHN HOT SPRING",
  degrees_f: "154",
  degrees_c: "68",
  usgs_quadrangle: "SHEEP CREEK 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.695, 44.568]},
  spring_name: "VULCAN HOT SPRINGS",
  degrees_f: "190",
  degrees_c: "88",
  usgs_quadrangle: "WARM LAKE 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.931, 43.383]},
  spring_name: "WARDROP HOT SPRING",
  degrees_f: "147",
  degrees_c: "64",
  usgs_quadrangle: "FAIRFIELD 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.487, 43.641]},
  spring_name: "WARFIELD HOT SPRING",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "GRIFFIN BUTTE 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.671, 44.639]},
  spring_name: "WARM LAKE SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(WARM LAKE 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.863, 43.816]},
  spring_name: "WARM SPRINGS",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "IDAHO CITY 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-112.639, 44.257]},
  spring_name: "WARM SPRINGS",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "EDIE RANCH 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.993, 44.154]},
  spring_name: "WARM SPRINGS CREEK HOT SPRINGS",
  degrees_f: "167",
  degrees_c: "75",
  usgs_quadrangle: "GARDEN VALLEY 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.327, 43.823]},
  spring_name: "WEATHERBY HOT SPRING",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "PHIFER CREEK 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.035, 46.464]},
  spring_name: "WEIR CREEK HOT SPRINGS",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "GREYSTONE BUTTE 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-117.042, 44.306]},
  spring_name: "WEISER WARM SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "OLDS FERRY SE 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.486, 43.982]},
  spring_name: "WEST PASS HOT SPRING",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "RYAN PEAK 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.952, 43.049]},
  spring_name: "WHITE ARROW HOT SPRING",
  degrees_f: "145",
  degrees_c: "63",
  usgs_quadrangle: "DAVIS MOUNTAIN 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.231, 44.679]},
  spring_name: "WHITE LICKS HOT SPRING",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "CASCADE 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-113.363, 44.612]},
  spring_name: "WHITTAKER WARM SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "LEADORE 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.13, 43.637]},
  spring_name: "WILLOW CREEK HOT SPRING",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "CAYUSE POINT 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-111.695, 43.021]},
  spring_name: "WILSON LAKE WARM SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "(CRANES FLAT 15)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-115.044, 43.335]},
  spring_name: "WOLF HOT SPRING",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "(HILL CITY 7.5)"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-112.246, 42.056]},
  spring_name: "WOODRUFF HOT SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "HENDERSON CREEK 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-114.798, 43.563]},
  spring_name: "WORSWICK HOT SPRINGS",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "SYDNEY BUTTE 7.5"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-112.167, 43.114]},
  spring_name: "YANDELL SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "YANDELL SPRINGS 15"
  },
  {
  state_code: "ID",
  loc: { type: "Point", coordinates: [-116.291, 45.039]},
  spring_name: "ZIMS RESORT HOT SPRINGS",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "BALLY MOUNTAIN 7.5"
  },
  {
  state_code: "MA",
  loc: { type: "Point", coordinates: [-73.2, 42.735]},
  spring_name: "SAND SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "WILLIAMSTOWN 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-111.982, 46.448]},
  spring_name: "ALHAMBRA HOT SPRINGS",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "(CLANCY 15)"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-112.903, 46.106]},
  spring_name: "ANACONDA HOT SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "ANACONDA 15"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-110.142, 45.553]},
  spring_name: "ANDERSON SPRINGS",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "MCLEOD BASIN 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-111.892, 44.704]},
  spring_name: "ANDERSONS PASTURE SPRINGS",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "LOWER RED ROCK LAKE"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-112.692, 45.42]},
  spring_name: "APEX WARM SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "GLEN 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-112.555, 46.61]},
  spring_name: "AVON WARM SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(AVON 15)"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-110.667, 45.032]},
  spring_name: "BEAR CREEK SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(GARDINER 15)"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-113.32, 46.717]},
  spring_name: "BEARMOUTH WARM SPRING 1",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "BEARMOUTH 15"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-113.306, 46.718]},
  spring_name: "BEARMOUTH WARM SPRING 2",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(BEARMOUTH 15)"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-112.452, 45.392]},
  spring_name: "BEAVERHEAD ROCK SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "BEAVERHEAD ROCK 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-111.565, 46.355]},
  spring_name: "BEDFORD HOT SPRINGS",
  degrees_f: "74",
  degrees_c: "24",
  usgs_quadrangle: "TOWNSEND 15"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-114.382, 45.698]},
  spring_name: "BLUE JOINT HOT SPRING 1",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "PAINTED ROCKS LAKE 15"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-114.365, 45.697]},
  spring_name: "BLUE JOINT HOT SPRINGS 2",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "PAINTED ROCKS LAKE 15"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-112.094, 46.198]},
  spring_name: "BOULDER HOT SPRINGS",
  degrees_f: "169",
  degrees_c: "76",
  usgs_quadrangle: "BOULDER 15"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-111.186, 45.66]},
  spring_name: "BOZEMAN HOT SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "BOZEMAN 15"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-110.976, 45.708]},
  spring_name: "BRIDGER CANYON WARM SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(BOZEMAN PASS 15)"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-112.108, 46.596]},
  spring_name: "BROADWATER (HELENA) HOT SPRINGS",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "(HELENA 15)"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-109.471, 47.217]},
  spring_name: "BROOKS WARM SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "LEWISTOWN 15"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-112.751, 45.105]},
  spring_name: "BROWNS SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "DALYS 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-114.663, 47.607]},
  spring_name: "CAMAS HOT SPRINGS",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "HOT SPRINGS 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-110.571, 45.608]},
  spring_name: "CARTER BRIDGE WARM SPRINGS",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "(BRISBIN 7.5)"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-110.691, 45.337]},
  spring_name: "CHICO HOT SPRINGS",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "EMIGRANT 15"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-112.886, 46.334]},
  spring_name: "DEERLODGE PRISON RANCH SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(MOUNT POWELL 7.5)"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-108.883, 46.795]},
  spring_name: "DURFEE CREEK SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: null
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-113.109, 45.458]},
  spring_name: "ELKHORN HOT SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "POLARIS 15"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-111.726, 45.367]},
  spring_name: "ENNIS HOT SPRINGS",
  degrees_f: "181",
  degrees_c: "83",
  usgs_quadrangle: "(ENNIS 15)"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-113.938, 45.75]},
  spring_name: "GALLOGLY SPRING",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "LOST TRAIL PASS 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-112.776, 46.607]},
  spring_name: "GARRISON WARM SPRINGS",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(GARRISON 15)"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-114.648, 47.451]},
  spring_name: "GREEN SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "PERMA 15"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-112.811, 46.044]},
  spring_name: "GREGSON HOT SPRINGS",
  degrees_f: "158",
  degrees_c: "70",
  usgs_quadrangle: "ANACONDA 15"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-110.256, 45.757]},
  spring_name: "HUNTERS HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "HUNTERS HOT SPRINGS"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-113.403, 45.368]},
  spring_name: "JARDINE HOT SPRING",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "JACKSON 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-110.774, 45.09]},
  spring_name: "LADUKE (CORWIN) HOT SPRING",
  degrees_f: "154",
  degrees_c: "68",
  usgs_quadrangle: "MINER 15"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-108.656, 47.876]},
  spring_name: "LANDUSKY SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "HAYS 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-108.395, 47.971]},
  spring_name: "LITTLE WARM SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(BEAR MOUNTAIN 7.5)"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-108.445, 47.994]},
  spring_name: "LODGEPOLE (BIG WARM) SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(BEAR MOUNTAIN 7.5)"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-114.533, 46.728]},
  spring_name: "LOLO HOT SPRINGS GRANITE SPRINGS",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "LOLO HOT SPRINGS 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-112.714, 45.111]},
  spring_name: "LOVELLS HOT SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "GALLAGHER MOUNTAIN 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-112.844, 45.027]},
  spring_name: "MCMENOMEY RANCH SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "DALYS 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-112.855, 47.632]},
  spring_name: "MEDICINE (SUN RIVER) SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "ARSENIC PEAK 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-114.038, 45.841]},
  spring_name: "MEDICINE HOT SPRINGS",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "MEDICINE HOT SPRINGS 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-112.475, 45.462]},
  spring_name: "NEW BILTMORE HOT SPRINGS",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "BEAVERHEAD ROCK 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-113.452, 46.704]},
  spring_name: "NIMROD SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(BEARMOUTH 15)"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-111.683, 45.575]},
  spring_name: "NORRIS HOT SPRINGS",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "NORRIS 15"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-112.233, 45.896]},
  spring_name: "PIPESTONE HOT SPRINGS",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "DRY MOUNTAIN 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-111.899, 45.59]},
  spring_name: "POTOSI HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "HARRISON 15"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-111.9, 45.602]},
  spring_name: "POTOSI WARM SPRINGS",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "HARRISON 15"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-112.153, 45.171]},
  spring_name: "PULLER HOT SPRINGS",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "METZEL RANCH 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-114.789, 47.33]},
  spring_name: "QUINNS HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "PLAINS 15"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-112.126, 45.792]},
  spring_name: "RENOVA HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "(VENDOME 7.5)"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-112.295, 45.685]},
  spring_name: "SILVER STAR HOT SPRINGS",
  degrees_f: "163",
  degrees_c: "73",
  usgs_quadrangle: "(TWIN BRIDGES 15)"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-114.004, 46.106]},
  spring_name: "SLEEPING CHILD HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "DEER MOUNTAIN 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-111.649, 44.769]},
  spring_name: "SLOAN COW CAMP SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "(CLIFF LAKE 15)"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-111.878, 44.701]},
  spring_name: "STAUDENMEYER SPRINGS",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "(LOWER RED ROCK LAKE 15)"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-108.598, 47.843]},
  spring_name: "THE (LANDUSKY) PLUNGE",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "HAYS SE 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-112.135, 45.235]},
  spring_name: "TRUDAU WARM SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "METZEL RANCH 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-111.953, 45.037]},
  spring_name: "VIGILANTE SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "VARNEY 15"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-112.794, 46.178]},
  spring_name: "WARM SPRINGS (STATE HOSPITAL)",
  degrees_f: "172",
  degrees_c: "78",
  usgs_quadrangle: "ANACONDA NE 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-111.649, 44.785]},
  spring_name: "WEST FORK SWIMMING HOLE",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(CLIFF LAKE 15)"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-110.903, 46.547]},
  spring_name: "WHITE SULPHUR SPRINGS",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "WHITE SULPHUR SPRINGS 7.5"
  },
  {
  state_code: "MT",
  loc: { type: "Point", coordinates: [-111.613, 44.984]},
  spring_name: "WOLF CREEK HOT SPRINGS",
  degrees_f: "154",
  degrees_c: "68",
  usgs_quadrangle: "CLIFF LAKE 15"
  },
  {
  state_code: "NC",
  loc: { type: "Point", coordinates: [-82.826, 35.897]},
  spring_name: "HOT SPRINGS",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "HOT SPRINGS 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.8, 33.831]},
  spring_name: "(UPPER) FRISCO HOT SPRING",
  degrees_f: "98",
  degrees_c: "37",
  usgs_quadrangle: "DILLON MOUNTAIN 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.133, 35.06]},
  spring_name: "ALAMOS SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "MESA GIGANTE 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.358, 32.884]},
  spring_name: "ALLEN SPRINGS",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "READING MOUNTAIN 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.128, 32.644]},
  spring_name: "APACHE TEJO WARM SPRING",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "(HURLEY WEST 7.5)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.501, 33.898]},
  spring_name: "ARAGON SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(ARAGON 7.5)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.408, 32.821]},
  spring_name: "ASH SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "CIRCLE MESA 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.454, 34.995]},
  spring_name: "CLEAR WATER SPRING",
  degrees_f: "69",
  degrees_c: "21",
  usgs_quadrangle: "(MOUNT WASHINGTON 7.5)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.939, 34.049]},
  spring_name: "COOK SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "SOCORRO 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.276, 32.795]},
  spring_name: "DERRY WARM SPRINGS",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "GARFIELD 15"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.085, 34.903]},
  spring_name: "EL OJO ESCONDIDO",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "SOUTH GARCIA 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.994, 32.554]},
  spring_name: "FAYWOOD HOT SPRINGS",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "DWYER 15"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-109.025, 33.708]},
  spring_name: "FRIEBORN CANYON SPRING",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "(BLUE 15)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.209, 33.199]},
  spring_name: "GILA HOT SPRINGS",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "GILA HOT SPRINGS 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-109.047, 32.83]},
  spring_name: "GOAT CAMP SPRING",
  degrees_f: "69",
  degrees_c: "21",
  usgs_quadrangle: "YORK VALLEY 15"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.88, 33.237]},
  spring_name: "HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "WILSON MOUNTAIN 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-104.489, 32.455]},
  spring_name: "INDIAN BIG SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "WEST CARLSBAD 15"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.753, 35.592]},
  spring_name: "INDIAN SPRINGS",
  degrees_f: "123",
  degrees_c: "51",
  usgs_quadrangle: "(SAN YSIDRO 7.5)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.69, 35.772]},
  spring_name: "JEMEZ SPRINGS",
  degrees_f: "169",
  degrees_c: "76",
  usgs_quadrangle: "JEMEZ SPRINGS 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.027, 32.562]},
  spring_name: "KENNECOTT WARM SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "FAYWOOD STATION 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.091, 34.833]},
  spring_name: "LAGUNA PUEBLO SEEPS",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "SOUTH GARCIA SE 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.088, 34.854]},
  spring_name: "LAGUNA PUEBLO SPRINGS",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "SOUTH GARCIA SE 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.18, 33.192]},
  spring_name: "LYONS HUNTING LODGE HOT SPRINGS",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "(GILA HOT SPRINGS 7.5)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-105.722, 36.508]},
  spring_name: "MANBY HOT SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "ARROYO HONDO 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.512, 32.843]},
  spring_name: "MANGAS SPRINGS",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "CLIFF 15"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.627, 35.82]},
  spring_name: "MCCAULEY HOT SPRINGS",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "JEMEZ SPRINGS 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.836, 32.748]},
  spring_name: "MIMBRES HOT SPRINGS",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "DWYER 15"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-105.29, 35.653]},
  spring_name: "MONTEZUMA  HOT SPRINGS",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "MONTEZUMA 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-104.411, 32.248]},
  spring_name: "MOSLEY SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "CARLSBAD CAVERNS EAST 15"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.98, 34.116]},
  spring_name: "OJITOS SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "SOCORRO 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.593, 33.572]},
  spring_name: "OJO CALIENTE",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "MONTOYA BUTTE 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.053, 36.305]},
  spring_name: "OJO CALIENTE (ARSENIC SPRING)",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "OJO CALIENTE 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.777, 34.032]},
  spring_name: "OJO DE LAS CANAS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "LOMA DE LAS CANAS 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.86, 35.601]},
  spring_name: "PHILLIPS SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "SAN YSIDRO 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-105.606, 36.324]},
  spring_name: "PONCE DE LEON SPRINGS",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "RANCHOS DE TAOS 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.926, 32.501]},
  spring_name: "RADIUM SPRINGS",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "SAN DIEGO MOUNTAIN 15"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.951, 34.912]},
  spring_name: "RAINBOW SPRING",
  degrees_f: "71",
  degrees_c: "22",
  usgs_quadrangle: "OJO CALIENTE RESERVOIR 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.646, 35.938]},
  spring_name: "SAN ANTONIO HOT SPRING",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "SEVEN SPRINGS 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.56, 35.972]},
  spring_name: "SAN ANTONIO WARM SPRING",
  degrees_f: "101",
  degrees_c: "38",
  usgs_quadrangle: "VALLE SAN ANTONIO 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.88, 33.244]},
  spring_name: "SAN FRANCISCO HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "WILSON MOUNTAIN 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.854, 35.54]},
  spring_name: "SAN YSIDRO HOT SPRINGS",
  degrees_f: "85",
  degrees_c: "29",
  usgs_quadrangle: "(SAN YSIDRO 7.5)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.827, 35.548]},
  spring_name: "SAN YSIDRO WARM SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "SAN YSIDRO 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.94, 34.038]},
  spring_name: "SOCORRO SPRING SEDILLO SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "SOCORRO 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.685, 35.793]},
  spring_name: "SODA DAM HOT SPRINGS",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "JEMEZ SPRINGS 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.19, 32.606]},
  spring_name: "SOUSE SPRINGS",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "SOUSE SPRINGS 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.629, 35.849]},
  spring_name: "SPENCE HOT SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "JEMEZ SPRINGS 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.129, 34.698]},
  spring_name: "SPRING",
  degrees_f: "71",
  degrees_c: "22",
  usgs_quadrangle: "MESA APAREJO 15"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.235, 33.233]},
  spring_name: "SPRING (HOT)",
  degrees_f: "149",
  degrees_c: "65",
  usgs_quadrangle: "GILA HOT SPRINGS 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.209, 33.162]},
  spring_name: "SPRING (HOT)",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "GILA HOT SPRINGS 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.091, 34.808]},
  spring_name: "SPRING (SALT)",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "SOUTH GARCIA SE 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.085, 34.769]},
  spring_name: "SPRING (SALT)",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "SOUTH GARCIA SE 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.091, 34.847]},
  spring_name: "SPRING (SALT)",
  degrees_f: "76",
  degrees_c: "24",
  usgs_quadrangle: "SOUTH GARCIA SE 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.25, 33.274]},
  spring_name: "SPRING MFG FOUR",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "(WOODLAND PARK 7.5)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.262, 33.285]},
  spring_name: "SPRING MFG ONE",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "(WOODLAND PARK 7.5)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.282, 33.293]},
  spring_name: "SPRING MFG TWO SPRING MFG THREE",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "(WOODLAND PARK 7.5)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.059, 36.368]},
  spring_name: "STATUE SPRING",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "OJO CALIENTE 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.615, 35.908]},
  spring_name: "SULPHUR SPRINGS",
  degrees_f: "189",
  degrees_c: "87",
  usgs_quadrangle: "VALLE SAN ANTONIO 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.324, 33.306]},
  spring_name: "THE MEADOWS WARM SPRING",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(WOODLAND PARK 7.5)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.254, 33.135]},
  spring_name: "TRUTH OR CONSEQUENCES",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "CUCHILLO 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.483, 33.108]},
  spring_name: "TURKEY CREEK HOT SPRING",
  degrees_f: "165",
  degrees_c: "74",
  usgs_quadrangle: "(CANYON HILL 7.5)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.563, 33.279]},
  spring_name: "WARM SPRINGS",
  degrees_f: "87",
  degrees_c: "31",
  usgs_quadrangle: "CHISE 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.888, 35.646]},
  spring_name: "WARM SPRINGS",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "HOLY GHOST SPRING 7.5"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.095, 34.326]},
  spring_name: null,
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(RILEY 15)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.319, 34.158]},
  spring_name: null,
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: null
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.471, 35.308]},
  spring_name: null,
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(PLACITAS 7.5)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-105.713, 36.528]},
  spring_name: null,
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "(ARROYO HONDO 7.5)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.58, 32.953]},
  spring_name: null,
  degrees_f: "94",
  degrees_c: "35",
  usgs_quadrangle: "(HILLSBORO 15)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.811, 32.693]},
  spring_name: null,
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(DWYER 15)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.631, 32.975]},
  spring_name: null,
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(CLIFF 15)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-109.035, 32.899]},
  spring_name: null,
  degrees_f: "69",
  degrees_c: "21",
  usgs_quadrangle: "(YORK VALLEY 15)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.971, 33.813]},
  spring_name: null,
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(SAN ANTONIO 15)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.233, 33.258]},
  spring_name: null,
  degrees_f: "94",
  degrees_c: "34",
  usgs_quadrangle: "(BURNT CORRAL CANYON 7.5)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-108.228, 33.212]},
  spring_name: null,
  degrees_f: "149",
  degrees_c: "65",
  usgs_quadrangle: "(GILA HOT SPRINGS 7.5)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-106.883, 34.264]},
  spring_name: null,
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(SAN ACACIA 7.5)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.143, 34.916]},
  spring_name: null,
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(SOUTH GARCIA 15)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.092, 34.883]},
  spring_name: null,
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(SOUTH GARCIA 7.5)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.388, 34.815]},
  spring_name: null,
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(MARMON RANCH 7.5)"
  },
  {
  state_code: "NM",
  loc: { type: "Point", coordinates: [-107.091, 34.791]},
  spring_name: null,
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "(SOUTH GARCIA SE 7.5)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.856, 39.565]},
  spring_name: "(SODA LAKE AREA)",
  degrees_f: "210",
  degrees_c: "99",
  usgs_quadrangle: "SODA LAKE 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.867, 38.365]},
  spring_name: "ABEL SPRING",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "THE WALL SE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.337, 37.825]},
  spring_name: "ALKALI HOT SPRING",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "ALKALI 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.509, 39.944]},
  spring_name: "ANAHO ISLAND SPRING",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "(SUTCLIFFE 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.425, 36.942]},
  spring_name: "ASH CREEK SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(DOG BONE LAKE NORTH 7.5)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.192, 37.463]},
  spring_name: "ASH SPRINGS",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "ASH SPRINGS 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.411, 36.426]},
  spring_name: "ASH TREE SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(ASH MEADOWS 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.709, 41.921]},
  spring_name: "BALTAZOR HOT SPRING",
  degrees_f: "181",
  degrees_c: "83",
  usgs_quadrangle: "DENIO 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.36, 39.558]},
  spring_name: "BARTINE HOT SPRINGS",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "BARTINE RANCH 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.744, 36.918]},
  spring_name: "BEATTY MUNICIPAL SPRING",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "BARE MTN. 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.528, 37.783]},
  spring_name: "BENNETT SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "BENNETT PASS 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.588, 40.567]},
  spring_name: "BEOWAWE HOT SPRINGS (THE GEYSERS)",
  degrees_f: "208",
  degrees_c: "98",
  usgs_quadrangle: "DUNPHY 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.274, 36.375]},
  spring_name: "BIG (ASH MEADOWS) SPRING",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.049, 38.954]},
  spring_name: "BIG BLUE (A) SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "CARVERS NE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.635, 39.072]},
  spring_name: "BIG BLUE SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "GREEN SPRINGS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.7, 38.95]},
  spring_name: "BIG WARM SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "DUCKWATER 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.007, 40.972]},
  spring_name: "BLACK ROCK HOT SPRING",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.528, 38.563]},
  spring_name: "BLUE EAGLE SPRINGS",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "BLUE EAGLE SPRINGS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.433, 36.389]},
  spring_name: "BLUE POINT SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "OVERTON BEACH 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.805, 41.925]},
  spring_name: "BOG HOT SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "RAILROAD POINT 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.379, 40.262]},
  spring_name: "BOILING SPRINGS",
  degrees_f: "187",
  degrees_c: "86",
  usgs_quadrangle: "KUMIVA PEAK 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.271, 36.363]},
  spring_name: "BOLE SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.578, 39.342]},
  spring_name: "BORAX SPRING",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "(CARSON LAKE 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.84, 39.286]},
  spring_name: "BOWERS MANSION HOT SPRING",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "WASHOE CITY 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.011, 39.787]},
  spring_name: "BRADYS HOT SPRINGS",
  degrees_f: "209",
  degrees_c: "98",
  usgs_quadrangle: "FIREBALL RIDGE 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.306, 40.829]},
  spring_name: "BROOKS SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "BROOKS SPRING 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.888, 36.033]},
  spring_name: "BROWNS SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "PAHRUMP 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.068, 40.22]},
  spring_name: "BRUFFEYS HOT SPRINGS",
  degrees_f: "149",
  degrees_c: "65",
  usgs_quadrangle: "MINERAL HILL 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.415, 40.418]},
  spring_name: "BUFFALO SPRINGS",
  degrees_f: "162",
  degrees_c: "72",
  usgs_quadrangle: "BUFFALO SPRINGS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.327, 40.368]},
  spring_name: "BUFFALO VALLEY HOT SPRINGS",
  degrees_f: "174",
  degrees_c: "79",
  usgs_quadrangle: "BUFFALO SPRINGS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.723, 36.968]},
  spring_name: "BURRELL HOT SPRING",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "BARE MTN. 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.113, 40.77]},
  spring_name: "BUTTE SPRINGS (TREGO HOT SPRINGS)",
  degrees_f: "187",
  degrees_c: "86",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.011, 38.44]},
  spring_name: "BUTTERFIELD SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "SUNNYSIDE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.303, 36.428]},
  spring_name: "BUTTON SPRINGS",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.275, 41.022]},
  spring_name: "CAINE SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.51, 37.621]},
  spring_name: "CALIENTE HOT SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "(CALIENTE 7.5)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.915, 39.547]},
  spring_name: "CAMPBELL RANCH SPRINGS",
  degrees_f: "76",
  degrees_c: "24",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.937, 41.258]},
  spring_name: "CANE SPRINGS",
  degrees_f: "74",
  degrees_c: "23",
  usgs_quadrangle: "PAIUTE MEADOWS 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.049, 40.29]},
  spring_name: "CARLOTTI RANCH SPRINGS",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "PINE VALLEY 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.752, 39.193]},
  spring_name: "CARSON HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "CARSON CITY 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.274, 37.751]},
  spring_name: "CEDAR SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "KAWICH PEAK 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.042, 38.992]},
  spring_name: "CHARNOCK (BIG BLUE) SPRINGS",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "CARVERS NE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.893, 39.883]},
  spring_name: "CHERRY CREEK HOT SPRINGS",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.79, 40.187]},
  spring_name: "CHILLIS HOT SPRING",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "CARICO LAKE 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.792, 38.464]},
  spring_name: "CHIMNEY WARM SPRING",
  degrees_f: "160",
  degrees_c: "71",
  usgs_quadrangle: "THE WALL NE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.647, 40.087]},
  spring_name: "COLLAR AND ELBOW SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.866, 38.388]},
  spring_name: "COYOTE HOLE SPRING",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "THE WALL NE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.172, 40.763]},
  spring_name: "COYOTE SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.517, 40.404]},
  spring_name: "CRESCENT VALLEY HOT SPRINGS",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "CRESCENT VALLEY 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.507, 40.417]},
  spring_name: "CRESCENT VALLEY HOT SPRINGS",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "CRESCENT VALLEY 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.322, 36.421]},
  spring_name: "CRYSTAL POOL",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.233, 37.532]},
  spring_name: "CRYSTAL SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "HIKO 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.183, 38.822]},
  spring_name: "DARROUGHS HOT SPRINGS",
  degrees_f: "203",
  degrees_c: "95",
  usgs_quadrangle: "CARVERS 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.313, 36.408]},
  spring_name: "DAVIS RANCH SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(ASH MEADOWS 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.302, 36.402]},
  spring_name: "DAVIS RANCH SPRINGS",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.321, 37.86]},
  spring_name: "DELMUES SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "CONDOR CANYON 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.291, 36.425]},
  spring_name: "DEVILS HOLE",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.666, 39.031]},
  spring_name: "DIANAS PUNCH BOWL",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "DIANAS PUNCH BOWL 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.738, 39.42]},
  spring_name: "DIMONTE SPRING",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "(STEAMBOAT 7.5)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.017, 39.866]},
  spring_name: "DIXIE COMSTOCK MINE",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "DIXIE HOT SPRINGS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.067, 39.797]},
  spring_name: "DIXIE HOT SPRINGS",
  degrees_f: "162",
  degrees_c: "72",
  usgs_quadrangle: "DIXIE HOT SPRINGS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.743, 39.442]},
  spring_name: "DOUBLE DIAMOND SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "(STEAMBOAT 7.5)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.028, 41.051]},
  spring_name: "DOUBLE HOT SPRINGS",
  degrees_f: "178",
  degrees_c: "81",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.689, 38.965]},
  spring_name: "DOUBLE SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "GILLIS CANYON 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.65, 38.796]},
  spring_name: "DOUD SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "MT. SIEGEL 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.564, 41.567]},
  spring_name: "DYKE HOT SPRINGS",
  degrees_f: "158",
  degrees_c: "70",
  usgs_quadrangle: "DUFFER PEAK 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.039, 39.733]},
  spring_name: "EAGLE SALT WORKS SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(TWO TIPS 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.778, 40.813]},
  spring_name: "ELKO HOT SPRING",
  degrees_f: "190",
  degrees_c: "88",
  usgs_quadrangle: "ELKO WEST 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.153, 40.684]},
  spring_name: "ELLISON RANCH WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "CARLIN 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.047, 38.622]},
  spring_name: "EMIGRANT SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "MOORMAN SPRING SE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.342, 36.491]},
  spring_name: "FAIRBANKS SPRING SODA SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.039, 37.997]},
  spring_name: "FISH SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(DAVIS MOUNTAIN 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.884, 40.103]},
  spring_name: "FISH SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "STATE LINE PEAK 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.397, 38.81]},
  spring_name: "FISH SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "FISH SPRINGS 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.279, 41.763]},
  spring_name: "FIVEMILE SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "TRIDENT PEAK 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.022, 38.423]},
  spring_name: "FLAG SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "SUNNYSIDE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.227, 37.896]},
  spring_name: "FLATNOSE RANCH SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "URSINE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.328, 40.857]},
  spring_name: "FLY RANCH (WARDS) HOT SPRINGS",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.035, 40.079]},
  spring_name: "FLYNN RANCH SPRINGS",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "MINERAL HILL 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.917, 39.954]},
  spring_name: "FUMAROLES",
  degrees_f: "204",
  degrees_c: "96",
  usgs_quadrangle: "(HUMBOLDT SALT MARSH 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.187, 41.369]},
  spring_name: "GAMBLE SPRING",
  degrees_f: "69",
  degrees_c: "20",
  usgs_quadrangle: "MONTELLO 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.117, 41.884]},
  spring_name: "GAMBLES HOLE",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "GOOSE CREEK 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.993, 37.979]},
  spring_name: "GAP SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "RHYOLITE RIDGE 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.632, 38.645]},
  spring_name: "GEYSER RANCH SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "MT. GRAFTON 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.633, 38.654]},
  spring_name: "GEYSER RANCH SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "MT. GRAFTON 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.628, 38.671]},
  spring_name: "GEYSER RANCH SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "MT. GRAFTON 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.612, 39.814]},
  spring_name: "GIOCOECHA WARM SPRINGS",
  degrees_f: "76",
  degrees_c: "24",
  usgs_quadrangle: "COLD CREEK RANCH 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.494, 40.961]},
  spring_name: "GOLCONDA HOT SPRING (NORTH)",
  degrees_f: "165",
  degrees_c: "74",
  usgs_quadrangle: "GOLCONDA 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.488, 40.954]},
  spring_name: "GOLCONDA HOT SPRING (SOUTH)",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "GOLCONDA 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.365, 40.662]},
  spring_name: "GREAT BOILING SPRING (GERLACH)",
  degrees_f: "208",
  degrees_c: "98",
  usgs_quadrangle: "GERLACH 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.272, 38.292]},
  spring_name: "HAMMOND RANCH SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "(TRAIL CANYON 7.5)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.721, 36.975]},
  spring_name: "HICKS HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "BARE MTN. 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.215, 37.598]},
  spring_name: "HIKO SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "HIKO 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.815, 39.059]},
  spring_name: "HOBO HOT SPRINGS",
  degrees_f: "114",
  degrees_c: "46",
  usgs_quadrangle: "GENOA 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.496, 40.178]},
  spring_name: "HOME STATION RANCH HOT SPRING",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "MT. MOSES 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.463, 40.603]},
  spring_name: "HORSESHOE RANCH SPRINGS",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "(BEOWAWE 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.365, 38.521]},
  spring_name: "HOT CREEK RANCH HOT SPRING",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "HOBBLE CANYON 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.153, 38.383]},
  spring_name: "HOT CREEK RANCH SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "SUNNYSIDE NW 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.181, 41.576]},
  spring_name: "HOT CREEK SPRINGS",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "HOT CREEK 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.277, 38.437]},
  spring_name: "HOT CREEK VALLEY SPRING",
  degrees_f: "142",
  degrees_c: "61",
  usgs_quadrangle: "(BLUE JAY SPRING 7.5)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.777, 40.819]},
  spring_name: "HOT HOLE",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "ELKO WEST 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.733, 41.148]},
  spring_name: "HOT LAKE",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "SQUAW VALLEY RANCH 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.108, 40.922]},
  spring_name: "HOT POT (BLOSSOM HOT SPRINGS)",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "HOT POT 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.402, 40.389]},
  spring_name: "HOT SEEPS (SAN EMIDIO DESERT)",
  degrees_f: "203",
  degrees_c: "95",
  usgs_quadrangle: "(KUMIVA PEAK 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.994, 41.145]},
  spring_name: "HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "OXLEY PEAK 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.376, 41.98]},
  spring_name: "HOT SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "GOLLAHER MOUNTAIN 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.731, 35.944]},
  spring_name: "HOT SPRING",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "RINGBOLT RAPIDS 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.743, 35.964]},
  spring_name: "HOT SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "RINGBOLT RAPIDS 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.175, 38.859]},
  spring_name: "HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "YERINGTON 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.663, 39.041]},
  spring_name: "HOT SPRING",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "DIANAS PUNCH BOWL 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.433, 40.316]},
  spring_name: "HOT SPRING",
  degrees_f: "186",
  degrees_c: "86",
  usgs_quadrangle: "FRENCHIE CREEK 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.278, 41.175]},
  spring_name: "HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "TWIN BUTTES 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.287, 41.19]},
  spring_name: "HOT SPRING",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "TWIN BUTTES 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.838, 40.673]},
  spring_name: "HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "BATTLE MOUNTAIN 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.305, 41.261]},
  spring_name: "HOT SPRINGS",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "HOT SPRINGS CREEK 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.058, 40.325]},
  spring_name: "HOT SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "PINE VALLEY 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.578, 41.108]},
  spring_name: "HOT SPRINGS",
  degrees_f: "158",
  degrees_c: "70",
  usgs_quadrangle: "(BLISS 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.991, 41.183]},
  spring_name: "HOT SPRINGS",
  degrees_f: "142",
  degrees_c: "61",
  usgs_quadrangle: "OXLEY PEAK 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.748, 35.982]},
  spring_name: "HOT SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "RINGBOLT RAPIDS 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.681, 39.941]},
  spring_name: "HOT SPRINGS",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "WALTI HOT SPRINGS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.549, 39.316]},
  spring_name: "HOT SPRINGS",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "CARROLL SUMMIT SE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.552, 39.308]},
  spring_name: "HOT SPRINGS",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "CARROLL SUMMIT SE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.107, 40.191]},
  spring_name: "HOT SPRINGS",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "THE CEDARS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.103, 40.198]},
  spring_name: "HOT SPRINGS",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "THE CEDARS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.492, 40.761]},
  spring_name: "HOT SPRINGS",
  degrees_f: "185",
  degrees_c: "85",
  usgs_quadrangle: "GOLDRUN CREEK 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.133, 40.699]},
  spring_name: "HOT SPRINGS (CARLIN)",
  degrees_f: "174",
  degrees_c: "79",
  usgs_quadrangle: "(CARLIN 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.102, 40.183]},
  spring_name: "HOT SPRINGS RANCH",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "THE CEDARS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.1, 41.05]},
  spring_name: "HOT SPRINGS RANCH SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.04, 40.765]},
  spring_name: "HOT SULPHUR SPRINGS",
  degrees_f: "147",
  degrees_c: "64",
  usgs_quadrangle: "HUNTSMAN RANCH 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.15, 41.468]},
  spring_name: "HOT SULPHUR SPRINGS (TUSCARORA)",
  degrees_f: "194",
  degrees_c: "90",
  usgs_quadrangle: "TUSCARORA 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.505, 41.721]},
  spring_name: "HOWARD HOT SPRING",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "DUFFER PEAK 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.722, 39.457]},
  spring_name: "HUFFAKER SPRINGS",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "(STEAMBOAT 7.5)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.718, 40.003]},
  spring_name: "HYDER HOT SPRINGS",
  degrees_f: "176",
  degrees_c: "80",
  usgs_quadrangle: "CAIN MOUNTAIN 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.671, 36.565]},
  spring_name: "INDIAN SPRINGS",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "INDIAN SPRINGS 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.303, 38.458]},
  spring_name: "INDIAN SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(SAN ANTONIO RANCH 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.895, 40.929]},
  spring_name: "IZZENHOOD RANCH SPRINGS",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "IZZENHOOD RANCH 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.278, 36.39]},
  spring_name: "JACK RABBIT SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.515, 40.967]},
  spring_name: "JOHNSON RANCH SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "INDEPENDENCE VALLEY"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.531, 38.554]},
  spring_name: "KATE SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "BLUE EAGLE SPRINGS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.347, 39.404]},
  spring_name: "KLOBE (BARTHOLOMAE) HOT SPRING",
  degrees_f: "156",
  degrees_c: "69",
  usgs_quadrangle: "ANTELOPE PEAK 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.883, 40.408]},
  spring_name: "KYLE HOT SPRINGS",
  degrees_f: "171",
  degrees_c: "77",
  usgs_quadrangle: "KYLE HOT SPRINGS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.141, 36.205]},
  spring_name: "KYLE SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "LAS VEGAS NW 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.866, 39.283]},
  spring_name: "LACKAWANNA HOT SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "EAST ELY 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.191, 36.173]},
  spring_name: "LAS VEGAS SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(LAS VEGAS NW 7.5)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.907, 39.512]},
  spring_name: "LAWTON HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "VERDI 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.648, 40.604]},
  spring_name: "LEACH HOT SPRINGS",
  degrees_f: "207",
  degrees_c: "97",
  usgs_quadrangle: "LEACH HOT SPRINGS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.723, 39.208]},
  spring_name: "LEE HOT SPRINGS ALLEN SPRINGS",
  degrees_f: "190",
  degrees_c: "88",
  usgs_quadrangle: "ALLEN SPRINGS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.649, 39.893]},
  spring_name: "LITTLE HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "WALTI HOT SPRINGS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.695, 38.937]},
  spring_name: "LITTLE WARM SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "DUCKWATER 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.767, 38.556]},
  spring_name: "LOCKES BIG SPRING HAY CORRAL SPR",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "LOCKES 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.325, 36.468]},
  spring_name: "LONGSTREET SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.604, 40.035]},
  spring_name: "LOWER RANCH HOT SPRINGS",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "CAIN MOUNTAIN 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.692, 39.792]},
  spring_name: "LOWER SHELLBOURNE SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.717, 41.052]},
  spring_name: "MACFARLANE HOT SPRING",
  degrees_f: "170",
  degrees_c: "77",
  usgs_quadrangle: "KING LEAR PEAK 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.893, 36.147]},
  spring_name: "MANSE RANCH SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "PAHRUMP 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.604, 40.08]},
  spring_name: "MCCOY SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "CAIN MOUNTAIN 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.779, 39.413]},
  spring_name: "MCGILL SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "MCGILL 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.136, 39.028]},
  spring_name: "MCLEOD RANCH HOT SPRING",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "MILLETT RANCH 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.735, 41.788]},
  spring_name: "MINERAL HOT SPRING",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "(DELAPLAIN 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.804, 39.484]},
  spring_name: "MOANA SPRINGS",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "MT. ROSE NE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.714, 36.71]},
  spring_name: "MOAPA WARM SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "MOAPA 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.807, 39.665]},
  spring_name: "MONTE NEVA HOT SPRINGS",
  degrees_f: "176",
  degrees_c: "80",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.181, 38.352]},
  spring_name: "MOON RIVER SPRING",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "HOT CREEK BUTTE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.138, 38.594]},
  spring_name: "MOORMAN SPRING",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "MOORMAN SPRING 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.07, 40.313]},
  spring_name: "MOUND SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "MC COY 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.378, 40.653]},
  spring_name: "MUD SPRINGS",
  degrees_f: "184",
  degrees_c: "84",
  usgs_quadrangle: "(GERLACH 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.716, 36.722]},
  spring_name: "MUDDY SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "MOAPA 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.116, 41.354]},
  spring_name: "MUSTANG SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "BIG MOUNTAIN 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.41, 38.899]},
  spring_name: "NEVADA (HINDS) HOT SPRINGS",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "WELLINGTON 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.737, 39.159]},
  spring_name: "NEVADA STATE PRISON SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(NEW EMPIRE 7.5)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.071, 41.929]},
  spring_name: "NILE SPRING",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "GOOSE CREEK 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.261, 41.706]},
  spring_name: "NINEMILE SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "QUINN RIVER CROSSING 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.405, 38.531]},
  spring_name: "OLD DUGAN RANCH HOT SPRINGS",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "LITTLE FISH LAKE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.983, 36.207]},
  spring_name: "PAHRUMP (BENNETTS) SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "PAHRUMP 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.861, 41.809]},
  spring_name: "PAINTED HILLS MINE",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "(RAILROAD POINT 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.38, 37.807]},
  spring_name: "PANACA SPRING",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "PANACA 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.319, 36.464]},
  spring_name: "PARENT SPRINGS",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.11, 39.597]},
  spring_name: "PATUA HOT SPRINGS (FERNLEY)",
  degrees_f: "187",
  degrees_c: "86",
  usgs_quadrangle: "(TWO TIPS 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.48, 37.822]},
  spring_name: "PEARL HOT SPRINGS",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "PAYMASTER RIDGE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.058, 41.385]},
  spring_name: "PETAINI SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(TUSCARORA 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.427, 39.559]},
  spring_name: "PETERSONS MILL HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "MOUNT AIRY 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.788, 41.363]},
  spring_name: "PINTO HOT SPRINGS",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "PINTO MOUNTAIN 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.274, 36.402]},
  spring_name: "POINT OF ROCKS SPRINGS KING SPRING",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.639, 39.08]},
  spring_name: "POTTS RANCH HOT SPRINGS",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "DIANAS PUNCH BOWL 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.082, 38.927]},
  spring_name: "PRESTON SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.502, 39.98]},
  spring_name: "PYRAMID ISLAND HOT SPRING",
  degrees_f: null,
  degrees_c: null,
  usgs_quadrangle: "(SUTCLIFFE 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.157, 40.592]},
  spring_name: "RAINE RANCH SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "CARLIN 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.751, 40.952]},
  spring_name: "RALPHS WARM SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "SNOW WATER LAKE NE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.389, 37.996]},
  spring_name: "REVEILLE MILL SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "(KAWICH PEAK 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.921, 41.775]},
  spring_name: "RIZZI RANCH HOT SPRING",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "MOUNTAIN CITY 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.443, 36.378]},
  spring_name: "ROGERS SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "OVERTON BEACH 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.326, 36.479]},
  spring_name: "ROGERS SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.937, 40.873]},
  spring_name: "ROSE CREEK SPRING",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "ROSE CREEK 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.628, 41.877]},
  spring_name: "ROWLAND HOT SPRINGS",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "ROWLAND 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.692, 41.867]},
  spring_name: "SAN JACINTO RANCH SPRING",
  degrees_f: "148",
  degrees_c: "64",
  usgs_quadrangle: "(DELAPLAIN 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.171, 37.906]},
  spring_name: "SAND SPRING",
  degrees_f: "74",
  degrees_c: "23",
  usgs_quadrangle: "DAVIS MOUNTAIN 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.753, 37.741]},
  spring_name: "SAND SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "WHITE BLOTCH SPRINGS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.42, 39.281]},
  spring_name: "SAND SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "FOURMILE FLAT 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.742, 39.058]},
  spring_name: "SARATOGA HOT SPRING",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "MC TARNAHAN HILL 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.829, 38.255]},
  spring_name: "SAULSBURY WARM SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "SAULSBURY BASIN 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.756, 39.458]},
  spring_name: "SCHOOLHOUSE SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "MCGILL 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.308, 36.433]},
  spring_name: "SCRUGGS SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.211, 37.016]},
  spring_name: "SEEP",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "BONNIE CLAIRE SW 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.446, 36.567]},
  spring_name: "SEEP",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(OVERTON 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.785, 41.732]},
  spring_name: "SEEPS (HILLS WARM SPRING)",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "ALKALI LAKE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.854, 39.995]},
  spring_name: "SENATOR FUMAROLES",
  degrees_f: "B",
  degrees_c: "B",
  usgs_quadrangle: "(HUMBOLDT SALT MARSH 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.073, 39.943]},
  spring_name: "SHIPLEY HOT SPRING",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "GARDEN VALLEY 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.632, 37.761]},
  spring_name: "SILVERPEAK HOT SPRING",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "SILVERPEAK 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.044, 39.988]},
  spring_name: "SIRI RANCH SPRING",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "GARDEN VALLEY 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.409, 40.249]},
  spring_name: "SMITH RANCH SPRINGS",
  degrees_f: "149",
  degrees_c: "65",
  usgs_quadrangle: "RUBY LAKE NW 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.876, 39.526]},
  spring_name: "SODA LAKE",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "(SODA LAKE 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.103, 38.343]},
  spring_name: "SODA SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "SODAVILLE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.725, 40.088]},
  spring_name: "SOU (SEVEN DEVILS) HOT SPRINGS",
  degrees_f: "185",
  degrees_c: "85",
  usgs_quadrangle: "CAIN MOUNTAIN 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.717, 38.823]},
  spring_name: "SOUTH MOSQUITO CREEK RANCH SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "MOSQUITO CREEK 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.858, 39.328]},
  spring_name: "SPENCER HOT SPRINGS",
  degrees_f: "162",
  degrees_c: "72",
  usgs_quadrangle: "SPENCER HOT SPRINGS"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.719, 39.853]},
  spring_name: "SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "SUTCLIFFE 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.623, 36.565]},
  spring_name: "SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(INDIAN SPRINGS SE 7.5)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.742, 36.002]},
  spring_name: "SPRING",
  degrees_f: "145",
  degrees_c: "63",
  usgs_quadrangle: "(HOOVER DAM 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.165, 41.398]},
  spring_name: "SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "SOLDIER MEADOW 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.57, 41.53]},
  spring_name: "SPRING",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "DUFFER PEAK 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.691, 37.074]},
  spring_name: "SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "THIRSTY CANYON 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.263, 36.363]},
  spring_name: "SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.383, 36.404]},
  spring_name: "SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(ASH MEADOWS 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.292, 36.414]},
  spring_name: "SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(ASH MEADOWS 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.206, 36.437]},
  spring_name: "SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "(AMARGOSA FLAT 7.5)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.313, 36.45]},
  spring_name: "SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "(ASH MEADOWS 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.729, 36.942]},
  spring_name: "SPRING",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "BARE MTN. 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.706, 36.999]},
  spring_name: "SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "BARE MTN. 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.667, 39.917]},
  spring_name: "SPRING",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.388, 38.95]},
  spring_name: "SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(WELLINGTON 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.683, 38.027]},
  spring_name: "SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.646, 40.025]},
  spring_name: "SPRING",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "CAIN MOUNTAIN 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.763, 40.992]},
  spring_name: "SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "ROSE CREEK 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.99, 41.066]},
  spring_name: "SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "WELLS 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.805, 40.187]},
  spring_name: "SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "CARICO LAKE 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.221, 41.365]},
  spring_name: "SPRING (HOT)",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "MUD MEADOW 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.216, 41.353]},
  spring_name: "SPRING (HOT)",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "MUD MEADOW 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.165, 41.386]},
  spring_name: "SPRING (HOT)",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "TWELVEMILE RANCH 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.206, 41.322]},
  spring_name: "SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "MUD MEADOW 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.884, 40.127]},
  spring_name: "SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "CARICO LAKE 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.168, 41.338]},
  spring_name: "SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "MUD MEADOW 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.329, 36.486]},
  spring_name: "SPRINGS",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(OVERTON BEACH 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.719, 37.029]},
  spring_name: "SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "THIRSTY CANYON 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.786, 39.068]},
  spring_name: "SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "GENOA 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.538, 40.83]},
  spring_name: "SPRINGS",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.192, 41.339]},
  spring_name: "SPRINGS (HOT)",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "MUD MEADOW 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.188, 41.357]},
  spring_name: "SPRINGS (HOT)",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "MUD MEADOW 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.182, 41.378]},
  spring_name: "SPRINGS (HOT)",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "SOLDIER MEADOW 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.743, 39.388]},
  spring_name: "STEAMBOAT SPRINGS",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "STEAMBOAT 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.74, 39.38]},
  spring_name: "STEAMBOAT SPRINGS",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "STEAMBOAT 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.862, 38.398]},
  spring_name: "STORM SPRING",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "THE WALL NE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.285, 40.585]},
  spring_name: "SULPHUR HOT SPRINGS",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "LAMOILLE 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.349, 40.864]},
  spring_name: "SULPHUR SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "BROOKS SPRING 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.069, 39.832]},
  spring_name: "SULPHUR SPRING",
  degrees_f: "74",
  degrees_c: "23",
  usgs_quadrangle: "GARDEN VALLEY 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.388, 41.421]},
  spring_name: "THE HOT SPRINGS",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "HOT SPRINGS PEAK 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.673, 40.146]},
  spring_name: "THE NEEDLE ROCKS HOT SPRING",
  degrees_f: "208",
  degrees_c: "98",
  usgs_quadrangle: "THE NEEDLE ROCKS 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.687, 40.141]},
  spring_name: "THE NEEDLE ROCKS HOT SPRINGS",
  degrees_f: "208",
  degrees_c: "98",
  usgs_quadrangle: "THE NEEDLE ROCKS 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.868, 39.901]},
  spring_name: "THOMPSON RANCH SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "DIAMOND SPRINGS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.986, 41.159]},
  spring_name: "THREEMILE SPRING SULPHUR HOT SPR",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "OXLEY PEAK 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.522, 38.574]},
  spring_name: "TOM SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "BLUE EAGLE SPRINGS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.947, 41.243]},
  spring_name: "TWELVEMILE SPRING",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "OXLEY PEAK 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.862, 41.591]},
  spring_name: "TWIN (VYA) SPRING",
  degrees_f: "71",
  degrees_c: "22",
  usgs_quadrangle: "VYA 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.653, 39.8]},
  spring_name: "UPPER SHELLBOURNE SPRING",
  degrees_f: "74",
  degrees_c: "23",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.465, 38.532]},
  spring_name: "UPPER WARM SPRING",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "LITTLE FISH LAKE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.435, 38.698]},
  spring_name: "UPPER WARM SPRING",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "UPPER FISH LAKE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.183, 39.161]},
  spring_name: "WABUSKA HOT SPRINGS",
  degrees_f: "201",
  degrees_c: "94",
  usgs_quadrangle: "WABUSKA 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.833, 38.981]},
  spring_name: "WALLEYS HOT SPRINGS",
  degrees_f: "160",
  degrees_c: "71",
  usgs_quadrangle: "MINDEN 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.588, 39.904]},
  spring_name: "WALTI HOT SPRINGS",
  degrees_f: "162",
  degrees_c: "72",
  usgs_quadrangle: "WALTI HOT SPRINGS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.638, 38.633]},
  spring_name: "WAMBOLT SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "MT. GRAFTON 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.662, 38.339]},
  spring_name: "WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "GEORGES CANYON RIM 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.363, 40.782]},
  spring_name: "WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "SOLDIER PEAK 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.388, 39.529]},
  spring_name: "WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "BARTINE RANCH 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.791, 41.746]},
  spring_name: "WARM SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "ALKALI LAKE 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.841, 41.753]},
  spring_name: "WARM SPRINGS",
  degrees_f: "112",
  degrees_c: "44",
  usgs_quadrangle: "RAILROAD POINT 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.808, 41.934]},
  spring_name: "WARM SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "RAILROAD POINT 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.373, 38.188]},
  spring_name: "WARM SPRINGS",
  degrees_f: "145",
  degrees_c: "63",
  usgs_quadrangle: "WARM SPRINGS 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.389, 41.064]},
  spring_name: "WARM SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "MORGAN HILL 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.133, 41.355]},
  spring_name: "WARM SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "MONTELLO 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.035, 40.751]},
  spring_name: "WARM SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "GORDON CREEK 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.574, 41.971]},
  spring_name: "WARM SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "DELAPLAIN 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.198, 38.922]},
  spring_name: "WEDELL HOT SPRINGS",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.809, 41.357]},
  spring_name: "WEST PINTO HOT SPRING",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "PINTO MOUNTAIN 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.689, 40.746]},
  spring_name: "WHITE HOUSE SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "DUNPHY 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.479, 36.174]},
  spring_name: "WHITE ROCK SPRING",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "LA MADRE MTN. 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.775, 41.647]},
  spring_name: "WILD HORSE HOT SPRINGS",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "WILD HORSE 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.23, 38.952]},
  spring_name: "WILLIAMS HOT SPRING",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.174, 38.768]},
  spring_name: "WILSON HOT SPRING",
  degrees_f: "183",
  degrees_c: "84",
  usgs_quadrangle: "YERINGTON 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-114.675, 41.412]},
  spring_name: "WINE CUP RANCH SPRINGS",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "WINE CUP RANCH 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.758, 39.421]},
  spring_name: "ZOLEZZI SPRING",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "(MT. ROSE NE 7.5)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.219, 40.578]},
  spring_name: null,
  degrees_f: "162",
  degrees_c: "72",
  usgs_quadrangle: "(ANTLER PEAK 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.002, 40.948]},
  spring_name: null,
  degrees_f: "194",
  degrees_c: "90",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.364, 40.674]},
  spring_name: null,
  degrees_f: "194",
  degrees_c: "90",
  usgs_quadrangle: "(GERLACH 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.88, 39.242]},
  spring_name: null,
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(WILDCAT PEAK 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-116.738, 38.86]},
  spring_name: null,
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(MOSQUITO CREEK 7.5)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.968, 38.489]},
  spring_name: null,
  degrees_f: "110",
  degrees_c: "43",
  usgs_quadrangle: "(AURORA 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.984, 37.993]},
  spring_name: null,
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "RHYOLITE RIDGE 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-117.318, 41.029]},
  spring_name: null,
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "OSGOOD MOUNTAINS 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.523, 41.722]},
  spring_name: null,
  degrees_f: "163",
  degrees_c: "73",
  usgs_quadrangle: "DUFFER PEAK 15"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-118.429, 41.496]},
  spring_name: null,
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(BOTTLE CREEK 15)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.197, 41.397]},
  spring_name: null,
  degrees_f: "114",
  degrees_c: "46",
  usgs_quadrangle: "(SOLDIER MEADOW 7.5)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.187, 41.383]},
  spring_name: null,
  degrees_f: "130",
  degrees_c: "54",
  usgs_quadrangle: "(SOLDIER MEADOW 7.5)"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.223, 41.334]},
  spring_name: null,
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "MUD MEADOW 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.197, 41.332]},
  spring_name: null,
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "MUD MEADOW 7.5"
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.957, 41.175]},
  spring_name: null,
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.022, 41.147]},
  spring_name: null,
  degrees_f: "153",
  degrees_c: "67",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.135, 41.137]},
  spring_name: null,
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.002, 41.112]},
  spring_name: null,
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.017, 41.029]},
  spring_name: null,
  degrees_f: "114",
  degrees_c: "46",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.015, 41.022]},
  spring_name: null,
  degrees_f: "161",
  degrees_c: "72",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.01, 41.013]},
  spring_name: null,
  degrees_f: "172",
  degrees_c: "78",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-119.008, 41.003]},
  spring_name: null,
  degrees_f: "204",
  degrees_c: "96",
  usgs_quadrangle: null
  },
  {
  state_code: "NV",
  loc: { type: "Point", coordinates: [-115.012, 40.973]},
  spring_name: null,
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(HUMBOLDT PEAK 7.5)"
  },
  {
  state_code: "NY",
  loc: { type: "Point", coordinates: [-73.37, 42.48]},
  spring_name: "LEBANON SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "PITTSFIELD WEST 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.288, 43.86]},
  spring_name: "ALTNOW HOT SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "DREWSEY 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.533, 42.544]},
  spring_name: "ALVORD HOT SPRINGS",
  degrees_f: "174",
  degrees_c: "79",
  usgs_quadrangle: "ALVORD HOT SPRINGS 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-122.167, 42.873]},
  spring_name: "ANNIE SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "CRATER LAKE NATIONAL PARK"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.693, 42.501]},
  spring_name: "ANTELOPE HOT SPRINGS",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "CAMPBELL LAKE 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-122.009, 45.021]},
  spring_name: "AUSTIN HOT SPRINGS",
  degrees_f: "186",
  degrees_c: "86",
  usgs_quadrangle: "FISH CREEK MTN. 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-122.173, 44.936]},
  spring_name: "BAGBY HOT SPRINGS",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "BATTLE AX 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.075, 43.477]},
  spring_name: "BAKER SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(DOG MOUNTAIN 15)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-120.345, 42.156]},
  spring_name: "BARRY RANCH HOT SPRINGS",
  degrees_f: "190",
  degrees_c: "88",
  usgs_quadrangle: "LAKEVIEW NE 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.293, 43.272]},
  spring_name: "BASQUE SPRING",
  degrees_f: "74",
  degrees_c: "23",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-120.33, 42.38]},
  spring_name: "BEAN HOT SPRING",
  degrees_f: "69",
  degrees_c: "20",
  usgs_quadrangle: "VALLEY FALLS 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-122.049, 44.193]},
  spring_name: "BELKNAP SPRINGS",
  degrees_f: "160",
  degrees_c: "71",
  usgs_quadrangle: "MCKENZIE BRIDGE 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.136, 43.944]},
  spring_name: "BEULAH HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "BEULAH 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-122.058, 44.241]},
  spring_name: "BIGELOW HOT SPRINGS",
  degrees_f: "142",
  degrees_c: "61",
  usgs_quadrangle: "(MCKENZIE BRIDGE 15)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.233, 45.741]},
  spring_name: "BINGHAM SPRINGS",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "BINGHAM SPRINGS 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.574, 44.354]},
  spring_name: "BLUE MOUNTAIN HOT SPRINGS",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "PRAIRIE CITY 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.602, 42.327]},
  spring_name: "BORAX LAKE (HOT LAKE)",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "BORAX LAKE 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-121.975, 44.782]},
  spring_name: "BREITENBUSH HOT SPRINGS",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "BREITENBUSH HOT SPRINGS 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.427, 44.073]},
  spring_name: "BRISBOIS RANCH SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(IZEE 15)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-120.725, 42.998]},
  spring_name: "BUCKHORN CREEK SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.449, 44.033]},
  spring_name: "BULLY CREEK SPRING",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "JAMIESON 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.061, 42.977]},
  spring_name: "CANTERS HOT SPRING",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "(JORDAN VALLEY 7.5)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-116.873, 45.891]},
  spring_name: "COOK CREEK HOT SPRING",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "WAPSHILLA CREEK 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-122.233, 44.083]},
  spring_name: "COUGAR RESERVOIR HOT SPRINGS",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "(MCKENZIE BRIDGE 15)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.638, 43.441]},
  spring_name: "CRANE HOT SPRINGS",
  degrees_f: "172",
  degrees_c: "78",
  usgs_quadrangle: "CRANE 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.881, 42.226]},
  spring_name: "CRUMP GEYSER (CRUMP SPRING)",
  degrees_f: "172",
  degrees_c: "78",
  usgs_quadrangle: "ADEL 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-121.627, 42.161]},
  spring_name: "CRYSTAL SPRING",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "(MERRILL 15)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.178, 43.739]},
  spring_name: "DEER BUTTE HOT SPRING",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "OWYHEE DAM 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.311, 43.281]},
  spring_name: "DOUBLE O BARNYARD SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.34, 43.276]},
  spring_name: "DOUBLE O SPRING",
  degrees_f: "74",
  degrees_c: "23",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.015, 43.264]},
  spring_name: "DUNN SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-121.963, 42.431]},
  spring_name: "EAGLE POINT SPRING",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "(MODOC POINT 15)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-121.209, 43.719]},
  spring_name: "EAST LAKE HOT SPRINGS",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.044, 44.975]},
  spring_name: "FISHER HOT SPRINGS",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "ROCK CREEK 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.776, 42.297]},
  spring_name: "FISHER HOT SPRINGS",
  degrees_f: "154",
  degrees_c: "68",
  usgs_quadrangle: "CRUMP LAKE 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.898, 42.889]},
  spring_name: "FIVEMILE SPRING (HOGHOUSE HOT SPRS)",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "IRISH LAKE 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.383, 42.188]},
  spring_name: "FLAGSTAFF BUTTE HOT SPRING",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-122.098, 44.153]},
  spring_name: "FOLEY SPRINGS",
  degrees_f: "178",
  degrees_c: "81",
  usgs_quadrangle: "MCKENZIE BRIDGE 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.081, 43.529]},
  spring_name: "GOODMAN SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "BURNS 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.927, 42.075]},
  spring_name: "HALLINAN SPRING",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "MAY LAKE 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-121.801, 42.178]},
  spring_name: "HARDBOARD SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(KLAMATH FALLS 15)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.738, 45.129]},
  spring_name: "HIDAWAY SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "LEHMAN SPRINGS 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.958, 45.244]},
  spring_name: "HOT LAKE SPRINGS",
  degrees_f: "176",
  degrees_c: "80",
  usgs_quadrangle: "CRAIG MOUNTAIN 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.383, 43.302]},
  spring_name: "HOT SPRING",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "DIAMOND BUTTE 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.602, 42.338]},
  spring_name: "HOT SPRINGS",
  degrees_f: "207",
  degrees_c: "97",
  usgs_quadrangle: "BORAX LAKE 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-121.828, 42.176]},
  spring_name: "HOWARD HOLIDAY",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(KLAMATH FALLS 15)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.258, 43.252]},
  spring_name: "HUGHET SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-120.368, 42.221]},
  spring_name: "HUNTERS HOT SPRINGS",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "LAKEVIEW NE 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-122.742, 42.221]},
  spring_name: "JACKSON HOT SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "ASHLAND 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.455, 44.208]},
  spring_name: "JAMIESON HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(JAMIESON 15)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.956, 44.28]},
  spring_name: "JOAQUIN MILLER HOT SPRINGS",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "CANYON MTN. 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.276, 43.265]},
  spring_name: "JOHNSON SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.958, 43.795]},
  spring_name: "JONESBORO WARM SPRING",
  degrees_f: "112",
  degrees_c: "45",
  usgs_quadrangle: "(WESTFALL BUTTE 15)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.067, 43.758]},
  spring_name: "JUNTURA WARM SPRING 1",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(BEULAH 15)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.092, 43.757]},
  spring_name: "JUNTURA WARM SPRING 2",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "(BEULAH 15)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-121.201, 44.862]},
  spring_name: "KAHNEETA HOT SPRINGS",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "EAGLE BUTTE 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-122.372, 43.689]},
  spring_name: "KITSON HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "OAKRIDGE 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.885, 45.013]},
  spring_name: "KROPP HOT SPRING",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "(NORTH POWDER 7.5)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.659, 45.151]},
  spring_name: "LEHMAN SPRINGS",
  degrees_f: "142",
  degrees_c: "61",
  usgs_quadrangle: "LEHMAN SPRINGS 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-120.344, 42.162]},
  spring_name: "LEITHEAD HOT SPRING",
  degrees_f: "162",
  degrees_c: "72",
  usgs_quadrangle: "LAKEVIEW NE 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.738, 44.374]},
  spring_name: "LIMEKILN HOT SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "PRAIRIE CITY 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-120.642, 42.933]},
  spring_name: "LOST CABIN SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.202, 43.469]},
  spring_name: "LUCE HOT SPRINGS",
  degrees_f: "145",
  degrees_c: "63",
  usgs_quadrangle: "MCEWEN BUTTE 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-122.288, 43.708]},
  spring_name: "MCCREDIE SPRINGS",
  degrees_f: "163",
  degrees_c: "73",
  usgs_quadrangle: "OAKRIDGE 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.625, 45.018]},
  spring_name: "MEDICAL HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "FLAGSTAFF BUTTE 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.344, 42.676]},
  spring_name: "MICKEY SPRINGS",
  degrees_f: "187",
  degrees_c: "86",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.081, 43.54]},
  spring_name: "MILLPOND HOT SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "BURNS 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.156, 43.763]},
  spring_name: "MITCHELL BUTTE HOT SPRING",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "MITCHELL BUTTE 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.875, 42.307]},
  spring_name: "MOSS RANCH SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "PRIDAY RESERVOIR 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.867, 42.287]},
  spring_name: "MOSS RANCH SPRINGS",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "CRUMP LAKE 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-121.697, 45.372]},
  spring_name: "MOUNT HOOD FUMAROLES",
  degrees_f: "194",
  degrees_c: "90",
  usgs_quadrangle: "(MOUNT HOOD SOUTH 7.5)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.105, 44.451]},
  spring_name: "MOUNT VERNON HOT SPRINGS",
  degrees_f: "121",
  degrees_c: "49",
  usgs_quadrangle: "MOUNT VERNON 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.46, 44.023]},
  spring_name: "NEAL HOT SPRINGS",
  degrees_f: "189",
  degrees_c: "87",
  usgs_quadrangle: "JAMIESON 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.417, 44.538]},
  spring_name: "NELSON SPRING",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "(DURKEE 15)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-121.615, 42.174]},
  spring_name: "OLENE GAP HOT SPRINGS",
  degrees_f: "165",
  degrees_c: "74",
  usgs_quadrangle: "(MERRILL 15)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-121.287, 42.116]},
  spring_name: "OREGON HOT SPRINGS (BIG HOT SPRING)",
  degrees_f: "142",
  degrees_c: "61",
  usgs_quadrangle: "MALIN 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-120.798, 42.93]},
  spring_name: "PARDON WARM SPRING",
  degrees_f: "76",
  degrees_c: "24",
  usgs_quadrangle: "(SUMMER LAKE 7.5)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-121.252, 43.732]},
  spring_name: "PAULINA SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(PAULINA PEAK 7.5)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.939, 44.927]},
  spring_name: "RADIUM HOT SPRINGS",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "HAINES 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.141, 44.892]},
  spring_name: "RITTER HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "RITTER 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.091, 43.501]},
  spring_name: "ROADLAND SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "BURNS 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.811, 44.779]},
  spring_name: "SAM O SPRING",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "BAKER 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.55, 42.756]},
  spring_name: "SCOTT SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(SCOTT RESERVOIR 7.5)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.472, 43.793]},
  spring_name: "SITZ WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "DREWSEY 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.203, 43.727]},
  spring_name: "SNIVELY HOT SPRING",
  degrees_f: "170",
  degrees_c: "77",
  usgs_quadrangle: "OWYHEE DAM 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.19, 43.703]},
  spring_name: "SOUTH BLACK WILLOW SPRING",
  degrees_f: "71",
  degrees_c: "22",
  usgs_quadrangle: "(OWYHEE DAM 7.5)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.765, 44.813]},
  spring_name: "SPRING (HOT)",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "BAKER 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.596, 43.893]},
  spring_name: "SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "HARPER 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-121.228, 44.867]},
  spring_name: "SPRINGS",
  degrees_f: "125",
  degrees_c: "52",
  usgs_quadrangle: "EAGLE BUTTE 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.308, 43.395]},
  spring_name: "SPRINGS (HOT)",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "DUNNEAN 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-120.646, 42.725]},
  spring_name: "SUMMER LAKE HOT SPRING",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "SLIDE MTN 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-121.731, 45.295]},
  spring_name: "SWIM WARM SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(MOUNT HOOD SOUTH 7.5)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.905, 42.688]},
  spring_name: "TUDORS SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-122.367, 43.294]},
  spring_name: "UMPQUA HOT SPRINGS",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "TOKETEE FALLS 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.912, 45.206]},
  spring_name: "UNION STATION HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "CRAIG MOUNTAIN 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.233, 43.982]},
  spring_name: "VALE HOT SPRINGS",
  degrees_f: "163",
  degrees_c: "73",
  usgs_quadrangle: "(VALE EAST 7.5)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-122.309, 43.808]},
  spring_name: "WALL CREEK WARM SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "SARDINE BUTTE 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.455, 45.061]},
  spring_name: "WARM MINERAL SPRING",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "FLY VALLEY 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-120.924, 42.04]},
  spring_name: "WARM SPRING",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "STRAWBERRY BUTTE 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.047, 43.776]},
  spring_name: "WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "BEULAH 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.806, 45.295]},
  spring_name: "WARM SPRING",
  degrees_f: "85",
  degrees_c: "29",
  usgs_quadrangle: "COVE 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.899, 42.815]},
  spring_name: "WARM SPRINGS",
  degrees_f: "89",
  degrees_c: "32",
  usgs_quadrangle: "FRENCHGLEN 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.634, 43.95]},
  spring_name: "WARM SPRINGS",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "DELINTMENT LAKE 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.877, 42.219]},
  spring_name: "WARNER VALLEY RANCH",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "(ADEL 7.5)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.647, 44.002]},
  spring_name: "WEBERG HOT SPRING",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.703, 45.631]},
  spring_name: "WELL SPRING",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "WELL SPRING 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-120.327, 42.325]},
  spring_name: "WHITE ROCK RANCH HOT SPRING",
  degrees_f: "71",
  degrees_c: "21",
  usgs_quadrangle: "CROOKED CREEK VALLEY 7.5"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-121.219, 42.133]},
  spring_name: "WILKERSONS HOT SPRING",
  degrees_f: "76",
  degrees_c: "24",
  usgs_quadrangle: "GERBER RESERVOIR 15"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.739, 43.663]},
  spring_name: null,
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(BUCHANAN 7.5)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.544, 43.858]},
  spring_name: null,
  degrees_f: "165",
  degrees_c: "74",
  usgs_quadrangle: "(VAN 15)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.697, 43.073]},
  spring_name: null,
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(LAMBERT ROCKS 7.5)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.502, 43.215]},
  spring_name: null,
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(THE HOLE IN THE GROUND 7."
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.326, 43.589]},
  spring_name: null,
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(THE ELBOW 7.5)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.501, 43.893]},
  spring_name: null,
  degrees_f: "158",
  degrees_c: "70",
  usgs_quadrangle: "(HARPER 15)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.312, 42.253]},
  spring_name: null,
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.703, 42.254]},
  spring_name: null,
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(FIELDS 7.5)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.863, 42.837]},
  spring_name: null,
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "(PAGE SPRINGS 7.5)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-118.251, 43.646]},
  spring_name: null,
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "(UPTON MOUNTAIN 7.5)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.182, 42.533]},
  spring_name: null,
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.973, 45.501]},
  spring_name: null,
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(ELGIN 7.5)"
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.058, 43.185]},
  spring_name: null,
  degrees_f: "154",
  degrees_c: "68",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.128, 43.2]},
  spring_name: null,
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.058, 43.21]},
  spring_name: null,
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.137, 43.213]},
  spring_name: null,
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.062, 43.238]},
  spring_name: null,
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-119.428, 43.338]},
  spring_name: null,
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: null
  },
  {
  state_code: "OR",
  loc: { type: "Point", coordinates: [-117.76, 42.079]},
  spring_name: null,
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: null
  },
  {
  state_code: "SD",
  loc: { type: "Point", coordinates: [-103.508, 43.452]},
  spring_name: "HOT BROOK SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "MINNEKHATA NE 7.5"
  },
  {
  state_code: "SD",
  loc: { type: "Point", coordinates: [-103.481, 43.442]},
  spring_name: "HOT SPRINGS",
  degrees_f: "87",
  degrees_c: "31",
  usgs_quadrangle: "HOT SPRINGS 7.5"
  },
  {
  state_code: "TX",
  loc: { type: "Point", coordinates: [-104.562, 30.21]},
  spring_name: "CAPOTE SPRINGS",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "(CAPOTE FALLS 7.5)"
  },
  {
  state_code: "TX",
  loc: { type: "Point", coordinates: [-102.992, 29.182]},
  spring_name: "HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "BOQUILLAS 7.5"
  },
  {
  state_code: "TX",
  loc: { type: "Point", coordinates: [-105.315, 30.823]},
  spring_name: "INDIAN HOT SPRINGS",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "INDIAN HOT SPRINGS 7.5"
  },
  {
  state_code: "TX",
  loc: { type: "Point", coordinates: [-104.602, 30.133]},
  spring_name: "NIXON SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "CAPOTE FALLS 7.5"
  },
  {
  state_code: "TX",
  loc: { type: "Point", coordinates: [-105.34, 30.861]},
  spring_name: "RED BULL SPRING",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "INDIAN HOT SPRINGS 7.5"
  },
  {
  state_code: "TX",
  loc: { type: "Point", coordinates: [-102.953, 29.178]},
  spring_name: "RIO GRANDE VILLAGE SPRING",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "BOQUILLAS 7.5"
  },
  {
  state_code: "TX",
  loc: { type: "Point", coordinates: [-104.598, 30.038]},
  spring_name: "RUIDOSA HOT SPRINGS",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "RUIDOSA HOT SPRINGS"
  },
  {
  state_code: "TX",
  loc: { type: "Point", coordinates: [-104.462, 29.787]},
  spring_name: "SPRINGS (LAS CIENEGAS)",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "CERRO ORONA 7.5"
  },
  {
  state_code: "TX",
  loc: { type: "Point", coordinates: [-102.376, 29.805]},
  spring_name: null,
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(INDIAN WELLS 15)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.729, 39.613]},
  spring_name: "BAKER (ABRAHAM CRATER) HOT SPRINGS",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "BAKER HOT SPRINGS 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.918, 40.815]},
  spring_name: "BECKS HOT SPRING",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "SALT LAKE CITY NORTH 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.383, 37.166]},
  spring_name: "BERRY SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "HURRICANE 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.863, 38.138]},
  spring_name: "BIG MAPLE SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "MINERSVILLE 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.642, 40.743]},
  spring_name: "BIG WARM SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "TIMPIE 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.801, 40.176]},
  spring_name: "BIRD ISLAND",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "(LINCOLN POINT 7.5)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.454, 41.833]},
  spring_name: "BLUE CREEK SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "HOWELL 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-114.038, 40.502]},
  spring_name: "BLUE LAKE SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "WENDOVER SE 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.266, 41.722]},
  spring_name: "BOTHWELL WARM SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(THATCHER MOUNTAIN 7.5)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.929, 40.458]},
  spring_name: "CAMP WILLIAMS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(JORDAN NARROWS 7.5)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.529, 40.038]},
  spring_name: "CASTILLA SPRINGS",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "SPANISH FORK PEAK 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.656, 41.038]},
  spring_name: "COMO SPRINGS",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "MORGAN 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.413, 41.239]},
  spring_name: "COMPTON SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "PROMONTORY POINT 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.871, 38.77]},
  spring_name: "COYOTE SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "CRUZ 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.485, 39.424]},
  spring_name: "COYOTE SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "SWASEY PEAK NW 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.999, 41.901]},
  spring_name: "COYOTE SPRING",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "MONUMENT PEAK NW 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.895, 40.353]},
  spring_name: "CRATER HOT SPRING",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "(SARATOGA SPRINGS 7.5)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.087, 41.659]},
  spring_name: "CRYSTAL (MADSENS) HOT SPRINGS",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "HONEYVILLE 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.911, 40.488]},
  spring_name: "CRYSTAL HOT SPRINGS",
  degrees_f: "187",
  degrees_c: "86",
  usgs_quadrangle: "JORDAN NARROWS 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.054, 41.834]},
  spring_name: "CUTLER WARM SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(CUTLER DAM 7.5)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.426, 40.172]},
  spring_name: "DAVIS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(FAUST 7.5)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.747, 40.538]},
  spring_name: "DESERET LIVESTOCK",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(TIMPIE 15)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.739, 40.558]},
  spring_name: "DESERET LIVESTOCK SOUTH SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "TIMPIE 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.738, 40.565]},
  spring_name: "DESERET LIVESTOCK SOUTH SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "TIMPIE 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.337, 40.118]},
  spring_name: "DIAMOND FORK WARM SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "RAYS VALLEY 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.272, 37.189]},
  spring_name: "DIXIE (LAVERKIN) HOT SPRINGS",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "HURRICANE 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.904, 38.217]},
  spring_name: "DOTSONS (RADIUM) WARM SPRING",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "MINERSVILLE 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.928, 40.545]},
  spring_name: "EAST JORDAN CANAL",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(MIDVALE 7.5)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.891, 40.332]},
  spring_name: "FAULT ZONE SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(SARATOGA SPRINGS 7.5)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.392, 39.842]},
  spring_name: "FISH SPRINGS",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "FISH SPRINGS SW 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.803, 39.616]},
  spring_name: "FUMAROLE BUTTE",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "FUMAROLE BUTTE 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.958, 41.917]},
  spring_name: "GANCHEFF SPRING",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "TRENTON 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-114.038, 39.464]},
  spring_name: "GANDY WARM SPRINGS",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: null
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.858, 39.955]},
  spring_name: "GOSHEN WARM SRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "SANTAQUIN 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.524, 40.647]},
  spring_name: "GRANTSVILLE WARM SPRINGS",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "TIMPIE 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.528, 37.138]},
  spring_name: "GREEN SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "ST. GEORGE 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.49, 38.85]},
  spring_name: "HATTON HOT SPRING",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "FILLMORE 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.654, 41.829]},
  spring_name: "HEAD SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "YOST 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.017, 40.788]},
  spring_name: "HOBO WARM SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "SALTAIR 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.175, 41.138]},
  spring_name: "HOOPER HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "OGDEN BAY 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.709, 40.614]},
  spring_name: "HORSESHOE SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "TIMPIE 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.61, 37.393]},
  spring_name: "IRVINE SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "CENTRAL EAST 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.111, 38.603]},
  spring_name: "JOHNSON WARM SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "MONROE 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.202, 38.613]},
  spring_name: "JOSEPH HOT SPRINGS",
  degrees_f: "147",
  degrees_c: "64",
  usgs_quadrangle: "MONROE 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.954, 41.563]},
  spring_name: "KIMBER (ROSE) SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "TOMS CABIN SPRING 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.877, 39.249]},
  spring_name: "KNOLL SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "CONGER RANGE 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.263, 41.822]},
  spring_name: "L.G. CARTER SPRINGS",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "PARK VALLEY 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.311, 41.818]},
  spring_name: "LARSON SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "PARK VALLEY 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.438, 37.942]},
  spring_name: "LEFEVRE",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(PANGUITCH NW 7.5)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.806, 40.146]},
  spring_name: "LINCOLN POINT WARM SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(LINCOLN POINT 7.5)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.256, 41.582]},
  spring_name: "LITTLE MOUNTAIN HOT SPRING",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "PUBLIC SHOOTING GROUNDS 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.645, 39.246]},
  spring_name: "LIVINGSTON WARM SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(STERLING 7.5)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.506, 38.864]},
  spring_name: "MEADOW HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "TABERNACLE HILL 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.475, 40.517]},
  spring_name: "MIDWAY HOT SPRING",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "HEBER CITY 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.468, 40.525]},
  spring_name: "MIDWAY HOT SPRINGS",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "HEBER CITY 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.488, 40.526]},
  spring_name: "MIDWAY HOT SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "HEBER CITY 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.107, 38.633]},
  spring_name: "MONROE (COOPER) HOT SPRINGS",
  degrees_f: "169",
  degrees_c: "76",
  usgs_quadrangle: "MONROE 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.421, 40.397]},
  spring_name: "MORGANS WARM SPRING",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "STOCKTON 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.413, 39.887]},
  spring_name: "NORTH SPRINGS",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "FISH SPRINGS NW 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.924, 41.236]},
  spring_name: "OGDEN HOT SPRING",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "OGDEN 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.826, 41.328]},
  spring_name: "PATIO SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "HUNTSVILLE 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.442, 41.449]},
  spring_name: "POULSEN SPRING (SALT)",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "EAST PROMONTORY 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.391, 41.831]},
  spring_name: "PUGSLEY",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "PARK VALLEY 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.881, 39.788]},
  spring_name: "RAY LUNT SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "SANTAQUIN 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.535, 37.174]},
  spring_name: "RED CANYON",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(KANAB 15)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.098, 38.639]},
  spring_name: "RED HILL HOT SPRING",
  degrees_f: "171",
  degrees_c: "77",
  usgs_quadrangle: "MONROE 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.907, 40.653]},
  spring_name: "REDLUM SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: null
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.096, 38.774]},
  spring_name: "RICHFIELD WARM SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(RICHFIELD 15)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.849, 38.503]},
  spring_name: "ROOSEVELT HOT SPRINGS",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "(PINNACLE PASS 7.5)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.424, 40.39]},
  spring_name: "RUSSELLS WARM SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "STOCKTON 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.829, 38.981]},
  spring_name: "SALT SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(SALINA 7.5)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.905, 40.35]},
  spring_name: "SARATOGA HOT SPRINGS",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "SARATOGA SPRINGS 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.634, 37.178]},
  spring_name: "SNOW SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "ST. GEORGE 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.518, 39.334]},
  spring_name: "SOUTH TULE SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "COWBOY PASS 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-109.221, 40.465]},
  spring_name: "SPLIT MOUNTAIN WARM SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "SPLIT MOUNTAIN 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.986, 41.687]},
  spring_name: "SPRING (HOT)",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "GROUSE CREEK 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.87, 38.762]},
  spring_name: "SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "CRUZ 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.045, 39.899]},
  spring_name: "SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "EUREKA 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.281, 41.643]},
  spring_name: "SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "THATCHER MOUNTAIN 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.691, 39.183]},
  spring_name: "STERLING (PEACOCK) WARM SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "STERLING 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.23, 41.578]},
  spring_name: "STINKING HOT SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "BEAR RIVER CITY 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.578, 38.56]},
  spring_name: "SULPHURDALE",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "COVE FORT 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.424, 37.937]},
  spring_name: "TEBBS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "PANGUITCH NW 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.204, 38.172]},
  spring_name: "THERMO HOT SPRINGS",
  degrees_f: "181",
  degrees_c: "83",
  usgs_quadrangle: "THERMO 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.197, 38.186]},
  spring_name: "THERMO HOT SPRINGS",
  degrees_f: "185",
  degrees_c: "85",
  usgs_quadrangle: "THERMO 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.515, 39.35]},
  spring_name: "TULE SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "COWBOY PASS 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.863, 39.403]},
  spring_name: "TWIN SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "GANDY 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.158, 41.855]},
  spring_name: "UDY HOT SPRINGS",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "RIVERSIDE 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.912, 38.186]},
  spring_name: "US BLM",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(MINERSVILLE 7.5)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.621, 40.733]},
  spring_name: "UTAH FISH AND GAME DEPT",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(TIMPIE 15)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.031, 41.338]},
  spring_name: "UTAH HOT SPRINGS",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "PLAIN CITY 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.687, 37.335]},
  spring_name: "VEYO HOT SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "VEYO 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.399, 37.158]},
  spring_name: "VIRGIN RIVER SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "HURRICANE 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.327, 41.808]},
  spring_name: "W.R. CARTER SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "PARK VALLEY 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.478, 40.536]},
  spring_name: "WARM DITCH SPRING",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "HEBER CITY 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.513, 37.137]},
  spring_name: "WARM SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(ST. GEORGE 15)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-110.421, 37.7]},
  spring_name: "WARM SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(MANCOS MESA 15)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.613, 41.614]},
  spring_name: "WARM SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "PROHIBITION SPRING 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.603, 41.756]},
  spring_name: "WARM SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "YOST 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-110.828, 40.447]},
  spring_name: "WARM SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "HANNA 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.865, 40.234]},
  spring_name: "WARM SPRINGS",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(LINCOLN POINT 7.5)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.867, 40.228]},
  spring_name: "WARM SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(LINCOLN POINT 7.5)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.447, 37.096]},
  spring_name: "WARNER VALLEY SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "HURRICANE 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.899, 40.788]},
  spring_name: "WASATCH HOT SPRINGS",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "SALT LAKE CITY NORTH 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.901, 38.155]},
  spring_name: "WILLOW SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "MINERSVILLE 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.43, 39.906]},
  spring_name: "WILSON HEALTH SPRINGS",
  degrees_f: "142",
  degrees_c: "61",
  usgs_quadrangle: "FISH SPRINGS NW 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.622, 40.167]},
  spring_name: "WOOD SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(SPRINGVILLE 7.5)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.22, 38.34]},
  spring_name: "WOODHOUSE SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "MILFORD 15"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.579, 40.703]},
  spring_name: null,
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(TIMPIE 15)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.703, 40.625]},
  spring_name: null,
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(TIMPIE 15)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-111.493, 40.697]},
  spring_name: null,
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "PARK CITY EAST 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.491, 39.305]},
  spring_name: null,
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "(SWASEY PEAK SW 7.5)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.504, 39.388]},
  spring_name: null,
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(COWBOY PASS 15)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.484, 38.869]},
  spring_name: null,
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(FILLMORE 15)"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-112.406, 41.336]},
  spring_name: null,
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "POKES POINT 7.5"
  },
  {
  state_code: "UT",
  loc: { type: "Point", coordinates: [-113.881, 39.429]},
  spring_name: null,
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(GANDY 15)"
  },
  {
  state_code: "VA",
  loc: { type: "Point", coordinates: [-80.806, 37.16]},
  spring_name: "ALUM SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "WHITE GATE 7.5"
  },
  {
  state_code: "VA",
  loc: { type: "Point", coordinates: [-79.673, 38.218]},
  spring_name: "BOLAR SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "BURNSVILLE 7.5"
  },
  {
  state_code: "VA",
  loc: { type: "Point", coordinates: [-79.65, 38.238]},
  spring_name: "BRAGG SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(BURNSVILLE 7.5)"
  },
  {
  state_code: "VA",
  loc: { type: "Point", coordinates: [-79.933, 37.87]},
  spring_name: "FALLING SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "COVINGTON 7.5"
  },
  {
  state_code: "VA",
  loc: { type: "Point", coordinates: [-79.861, 37.963]},
  spring_name: "HEALING SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "HEALING SPRINGS 7.5"
  },
  {
  state_code: "VA",
  loc: { type: "Point", coordinates: [-79.83, 37.997]},
  spring_name: "HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "HEALING SPRINGS 7.5"
  },
  {
  state_code: "VA",
  loc: { type: "Point", coordinates: [-79.988, 37.86]},
  spring_name: "LAYTON SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(COVINGTON 7.5)"
  },
  {
  state_code: "VA",
  loc: { type: "Point", coordinates: [-80.619, 37.29]},
  spring_name: "NEW RIVER WHITE SULPHUR SPRINGS",
  degrees_f: "85",
  degrees_c: "29",
  usgs_quadrangle: "(EGGLESTON 7.5)"
  },
  {
  state_code: "VA",
  loc: { type: "Point", coordinates: [-79.462, 37.898]},
  spring_name: "ROCKBRIDGE BATHS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "GOSHEN 7.5"
  },
  {
  state_code: "VA",
  loc: { type: "Point", coordinates: [-80.238, 37.645]},
  spring_name: "SWEET CHALYBEATE SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "ALLEGHANY 7.5"
  },
  {
  state_code: "VA",
  loc: { type: "Point", coordinates: [-79.78, 38.055]},
  spring_name: "WARM SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "WARM SPRINGS 7.5"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.667, 48.763]},
  spring_name: "BAKER HOT SPRING",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "MT. SHUKSAN 15"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.728, 45.701]},
  spring_name: "COLLINS HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "(HOOD RIVER 15)"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.804, 48.789]},
  spring_name: "DORR FUMAROLE FIELD",
  degrees_f: "194",
  degrees_c: "90",
  usgs_quadrangle: "(MT. BAKER 15)"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.181, 46.041]},
  spring_name: "FISH HATCHERY WARM SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(OUTLET FALLS 7.5)"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.062, 48.15]},
  spring_name: "GAMMA HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "GLACIER PEAK 15"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.342, 47.892]},
  spring_name: "GARLAND MINERAL SPRINGS",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "BLANCA LAKE 7.5"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.391, 47.484]},
  spring_name: "GOLDMEYER HOT SPRINGS",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "SNOQUALMIE PASS 15"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-122.265, 46.378]},
  spring_name: "GREEN RIVER SODA SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "ELK ROCK 15"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-119.475, 48.974]},
  spring_name: "HOT LAKE",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "OROVILLE 15"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.192, 48.118]},
  spring_name: "KENNEDY HOT SPRING",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "GLACIER PEAK 15"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.133, 45.821]},
  spring_name: "KLICKITAT MINERAL SPRINGS",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "(KLICKITAT 15)"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.536, 47.201]},
  spring_name: "LESTER HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "GREENWATER 15"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.814, 46.752]},
  spring_name: "LONGMIRE MINERAL SPRINGS",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "MT. RAINIER WEST 7.5"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.962, 45.658]},
  spring_name: "MOFFETTS (BONNEVILLE) HOT SPRINGS",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "BONNEVILLE DAM 15"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.492, 46.202]},
  spring_name: "MOUNT ADAMS FUMAROLES",
  degrees_f: "150",
  degrees_c: "66",
  usgs_quadrangle: "(MOUNT ADAMS EAST 7.5)"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.758, 46.852]},
  spring_name: "MT RAINIER FUMAROLES",
  degrees_f: "162",
  degrees_c: "72",
  usgs_quadrangle: "(MT. RAINIER WEST 7.5)"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-122.197, 46.198]},
  spring_name: "MT ST HELENS FUMAROLES",
  degrees_f: "190",
  degrees_c: "88",
  usgs_quadrangle: "(MOUNT ST. HELENS 15)"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.562, 46.738]},
  spring_name: "OHANAPECOSH HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "PACKWOOD 15"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-123.682, 47.977]},
  spring_name: "OLYMPIC HOT SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "MOUNT CARRIE 7.5"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.6, 46.345]},
  spring_name: "ORR CREEK WARM SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(GREEN MOUNTAIN 7.5)"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.706, 46.575]},
  spring_name: "PACKWOOD HOT SPRING",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "(PACKWOOD 15)"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-119.455, 48.906]},
  spring_name: "POISON LAKE",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "(OROVILLE 15)"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.927, 45.723]},
  spring_name: "ROCK CREEK HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "BONNEVILLE DAM 15"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.155, 47.707]},
  spring_name: "SCENIC HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "(SCENIC 7.5)"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.813, 48.77]},
  spring_name: "SHERMAN CRATER FUMAROLES",
  degrees_f: "266",
  degrees_c: "130",
  usgs_quadrangle: "(MT. BAKER 15)"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-120.956, 46.452]},
  spring_name: "SIMCOE SODA SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "YESMOWIT CANYON 7.5"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-123.864, 47.969]},
  spring_name: "SOL DUC HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "BOGACHIEL PEAK 7.5"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.8, 45.728]},
  spring_name: "ST MARTINS HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "BONNEVILLE DAM 15"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-121.17, 48.254]},
  spring_name: "SULPHUR CREEK HOT SPRINGS",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "DOWNEY MTN. 7.5"
  },
  {
  state_code: "WA",
  loc: { type: "Point", coordinates: [-118.771, 46.024]},
  spring_name: "WARM SPRINGS CANYON WARM SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "ZANGAR JUNCTION 7.5"
  },
  {
  state_code: "WV",
  loc: { type: "Point", coordinates: [-78.23, 39.618]},
  spring_name: "BERKELEY SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "HANCOCK 7.5"
  },
  {
  state_code: "WV",
  loc: { type: "Point", coordinates: [-79.975, 38.163]},
  spring_name: "MINNEHAHA SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "MINNEHAHA SPRINGS 7.5"
  },
  {
  state_code: "WV",
  loc: { type: "Point", coordinates: [-80.24, 37.63]},
  spring_name: "OLD SWEET SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "ALLEGHANY 7.5"
  },
  {
  state_code: "WV",
  loc: { type: "Point", coordinates: [-77.877, 39.471]},
  spring_name: "SWAN POND SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(MARTINSBURG 7.5)"
  },
  {
  state_code: "WV",
  loc: { type: "Point", coordinates: [-79.353, 38.605]},
  spring_name: "THORN SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(SUGAR GROVE 7.5)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.741, 43.543]},
  spring_name: "ABERCROMBIE WARM SPRINGS",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "GROS VENTRE JUNCTION 7.5"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-106.725, 42.545]},
  spring_name: "ALCOVA HOT SPRINGS",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "(ALCOVA 7.5)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.725, 44.797]},
  spring_name: "AMPHITHEATER SPRINGS",
  degrees_f: "196",
  degrees_c: "91",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.732, 44.842]},
  spring_name: "APOLLINARIS SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.738, 44.693]},
  spring_name: "ARTISTS PAINTPOTS",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.775, 43.3]},
  spring_name: "ASTORIA MINERAL HOT SPRINGS",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "MUNGER MOUNTAIN 7.5"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.999, 42.828]},
  spring_name: "AUBURN HOT SPRINGS",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: null
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.301, 44.553]},
  spring_name: "BEACH SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.746, 44.679]},
  spring_name: "BERYL SPRING",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.73, 44.761]},
  spring_name: "BIJAH SPRING",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.788, 44.544]},
  spring_name: "BLACK WARRIOR GROUP SHELF SPRING",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-111.022, 44.244]},
  spring_name: "BOUNDARY CREEK HOT SPRINGS",
  degrees_f: "181",
  degrees_c: "83",
  usgs_quadrangle: "WARM RIVER BUTTE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.835, 43.471]},
  spring_name: "BOYLES HILL SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "(JACKSON 7.5)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-109.193, 44.498]},
  spring_name: "BUFFALO BILL RESERVOIR SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(DEVILS TOOTH 15)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-109.222, 44.495]},
  spring_name: "BUFFALO BILL RESERVOIR SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(DEVILS TOOTH 15)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-109.204, 44.482]},
  spring_name: "BUFFALO BILL RESERVOIR SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(DEVILS TOOTH 15)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.275, 44.521]},
  spring_name: "BUTTE SPRINGS",
  degrees_f: "187",
  degrees_c: "86",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.393, 44.908]},
  spring_name: "CALCITE SPRINGS",
  degrees_f: "201",
  degrees_c: "94",
  usgs_quadrangle: "TOWER JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.741, 44.711]},
  spring_name: "CHOCOLATE POTS",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.703, 44.733]},
  spring_name: "CISTERN SPRING",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "(NORRIS JUNCTION 15)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.308, 44.756]},
  spring_name: "COFFEE POT HOT SPRINGS",
  degrees_f: "196",
  degrees_c: "91",
  usgs_quadrangle: "TOWER JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-109.115, 44.513]},
  spring_name: "DE MARIS SPRINGS",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "CODY 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-105.394, 42.665]},
  spring_name: "DOUGLAS HOT SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "CHALK BUTTES 7.5"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.341, 44.588]},
  spring_name: "EBRO SPRINGS",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.701, 44.722]},
  spring_name: "ECHINUS GEYSER",
  degrees_f: "185",
  degrees_c: "85",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.835, 44.526]},
  spring_name: "EXCELSIOR GEYSER CRATER",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.859, 44.543]},
  spring_name: "FAIRY SPRINGS",
  degrees_f: "201",
  degrees_c: "94",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.796, 44.532]},
  spring_name: "FIVE SISTERS SPRINGS",
  degrees_f: "192",
  degrees_c: "89",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.871, 44.566]},
  spring_name: "FLAT CONE SPRING STEEP CONE",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.828, 44.52]},
  spring_name: "FLOOD GROUP",
  degrees_f: "203",
  degrees_c: "95",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.461, 44.708]},
  spring_name: "FOREST SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.812, 44.554]},
  spring_name: "FOUNTAIN GROUP",
  degrees_f: "201",
  degrees_c: "94",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.805, 44.55]},
  spring_name: "FOUNTAIN PAINT POT",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.699, 44.741]},
  spring_name: "GAS VENT",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.714, 44.75]},
  spring_name: "GAS VENT",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.618, 44.612]},
  spring_name: "GAS VENT",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.632, 44.601]},
  spring_name: "GAS VENT EAST OF MARY LAKE",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.555, 44.715]},
  spring_name: "GAS VENTS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.675, 44.825]},
  spring_name: "GAS VENTS AT HORSESHOE HILL",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.622, 44.595]},
  spring_name: "GAS VENTS SOUTHEAST OF MARY LAKE",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-109.732, 43.56]},
  spring_name: "GEYSER (WARM SPRING CREEK SPRINGS)",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "DUBOIS 7.5"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.728, 44.691]},
  spring_name: "GEYSER SPRINGS GROUP",
  degrees_f: "201",
  degrees_c: "94",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.724, 44.697]},
  spring_name: "GIBBON HILL GEYSER",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.443, 43.365]},
  spring_name: "GRANITE FALLS HOT SPRINGS",
  degrees_f: "112",
  degrees_c: "45",
  usgs_quadrangle: "(GRANITE FALLS 7.5)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.445, 43.37]},
  spring_name: "GRANITE HOT SPRING",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "GRANITE FALLS 7.5"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.616, 44.616]},
  spring_name: "HIGHLAND HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-107.105, 42.702]},
  spring_name: "HORSE CREEK SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "HORSE CREEK SPRINGS"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.712, 44.733]},
  spring_name: "HORSESHOE SPRING",
  degrees_f: "187",
  degrees_c: "86",
  usgs_quadrangle: "(NORRIS JUNCTION 15)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.689, 44.985]},
  spring_name: "HOT RIVER",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.256, 44.752]},
  spring_name: "HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "TOWER JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.238, 44.642]},
  spring_name: "HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "PELICAN CONE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.242, 44.743]},
  spring_name: "HOT SPRING BASIN GROUP",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "PELICAN CONE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.258, 44.739]},
  spring_name: "HOT SPRING BASIN GROUP",
  degrees_f: "153",
  degrees_c: "67",
  usgs_quadrangle: "CANYON VILAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.358, 44.723]},
  spring_name: "HOT SPRING ON MOSS CREEK",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.438, 44.61]},
  spring_name: "HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.691, 44.572]},
  spring_name: "HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.3, 44.766]},
  spring_name: "HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "TOWER JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.029, 44.734]},
  spring_name: "HOT SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "PELICAN CONE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.468, 44.711]},
  spring_name: "HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.036, 44.701]},
  spring_name: "HOT SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "PELICAN CONE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.236, 44.672]},
  spring_name: "HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "PELICAN CONE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.282, 44.667]},
  spring_name: "HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.418, 44.752]},
  spring_name: "HOT SPRINGS AT SEVENMILE HOLE",
  degrees_f: "189",
  degrees_c: "87",
  usgs_quadrangle: "TOWER JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.321, 44.591]},
  spring_name: "HOT SPRINGS AT SULPHUR HILLS",
  degrees_f: "196",
  degrees_c: "91",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.617, 44.607]},
  spring_name: "HOT SPRINGS EAST OF MARY LAKE",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.236, 44.598]},
  spring_name: "HOT SPRINGS IN PELICAN VALLEY",
  degrees_f: "156",
  degrees_c: "69",
  usgs_quadrangle: "PELICAN CONE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.384, 44.69]},
  spring_name: "HOT SPRINGS ON BOG CREEK",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.375, 44.697]},
  spring_name: "HOT SPRINGS ON BOG CREEK",
  degrees_f: "185",
  degrees_c: "85",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.326, 44.681]},
  spring_name: "HOT SPRINGS ON UPPER SOUR CREEK",
  degrees_f: "194",
  degrees_c: "90",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.813, 44.518]},
  spring_name: "HOT SPRINGS RABBIT CREEK GROUP",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.167, 44.841]},
  spring_name: "HOT ON LAMAR RIVER",
  degrees_f:  "W",
  degrees_c: "W",
  usgs_quadrangle: "(ABIATHAR PEAK 15)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.874, 44.532]},
  spring_name: "IMPERIAL GEYSER SPRAY GEYSER",
  degrees_f:  "192",
  degrees_c: "89",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.768, 44.662]},
  spring_name: "IRON SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.696, 43.958]},
  spring_name: "JACKSON LAKE HOT SPRINGS",
  degrees_f: "162",
  degrees_c: "72",
  usgs_quadrangle: "(COLTER BAY 7.5)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-109.605, 43.489]},
  spring_name: "JAKEYS FORK SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(TORREY LAKE 7.5)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.997, 42.817]},
  spring_name: "JOHNSON SPRINGS",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: null
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.324, 44.739]},
  spring_name: "JOSEPHS COAT SPRINGS",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.615, 43.639]},
  spring_name: "KELLY WARM SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "SHADOW MOUNTAIN 7.5"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.019, 43.282]},
  spring_name: "KENDALL WARM SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "KLONDIKE HILL 7.5"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-108.188, 44.749]},
  spring_name: "LITTLE SHEEP MOUNTAIN SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(SPENCE 7.5)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-109.669, 43.52]},
  spring_name: "LITTLE WARM SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(DUBOIS 7.5)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.708, 44.967]},
  spring_name: "MAMMOTH HOT SPRINGS",
  degrees_f: "163",
  degrees_c: "73",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.753, 44.684]},
  spring_name: "MONUMENT GEYSER BASIN",
  degrees_f: "197",
  degrees_c: "92",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.811, 44.571]},
  spring_name: "MORNING MIST SPRINGS",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.432, 44.617]},
  spring_name: "MUD GEYSERS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.433, 44.625]},
  spring_name: "MUD VOLCANO",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-109.156, 44.511]},
  spring_name: "NEEDLE HOT SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(CODY 15)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.198, 43.907]},
  spring_name: "NORTH BUFFALO FORK SPRINGS",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "(JOY PEAK 7.5)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.29, 44.671]},
  spring_name: "PONUNTPA SPRINGS GROUP",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.805, 44.568]},
  spring_name: "QUAGMIRE GROUP",
  degrees_f: "203",
  degrees_c: "95",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.869, 44.564]},
  spring_name: "QUEENS LAUNDRY",
  degrees_f: "192",
  degrees_c: "89",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.828, 44.514]},
  spring_name: "RABBIT CREEK GROUP",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.269, 44.769]},
  spring_name: "RAINBOW SPRINGS",
  degrees_f: "190",
  degrees_c: "88",
  usgs_quadrangle: "TOWER JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.832, 44.556]},
  spring_name: "RIVER GROUP",
  degrees_f: "196",
  degrees_c: "91",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.834, 44.563]},
  spring_name: "RIVER GROUP",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.724, 44.753]},
  spring_name: "ROADSIDE SPRINGS FRYING PAN SPRING",
  degrees_f: "158",
  degrees_c: "70",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-106.804, 41.45]},
  spring_name: "SARATOGA HOT SPRINGS",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "SARATOGA 7.5"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.786, 44.671]},
  spring_name: "SECRET VALLEY HOT SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "(MADISON JUNCTION 15)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.74, 44.786]},
  spring_name: "SEMI-CENTENNIAL GEYSER",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.403, 44.754]},
  spring_name: "SEVENMILE HOLE",
  degrees_f: "154",
  degrees_c: "68",
  usgs_quadrangle: "(TOWER JUNCTION 15)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-108.138, 44.608]},
  spring_name: "SHEEP MOUNTAIN SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "SHEEP CANYON 7.5"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-109.129, 44.513]},
  spring_name: "SHOSHONE HOT SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "(CODY 15)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.85, 44.551]},
  spring_name: "SPRINGS ON FAIRY CREEK",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.738, 44.781]},
  spring_name: "STEAM VENTS AT ROARING MOUNTAIN",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.297, 44.53]},
  spring_name: "STEAMBOAT SPRINGS",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-109.616, 42.75]},
  spring_name: "STEELE HOT SPRINGS",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "FREMONT BUTTE 7.5"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.433, 44.628]},
  spring_name: "SULPHUR CALDRON",
  degrees_f: "190",
  degrees_c: "88",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.482, 44.653]},
  spring_name: "SULPHUR SPRINGS",
  degrees_f: "194",
  degrees_c: "89",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-108.172, 42.492]},
  spring_name: "SWEETWATER STATION WARM SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "HAPPY SPRING 7.5"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.767, 44.702]},
  spring_name: "SYLVAN SPRINGS",
  degrees_f: "192",
  degrees_c: "89",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.234, 44.634]},
  spring_name: "THE MUDKETTLES",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "PELICAN CONE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.226, 44.634]},
  spring_name: "THE MUSHPOTS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "PELICAN CONE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-108.194, 43.654]},
  spring_name: "THERMOPOLIS HOT SPRINGS",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "THERMOPOLIS 7.5"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.258, 44.544]},
  spring_name: "TURBID SPRINGS",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.314, 44.582]},
  spring_name: "VERMILION SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.572, 44.656]},
  spring_name: "VIOLET SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.471, 44.708]},
  spring_name: "WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-104.781, 42.249]},
  spring_name: "WARM SPRINGS (IMMIGRANTS WASHTUB)",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "WHEATLAND NE 7.5"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-108.835, 43.008]},
  spring_name: "WASHAKIE MINERAL HOT SPRINGS",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "ETHETE 7.5"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.429, 44.766]},
  spring_name: "WASHBURN HOT SPRINGS",
  degrees_f: "196",
  degrees_c: "91",
  usgs_quadrangle: "TOWER JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.791, 44.529]},
  spring_name: "WHITE CREEK GROUP",
  degrees_f: "185",
  degrees_c: "85",
  usgs_quadrangle: "(MADISON JUNCTION 15)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.801, 44.537]},
  spring_name: "WHITE DOME GEYSER SURPRISE POOL",
  degrees_f: " 203",
  degrees_c: "95",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.699, 44.781]},
  spring_name: "WHITEROCK SPRINGS",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-108.213, 43.583]},
  spring_name: "WIND RIVER CANYON SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "WEDDING OF THE WATERS 7.5"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.579, 44.742]},
  spring_name: "WOLF LAKE SPRINGS",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(NORRIS JUNCTION 15)"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.203, 44.6]},
  spring_name: null,
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "PELICAN CONE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.816, 44.566]},
  spring_name: null,
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.701, 44.728]},
  spring_name: null,
  degrees_f: "192",
  degrees_c: "89",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.708, 44.722]},
  spring_name: null,
  degrees_f: "201",
  degrees_c: "94",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.715, 44.72]},
  spring_name: null,
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.475, 44.714]},
  spring_name: null,
  degrees_f: "167",
  degrees_c: "75",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  loc: { type: "Point", coordinates: [-110.75, 44.69]},
  spring_name: null,
  degrees_f: "187",
  degrees_c: "86",
  usgs_quadrangle: "NORRIS JUNCTION"
  }
];

db.Hotspring
  .remove({})
  .then(() => db.Hotspring.collection.insertMany(hotspringSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Hotspring.createIndexes( {loc: "2dsphere"});
