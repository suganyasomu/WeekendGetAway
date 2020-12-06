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
  lattitude: "55.983",
  longitude: "-131.661",
  spring_name: "BAILEY HOT SPRING",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "KETCHIKAN (D-5) 15"
  },
  {
  state_code: "AK",
  lattitude: "57.085",
  longitude: "-134.839",
  spring_name: "BARANOF WARM SPRINGS",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "SITKA (A-3) 15"
  },
  {
  state_code: "AK",
  lattitude: "56.68",
  longitude: "-131.882",
  spring_name: "BARNES LAKE HOT SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(BRADFIELD CANAL (C-6) 15)"
  },
  {
  state_code: "AK",
  lattitude: "55.933",
  longitude: "-131.559",
  spring_name: "BELL ISLAND HOT SPRINGS",
  degrees_f: "165",
  degrees_c: "74",
  usgs_quadrangle: "KETCHIKAN (D-5) 15"
  },
  {
  state_code: "AK",
  lattitude: "56.233",
  longitude: "-131.267",
  spring_name: "BRADFIELD CANAL HOT SPRINGS",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "(BRADFIELD CANAL (A-4) 15)"
  },
  {
  state_code: "AK",
  lattitude: "65.053",
  longitude: "-146.057",
  spring_name: "CHENA HOT SPRINGS",
  degrees_f: "153",
  degrees_c: "67",
  usgs_quadrangle: "CIRCLE (A-5) 15"
  },
  {
  state_code: "AK",
  lattitude: "56.717",
  longitude: "-132.005",
  spring_name: "CHIEF SHAKES HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "(PETERSBURG (C-1) 15)"
  },
  {
  state_code: "AK",
  lattitude: "52.84",
  longitude: "-169.9",
  spring_name: "CHUGINADAK HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "SAMALGA ISLAND"
  },
  {
  state_code: "AK",
  lattitude: "65.483",
  longitude: "-144.637",
  spring_name: "CIRCLE HOT SPRINGS",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "CIRCLE (B-2) 15"
  },
  {
  state_code: "AK",
  lattitude: "64.85",
  longitude: "-162.3",
  spring_name: "CLEAR CREEK HOT SPRINGS",
  degrees_f: "149",
  degrees_c: "65",
  usgs_quadrangle: "(SOLOMON (D-1) 15)"
  },
  {
  state_code: "AK",
  lattitude: "66.217",
  longitude: "-149.547",
  spring_name: "DALL HOT SPRINGS",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "(BEAVER (A-6) 15)"
  },
  {
  state_code: "AK",
  lattitude: "55.334",
  longitude: "-133.641",
  spring_name: "DALTON (CRAIG) HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "CRAIG (B-5) 15"
  },
  {
  state_code: "AK",
  lattitude: "65.908",
  longitude: "-154.993",
  spring_name: "DENIKTOW RIDGE HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "MELOZITNA (D-4) 15"
  },
  {
  state_code: "AK",
  lattitude: "55.368",
  longitude: "-161.961",
  spring_name: "FUMAROLE",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "PORT MOLLER"
  },
  {
  state_code: "AK",
  lattitude: "51.775",
  longitude: "-178.793",
  spring_name: "FUMAROLES ON GARELOI ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "GARELOI ISLAND"
  },
  {
  state_code: "AK",
  lattitude: "51.762",
  longitude: "-178.77",
  spring_name: "FUMAROLES ON GARELOI ISLAND",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "GARELOI ISLAND"
  },
  {
  state_code: "AK",
  lattitude: "51.925",
  longitude: "-177.16",
  spring_name: "FUMAROLES ON KANAGA ISLAND",
  degrees_f: "219",
  degrees_c: "104",
  usgs_quadrangle: "ADAK"
  },
  {
  state_code: "AK",
  lattitude: "51.944",
  longitude: "178.547",
  spring_name: "FUMAROLES ON LITTLE SITKIN ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "RAT ISLANDS"
  },
  {
  state_code: "AK",
  lattitude: "51.963",
  longitude: "178.491",
  spring_name: "FUMAROLES ON LITTLE SITKIN ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "RAT ISLANDS"
  },
  {
  state_code: "AK",
  lattitude: "51.967",
  longitude: "178.444",
  spring_name: "FUMAROLES ON LITTLE SITKIN ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "RAT ISLANDS"
  },
  {
  state_code: "AK",
  lattitude: "57.865",
  longitude: "-156.499",
  spring_name: "GAS ROCKS HOT SPRING",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "(UGASHIK (D-2) 15)"
  },
  {
  state_code: "AK",
  lattitude: "56.836",
  longitude: "-135.374",
  spring_name: "GODDARD HOT SPRINGS",
  degrees_f: "153",
  degrees_c: "67",
  usgs_quadrangle: "PORT ALEXANDER (D-5) 15"
  },
  {
  state_code: "AK",
  lattitude: "65.367",
  longitude: "-161.25",
  spring_name: "GRANITE MOUNTAIN HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "(CANDLE (B-5) 15)"
  },
  {
  state_code: "AK",
  lattitude: "64.924",
  longitude: "-154.837",
  spring_name: "HORNER HOT SPRINGS",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "RUBY (D-4) 15"
  },
  {
  state_code: "AK",
  lattitude: "61.267",
  longitude: "-151.238",
  spring_name: "HOT LAKE IN BOTTOM OF CRATER PEAK",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(TYONEK (B-6) 15)"
  },
  {
  state_code: "AK",
  lattitude: "55.334",
  longitude: "-162.137",
  spring_name: "HOT SPRING AT WEST END EMMONS LAKE",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "COLD BAY"
  },
  {
  state_code: "AK",
  lattitude: "67.403",
  longitude: "-153.883",
  spring_name: "HOT SPRING NEAR ARRIGETCH PEAKS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "SURVEY PASS"
  },
  {
  state_code: "AK",
  lattitude: "57.348",
  longitude: "-135.385",
  spring_name: "HOT SPRING NEAR FISH BAY",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "SITKA (B-5) 15"
  },
  {
  state_code: "AK",
  lattitude: "62.45",
  longitude: "-157.933",
  spring_name: "HOT SPRING NEAR FLAT",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(IDITAROD (B-4) 15)"
  },
  {
  state_code: "AK",
  lattitude: "58.24",
  longitude: "-155.09",
  spring_name: "HOT SPRING NEAR KATMAI PASS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(MT. KATMAI (A-4) 15)"
  },
  {
  state_code: "AK",
  lattitude: "64.7",
  longitude: "-162.467",
  spring_name: "HOT SPRING NEAR KWINIUK RIVER",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "(SOLOMON (C-1) 15)"
  },
  {
  state_code: "AK",
  lattitude: "65.45",
  longitude: "-150",
  spring_name: "HOT SPRING NEAR LITTLE MINOOK CR",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(TANANA (B-1) 15)"
  },
  {
  state_code: "AK",
  lattitude: "57.178",
  longitude: "-157.015",
  spring_name: "HOT SPRING NEAR MOTHER GOOSE LAKE",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "(UGASHIK (A-4) 15)"
  },
  {
  state_code: "AK",
  lattitude: "55.863",
  longitude: "-160.493",
  spring_name: "HOT SPRING NEAR PORT MOLLER",
  degrees_f: "160",
  degrees_c: "71",
  usgs_quadrangle: "PORT MOLLER (D-2) 15"
  },
  {
  state_code: "AK",
  lattitude: "61.058",
  longitude: "-160.692",
  spring_name: "HOT SPRING NEAR TULUKSAK RIVER",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(RUSSIAN MISSION (A-5) 15)"
  },
  {
  state_code: "AK",
  lattitude: "57.771",
  longitude: "-135.82",
  spring_name: "HOT SPRING NORTH ARM PERIL STRAIT",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "(SITKA (D-6) 15)"
  },
  {
  state_code: "AK",
  lattitude: "54.9",
  longitude: "-162.885",
  spring_name: "HOT SPRING ON AMAGAT ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(FALSE PASS (D-3) 15)"
  },
  {
  state_code: "AK",
  lattitude: "52.87",
  longitude: "173.13",
  spring_name: "HOT SPRING ON ATTU ISLAND",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "ATTU"
  },
  {
  state_code: "AK",
  lattitude: "65.047",
  longitude: "-142.848",
  spring_name: "HOT SPRING ON FLAT CREEK",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(CHARLEY RIVER (A-4) 15)"
  },
  {
  state_code: "AK",
  lattitude: "52.96",
  longitude: "-169.71",
  spring_name: "HOT SPRING ON KAGAMIL ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "SAMALGA ISLAND"
  },
  {
  state_code: "AK",
  lattitude: "51.94",
  longitude: "178.5",
  spring_name: "HOT SPRING ON LITTLE SITKIN ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "RAT ISLANDS"
  },
  {
  state_code: "AK",
  lattitude: "52.358",
  longitude: "-172.317",
  spring_name: "HOT SPRING ON SEGUAM ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "SEGUAM"
  },
  {
  state_code: "AK",
  lattitude: "51.81",
  longitude: "-177.79",
  spring_name: "HOT SPRING ON TANAGA ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "ADAK"
  },
  {
  state_code: "AK",
  lattitude: "64.002",
  longitude: "-156.3",
  spring_name: "HOT SPRING ON TRIBUTARY OF INNOKO R",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(NULATO (A-1) 15)"
  },
  {
  state_code: "AK",
  lattitude: "60.837",
  longitude: "-142.42",
  spring_name: "HOT SPRING ON TWELVEMILE CREEK",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "BERING GLACIER"
  },
  {
  state_code: "AK",
  lattitude: "53.233",
  longitude: "-168.3",
  spring_name: "HOT SPRING ON UMNAK ISLAND",
  degrees_f: "149",
  degrees_c: "65",
  usgs_quadrangle: "UMNAK"
  },
  {
  state_code: "AK",
  lattitude: "54.66",
  longitude: "-164.55",
  spring_name: "HOT SPRING ON UNIMAK ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "UNIMAK"
  },
  {
  state_code: "AK",
  lattitude: "58.92",
  longitude: "-153.98",
  spring_name: "HOT SPRING WEST OF CAPE DOUGLAS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(AFOGNAK (D-6) 15)"
  },
  {
  state_code: "AK",
  lattitude: "55.217",
  longitude: "-162.483",
  spring_name: "HOT SPRINGS EAST OF COLD BAY",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "COLD BAY"
  },
  {
  state_code: "AK",
  lattitude: "63.883",
  longitude: "-150.717",
  spring_name: "HOT SPRINGS EAST OF DIAMOND",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(MT. MCKINLEY (D-2)"
  },
  {
  state_code: "AK",
  lattitude: "66.367",
  longitude: "-156.767",
  spring_name: "HOT SPRINGS NEAR DIVISION BM",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "65.267",
  longitude: "-155.28",
  spring_name: "HOT SPRINGS NEAR DULBI RIVER",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "(MELOZITNA (B-5) 15)"
  },
  {
  state_code: "AK",
  lattitude: "53.213",
  longitude: "-168.463",
  spring_name: "HOT SPRINGS NEAR GEYSER BIGHT",
  degrees_f: "216",
  degrees_c: "102",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "53.207",
  longitude: "-168.445",
  spring_name: "HOT SPRINGS NEAR GEYSER BIGHT",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "53.223",
  longitude: "-168.477",
  spring_name: "HOT SPRINGS NEAR GEYSER BIGHT",
  degrees_f: "214",
  degrees_c: "101",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "63.683",
  longitude: "-151.233",
  spring_name: "HOT SPRINGS NEAR GLACIER",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(MT. MCKINLEY (C-3)"
  },
  {
  state_code: "AK",
  lattitude: "54.157",
  longitude: "-165.85",
  spring_name: "HOT SPRINGS NEAR HOT SPRINGS BAY",
  degrees_f: "181",
  degrees_c: "83",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "53.242",
  longitude: "-168.365",
  spring_name: "HOT SPRINGS NEAR HOT SPRINGS COVE",
  degrees_f: "192",
  degrees_c: "89",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "53.253",
  longitude: "-168.358",
  spring_name: "HOT SPRINGS NEAR HOT SPRINGS COVE",
  degrees_f: "158",
  degrees_c: "70",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "58.37",
  longitude: "-137.09",
  spring_name: "HOT SPRINGS NEAR ICY POINT",
  degrees_f: "153",
  degrees_c: "67",
  usgs_quadrangle: "(MT. FAIRWEATHER (B-4) 15)"
  },
  {
  state_code: "AK",
  lattitude: "65.217",
  longitude: "-162.9",
  spring_name: "HOT SPRINGS NEAR LAVA CREEK",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "(BENDELEBEN (A-2) 15)"
  },
  {
  state_code: "AK",
  lattitude: "53.848",
  longitude: "-166.873",
  spring_name: "HOT SPRINGS NEAR MAKUSHIN VOLCANO",
  degrees_f: "94",
  degrees_c: "34",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "53.851",
  longitude: "-166.918",
  spring_name: "HOT SPRINGS NEAR MAKUSHIN VOLCANO",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "54.944",
  longitude: "-163.251",
  spring_name: "HOT SPRINGS NEAR MORZHOVOI",
  degrees_f: "145",
  degrees_c: "63",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "58.27",
  longitude: "-154.89",
  spring_name: "HOT SPRINGS NEAR MT KATMAI",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(MT. KATMAI (B-3) 15)"
  },
  {
  state_code: "AK",
  lattitude: "61.2",
  longitude: "-159.863",
  spring_name: "HOT SPRINGS NEAR OPHIR CREEK",
  degrees_f: "145",
  degrees_c: "63",
  usgs_quadrangle: "(RUSSIAN MISSION (A-2) 15)"
  },
  {
  state_code: "AK",
  lattitude: "66.15",
  longitude: "-157.117",
  spring_name: "HOT SPRINGS NEAR SOUTH BM",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "53.877",
  longitude: "-166.448",
  spring_name: "HOT SPRINGS NEAR SUMMER BAY",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "58.033",
  longitude: "-136.017",
  spring_name: "HOT SPRINGS NORTH END TENAKEE INLET",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "(MT. FAIRWEATHER (A-1) 15)"
  },
  {
  state_code: "AK",
  lattitude: "51.97",
  longitude: "-176.61",
  spring_name: "HOT SPRINGS ON ADAK ISLAND",
  degrees_f: "154",
  degrees_c: "68",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "54.18",
  longitude: "-165.41",
  spring_name: "HOT SPRINGS ON AKUN ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "54.23",
  longitude: "-165.66",
  spring_name: "HOT SPRINGS ON AKUN ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "52.19",
  longitude: "-174.25",
  spring_name: "HOT SPRINGS ON ATKA ISLAND",
  degrees_f: "167",
  degrees_c: "75",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "52.34",
  longitude: "-174.26",
  spring_name: "HOT SPRINGS ON ATKA ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "52.27",
  longitude: "-174.042",
  spring_name: "HOT SPRINGS ON ATKA ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "65.233",
  longitude: "-144.483",
  spring_name: "HOT SPRINGS ON BIG WINDY CREEK",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(CIRCLE (A-1) 15)"
  },
  {
  state_code: "AK",
  lattitude: "53.95",
  longitude: "-168.037",
  spring_name: "HOT SPRINGS ON BOGOSLOF ISLAND",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "52.042",
  longitude: "-176.108",
  spring_name: "HOT SPRINGS ON GREAT SITKIN ISLAND",
  degrees_f: "210",
  degrees_c: "99",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "66.233",
  longitude: "-157.583",
  spring_name: "HOT SPRINGS ON HAWK RIVER",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "65.983",
  longitude: "-150.56",
  spring_name: "HOT SPRINGS ON LOWER RAY RIVER",
  degrees_f: "142",
  degrees_c: "61",
  usgs_quadrangle: "(TANANA (D-2) 15)"
  },
  {
  state_code: "AK",
  lattitude: "61.363",
  longitude: "-157.733",
  spring_name: "HOT SPRINGS ON UPPER CHUILNUK RIVER",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(SLEETMUTE (B-4) 15)"
  },
  {
  state_code: "AK",
  lattitude: "65.216",
  longitude: "-149.993",
  spring_name: "HUTLINANA HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "LIVENGOOD (A-6) 15"
  },
  {
  state_code: "AK",
  lattitude: "66.342",
  longitude: "-150.85",
  spring_name: "KANUTI HOT SPRINGS",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "(BETTLES (B-2) 15)"
  },
  {
  state_code: "AK",
  lattitude: "65.81",
  longitude: "-151.237",
  spring_name: "KILO HOT SPRING",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "TANANA (D-3)"
  },
  {
  state_code: "AK",
  lattitude: "65.459",
  longitude: "-153.312",
  spring_name: "LITTLE MELOZITNA HOT SPRINGS",
  degrees_f: "176",
  degrees_c: "80",
  usgs_quadrangle: "MELOZITNA (B-1) 15"
  },
  {
  state_code: "AK",
  lattitude: "53.892",
  longitude: "-166.93",
  spring_name: "MAKUSHIN VOLCANO FUMAROLES",
  degrees_f: "310",
  degrees_c: "154",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "65.006",
  longitude: "-150.633",
  spring_name: "MANLEY HOT SPRINGS",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "TANANA (A-2)"
  },
  {
  state_code: "AK",
  lattitude: "65.129",
  longitude: "-154.692",
  spring_name: "MELOZI (MELOZITNA) SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "MELOZITNA (A-4) 15"
  },
  {
  state_code: "AK",
  lattitude: "62.058",
  longitude: "-145.222",
  spring_name: "MINERAL SPRING (LOWER KLAWASI CONE)",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "GULKANA (A-3) 15"
  },
  {
  state_code: "AK",
  lattitude: "57.644",
  longitude: "-135.333",
  spring_name: "NYLEN HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "(SITKA (C-5) 15)"
  },
  {
  state_code: "AK",
  lattitude: "69.33",
  longitude: "-144.044",
  spring_name: "OKPILAK SPRINGS",
  degrees_f: "119",
  degrees_c: "49",
  usgs_quadrangle: "(MT. MICHELSON (B-1) 15)"
  },
  {
  state_code: "AK",
  lattitude: "65.093",
  longitude: "-164.922",
  spring_name: "PILGRIM SPRINGS",
  degrees_f: "178",
  degrees_c: "81",
  usgs_quadrangle: "BENDELEBEN (A-6) 15"
  },
  {
  state_code: "AK",
  lattitude: "65.97",
  longitude: "-154.033",
  spring_name: "POCAHONTAS HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "MELOZITNA (D-3) 15"
  },
  {
  state_code: "AK",
  lattitude: "65.963",
  longitude: "-150.919",
  spring_name: "RAY RIVER HOT SPRING",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "TANANA (D-2) 15"
  },
  {
  state_code: "AK",
  lattitude: "69.627",
  longitude: "-146.027",
  spring_name: "RED HILL SPRING",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "MT. MICHELSON (C-4)"
  },
  {
  state_code: "AK",
  lattitude: "67.283",
  longitude: "-155.067",
  spring_name: "REED RIVER HOT SPRING",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "65.858",
  longitude: "-164.71",
  spring_name: "SERPENTINE HOT SPRINGS",
  degrees_f: "171",
  degrees_c: "77",
  usgs_quadrangle: "BENDELEBEN (D-6) 15"
  },
  {
  state_code: "AK",
  lattitude: "56.58",
  longitude: "-132.18",
  spring_name: "SOUTH STIKINE SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(PETERSBURG (C-1) 15)"
  },
  {
  state_code: "AK",
  lattitude: "56.928",
  longitude: "-158.12",
  spring_name: "SURPRISE LAKE HOT SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(CHIGNIK (D-1) 15)"
  },
  {
  state_code: "AK",
  lattitude: "57.781",
  longitude: "-135.217",
  spring_name: "TENAKEE HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "SITKA (D-4) 15"
  },
  {
  state_code: "AK",
  lattitude: "53.443",
  longitude: "-168.092",
  spring_name: "THERMAL SPRINGS IN OKMOK CALDERA",
  degrees_f: "212",
  degrees_c: "100",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "65.274",
  longitude: "-148.847",
  spring_name: "TOLOVANA HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "LIVENGOOD (B-4) 15"
  },
  {
  state_code: "AK",
  lattitude: "66.197",
  longitude: "-154.006",
  spring_name: "TUNALKTEN LAKE HOT SPRING",
  degrees_f: "null",
  degrees_c: "null",
  usgs_quadrangle: "HUGHES (A-3) 15"
  },
  {
  state_code: "AK",
  lattitude: "56.667",
  longitude: "-132.28",
  spring_name: "TWIN LAKES HOT SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(PETERSBURG (C-1) 15)"
  },
  {
  state_code: "AK",
  lattitude: "62.081",
  longitude: "-145.007",
  spring_name: "UPPER KLAWASI WARM SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "GULKANA (A-3) 15"
  },
  {
  state_code: "AK",
  lattitude: "57.831",
  longitude: "-156.513",
  spring_name: "W UKINEK SPRING",
  degrees_f: "178",
  degrees_c: "81",
  usgs_quadrangle: "(UGASHIK (D-2) 15)"
  },
  {
  state_code: "AK",
  lattitude: "66.383",
  longitude: "-157.517",
  spring_name: "WARM SPRING NEAR PURCELL MOUNTAIN",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AK",
  lattitude: "57.807",
  longitude: "-136.341",
  spring_name: "WHITE SULPHUR SPRINGS (HOONIAH H S)",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "SITKA (D-8) 15"
  },
  {
  state_code: "AR",
  lattitude: "34.542",
  longitude: "-93.024",
  spring_name: "BIG CHALYBEATE SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "HOT SPRINGS NORTH 7.5"
  },
  {
  state_code: "AR",
  lattitude: "34.384",
  longitude: "-93.607",
  spring_name: "CADDO GAP SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "(GLENWOOD 15)"
  },
  {
  state_code: "AR",
  lattitude: "34.513",
  longitude: "-93.053",
  spring_name: "HOT SPRINGS",
  degrees_f: "147",
  degrees_c: "64",
  usgs_quadrangle: "HOT SPRINGS NORTH 7.5"
  },
  {
  state_code: "AR",
  lattitude: "34.406",
  longitude: "-93.908",
  spring_name: "SPRING ON LITTLE MISSOURI RIVER",
  degrees_f: "74",
  degrees_c: "23",
  usgs_quadrangle: "(ATHENS 15)"
  },
  {
  state_code: "AR",
  lattitude: "34.321",
  longitude: "-93.739",
  spring_name: "SPRING ON REDLAND MOUNTAIN",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(GLENWOOD 15)"
  },
  {
  state_code: "AR",
  lattitude: "36.48",
  longitude: "-91.053",
  spring_name: "WARM SPRINGS",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "WARM SPRINGS 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "32.281",
  longitude: "-110.73",
  spring_name: "AGUA CALIENTE",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "BELLOTA RANCH 15"
  },
  {
  state_code: "AZ",
  lattitude: "31.695",
  longitude: "-110.963",
  spring_name: "AGUA CALIENTE SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "MOUNT WRIGHTSON 15"
  },
  {
  state_code: "AZ",
  lattitude: "32.984",
  longitude: "-113.324",
  spring_name: "AGUA CALIENTE SPRINGS",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "AGUA CALIENTE 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "31.673",
  longitude: "-109.902",
  spring_name: "ANTELOPE SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "HAY MOUNTAIN 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "31.362",
  longitude: "-109.265",
  spring_name: "ASTIN SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "COLLEGE PEAKS 15"
  },
  {
  state_code: "AZ",
  lattitude: "34.925",
  longitude: "-114.221",
  spring_name: "CALICHE SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "YUCCA NW 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "35.213",
  longitude: "-113.425",
  spring_name: "CASA GRANDE SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AZ",
  lattitude: "33.51",
  longitude: "-110.403",
  spring_name: "CASSADORE SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "CASSADORE SPRING 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "33.988",
  longitude: "-112.362",
  spring_name: "CASTLE HOT SPRINGS",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "GOVERNORS PEAK 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "33.055",
  longitude: "-109.295",
  spring_name: "CLIFTON HOT SPRINGS",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "(CLIFTON 15)"
  },
  {
  state_code: "AZ",
  lattitude: "34.695",
  longitude: "-113.572",
  spring_name: "COFER HOT SPRING",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "WIKIEUP 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "36.509",
  longitude: "-111.852",
  spring_name: "COLORADO POOL",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "(EMMETT WASH 15)"
  },
  {
  state_code: "AZ",
  lattitude: "33.17",
  longitude: "-110.528",
  spring_name: "COOLIDGE DAM WARM SPRING",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "COOLIDGE DAM 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "33.046",
  longitude: "-109.44",
  spring_name: "EAGLE CREEK HOT SPRINGS",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "CLIFTON 15"
  },
  {
  state_code: "AZ",
  lattitude: "35.169",
  longitude: "-113.851",
  spring_name: "FROST MINE SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(HUALAPAI PEAK NE 7.5)"
  },
  {
  state_code: "AZ",
  lattitude: "32.971",
  longitude: "-109.35",
  spring_name: "GILLARD HOT SPRINGS",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "GUTHRIE 15"
  },
  {
  state_code: "AZ",
  lattitude: "33.008",
  longitude: "-109.778",
  spring_name: "GRAPEVINE SPRING",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(FORT THOMAS 15)"
  },
  {
  state_code: "AZ",
  lattitude: "33.4",
  longitude: "-109.152",
  spring_name: "HANNAH HOT SPRING",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "DUTCH BLUE CREEK 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "32.336",
  longitude: "-110.24",
  spring_name: "HOOKERS HOT SPRINGS",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "WINCHESTER MTS. 15"
  },
  {
  state_code: "AZ",
  lattitude: "35.984",
  longitude: "-114.742",
  spring_name: "HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "RINGBOLT RAPIDS 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "33.08",
  longitude: "-109.303",
  spring_name: "HOT SPRING",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "CLIFTON 15"
  },
  {
  state_code: "AZ",
  lattitude: "35.96",
  longitude: "-114.725",
  spring_name: "HOT SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "RINGBOLT RAPIDS 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "32.998",
  longitude: "-109.901",
  spring_name: "INDIAN HOT SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "THATCHER 15"
  },
  {
  state_code: "AZ",
  lattitude: "34.563",
  longitude: "-113.497",
  spring_name: "KAISER HOT SPRING",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AZ",
  lattitude: "36.196",
  longitude: "-113.081",
  spring_name: "LAVA WARM SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "VULCANS THRONE 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "31.592",
  longitude: "-109.51",
  spring_name: "LEWIS SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(SWISSHELM MTN. 15)"
  },
  {
  state_code: "AZ",
  lattitude: "32.337",
  longitude: "-110.708",
  spring_name: "MERCER SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "BELLOTA RANCH 15"
  },
  {
  state_code: "AZ",
  lattitude: "33.152",
  longitude: "-110.639",
  spring_name: "MESCAL WARM SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "MESCAL WARM SPRING 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "33.915",
  longitude: "-112.332",
  spring_name: "MITCHELL SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "GOVERNORS PEAK 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "31.637",
  longitude: "-110.703",
  spring_name: "MONKEY SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "SONOITA 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "32.327",
  longitude: "-110.228",
  spring_name: "N-O SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "WINCHESTER MTS. 15"
  },
  {
  state_code: "AZ",
  lattitude: "34.896",
  longitude: "-114.308",
  spring_name: "OATMAN WARM SPRINGS",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "WARM SPRINGS 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "36.418",
  longitude: "-113.956",
  spring_name: "PAKOON SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "PAKOON SPRINGS 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "33.209",
  longitude: "-110.818",
  spring_name: "PIONEER SPRING",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(EL CAPITAN MTN. 7.5)"
  },
  {
  state_code: "AZ",
  lattitude: "31.943",
  longitude: "-113.013",
  spring_name: "QUITOBAQUITO SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "QUITOBAQUITO SPRINGS 15"
  },
  {
  state_code: "AZ",
  lattitude: "32.741",
  longitude: "-114.068",
  spring_name: "RADIUM HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "WELLTON MESA 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "33.669",
  longitude: "-111.165",
  spring_name: "ROOSEVELT DAM SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "THEODORE ROOSEVELT DAM 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "34.436",
  longitude: "-109.402",
  spring_name: "SALADO SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "SALADO 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "33.831",
  longitude: "-110.574",
  spring_name: "SALT BANKS",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "(BLUE HOUSE MTN. 15)"
  },
  {
  state_code: "AZ",
  lattitude: "33.075",
  longitude: "-109.298",
  spring_name: "SEEP",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "(CLIFTON 15)"
  },
  {
  state_code: "AZ",
  lattitude: "34.649",
  longitude: "-111.744",
  spring_name: "SODA SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "CASNER BUTTE 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "34.405",
  longitude: "-111.602",
  spring_name: "SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "STRAWBERRY 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "33.253",
  longitude: "-110.703",
  spring_name: "SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(CUTTER 7.5)"
  },
  {
  state_code: "AZ",
  lattitude: "33.163",
  longitude: "-110.662",
  spring_name: "SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "MESCAL WARM SPRING 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "34.445",
  longitude: "-112.693",
  spring_name: "SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "KIRKLAND 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "34.076",
  longitude: "-111.708",
  spring_name: "SPRING (HOT)",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "CHALK MOUNTAIN 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "36.895",
  longitude: "-113.913",
  spring_name: "SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "LITTLEFIELD 15"
  },
  {
  state_code: "AZ",
  lattitude: "34.91",
  longitude: "-113.608",
  spring_name: "TOM BROWN WARM SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "TOM BROWN CANYON 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "34.32",
  longitude: "-111.453",
  spring_name: "TONTO NATURAL BRIDGE SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "BUCKHEAD MESA 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "35.077",
  longitude: "-113.267",
  spring_name: "TROUT CREEK SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "null"
  },
  {
  state_code: "AZ",
  lattitude: "34.357",
  longitude: "-111.71",
  spring_name: "VERDE HOT SPRINGS",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "VERDE HOT SPRINGS 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "33.068",
  longitude: "-109.975",
  spring_name: "WARM SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "FORT THOMAS 15"
  },
  {
  state_code: "AZ",
  lattitude: "33.062",
  longitude: "-109.482",
  spring_name: "WARM SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(CLIFTON 15)"
  },
  {
  state_code: "AZ",
  lattitude: "33.78",
  longitude: "-110.317",
  spring_name: "WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "CARRIZO SE 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "32.983",
  longitude: "-110.373",
  spring_name: "WARM SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "COBRE GRANDE MTN. 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "32.345",
  longitude: "-110.247",
  spring_name: "WARM SPRINGS",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(WINCHESTER MTS. 15)"
  },
  {
  state_code: "AZ",
  lattitude: "33.438",
  longitude: "-110.213",
  spring_name: "WARM SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "BRONCO GULCH 7.5"
  },
  {
  state_code: "AZ",
  lattitude: "33.198",
  longitude: "-110.668",
  spring_name: "null",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "(MESCAL WARM SPRING"
  },
  {
  state_code: "AZ",
  lattitude: "33.748",
  longitude: "-110.235",
  spring_name: "null",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "(FORKS BUTTE 7.5)"
  },
  {
  state_code: "AZ",
  lattitude: "35.11",
  longitude: "-113.81",
  spring_name: "null",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(DEAN PEAK 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "39.022",
  longitude: "-122.444",
  spring_name: "ABBOTT MINE",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "WILBUR SPRINGS 15"
  },
  {
  state_code: "CA",
  lattitude: "38.654",
  longitude: "-122.484",
  spring_name: "AETNA SPRINGS",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "AETNA SPRINGS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "34.538",
  longitude: "-119.56",
  spring_name: "AGUA CALIENTE SPRING",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "HILDRETH PEAK 7.5"
  },
  {
  state_code: "CA",
  lattitude: "32.947",
  longitude: "-116.305",
  spring_name: "AGUA CALIENTE SPRINGS",
  degrees_f: "101",
  degrees_c: "38",
  usgs_quadrangle: "AGUA CALIENTE 7.5"
  },
  {
  state_code: "CA",
  lattitude: "33.363",
  longitude: "-117.017",
  spring_name: "AGUA TIBIA SPRING",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "(PALA 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "37.503",
  longitude: "-121.904",
  spring_name: "ALAMEDA WARM SPRINGS",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "NILES 7.5"
  },
  {
  state_code: "CA",
  lattitude: "40.302",
  longitude: "-120.195",
  spring_name: "AMEDEE HOT SPRINGS",
  degrees_f: "203",
  degrees_c: "95",
  usgs_quadrangle: "WENDEL 15"
  },
  {
  state_code: "CA",
  lattitude: "38.773",
  longitude: "-122.705",
  spring_name: "ANDERSON SPRINGS",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "WHISPERING PINES 7.5"
  },
  {
  state_code: "CA",
  lattitude: "34.185",
  longitude: "-117.262",
  spring_name: "ARROWHEAD SPRINGS WATERMAN HOT SPR",
  degrees_f: "194",
  degrees_c: "90",
  usgs_quadrangle: "SAN BERNARDINO NORTH 7.5"
  },
  
  {
  state_code: "CA",
  lattitude: "38.85",
  longitude: "-122.667",
  spring_name: "BAD CREEK SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "(WHISPERING PINES 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "35.842",
  longitude: "-117.38",
  spring_name: "BAINTER SPRING",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "TRONA 15"
  },
  {
  state_code: "CA",
  lattitude: "38.892",
  longitude: "-122.533",
  spring_name: "BAKER SODA SPRING",
  degrees_f: "76",
  degrees_c: "24",
  usgs_quadrangle: "LOWER LAKE 7.5"
  },
  {
  state_code: "CA",
  lattitude: "41.167",
  longitude: "-120.032",
  spring_name: "BARE RANCH SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(SNAKE LAKE 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "39.183",
  longitude: "-122.7",
  spring_name: "BARTLETT SPRINGS",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "CLEARLAKE OAKS 15"
  },
  {
  state_code: "CA",
  lattitude: "41.143",
  longitude: "-121.11",
  spring_name: "BASSETT HOT SPRINGS",
  degrees_f: "174",
  degrees_c: "79",
  usgs_quadrangle: "BIEBER 15"
  },
  {
  state_code: "CA",
  lattitude: "37.802",
  longitude: "-118.532",
  spring_name: "BENTON HOT SPRINGS",
  degrees_f: "134",
  degrees_c: "57",
  usgs_quadrangle: "GLASS MOUNTAIN 15"
  },
  {
  state_code: "CA",
  lattitude: "37.888",
  longitude: "-118.487",
  spring_name: "BERTRAND RANCH SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "BENTON 15"
  },
  {
  state_code: "CA",
  lattitude: "41.025",
  longitude: "-121.924",
  spring_name: "BIG BEND HOT SPRINGS",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "BIG BEND 15"
  },
  {
  state_code: "CA",
  lattitude: "39.006",
  longitude: "-122.787",
  spring_name: "BIG SODA SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "LUCERNE 7.5"
  },
  {
  state_code: "CA",
  lattitude: "37.234",
  longitude: "-118.881",
  spring_name: "BLANEY MEADOWS HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "BLACKCAP MTN. 15"
  },
  {
  state_code: "CA",
  lattitude: "39.032",
  longitude: "-122.432",
  spring_name: "BLANK SPRING MANZANITA MINE SPRS",
  degrees_f: "112",
  degrees_c: "45",
  usgs_quadrangle: "WILBUR SPRINGS 15"
  },
  {
  state_code: "CA",
  lattitude: "41.919",
  longitude: "-122.369",
  spring_name: "BOGUS SODA SPRINGS",
  degrees_f: "76",
  degrees_c: "24",
  usgs_quadrangle: "COPCO 15"
  },
  {
  state_code: "CA",
  lattitude: "40.434",
  longitude: "-121.399",
  spring_name: "BOILING SPRINGS LAKE",
  degrees_f: "190",
  degrees_c: "88",
  usgs_quadrangle: "MT. HARKNESS 15"
  },
  {
  state_code: "CA",
  lattitude: "34.423",
  longitude: "-119.538",
  spring_name: "BORON SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(CARPINTERIA 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "39.226",
  longitude: "-120.01",
  spring_name: "BROCKWAY HOT SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "(KINGS BEACH 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "38.237",
  longitude: "-119.326",
  spring_name: "BUCKEYE HOT SPRING",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "MATTERHORN PEAK 15"
  },
  {
  state_code: "CA",
  lattitude: "40.455",
  longitude: "-121.501",
  spring_name: "BUMPASS HELL",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "LASSEN PEAK 15"
  },
  {
  state_code: "CA",
  lattitude: "37.847",
  longitude: "-121.635",
  spring_name: "BYRON HOT SPRINGS",
  degrees_f: "96",
  degrees_c: "36",
  usgs_quadrangle: "BYRON HOT SPRINGS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "35.881",
  longitude: "-118.67",
  spring_name: "CALIFORNIA HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "CALIFORNIA HOT SPRINGS 15"
  },
  {
  state_code: "CA",
  lattitude: "38.58",
  longitude: "-122.575",
  spring_name: "CALISTOGA HOT SPRINGS",
  degrees_f: "172",
  degrees_c: "78",
  usgs_quadrangle: "CALISTOGA 7.5"
  },
  {
  state_code: "CA",
  lattitude: "35.4",
  longitude: "-120.25",
  spring_name: "CAMETA WARM SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(LA PANZA RANCH 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "39.573",
  longitude: "-120.348",
  spring_name: "CAMPBELL HOT SPRINGS",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "SIERRAVILLE 15"
  },
  {
  state_code: "CA",
  lattitude: "33.545",
  longitude: "-115.654",
  spring_name: "CANYON SPRING",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "HAYFIELD 15"
  },
  {
  state_code: "CA",
  lattitude: "38.916",
  longitude: "-122.799",
  spring_name: "CARLSBAD SPRING",
  degrees_f: "76",
  degrees_c: "24",
  usgs_quadrangle: "KELSEYVILLE 7.5"
  },
  {
  state_code: "CA",
  lattitude: "35.439",
  longitude: "-119.846",
  spring_name: "CARNEROS SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "CARNEROS ROCKS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "37.647",
  longitude: "-118.859",
  spring_name: "CASA DIABLO HOT POOL",
  degrees_f: "165",
  degrees_c: "74",
  usgs_quadrangle: "MT. MORRISON 15"
  },
  {
  state_code: "CA",
  lattitude: "37.648",
  longitude: "-118.914",
  spring_name: "CASA DIABLO HOT SPRINGS AND GEYSER",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "MT. MORRISON 15"
  },
  {
  state_code: "CA",
  lattitude: "38.768",
  longitude: "-122.717",
  spring_name: "CASTLE ROCK SPRINGS",
  degrees_f: "163",
  degrees_c: "73",
  usgs_quadrangle: "WHISPERING PINES 7.5"
  },
  {
  state_code: "CA",
  lattitude: "37.638",
  longitude: "-118.887",
  spring_name: "CHANCE SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(MT. MORRISON 15)"
  },
  {
  state_code: "CA",
  lattitude: "35.946",
  longitude: "-116.189",
  spring_name: "CHAPPO SPRING",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "TECOPA 15"
  },
  {
  state_code: "CA",
  lattitude: "36.144",
  longitude: "-120.555",
  spring_name: "COALINGA MINERAL SPRINGS",
  degrees_f: "112",
  degrees_c: "44",
  usgs_quadrangle: "SHERMAN PEAK 7.5"
  },
  {
  state_code: "CA",
  lattitude: "33.625",
  longitude: "-115.325",
  spring_name: "CORN SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "CHUCKWALLA MOUNTAINS 15"
  },
  {
  state_code: "CA",
  lattitude: "36.045",
  longitude: "-117.769",
  spring_name: "COSO HOT SPRINGS",
  degrees_f: "207",
  degrees_c: "97",
  usgs_quadrangle: "HAIWEE RESERVOIR 15"
  },
  {
  state_code: "CA",
  lattitude: "39.292",
  longitude: "-122.821",
  spring_name: "CRABTREE HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "POTATO HILL 7.5"
  },
  {
  state_code: "CA",
  lattitude: "37.632",
  longitude: "-121.762",
  spring_name: "CROHARE SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(LIVERMORE 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "38.995",
  longitude: "-122.642",
  spring_name: "DAVIS SODA SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(CLEARLAKE HIGHLANDS 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "33.436",
  longitude: "-117.324",
  spring_name: "DE LUZ WARM SPRINGS",
  degrees_f: "85",
  degrees_c: "29",
  usgs_quadrangle: "(FALLBROOK 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "37.677",
  longitude: "-118.79",
  spring_name: "DEHY HOT SPRING",
  degrees_f: "134",
  degrees_c: "57",
  usgs_quadrangle: "(MT. MORRISON 15)"
  },
  {
  state_code: "CA",
  lattitude: "35.558",
  longitude: "-118.612",
  spring_name: "DELONEGHA HOT SPRINGS",
  degrees_f: "112",
  degrees_c: "44",
  usgs_quadrangle: "MIRACLE HOT SPRINGS"
  },
  {
  state_code: "CA",
  lattitude: "35.528",
  longitude: "-118.665",
  spring_name: "DEMOCRAT HOT SPRINGS",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "DEMOCRAT HOT SPRINGS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "36.036",
  longitude: "-117.802",
  spring_name: "DEVILS KITCHEN",
  degrees_f: "207",
  degrees_c: "97",
  usgs_quadrangle: "HAIWEE RESERVOIR 15"
  },
  {
  state_code: "CA",
  lattitude: "40.44",
  longitude: "-121.434",
  spring_name: "DEVILS KITCHEN",
  degrees_f: "203",
  degrees_c: "95",
  usgs_quadrangle: "MT. HARKNESS 15"
  },
  {
  state_code: "CA",
  lattitude: "36.33",
  longitude: "-117.948",
  spring_name: "DIRTY SOCKS HOT SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "KEELER 15"
  },
  {
  state_code: "CA",
  lattitude: "36.084",
  longitude: "-121.584",
  spring_name: "DOLANS HOT SPRING",
  degrees_f: "98",
  degrees_c: "37",
  usgs_quadrangle: "LOPEZ POINT 7.5"
  },
  {
  state_code: "CA",
  lattitude: "33.512",
  longitude: "-115.827",
  spring_name: "DOS PALMAS SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "OROCOPIA CANYON 7.5"
  },
  {
  state_code: "CA",
  lattitude: "40.444",
  longitude: "-121.409",
  spring_name: "DRAKESBAD",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "MT. HARKNESS 15"
  },
  {
  state_code: "CA",
  lattitude: "33.896",
  longitude: "-117.057",
  spring_name: "EDEN HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "EL CASCO 7.5"
  },
  {
  state_code: "CA",
  lattitude: "34.159",
  longitude: "-118.499",
  spring_name: "EL ENCINO SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "VAN NUYS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "39.057",
  longitude: "-122.475",
  spring_name: "ELGIN MINE",
  degrees_f: "156",
  degrees_c: "69",
  usgs_quadrangle: "WILBUR SPRINGS 15"
  },
  {
  state_code: "CA",
  lattitude: "38.897",
  longitude: "-122.882",
  spring_name: "ENGLAND SPRINGS",
  degrees_f: "76",
  degrees_c: "24",
  usgs_quadrangle: "(HIGHLAND SPRINGS 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "41.492",
  longitude: "-120.7",
  spring_name: "ESSEX SPRINGS",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "ALTURAS 15"
  },
  {
  state_code: "CA",
  lattitude: "33.664",
  longitude: "-117.913",
  spring_name: "FAIRVIEW HOT SPRING",
  degrees_f: "96",
  degrees_c: "36",
  usgs_quadrangle: "(NEWPORT BEACH 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "38.348",
  longitude: "-119.4",
  spring_name: "FALES HOT SPRINGS",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "FALES HOT SPRINGS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "37.532",
  longitude: "-119.025",
  spring_name: "FISH CREEK HOT SPRINGS",
  degrees_f: "110",
  degrees_c: "43",
  usgs_quadrangle: "DEVILS POSTPILE 15"
  },
  {
  state_code: "CA",
  lattitude: "33.407",
  longitude: "-116.035",
  spring_name: "FISH SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(OASIS 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "41.86",
  longitude: "-120.158",
  spring_name: "FORT BIDWELL HOT SPRING",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "FORT BIDWELL 15"
  },
  {
  state_code: "CA",
  lattitude: "39.348",
  longitude: "-122.668",
  spring_name: "FOUTS SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "FOUTS SPRINGS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "36.031",
  longitude: "-117.833",
  spring_name: "FUMAROLE",
  degrees_f: "203",
  degrees_c: "95",
  usgs_quadrangle: "HAIWEE RESERVOIR 15"
  },
  {
  state_code: "CA",
  lattitude: "38.979",
  longitude: "-122.659",
  spring_name: "FUMAROLE",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(CLEARLAKE HIGHLANDS 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "37.622",
  longitude: "-119.028",
  spring_name: "FUMAROLES",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(DEVILS POSTPILE 15)"
  },
  {
  state_code: "CA",
  lattitude: "33.835",
  longitude: "-116.988",
  spring_name: "GILMAN HOT SPRINGS",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "SAN JACINTO 7.5"
  },
  {
  state_code: "CA",
  lattitude: "37.108",
  longitude: "-121.478",
  spring_name: "GILROY HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "GILROY HOT SPRINGS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "33.753",
  longitude: "-117.495",
  spring_name: "GLEN IVY HOT SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "LAKE MATTHEWS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "38.835",
  longitude: "-122.731",
  spring_name: "GORDON WARM SPRINGS",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "(WHISPERING PINES 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "37.029",
  longitude: "-117.383",
  spring_name: "GRAPEVINE SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "UBEHEBE CRATER 15"
  },
  {
  state_code: "CA",
  lattitude: "39.002",
  longitude: "-122.498",
  spring_name: "GRIZZLY SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "WILBUR SPRINGS 15"
  },
  {
  state_code: "CA",
  lattitude: "38.699",
  longitude: "-119.846",
  spring_name: "GROVERS HOT SPRINGS",
  degrees_f: "147",
  degrees_c: "64",
  usgs_quadrangle: "MARKLEEVILLE 15"
  },
  {
  state_code: "CA",
  lattitude: "40.393",
  longitude: "-121.507",
  spring_name: "GROWLER HOT SPRING",
  degrees_f: "203",
  degrees_c: "95",
  usgs_quadrangle: "LASSEN PEAK 15"
  },
  {
  state_code: "CA",
  lattitude: "38.785",
  longitude: "-122.655",
  spring_name: "HARBIN SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "WHISPERING PINES 7.5"
  },
  {
  state_code: "CA",
  lattitude: "40.245",
  longitude: "-120.007",
  spring_name: "HIGH ROCK SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "DOYLE 15"
  },
  {
  state_code: "CA",
  lattitude: "33.969",
  longitude: "-116.942",
  spring_name: "HIGHLAND SPRINGS",
  degrees_f: "112",
  degrees_c: "44",
  usgs_quadrangle: "BEAUMONT 7.5"
  },
  {
  state_code: "CA",
  lattitude: "38.936",
  longitude: "-122.907",
  spring_name: "HIGHLAND SPRINGS",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "HIGHLAND SPRINGS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "38.925",
  longitude: "-122.77",
  spring_name: "HILDEBRANDE SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(KELSEYVILLE 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "38.8",
  longitude: "-123.17",
  spring_name: "HOODS HOT SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "(HOPLAND 15)"
  },
  {
  state_code: "CA",
  lattitude: "38.994",
  longitude: "-122.742",
  spring_name: "HORSESHOE SPRING",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "(CLEARLAKE HIGHLANDS 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "37.665",
  longitude: "-118.828",
  spring_name: "HOT CREEK GORGE SPRINGS",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "MT. MORRISON 15"
  },
  {
  state_code: "CA",
  lattitude: "37.656",
  longitude: "-118.834",
  spring_name: "HOT CREEK SPRINGS",
  degrees_f: "171",
  degrees_c: "77",
  usgs_quadrangle: "(MT. MORRISON 15)"
  },
  {
  state_code: "CA",
  lattitude: "41.607",
  longitude: "-121.523",
  spring_name: "HOT SPOT",
  degrees_f: "191",
  degrees_c: "88",
  usgs_quadrangle: "MEDICINE LAKE 15"
  },
  {
  state_code: "CA",
  lattitude: "37.708",
  longitude: "-118.813",
  spring_name: "HOT SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "MT. MORRISON 15"
  },
  {
  state_code: "CA",
  lattitude: "38.048",
  longitude: "-119.081",
  spring_name: "HOT SPRING",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "BODIE 15"
  },
  {
  state_code: "CA",
  lattitude: "35.727",
  longitude: "-118.408",
  spring_name: "HOT SPRING",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "LAKE ISABELLA NORTH"
  },
  {
  state_code: "CA",
  lattitude: "40.364",
  longitude: "-120.243",
  spring_name: "HOT SPRING",
  degrees_f: "204",
  degrees_c: "96",
  usgs_quadrangle: "WENDEL 15"
  },
  {
  state_code: "CA",
  lattitude: "41.407",
  longitude: "-122.197",
  spring_name: "HOT SPRING FUMAROLES",
  degrees_f: "183",
  degrees_c: "84",
  usgs_quadrangle: "SHASTA 15"
  },
  {
  state_code: "CA",
  lattitude: "41.012",
  longitude: "-121.274",
  spring_name: "HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "FALL RIVER MILLS 15"
  },
  {
  state_code: "CA",
  lattitude: "37.648",
  longitude: "-118.806",
  spring_name: "HOT SPRINGS",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "MT. MORRISON 15"
  },
  {
  state_code: "CA",
  lattitude: "41.266",
  longitude: "-120.08",
  spring_name: "HOT SPRINGS (MENLO BATHS)",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "EAGLEVILLE 7.5"
  },
  {
  state_code: "CA",
  lattitude: "41.534",
  longitude: "-120.078",
  spring_name: "HOT SPRINGS (SURPRISE VALLEY)",
  degrees_f: "208",
  degrees_c: "98",
  usgs_quadrangle: "CEDARVILLE 15"
  },
  {
  state_code: "CA",
  lattitude: "40.44",
  longitude: "-121.42",
  spring_name: "HOT SPRINGS VALLEY",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "(MT HARKNESS 15)"
  },
  {
  state_code: "CA",
  lattitude: "38.858",
  longitude: "-122.671",
  spring_name: "HOWARD SPRINGS",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "WHISPERING PINES 7.5"
  },
  {
  state_code: "CA",
  lattitude: "41.036",
  longitude: "-121.926",
  spring_name: "HUNT HOT SPRING",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "BIG BEND 15"
  },
  {
  state_code: "CA",
  lattitude: "40.142",
  longitude: "-120.935",
  spring_name: "INDIAN VALLEY HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "GREENVILLE 15"
  },
  {
  state_code: "CA",
  lattitude: "36.773",
  longitude: "-120.898",
  spring_name: "IRIDAT SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "ORTIGALITA PEAK 7.5"
  },
  {
  state_code: "CA",
  lattitude: "39.657",
  longitude: "-123.585",
  spring_name: "JACKSON VALLEY MUD SPRINGS",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "CAHTO PEAK 7.5"
  },
  {
  state_code: "CA",
  lattitude: "32.617",
  longitude: "-116.189",
  spring_name: "JACUMBA HOT SPRINGS",
  degrees_f: "101",
  degrees_c: "38",
  usgs_quadrangle: "(JACUMBA 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "39.033",
  longitude: "-122.445",
  spring_name: "JONES FOUNTAIN OF LIFE SPRING",
  degrees_f: "142",
  degrees_c: "61",
  usgs_quadrangle: "WILBUR SPRINGS 15"
  },
  {
  state_code: "CA",
  lattitude: "36.229",
  longitude: "-118.302",
  spring_name: "JORDAN HOT SPRINGS",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "HOCKETT PEAK 15"
  },
  {
  state_code: "CA",
  lattitude: "36.675",
  longitude: "-116.923",
  spring_name: "KEANE WONDER SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "CHLORIDE CLIFF 15"
  },
  {
  state_code: "CA",
  lattitude: "41.126",
  longitude: "-121.028",
  spring_name: "KELLOG HOT SPRINGS",
  degrees_f: "172",
  degrees_c: "78",
  usgs_quadrangle: "BIEBER 15"
  },
  {
  state_code: "CA",
  lattitude: "41.45",
  longitude: "-120.834",
  spring_name: "KELLY HOT SPRING",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "CANBY 15"
  },
  {
  state_code: "CA",
  lattitude: "37.253",
  longitude: "-118.373",
  spring_name: "KEOUGH HOT SPRINGS",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "BISHOP 15"
  },
  {
  state_code: "CA",
  lattitude: "36.477",
  longitude: "-118.404",
  spring_name: "KERN HOT SPRING",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "KERN PEAK 15"
  },
  {
  state_code: "CA",
  lattitude: "41.973",
  longitude: "-122.202",
  spring_name: "KLAMATH HOT SPRING",
  degrees_f: "156",
  degrees_c: "69",
  usgs_quadrangle: "MACDOEL 15"
  },
  {
  state_code: "CA",
  lattitude: "41.67",
  longitude: "-120.206",
  spring_name: "LAKE CITY HOT SPRINGS",
  degrees_f: "207",
  degrees_c: "97",
  usgs_quadrangle: "CEDARVILLE 15"
  },
  {
  state_code: "CA",
  lattitude: "33.837",
  longitude: "-117.145",
  spring_name: "LAKEVIEW HOT SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "PERRIS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "34.503",
  longitude: "-120.219",
  spring_name: "LAS CRUCES HOT SPRINGS",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "SOLVANG 7.5"
  },
  {
  state_code: "CA",
  lattitude: "41.6",
  longitude: "-120.088",
  spring_name: "LEONARDS HOT SPRINGS",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "CEDARVILLE 15"
  },
  {
  state_code: "CA",
  lattitude: "34.537",
  longitude: "-119.613",
  spring_name: "LITTLE CALIENTE SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "HILDRETH PEAK 7.5"
  },
  {
  state_code: "CA",
  lattitude: "38.767",
  longitude: "-122.748",
  spring_name: "LITTLE GEYSERS",
  degrees_f: "210",
  degrees_c: "99",
  usgs_quadrangle: "(WHISPERING PINES 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "37.692",
  longitude: "-118.839",
  spring_name: "LITTLE HOT CREEK SPRING",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "MT. MORRISON 15"
  },
  {
  state_code: "CA",
  lattitude: "41.229",
  longitude: "-121.405",
  spring_name: "LITTLE HOT SPRING",
  degrees_f: "169",
  degrees_c: "76",
  usgs_quadrangle: "FALL RIVER MILLS 15"
  },
  {
  state_code: "CA",
  lattitude: "36.698",
  longitude: "-117.848",
  spring_name: "LITTLE HUNTER CANYON SPRINGS",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "NEW YORK BUTTE 15"
  },
  {
  state_code: "CA",
  lattitude: "37.573",
  longitude: "-121.445",
  spring_name: "LONE TREE MINERAL SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "LONE TREE CREEK 7.5"
  },
  {
  state_code: "CA",
  lattitude: "38.394",
  longitude: "-122.552",
  spring_name: "LOS GUILICOS WARM SPRINGS",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "KENWOOD 7.5"
  },
  {
  state_code: "CA",
  lattitude: "36.806",
  longitude: "-117.771",
  spring_name: "LOWER WARM SPRINGS",
  degrees_f: "110",
  degrees_c: "43",
  usgs_quadrangle: "WAUCOBA WASH 15"
  },
  {
  state_code: "CA",
  lattitude: "38.55",
  longitude: "-122.72",
  spring_name: "MARK WEST SPRINGS",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "MARK WEST SPRINGS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "34.482",
  longitude: "-119.302",
  spring_name: "MATILIJA HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "MATILIJA 7.5"
  },
  {
  state_code: "CA",
  lattitude: "33.733",
  longitude: "-114.907",
  spring_name: "MCCOY SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "MCCOY SPRING 15"
  },
  {
  state_code: "CA",
  lattitude: "39.728",
  longitude: "-120.547",
  spring_name: "MCLEAR WARM SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "SIERRA CITY 15"
  },
  {
  state_code: "CA",
  lattitude: "36.703",
  longitude: "-120.86",
  spring_name: "MERCEY HOT SPRINGS",
  degrees_f: "119",
  degrees_c: "48",
  usgs_quadrangle: "MERCEY HOT SPRINGS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "40.457",
  longitude: "-121.545",
  spring_name: "MILL CREEK SPRINGS",
  degrees_f: "150",
  degrees_c: "66",
  usgs_quadrangle: "(LASSEN PEAK 15)"
  },
  {
  state_code: "CA",
  lattitude: "37.398",
  longitude: "-121.794",
  spring_name: "MINERAL SPRINGS",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "CALAVERAS RESERVOIR"
  },
  {
  state_code: "CA",
  lattitude: "35.575",
  longitude: "-118.534",
  spring_name: "MIRACLE HOT SPRS HOBO HOT SPRS",
  degrees_f: "119",
  degrees_c: "48",
  usgs_quadrangle: "MIRACLE HOT SPRINGS"
  },
  {
  state_code: "CA",
  lattitude: "35.483",
  longitude: "-119.917",
  spring_name: "MIZE SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(LAS YEGUAS RANCH 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "38.033",
  longitude: "-118.902",
  spring_name: "MONO BASIN WARM SPRINGS",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "TRENCH CANYON 15"
  },
  {
  state_code: "CA",
  lattitude: "37.327",
  longitude: "-119.018",
  spring_name: "MONO HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "KAISER PEAK 15"
  },
  {
  state_code: "CA",
  lattitude: "34.461",
  longitude: "-119.637",
  spring_name: "MONTECITO HOT SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "SANTA BARBARA 7.5"
  },
  {
  state_code: "CA",
  lattitude: "40.382",
  longitude: "-121.513",
  spring_name: "MORGAN HOT SPRING",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "LASSEN PEAK 15"
  },
  {
  state_code: "CA",
  lattitude: "33.201",
  longitude: "-115.577",
  spring_name: "MUD POTS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "NILAND 7.5"
  },
  {
  state_code: "CA",
  lattitude: "33.212",
  longitude: "-115.591",
  spring_name: "MUD POTS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "NILAND 7.5"
  },
  {
  state_code: "CA",
  lattitude: "33.332",
  longitude: "-115.575",
  spring_name: "MUD VOLCANOES",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(WISTER 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "33.328",
  longitude: "-115.583",
  spring_name: "MUD VOLCANOES",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(WISTER 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "33.312",
  longitude: "-115.577",
  spring_name: "MUD VOLCANOES",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(WISTER 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "33.288",
  longitude: "-115.575",
  spring_name: "MUD VOLCANOES",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(WISTER 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "33.28",
  longitude: "-115.592",
  spring_name: "MUD VOLCANOES",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(WISTER 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "33.343",
  longitude: "-115.573",
  spring_name: "MUD VOLCANOES",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(WISTER 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "33.345",
  longitude: "-115.588",
  spring_name: "MUD VOLCANOES",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(WISTER 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "33.313",
  longitude: "-115.605",
  spring_name: "MUD VOLCANOES",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(WISTER 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "39.429",
  longitude: "-123.308",
  spring_name: "MUIR SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(WILLITS 15)"
  },
  {
  state_code: "CA",
  lattitude: "33.558",
  longitude: "-117.154",
  spring_name: "MURRIETTA HOT SPRINGS",
  degrees_f: "132",
  degrees_c: "56",
  usgs_quadrangle: "MURRIETTA 7.5"
  },
  {
  state_code: "CA",
  lattitude: "38.85",
  longitude: "-120.025",
  spring_name: "MYERS WARM SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(ECHO LAKE 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "38.519",
  longitude: "-122.26",
  spring_name: "NAPA ROCK SODA SPRING PHILLIPS SOD",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "CHILES VALLEY 7.5"
  },
  {
  state_code: "CA",
  lattitude: "38.339",
  longitude: "-122.259",
  spring_name: "NAPA VICHY SPRINGS",
  degrees_f: "76",
  degrees_c: "24",
  usgs_quadrangle: "NAPA 7.5"
  },
  {
  state_code: "CA",
  lattitude: "36.512",
  longitude: "-116.821",
  spring_name: "NEVARES SPRINGS",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "CHLORIDE CLIFF 15"
  },
  {
  state_code: "CA",
  lattitude: "34.826",
  longitude: "-116.677",
  spring_name: "NEWBERRY SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "NEWBERRY 15"
  },
  {
  state_code: "CA",
  lattitude: "39.196",
  longitude: "-122.714",
  spring_name: "NEWMAN SPRINGS",
  degrees_f: "94",
  degrees_c: "35",
  usgs_quadrangle: "CLEARLAKE OAKS 15"
  },
  {
  state_code: "CA",
  lattitude: "35.122",
  longitude: "-120.542",
  spring_name: "NEWSOM SPRINGS",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "OCEANO 7.5"
  },
  {
  state_code: "CA",
  lattitude: "38.833",
  longitude: "-122.357",
  spring_name: "ONE SHOT MINING CO",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(KNOXVILLE 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "39.227",
  longitude: "-123.362",
  spring_name: "ORRS SPRINGS",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "BOONVILLE 15"
  },
  {
  state_code: "CA",
  lattitude: "36.814",
  longitude: "-117.763",
  spring_name: "PALM SPRING",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "WAUCOBA WASH 15"
  },
  {
  state_code: "CA",
  lattitude: "33.823",
  longitude: "-116.542",
  spring_name: "PALM SPRINGS (AGUA CALIENTE SPRING)",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "PALM SPRINGS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "34.271",
  longitude: "-116.838",
  spring_name: "PAN HOT SPRINGS",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "(BIG BEAR CITY 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "37.993",
  longitude: "-119.028",
  spring_name: "PAOHA ISLAND SPRINGS",
  degrees_f: "181",
  degrees_c: "83",
  usgs_quadrangle: "(MONO CRATERS 15)"
  },
  {
  state_code: "CA",
  lattitude: "35.143",
  longitude: "-116.813",
  spring_name: "PARADISE SPRING",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "LANE MOUNTAIN 15"
  },
  {
  state_code: "CA",
  lattitude: "36.331",
  longitude: "-121.367",
  spring_name: "PARAISO SPRINGS (SULPHUR SPRING)",
  degrees_f: "98",
  degrees_c: "37",
  usgs_quadrangle: "PARAISO SPRINGS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "35.663",
  longitude: "-120.692",
  spring_name: "PASO ROBLES ARTESIAN SPRING",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "(PASO ROBLES 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "35.269",
  longitude: "-120.851",
  spring_name: "PECHO WARM SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "(MORRO BAY SOUTH 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "39.697",
  longitude: "-123.478",
  spring_name: "PINCHES SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "LAYTONVILLE 7.5"
  },
  {
  state_code: "CA",
  lattitude: "38.85",
  longitude: "-122.693",
  spring_name: "PINE CONE SPRING",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "(WHISPERING PINES 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "38.874",
  longitude: "-123.518",
  spring_name: "POINT ARENA HOT SPRINGS",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "(GUALALA 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "41.828",
  longitude: "-120.917",
  spring_name: "POTHOLE SPRING",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "STEELE SWAMP 15"
  },
  {
  state_code: "CA",
  lattitude: "39.198",
  longitude: "-122.505",
  spring_name: "PSEUDO COMPLEXION SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "(CLEARLAKE OAKS 15)"
  },
  {
  state_code: "CA",
  lattitude: "39.053",
  longitude: "-122.597",
  spring_name: "QUIGLEY SODA SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "CLEARLAKE OAKS 15"
  },
  {
  state_code: "CA",
  lattitude: "37.618",
  longitude: "-119.074",
  spring_name: "REDS MEADOW HOT SPRINGS",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "DEVILS POSTPILE 15"
  },
  {
  state_code: "CA",
  lattitude: "35.879",
  longitude: "-116.153",
  spring_name: "RESTING SPRING",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "TECOPA 15"
  },
  {
  state_code: "CA",
  lattitude: "38.958",
  longitude: "-122.701",
  spring_name: "RIVIERA BEACH SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "(CLEARLAKE HIGHLANDS 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "37.88",
  longitude: "-122.627",
  spring_name: "ROCKY POINT SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(BOLINAS 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "37.432",
  longitude: "-121.308",
  spring_name: "SALT GRASS SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "COPPER MTN. 7.5"
  },
  {
  state_code: "CA",
  lattitude: "33.589",
  longitude: "-117.511",
  spring_name: "SAN JUAN HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "CANADA GOBERNADORA 7.5"
  },
  {
  state_code: "CA",
  lattitude: "34.537",
  longitude: "-119.879",
  spring_name: "SAN MARCOS HOT SPRING",
  degrees_f: "110",
  degrees_c: "43",
  usgs_quadrangle: "LAKE CACHUMA 7.5"
  },
  {
  state_code: "CA",
  lattitude: "35.582",
  longitude: "-120.666",
  spring_name: "SANTA YSABEL SPRINGS (SULPHUR SPR)",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "TEMPLETON 7.5"
  },
  {
  state_code: "CA",
  lattitude: "35.682",
  longitude: "-116.422",
  spring_name: "SARATOGA SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "AVAWATZ PASS 15"
  },
  {
  state_code: "CA",
  lattitude: "36.938",
  longitude: "-121.565",
  spring_name: "SARGENT ESTATE WARM SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "CHITTENDEN 7.5"
  },
  {
  state_code: "CA",
  lattitude: "35.62",
  longitude: "-118.473",
  spring_name: "SCOVERN HOT SPRINGS",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "LAKE ISABELLA SOUTH"
  },
  {
  state_code: "CA",
  lattitude: "38.873",
  longitude: "-122.689",
  spring_name: "SEIGLER SPRINGS",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "WHISPERING PINES 7.5"
  },
  {
  state_code: "CA",
  lattitude: "40.568",
  longitude: "-120.325",
  spring_name: "SELLICKS SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "KARLO 15"
  },
  {
  state_code: "CA",
  lattitude: "34.596",
  longitude: "-118.998",
  spring_name: "SESPE HOT SPRINGS",
  degrees_f: "194",
  degrees_c: "90",
  usgs_quadrangle: "DEVILS HEART PEAK 7.5"
  },
  {
  state_code: "CA",
  lattitude: "41.615",
  longitude: "-120.102",
  spring_name: "SEYFERTH HOT SPRINGS",
  degrees_f: "185",
  degrees_c: "85",
  usgs_quadrangle: "CEDARVILLE 15"
  },
  {
  state_code: "CA",
  lattitude: "35.588",
  longitude: "-116.359",
  spring_name: "SHEEP CREEK SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "AVAWATZ PASS 15"
  },
  {
  state_code: "CA",
  lattitude: "35.978",
  longitude: "-116.273",
  spring_name: "SHOSHONE SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "SHOSHONE 15"
  },
  {
  state_code: "CA",
  lattitude: "38.691",
  longitude: "-123.024",
  spring_name: "SKAGGS SPRINGS",
  degrees_f: "135",
  degrees_c: "56",
  usgs_quadrangle: "SKAGGS SPRINGS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "36.123",
  longitude: "-121.64",
  spring_name: "SLATES HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "LOPEZ POINT 7.5"
  },
  {
  state_code: "CA",
  lattitude: "33.8",
  longitude: "-116.927",
  spring_name: "SOBODA HOT SPRINGS",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "SAN JACINTO 7.5"
  },
  {
  state_code: "CA",
  lattitude: "36.13",
  longitude: "-118.816",
  spring_name: "SODA SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "SPRINGVILLE 7.5"
  },
  {
  state_code: "CA",
  lattitude: "38.95",
  longitude: "-122.572",
  spring_name: "SODA SPRING IN CACHE FORMATION",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(LOWER LAKE 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "36.21",
  longitude: "-118.176",
  spring_name: "SODA SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "MONACHE MTN. 15"
  },
  {
  state_code: "CA",
  lattitude: "35.141",
  longitude: "-116.101",
  spring_name: "SODA STATION SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "SODA LAKE 15"
  },
  {
  state_code: "CA",
  lattitude: "38.838",
  longitude: "-122.653",
  spring_name: "SPIERS SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(WHISPERING PINES 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "40.019",
  longitude: "-121.036",
  spring_name: "SPRING",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "ALMANOR 15"
  },
  {
  state_code: "CA",
  lattitude: "41.484",
  longitude: "-120.764",
  spring_name: "SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "CANBY 15"
  },
  {
  state_code: "CA",
  lattitude: "36.765",
  longitude: "-120.901",
  spring_name: "SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "ORTIGALITA PEAK 7.5"
  },
  {
  state_code: "CA",
  lattitude: "33.514",
  longitude: "-117.604",
  spring_name: "SPRING",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "CANADA GOBERNADORA 7.5"
  },
  {
  state_code: "CA",
  lattitude: "35.536",
  longitude: "-118.651",
  spring_name: "SPRING (HOT)",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "DEMOCRAT HOT SPRINGS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "37.083",
  longitude: "-121.042",
  spring_name: "SPRING IN ONEILL FOREBAY",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(SAN LUIS DAM 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "37.719",
  longitude: "-118.735",
  spring_name: "SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "CASA DIABLO MTN. 15"
  },
  {
  state_code: "CA",
  lattitude: "41.196",
  longitude: "-120.475",
  spring_name: "SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "TULE MOUNTAIN 7.5"
  },
  {
  state_code: "CA",
  lattitude: "37.929",
  longitude: "-121.965",
  spring_name: "SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "CLAYTON 7.5"
  },
  {
  state_code: "CA",
  lattitude: "35.888",
  longitude: "-116.258",
  spring_name: "SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "SHOSHONE 15"
  },
  {
  state_code: "CA",
  lattitude: "36.495",
  longitude: "-117.893",
  spring_name: "SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "KEELER 15"
  },
  {
  state_code: "CA",
  lattitude: "37.635",
  longitude: "-118.72",
  spring_name: "SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "CASA DIABLO MTN. 15"
  },
  {
  state_code: "CA",
  lattitude: "43.513",
  longitude: "-119.903",
  spring_name: "SPRINGS AT TECOLOTE TUNNEL",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "(LAKE CACHUMA 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "41.219",
  longitude: "-120.066",
  spring_name: "SQUAW BATHS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "(SNAKE LAKE 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "38.49",
  longitude: "-122.498",
  spring_name: "ST HELENA WHITE SULPHUR SPRING",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "(RUTHERFORD 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "34.498",
  longitude: "-119.341",
  spring_name: "STINGLEYS HOT SPRINGS",
  degrees_f: "123",
  degrees_c: "51",
  usgs_quadrangle: "MATILIJA 7.5"
  },
  {
  state_code: "CA",
  lattitude: "40.223",
  longitude: "-122.747",
  spring_name: "STINKING SPRINGS",
  degrees_f: "101",
  degrees_c: "38",
  usgs_quadrangle: "COLD FORK 7.5"
  },
  {
  state_code: "CA",
  lattitude: "39.002",
  longitude: "-122.664",
  spring_name: "SULPHUR BANK",
  degrees_f: "156",
  degrees_c: "69",
  usgs_quadrangle: "CLEARLAKE OAKS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "38.788",
  longitude: "-122.777",
  spring_name: "SULPHUR CREEK",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "(THE GEYSERS 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "36.618",
  longitude: "-121.845",
  spring_name: "SULPHUR HOT SPRING",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "(SEASIDE 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "39.088",
  longitude: "-122.525",
  spring_name: "SULPHUR SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "CLEARLAKE OAKS 15"
  },
  {
  state_code: "CA",
  lattitude: "37.924",
  longitude: "-122.046",
  spring_name: "SULPHUR SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(WALNUT CREEK 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "39.43",
  longitude: "-122.538",
  spring_name: "SULPHUR SPRING SALT SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "STONYFORD 7.5"
  },
  {
  state_code: "CA",
  lattitude: "36.295",
  longitude: "-120.985",
  spring_name: "SULPHUR SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "LONOAK 7.5"
  },
  {
  state_code: "CA",
  lattitude: "41.659",
  longitude: "-123.319",
  spring_name: "SULPHUR SPRINGS",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "UKONOM LAKE 15"
  },
  {
  state_code: "CA",
  lattitude: "40.447",
  longitude: "-121.536",
  spring_name: "SULPHUR WORKS TOPHET HOT SPRINGS",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "LASSEN PEAK 15"
  },
  {
  state_code: "CA",
  lattitude: "35.908",
  longitude: "-120.367",
  spring_name: "TABLE MOUNTAIN (SPRING)",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "(THE DARK HOLE 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "36.234",
  longitude: "-121.546",
  spring_name: "TASSAJARA HOT SPRINGS",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "TASSAJARA HOT SPRINGS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "35.871",
  longitude: "-116.23",
  spring_name: "TECOPA HOT SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "TECOPA 15"
  },
  {
  state_code: "CA",
  lattitude: "33.551",
  longitude: "-117.167",
  spring_name: "TEMECULA HOT SPRINGS",
  degrees_f: "116",
  degrees_c: "47",
  usgs_quadrangle: "MURRIETTA 7.5"
  },
  {
  state_code: "CA",
  lattitude: "40.421",
  longitude: "-121.375",
  spring_name: "TERMINAL GEYSER",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "MT. HARKNESS 15"
  },
  {
  state_code: "CA",
  lattitude: "38.802",
  longitude: "-122.81",
  spring_name: "THE GEYSERS",
  degrees_f: "214",
  degrees_c: "101",
  usgs_quadrangle: "THE GEYSERS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "38.225",
  longitude: "-119.217",
  spring_name: "THE HOT SPRINGS",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "BODIE 15"
  },
  {
  state_code: "CA",
  lattitude: "37.664",
  longitude: "-118.802",
  spring_name: "THE TUB",
  degrees_f: "167",
  degrees_c: "75",
  usgs_quadrangle: "(MT. MORRISON 15)"
  },
  {
  state_code: "CA",
  lattitude: "40.58",
  longitude: "-120.265",
  spring_name: "TIPTON SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "KARLO 15"
  },
  {
  state_code: "CA",
  lattitude: "38.31",
  longitude: "-122.053",
  spring_name: "TOLENAS SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "FIARFIELD NORTH 7.5"
  },
  {
  state_code: "CA",
  lattitude: "38.245",
  longitude: "-119.205",
  spring_name: "TRAVERTINE HOT SPRINGS",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "BODIE 15"
  },
  {
  state_code: "CA",
  lattitude: "36.441",
  longitude: "-116.829",
  spring_name: "TRAVERTINE SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "FURNACE CREEK 15"
  },
  {
  state_code: "CA",
  lattitude: "40.238",
  longitude: "-122.11",
  spring_name: "TUSCAN SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "TUSCAN SPRINGS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "34.228",
  longitude: "-117.483",
  spring_name: "TYLERS BATH SPRING",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "(DEVORE 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "36.83",
  longitude: "-117.736",
  spring_name: "UPPER WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "DRY MOUNTAIN 15"
  },
  {
  state_code: "CA",
  lattitude: "32.97",
  longitude: "-116.423",
  spring_name: "VALLECITOS SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "MONUMENT PEAK 7.5"
  },
  {
  state_code: "CA",
  lattitude: "38.125",
  longitude: "-122.188",
  spring_name: "VALLEJO WHITE SULPHUR SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "BENICIA 7.5"
  },
  {
  state_code: "CA",
  lattitude: "38.192",
  longitude: "-120.827",
  spring_name: "VALLEY SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "VALLEY SPRINGS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "39.166",
  longitude: "-123.159",
  spring_name: "VICHY SPRINGS",
  degrees_f: "85",
  degrees_c: "29",
  usgs_quadrangle: "UKIAH 7.5"
  },
  {
  state_code: "CA",
  lattitude: "34.502",
  longitude: "-119.346",
  spring_name: "VICKERS HOT SPRINGS",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "(WHEELER SPRINGS 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "36.117",
  longitude: "-118.776",
  spring_name: "WARD SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "GLOBE 7.5"
  },
  {
  state_code: "CA",
  lattitude: "35.967",
  longitude: "-116.931",
  spring_name: "WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "WINGATE WASH 15"
  },
  {
  state_code: "CA",
  lattitude: "34.605",
  longitude: "-118.561",
  spring_name: "WARM SPRING",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "WARM SPRINGS MOUNTAIN 7.5"
  },
  {
  state_code: "CA",
  lattitude: "41.16",
  longitude: "-120.403",
  spring_name: "WARM SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "TULE MOUNTAIN 7.5"
  },
  {
  state_code: "CA",
  lattitude: "38.203",
  longitude: "-119.118",
  spring_name: "WARM SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "BODIE 15"
  },
  {
  state_code: "CA",
  lattitude: "41.252",
  longitude: "-120.521",
  spring_name: "WARM SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "ALTURAS 15"
  },
  {
  state_code: "CA",
  lattitude: "41.959",
  longitude: "-120.936",
  spring_name: "WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "STEELE SWAMP 15"
  },
  {
  state_code: "CA",
  lattitude: "35.148",
  longitude: "-118.783",
  spring_name: "WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "ARVIN 7.5"
  },
  {
  state_code: "CA",
  lattitude: "34.34",
  longitude: "-117.173",
  spring_name: "WARM SPRING HOT SPRING",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "LAKE ARROWHEAD 7.5"
  },
  {
  state_code: "CA",
  lattitude: "36.122",
  longitude: "-117.217",
  spring_name: "WARM SULPHUR SPRINGS",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "TELESCOPE PEAK 15"
  },
  {
  state_code: "CA",
  lattitude: "33.284",
  longitude: "-116.631",
  spring_name: "WARNER HOT SPRING",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "WARNER SPRINGS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "40.355",
  longitude: "-120.257",
  spring_name: "WENDEL HOT SPRINGS",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "LITCHFIELD 15"
  },
  {
  state_code: "CA",
  lattitude: "41.19",
  longitude: "-120.383",
  spring_name: "WEST VALLEY RESERVOIR HOT SPRING",
  degrees_f: "171",
  degrees_c: "77",
  usgs_quadrangle: "(TULE MOUNTAIN 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "34.507",
  longitude: "-119.291",
  spring_name: "WHEELER SPRINGS",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "WHEELER SPRINGS 7.5"
  },
  {
  state_code: "CA",
  lattitude: "33.731",
  longitude: "-118.348",
  spring_name: "WHITES POINT HOT SPRINGS",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "(SAN PEDRO 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "37.63",
  longitude: "-118.808",
  spring_name: "WHITMORE HOT SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "MT. MORRISON 15"
  },
  {
  state_code: "CA",
  lattitude: "39.039",
  longitude: "-122.421",
  spring_name: "WILBUR SPRINGS",
  degrees_f: "153",
  degrees_c: "67",
  usgs_quadrangle: "WILBUR SPRINGS 15"
  },
  {
  state_code: "CA",
  lattitude: "34.582",
  longitude: "-119.044",
  spring_name: "WILLETT HOT SPRINGS",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "(TOPATOPA MOUNTAINS"
  },
  {
  state_code: "CA",
  lattitude: "33.217",
  longitude: "-115.58",
  spring_name: "WISTER MUD POT",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "NILAND 7.5"
  },
  {
  state_code: "CA",
  lattitude: "33.67",
  longitude: "-117.325",
  spring_name: "WRENDEN HOT SPRS ELSINORE HOT SPRS",
  degrees_f: "125",
  degrees_c: "52",
  usgs_quadrangle: "(ELSINORE 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "35.433",
  longitude: "-118.478",
  spring_name: "YATES HOT SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "PIUTE PEAK 7.5"
  },
  {
  state_code: "CA",
  lattitude: "39.922",
  longitude: "-120.024",
  spring_name: "ZAMBONI HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "CONSTANTIA 7.5"
  },
  {
  state_code: "CA",
  lattitude: "38.755",
  longitude: "-122.285",
  spring_name: "ZIM ZIM SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(KNOXVILLE 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "38.773",
  longitude: "-119.713",
  spring_name: "null",
  degrees_f: "149",
  degrees_c: "65",
  usgs_quadrangle: "(MT. SIEGEL 15)"
  },
  {
  state_code: "CA",
  lattitude: "38.627",
  longitude: "-119.504",
  spring_name: "null",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(TOPAZ LAKE 15)"
  },
  {
  state_code: "CA",
  lattitude: "38.986",
  longitude: "-122.736",
  spring_name: "null",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "(CLEARLAKE HIGHLANDS 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "38.963",
  longitude: "-122.724",
  spring_name: "null",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(CLEARLAKE HIGHLANDS 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "38.95",
  longitude: "-122.654",
  spring_name: "null",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(CLEARLAKE HIGHLANDS 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "33.54",
  longitude: "-116.742",
  spring_name: "null",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(IDYLLWILD 15)"
  },
  {
  state_code: "CA",
  lattitude: "33.865",
  longitude: "-117.103",
  spring_name: "null",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(LAKEVIEW 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "33.802",
  longitude: "-118.393",
  spring_name: "null",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(REDONDO BEACH 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "34.124",
  longitude: "-117.078",
  spring_name: "null",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(YUCAIPA 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "36.64",
  longitude: "-120.684",
  spring_name: "null",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(CHOUNET RANCH 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "36.331",
  longitude: "-121.843",
  spring_name: "null",
  degrees_f: "114",
  degrees_c: "46",
  usgs_quadrangle: "(BIG SUR 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "41.542",
  longitude: "-120.567",
  spring_name: "null",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "(BIG SAGE RESERVOIR"
  },
  {
  state_code: "CA",
  lattitude: "41.466",
  longitude: "-120.525",
  spring_name: "null",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "ALTURAS 15"
  },
  {
  state_code: "CA",
  lattitude: "41.36",
  longitude: "-120.723",
  spring_name: "null",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "(ALTURAS 15)"
  },
  {
  state_code: "CA",
  lattitude: "41.208",
  longitude: "-120.054",
  spring_name: "null",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "(SNAKE LAKE 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "37.413",
  longitude: "-119.139",
  spring_name: "null",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "(KAISER PEAK 15)"
  },
  {
  state_code: "CA",
  lattitude: "37.895",
  longitude: "-121.874",
  spring_name: "null",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(ANTIOCH SOUTH 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "35.94",
  longitude: "-117.903",
  spring_name: "null",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "(LITTLE LAKE 15)"
  },
  {
  state_code: "CA",
  lattitude: "35.363",
  longitude: "-119.727",
  spring_name: "null",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "(REWARD 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "35.649",
  longitude: "-120.687",
  spring_name: "null",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "(PASO ROBLES 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "38.777",
  longitude: "-122.763",
  spring_name: "null",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "(THE GEYSERS 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "38.389",
  longitude: "-122.567",
  spring_name: "null",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "KENWOOD 7.5"
  },
  {
  state_code: "CA",
  lattitude: "38.357",
  longitude: "-122.509",
  spring_name: "null",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(GLEN ELLEN 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "38.321",
  longitude: "-122.271",
  spring_name: "null",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "(NAPA 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "38.101",
  longitude: "-122.169",
  spring_name: "null",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(BENICIA 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "39.98",
  longitude: "-120.064",
  spring_name: "null",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "(CONSTANTIA 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "39.2",
  longitude: "-122.725",
  spring_name: "null",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(CLEARLAKE OAKS 15)"
  },
  {
  state_code: "CA",
  lattitude: "39.022",
  longitude: "-122.592",
  spring_name: "null",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "CLEARLAKE OAKS 15"
  },
  {
  state_code: "CA",
  lattitude: "36.25",
  longitude: "-121.683",
  spring_name: "null",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(PARTINGTON RIDGE 7.5)"
  },
  {
  state_code: "CA",
  lattitude: "37.667",
  longitude: "-118.781",
  spring_name: "null",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "(MT. MORRISON 15)"
  },
  {
  state_code: "CA",
  lattitude: "37.657",
  longitude: "-118.764",
  spring_name: "null",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "(MT. MORRISON 15)"
  },
  {
  state_code: "CA",
  lattitude: "37.653",
  longitude: "-118.925",
  spring_name: "null",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(MT. MORRISON 15)"
  },
  {
  state_code: "CA",
  lattitude: "37.639",
  longitude: "-118.756",
  spring_name: "null",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "(MT. MORRISON 15)"
  },
  {
  state_code: "CA",
  lattitude: "37.607",
  longitude: "-118.808",
  spring_name: "null",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(MT. MORRISON 15)"
  },
  {
  state_code: "CA",
  lattitude: "37.268",
  longitude: "-118.272",
  spring_name: "null",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "BISHOP 15"
  },
  {
  state_code: "CA",
  lattitude: "37.989",
  longitude: "-119.139",
  spring_name: "null",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(MONO CRATERS 15)"
  },
  {
  state_code: "CA",
  lattitude: "37.941",
  longitude: "-119.036",
  spring_name: "null",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(MONO CRATERS 15)"
  },
  {
  state_code: "CA",
  lattitude: "37.836",
  longitude: "-119.016",
  spring_name: "null",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "(MONO CRATERS 15)"
  },
  {
  state_code: "CO",
  lattitude: "37.741",
  longitude: "-107.034",
  spring_name: "ANTELOPE SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "WORKMAN CREEK 7.5"
  },
  {
  state_code: "CO",
  lattitude: "37.728",
  longitude: "-107.054",
  spring_name: "BIRDSIE WARM SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "(WORKMAN CREEK 7.5)"
  },
  {
  state_code: "CO",
  lattitude: "38.653",
  longitude: "-106.056",
  spring_name: "BROWNS CANYON WARM SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(PONCHA SPRINGS 15)"
  },
  {
  state_code: "CO",
  lattitude: "38.634",
  longitude: "-106.072",
  spring_name: "BROWNS GROTTO WARM SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(PONCHA SPRINGS 15)"
  },
  {
  state_code: "CO",
  lattitude: "38.433",
  longitude: "-105.261",
  spring_name: "CANON CITY HOT SPRINGS",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "(ROYAL GORGE 15)"
  },
  {
  state_code: "CO",
  lattitude: "38.272",
  longitude: "-107.1",
  spring_name: "CEBOLLA HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "POWDERHORN 7.5"
  },
  {
  state_code: "CO",
  lattitude: "38.836",
  longitude: "-106.825",
  spring_name: "CEMENT CREEK HOT SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "CEMENT MTN. 7.5"
  },
  {
  state_code: "CO",
  lattitude: "39.012",
  longitude: "-106.891",
  spring_name: "CONUNDRUM HOT SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "MAROON BELLS 7.5"
  },
  {
  state_code: "CO",
  lattitude: "38.812",
  longitude: "-106.226",
  spring_name: "COTTONWOOD HOT SPRINGS",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "BUENA VISTA 15"
  },
  {
  state_code: "CO",
  lattitude: "37.294",
  longitude: "-105.784",
  spring_name: "DEXTER SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "PIKES STOCKADE 7.5"
  },
  {
  state_code: "CO",
  lattitude: "39.628",
  longitude: "-107.106",
  spring_name: "DOTSERO WARM SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(GLENWOOD SPRINGS 15)"
  },
  {
  state_code: "CO",
  lattitude: "37.771",
  longitude: "-108.091",
  spring_name: "DUNTON HOT SPRING",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "DOLORES PEAK 7.5"
  },
  {
  state_code: "CO",
  lattitude: "39.932",
  longitude: "-105.277",
  spring_name: "ELDORADO SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "ELDORADO SPRINGS 7.5"
  },
  {
  state_code: "CO",
  lattitude: "37.747",
  longitude: "-108.117",
  spring_name: "GEYSER WARM SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "(RICO 7.5)"
  },
  {
  state_code: "CO",
  lattitude: "39.548",
  longitude: "-107.322",
  spring_name: "GLENWOOD SPRINGS",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "GLENWOOD SPRINGS 7.5"
  },
  {
  state_code: "CO",
  lattitude: "39.017",
  longitude: "-105.793",
  spring_name: "HARTSEL HOT SPRINGS",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "HARTSEL 7.5"
  },
  {
  state_code: "CO",
  lattitude: "38.732",
  longitude: "-106.178",
  spring_name: "HORTENSE HOT SPRING",
  degrees_f: "181",
  degrees_c: "83",
  usgs_quadrangle: "PONCHA SPRINGS 15"
  },
  {
  state_code: "CO",
  lattitude: "40.073",
  longitude: "-106.113",
  spring_name: "HOT SULPHUR SPRINGS",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "HOT SULPHUR SPRINGS"
  },
  {
  state_code: "CO",
  lattitude: "39.739",
  longitude: "-105.512",
  spring_name: "IDAHO SPRINGS",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "IDAHO SPRINGS 7.5"
  },
  {
  state_code: "CO",
  lattitude: "40.467",
  longitude: "-107.952",
  spring_name: "JUNIPER HOT SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "JUNIPER HOT SPRINGS"
  },
  {
  state_code: "CO",
  lattitude: "38.014",
  longitude: "-108.054",
  spring_name: "LEMON HOT SPRING",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(PLACERVILLE 7.5)"
  },
  {
  state_code: "CO",
  lattitude: "38.517",
  longitude: "-106.515",
  spring_name: "LOWER WAUNITA HOT SPRINGS",
  degrees_f: "167",
  degrees_c: "75",
  usgs_quadrangle: "(PITKIN 7.5)"
  },
  {
  state_code: "CO",
  lattitude: "38.168",
  longitude: "-105.924",
  spring_name: "MINERAL HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "VILLA GROVE 7.5"
  },
  {
  state_code: "CO",
  lattitude: "38.733",
  longitude: "-106.162",
  spring_name: "MOUNT PRINCETON HOT SPRINGS",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "PONCHA SPRINGS 15"
  },
  {
  state_code: "CO",
  lattitude: "38.133",
  longitude: "-107.736",
  spring_name: "ORVIS HOT SPRING",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "DALLAS 7.5"
  },
  {
  state_code: "CO",
  lattitude: "38.021",
  longitude: "-107.672",
  spring_name: "OURAY HOT SPRINGS",
  degrees_f: "156",
  degrees_c: "69",
  usgs_quadrangle: "(OURAY 7.5)"
  },
  {
  state_code: "CO",
  lattitude: "37.263",
  longitude: "-107.011",
  spring_name: "PAGOSA SPRINGS",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "PAGOSA SPRINGS 7.5"
  },
  {
  state_code: "CO",
  lattitude: "37.752",
  longitude: "-108.131",
  spring_name: "PARADISE WARM SPRING",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "(GROUNDHOG MOUNTAIN"
  },
  {
  state_code: "CO",
  lattitude: "39.227",
  longitude: "-107.224",
  spring_name: "PENNY HOT SPRINGS",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "REDSTONE 7.5"
  },
  {
  state_code: "CO",
  lattitude: "37.313",
  longitude: "-107.344",
  spring_name: "PIEDRA RIVER HOT SPRINGS",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "(DEVIL MOUNTAIN 7.5)"
  },
  {
  state_code: "CO",
  lattitude: "37.453",
  longitude: "-107.803",
  spring_name: "PINKERTON HOT SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(HERMOSA 7.5)"
  },
  {
  state_code: "CO",
  lattitude: "38.498",
  longitude: "-106.076",
  spring_name: "PONCHA HOT SPRINGS",
  degrees_f: "160",
  degrees_c: "71",
  usgs_quadrangle: "BONANZA 15"
  },
  {
  state_code: "CO",
  lattitude: "37.511",
  longitude: "-106.945",
  spring_name: "RAINBOW HOT SPRINGS",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "SPAR CITY 15"
  },
  {
  state_code: "CO",
  lattitude: "38.816",
  longitude: "-106.873",
  spring_name: "RANGER HOT SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "CEMENT MTN. 7.5"
  },
  {
  state_code: "CO",
  lattitude: "39.164",
  longitude: "-106.062",
  spring_name: "RHODES WARM SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "FAIRPLAY WEST 7.5"
  },
  {
  state_code: "CO",
  lattitude: "40.559",
  longitude: "-106.849",
  spring_name: "ROUTT HOT SPRINGS",
  degrees_f: "147",
  degrees_c: "64",
  usgs_quadrangle: "ROCKY PEAK 7.5"
  },
  {
  state_code: "CO",
  lattitude: "37.751",
  longitude: "-106.317",
  spring_name: "SHAW SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "TWIN MOUNTAINS SE 7.5"
  },
  {
  state_code: "CO",
  lattitude: "39.552",
  longitude: "-107.412",
  spring_name: "SOUTH CANYON HOT SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "(STORM KING MOUNTAIN 7.5)"
  },
  {
  state_code: "CO",
  lattitude: "40.483",
  longitude: "-106.827",
  spring_name: "STEAMBOAT SPRINGS",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "STEAMBOAT SPRINGS 7.5"
  },
  {
  state_code: "CO",
  lattitude: "37.033",
  longitude: "-106.805",
  spring_name: "STINKING SPRINGS",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "CHROMO 15"
  },
  {
  state_code: "CO",
  lattitude: "38.479",
  longitude: "-105.891",
  spring_name: "SWISSVALE WARM SPRINGS",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "(HOWARD 15)"
  },
  {
  state_code: "CO",
  lattitude: "37.391",
  longitude: "-107.846",
  spring_name: "TRIMBLE HOT SPR STRATTEN WARM SPR",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "(HERMOSA 7.5)"
  },
  {
  state_code: "CO",
  lattitude: "37.4",
  longitude: "-107.849",
  spring_name: "TRIPP HOT SPRINGS",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "(HERMOSA 7.5)"
  },
  {
  state_code: "CO",
  lattitude: "38.514",
  longitude: "-106.508",
  spring_name: "UPPER WAUNITA HOT SPRINGS",
  degrees_f: "176",
  degrees_c: "80",
  usgs_quadrangle: "PITKIN 7.5"
  },
  {
  state_code: "CO",
  lattitude: "38.192",
  longitude: "-105.816",
  spring_name: "VALLEY VIEW HOT SPRINGS",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "VALLLEY VIEW HOT SPRINGS 7."
  },
  {
  state_code: "CO",
  lattitude: "37.747",
  longitude: "-106.831",
  spring_name: "WAGON WHEEL GAP HOT SPRINGS",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "SPAR CITY 15"
  },
  {
  state_code: "CO",
  lattitude: "38.485",
  longitude: "-105.91",
  spring_name: "WELLSVILLE WARM SPRING",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(HOWARD 15)"
  },
  {
  state_code: "FL",
  lattitude: "27.074",
  longitude: "-82.233",
  spring_name: "LITTLE SALT SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "MURDOCK 7.5"
  },
  {
  state_code: "FL",
  lattitude: "27.06",
  longitude: "-82.261",
  spring_name: "WARM MINERAL SPRINGS (BIG SALT SPR)",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "MYAKKA RIVER 7.5"
  },
  {
  state_code: "GA",
  lattitude: "32.92",
  longitude: "-84.438",
  spring_name: "BARKER SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "SUNSET VILLAGE 7.5"
  },
  {
  state_code: "GA",
  lattitude: "33.037",
  longitude: "-84.374",
  spring_name: "LIFSEY SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "ZEBULON 7.5"
  },
  {
  state_code: "GA",
  lattitude: "32.862",
  longitude: "-84.65",
  spring_name: "PARKMAN SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "SHILOH 7.5"
  },
  {
  state_code: "GA",
  lattitude: "33.018",
  longitude: "-84.327",
  spring_name: "TAYLOR SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "ZEBULON 7.5"
  },
  {
  state_code: "GA",
  lattitude: "32.964",
  longitude: "-84.499",
  spring_name: "THUNDERING SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "SUNSET VILLAGE 7.5"
  },
  {
  state_code: "GA",
  lattitude: "32.873",
  longitude: "-84.547",
  spring_name: "TOM BROWN SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "MANCHESTER 7.5"
  },
  {
  state_code: "GA",
  lattitude: "32.893",
  longitude: "-84.69",
  spring_name: "WARM SPRINGS",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "WARM SPRINGS 7.5"
  },
  {
  state_code: "HI",
  lattitude: "19.593",
  longitude: "-154.928",
  spring_name: "AKINS SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "(PAHOA NORTH 7.5)"
  },
  {
  state_code: "HI",
  lattitude: "19.46",
  longitude: "-154.847",
  spring_name: "ISAAC HALE PARK SPRING",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "(KAPOHO 7.5)"
  },
  {
  state_code: "HI",
  lattitude: "19.466",
  longitude: "-154.943",
  spring_name: "STEAM VENTS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(PAHOA SOUTH 7.5)"
  },
  {
  state_code: "HI",
  lattitude: "19.434",
  longitude: "-155.272",
  spring_name: "STEAM VENTS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "KILAUEA CRATER 7.5"
  },
  {
  state_code: "HI",
  lattitude: "19.373",
  longitude: "-155.188",
  spring_name: "STEAM VENTS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(MAKAOPUHI CRATER 7.5)"
  },
  {
  state_code: "HI",
  lattitude: "19.486",
  longitude: "-155.598",
  spring_name: "STEAM VENTS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(MAUNA LOA 7.5)"
  },
  {
  state_code: "HI",
  lattitude: "19.421",
  longitude: "-155.62",
  spring_name: "STEAM VENTS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(MAUNA LOA 7.5)"
  },
  {
  state_code: "HI",
  lattitude: "19.407",
  longitude: "-155.277",
  spring_name: "STEAM VENTS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(KILAUEA CRATER 7.5)"
  },
  {
  state_code: "HI",
  lattitude: "19.39",
  longitude: "-155.311",
  spring_name: "STEAM VENTS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(KILAUEA CRATER 7.5)"
  },
  {
  state_code: "HI",
  lattitude: "19.201",
  longitude: "-155.384",
  spring_name: "WAIWELAWELA POINT SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(PAHALA 7.5)"
  },
  {
  state_code: "HI",
  lattitude: "19.496",
  longitude: "-154.876",
  spring_name: "WARM VAPOR",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(PAHOA SOUTH 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "43.038",
  longitude: "-112.004",
  spring_name: "ALKALI FLATS WARM SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "YANDELL SPRINGS 15"
  },
  {
  state_code: "ID",
  lattitude: "43.227",
  longitude: "-111.109",
  spring_name: "ALPINE WARM SPRING",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "(ALPINE 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "44.64",
  longitude: "-116.045",
  spring_name: "ARLING HOT SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "CASCADE 15"
  },
  {
  state_code: "ID",
  lattitude: "42.405",
  longitude: "-114.142",
  spring_name: "ARTESIAN CITY HOT SPRINGS",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "(MURTAUGH 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "44.091",
  longitude: "-111.458",
  spring_name: "ASHTON WARM SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(ASHTON 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "43.811",
  longitude: "-115.116",
  spring_name: "ATLANTA HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "ATLANTA EAST 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.621",
  longitude: "-115.985",
  spring_name: "BADLEY WARM SPRING",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "(GOLD FORK 15)"
  },
  {
  state_code: "ID",
  lattitude: "42.688",
  longitude: "-114.826",
  spring_name: "BANBURY HOT SPRING",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "THOUSAND SPRINGS 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.269",
  longitude: "-113.449",
  spring_name: "BARNEY HOT SPRINGS",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "GILMORE 15"
  },
  {
  state_code: "ID",
  lattitude: "43.293",
  longitude: "-114.908",
  spring_name: "BARRONS HOT SPRING",
  degrees_f: "167",
  degrees_c: "75",
  usgs_quadrangle: "(FAIRFIELD 15)"
  },
  {
  state_code: "ID",
  lattitude: "45.512",
  longitude: "-115.046",
  spring_name: "BARTH HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "SHEEP HILL 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.264",
  longitude: "-114.818",
  spring_name: "BASIN CREEK HOT SPRING",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "(EAST BASIN CREEK 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "43.718",
  longitude: "-115.563",
  spring_name: "BASSET HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(SHEEP CREEK 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "42.797",
  longitude: "-115.723",
  spring_name: "BAT HOT SPRING PENCE HOT SPRING",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "HOT SPRING 7.5"
  },
  {
  state_code: "ID",
  lattitude: "42.133",
  longitude: "-111.928",
  spring_name: "BATTLE CREEK HOT SPRINGS",
  degrees_f: "183",
  degrees_c: "84",
  usgs_quadrangle: "BANIDA 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.603",
  longitude: "-115.07",
  spring_name: "BAUMGARTNER HOT SPRING",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "JUMBO MTN. 7.5"
  },
  {
  state_code: "ID",
  lattitude: "42.115",
  longitude: "-111.264",
  spring_name: "BEAR LAKE HOT SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "BEAR LAKE NORTH 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.445",
  longitude: "-115.239",
  spring_name: "BEAR VALLEY HOT SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "CAPE HORN LAKES 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.523",
  longitude: "-114.173",
  spring_name: "BEARDSLEY HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "CHALLIS 15"
  },
  {
  state_code: "ID",
  lattitude: "44.465",
  longitude: "-116.037",
  spring_name: "BELVIDERE HOT SPRING",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "(SMITHS FERRY 15)"
  },
  {
  state_code: "ID",
  lattitude: "45.307",
  longitude: "-114.338",
  spring_name: "BIG CREEK HOT SPRINGS",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "SHOUP 15"
  },
  {
  state_code: "ID",
  lattitude: "44.64",
  longitude: "-113.504",
  spring_name: "BIG EIGHTMILE CREEK WARM SPRING",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(PATTERSON 15)"
  },
  {
  state_code: "ID",
  lattitude: "43.701",
  longitude: "-114.738",
  spring_name: "BIG SMOKEY HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "BAKER PEAK 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.454",
  longitude: "-112.696",
  spring_name: "BIG SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "EDIE RANCH 15"
  },
  {
  state_code: "ID",
  lattitude: "44.77",
  longitude: "-115.663",
  spring_name: "BILLY HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "WHITE ROCK PEAK 7.5"
  },
  {
  state_code: "ID",
  lattitude: "42.928",
  longitude: "-111.592",
  spring_name: "BLACKFOOT RESERVOIR WARM SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(HENRY 15)"
  },
  {
  state_code: "ID",
  lattitude: "42.986",
  longitude: "-111.743",
  spring_name: "BLACKFOOT RIVER WARM SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(HENRY 15)"
  },
  {
  state_code: "ID",
  lattitude: "42.107",
  longitude: "-113.39",
  spring_name: "BLM WELL (FRAZIER HOT SPRING)",
  degrees_f: "203",
  degrees_c: "95",
  usgs_quadrangle: "CHOKECHERRY CANYON 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.364",
  longitude: "-115.856",
  spring_name: "BOILING SPRINGS",
  degrees_f: "185",
  degrees_c: "85",
  usgs_quadrangle: "BOILING SPRINGS 15"
  },
  {
  state_code: "ID",
  lattitude: "44.157",
  longitude: "-115.314",
  spring_name: "BONNEVILLE HOT SPRINGS",
  degrees_f: "185",
  degrees_c: "85",
  usgs_quadrangle: "EIGHTMILE MTN. 7.5"
  },
  {
  state_code: "ID",
  lattitude: "45.201",
  longitude: "-116.312",
  spring_name: "BOULDER CREEK SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "INDIAN MOUNTAIN 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.54",
  longitude: "-115.288",
  spring_name: "BRIDGE HOT SPRINGS",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "(FEATHERVILLE 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "43.21",
  longitude: "-111.495",
  spring_name: "BROCKMAN CREEK HOT SPRING",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "HERMAN 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.779",
  longitude: "-115.486",
  spring_name: "BROWN CREEK HOT SPRING",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "(GRAND MTN. 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "42.798",
  longitude: "-115.742",
  spring_name: "BRUNEAU HOT SPRING",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "HOT SPRING 7.5"
  },
  {
  state_code: "ID",
  lattitude: "42.779",
  longitude: "-115.715",
  spring_name: "BUCKAROO HOT SPRING",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "(HOT SPRING 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "44.43",
  longitude: "-115.762",
  spring_name: "BULL CREEK HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "BOILING SPRINGS 15"
  },
  {
  state_code: "ID",
  lattitude: "45.277",
  longitude: "-115.912",
  spring_name: "BURGDORF HOT SPRINGS",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "BURGDORF 15"
  },
  {
  state_code: "ID",
  lattitude: "44.416",
  longitude: "-116.031",
  spring_name: "CABARTON HOT SPRING",
  degrees_f: "160",
  degrees_c: "71",
  usgs_quadrangle: "(SMITHS FERRY 15)"
  },
  {
  state_code: "ID",
  lattitude: "44.398",
  longitude: "-115.149",
  spring_name: "CAPE HORN WARM SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "CAPE HORN LAKES 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.583",
  longitude: "-116.112",
  spring_name: "CASCADE RESERVOIR HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(CASCADE 15)"
  },
  {
  state_code: "ID",
  lattitude: "43.561",
  longitude: "-114.415",
  spring_name: "CLARENDON HOT SPRINGS",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "MAHONEY BUTTE 7.5"
  },
  {
  state_code: "ID",
  lattitude: "42.333",
  longitude: "-111.716",
  spring_name: "CLEVELAND HOT SPRINGS",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "ONEIDA NARROWS RESERVOIR 7."
  },
  {
  state_code: "ID",
  lattitude: "46.466",
  longitude: "-114.939",
  spring_name: "COLGATE WARM SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "BEAR MOUNTAIN 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.327",
  longitude: "-113.918",
  spring_name: "CONDIE HOT SPRINGS",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "null"
  },
  {
  state_code: "ID",
  lattitude: "44.045",
  longitude: "-115.842",
  spring_name: "CORDER HOT SPRING",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "GARDEN VALLEY 15"
  },
  {
  state_code: "ID",
  lattitude: "44.669",
  longitude: "-116.305",
  spring_name: "COUNCIL MTN HOT SPRINGS",
  degrees_f: "154",
  degrees_c: "68",
  usgs_quadrangle: "COUNCIL 15"
  },
  {
  state_code: "ID",
  lattitude: "44.211",
  longitude: "-116.71",
  spring_name: "COVE CREEK HOT SPRING",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "(HOLLAND GULCH 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "45.431",
  longitude: "-116.015",
  spring_name: "COW FLATS HOT SPRING",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "(KELLY MOUNTAIN 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "44.785",
  longitude: "-114.855",
  spring_name: "COX HOT SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "RAMEY HILL 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.129",
  longitude: "-115.34",
  spring_name: "COYOTE HOT SPRING",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "(BENNETT MTN. 15)"
  },
  {
  state_code: "ID",
  lattitude: "44.306",
  longitude: "-116.745",
  spring_name: "CRANE CREEK HOT SPRINGS",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "(CRANE CREEK RESERVOIR 15)"
  },
  {
  state_code: "ID",
  lattitude: "44.72",
  longitude: "-114.016",
  spring_name: "CRONKS CANYON HOT SPRING",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "CHALLIS 15"
  },
  {
  state_code: "ID",
  lattitude: "44.516",
  longitude: "-115.295",
  spring_name: "DAGGER CREEK HOT SPRING",
  degrees_f: "110",
  degrees_c: "43",
  usgs_quadrangle: "(CHINOOK MTN. 15)"
  },
  {
  state_code: "ID",
  lattitude: "44.051",
  longitude: "-115.829",
  spring_name: "DAN HODGES HOT SPRING",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "(GARDEN VALLEY 15)"
  },
  {
  state_code: "ID",
  lattitude: "44.06",
  longitude: "-115.819",
  spring_name: "DANSKIN CREEK HOT SPRING",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "GARDEN VALLEY 15"
  },
  {
  state_code: "ID",
  lattitude: "44.382",
  longitude: "-115.841",
  spring_name: "DASH CREEK HOT SPRINGS",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "BOILING SPRINGS 15"
  },
  {
  state_code: "ID",
  lattitude: "44.092",
  longitude: "-116.052",
  spring_name: "DEER HOT SPRINGS",
  degrees_f: "176",
  degrees_c: "80",
  usgs_quadrangle: "BANKS 15"
  },
  {
  state_code: "ID",
  lattitude: "44.717",
  longitude: "-115.703",
  spring_name: "DOLLAR CREEK WARM SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(WARM LAKE 15)"
  },
  {
  state_code: "ID",
  lattitude: "44.044",
  longitude: "-115.851",
  spring_name: "DONLAY RANCH HOT SPRING",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "(GARDEN VALLEY 15)"
  },
  {
  state_code: "ID",
  lattitude: "42.388",
  longitude: "-112.085",
  spring_name: "DOWNATA HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "DOWNEY EAST 7.5"
  },
  {
  state_code: "ID",
  lattitude: "42.102",
  longitude: "-113.632",
  spring_name: "DURFEE SPRING",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "(ALMO 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "43.789",
  longitude: "-115.434",
  spring_name: "DUTCH FRANK HOT SPRING",
  degrees_f: "149",
  degrees_c: "65",
  usgs_quadrangle: "GRAND MTN. 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.779",
  longitude: "-114.539",
  spring_name: "EASLEY HOT SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "EASLEY HOT SPRINGS 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.423",
  longitude: "-114.627",
  spring_name: "ELK CREEK HOT SPRING",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "BLAINE 15"
  },
  {
  state_code: "ID",
  lattitude: "44.245",
  longitude: "-114.885",
  spring_name: "ELKHORN HOT SPRING",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "(STANLEY 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "43.66",
  longitude: "-111.715",
  spring_name: "ELKHORN WARM SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "HEISE 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.531",
  longitude: "-116.754",
  spring_name: "FAIRCHILD HOT SPRING",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "STURGILL PEAK 15"
  },
  {
  state_code: "ID",
  lattitude: "43.423",
  longitude: "-111.414",
  spring_name: "FALL CREEK MINERAL SPRINGS",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "CONANT VALLEY 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.896",
  longitude: "-114.563",
  spring_name: "FORGE CREEK HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "YELLOWJACKET 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.661",
  longitude: "-114.652",
  spring_name: "FOSTER RANCH HOT SPRINGS",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "ROCK CREEK 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.414",
  longitude: "-116.707",
  spring_name: "GIVENS HOT SPRINGS",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "GIVENS HOT SPRINGS 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.4",
  longitude: "-115.82",
  spring_name: "GOAT HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "BOILING SPRINGS 15"
  },
  {
  state_code: "ID",
  lattitude: "44.676",
  longitude: "-115.943",
  spring_name: "GOLD FORK HOT SPRING",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "GOLD FORK 15"
  },
  {
  state_code: "ID",
  lattitude: "44.905",
  longitude: "-113.929",
  spring_name: "GOLDBUG HOT SPRING",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "(GOLDBUG RIDGE 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "44.16",
  longitude: "-115.167",
  spring_name: "GRANDJEAN HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "GRANDJEAN 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.803",
  longitude: "-115.401",
  spring_name: "GRANITE CREEK HOT SPRING",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "GRAND MTN. 7.5"
  },
  {
  state_code: "ID",
  lattitude: "42.085",
  longitude: "-113.564",
  spring_name: "GRAPE CREEK WARM SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "JIM SAGE CANYON 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.392",
  longitude: "-115.834",
  spring_name: "GROUND HOG HOT SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "BOILING SPRINGS 15"
  },
  {
  state_code: "ID",
  lattitude: "43.684",
  longitude: "-114.41",
  spring_name: "GUYER HOT SPRINGS",
  degrees_f: "158",
  degrees_c: "70",
  usgs_quadrangle: "GRIFFIN BUTTE 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.506",
  longitude: "-114.354",
  spring_name: "HAILEY HOT SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "HAILEY 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.077",
  longitude: "-115.553",
  spring_name: "HAVEN LODGE HOT SPRING",
  degrees_f: "147",
  degrees_c: "64",
  usgs_quadrangle: "(LOWMAN 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "43.644",
  longitude: "-111.687",
  spring_name: "HEISE HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "HEISE 7.5"
  },
  {
  state_code: "ID",
  lattitude: "42.911",
  longitude: "-111.556",
  spring_name: "HENRY WARM SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "HENRY 15"
  },
  {
  state_code: "ID",
  lattitude: "43.831",
  longitude: "-116.396",
  spring_name: "HIGHLAND LAND CO WARM SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "MONTOUR 15"
  },
  {
  state_code: "ID",
  lattitude: "44.847",
  longitude: "-115.696",
  spring_name: "HOLDOVER HOT SPRING",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "WHITE ROCK PEAK 7.5"
  },
  {
  state_code: "ID",
  lattitude: "45.503",
  longitude: "-114.463",
  spring_name: "HORSE CREEK HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "PAINTED ROCKS LAKE 15"
  },
  {
  state_code: "ID",
  lattitude: "44.836",
  longitude: "-114.79",
  spring_name: "HOSPITAL HOT SPRING",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "RAMEY HILL 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.9",
  longitude: "-115.505",
  spring_name: "HOT CREEK WARM SPRING",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "CATON LAKE 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.054",
  longitude: "-115.907",
  spring_name: "HOT SPRING CAMPGROUND",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "GARDEN VALLEY 15"
  },
  {
  state_code: "ID",
  lattitude: "43.155",
  longitude: "-115.518",
  spring_name: "HOT SPRINGS",
  degrees_f: "158",
  degrees_c: "70",
  usgs_quadrangle: "MOUNTAIN HOME 15"
  },
  {
  state_code: "ID",
  lattitude: "42.692",
  longitude: "-114.859",
  spring_name: "HOT SULPHUR (MIRACLE HOT) SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "THOUSAND SPRINGS 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.047",
  longitude: "-114.929",
  spring_name: "HOT SULPHUR LAKE",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "DAVIS MOUNTAIN 15"
  },
  {
  state_code: "ID",
  lattitude: "42.762",
  longitude: "-115.739",
  spring_name: "INDIAN BATHTUB HOT SPRINGS",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "HOT SPRING 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.799",
  longitude: "-115.129",
  spring_name: "INDIAN CREEK HOT SPRING",
  degrees_f: "190",
  degrees_c: "88",
  usgs_quadrangle: "(BIG BALDY 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "42.333",
  longitude: "-115.65",
  spring_name: "INDIAN HOT SPRINGS",
  degrees_f: "160",
  degrees_c: "71",
  usgs_quadrangle: "null"
  },
  {
  state_code: "ID",
  lattitude: "42.725",
  longitude: "-112.872",
  spring_name: "INDIAN SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "INDIAN SPRINGS 7.5"
  },
  {
  state_code: "ID",
  lattitude: "46.463",
  longitude: "-114.872",
  spring_name: "JERRY JOHNSON HOT SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "TOM BEAL PEAK 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.495",
  longitude: "-116.732",
  spring_name: "KEITHLY WARM SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "(CRANE CREEK RESERVOIR 15)"
  },
  {
  state_code: "ID",
  lattitude: "42.339",
  longitude: "-112.436",
  spring_name: "KENT WARM SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(DANIELS 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "44.072",
  longitude: "-115.543",
  spring_name: "KIRKHAM HOT SPRINGS",
  degrees_f: "149",
  degrees_c: "65",
  usgs_quadrangle: "LOWMAN 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.971",
  longitude: "-116.203",
  spring_name: "KRIGBAUM HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "MEADOWS 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.831",
  longitude: "-115.215",
  spring_name: "KWISKWIS HOT SPRING",
  degrees_f: "156",
  degrees_c: "69",
  usgs_quadrangle: "BIG BALDY 7.5"
  },
  {
  state_code: "ID",
  lattitude: "42.625",
  longitude: "-113.107",
  spring_name: "LAKE WALCOTT HOT SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(YALE 15)"
  },
  {
  state_code: "ID",
  lattitude: "44.586",
  longitude: "-116.63",
  spring_name: "LAKEY HOT SPRING",
  degrees_f: "158",
  degrees_c: "70",
  usgs_quadrangle: "(CAMBRIDGE 15)"
  },
  {
  state_code: "ID",
  lattitude: "43.116",
  longitude: "-115.305",
  spring_name: "LATTY HOT SPRING",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "BENNETT MTN. 15"
  },
  {
  state_code: "ID",
  lattitude: "42.621",
  longitude: "-112.008",
  spring_name: "LAVA HOT SPRINGS",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "LAVA HOT SPRINGS 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.817",
  longitude: "-115.046",
  spring_name: "LEGGIT CREEK HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(ATLANTA EAST 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "45.07",
  longitude: "-115.826",
  spring_name: "LICK CREEK WARM SPRING",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(ENOS LAKE 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "44.145",
  longitude: "-112.554",
  spring_name: "LIDY HOT SPRINGS",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "LIDY HOT SPRINGS 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.605",
  longitude: "-114.948",
  spring_name: "LIGHTFOOT HOT SPRINGS",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "BOARDMAN CREEK 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.382",
  longitude: "-114.088",
  spring_name: "LITTLE ANTELOPE FLAT WARM SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "LITTLE ANTELOPE FLAT 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.724",
  longitude: "-115.604",
  spring_name: "LOFTUS HOT SPRING",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "SHEEP CREEK 7.5"
  },
  {
  state_code: "ID",
  lattitude: "42.865",
  longitude: "-116.368",
  spring_name: "LOWER BIRCH SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "ROUGH MOUNTAIN 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.974",
  longitude: "-114.499",
  spring_name: "LOWER BOWERY HOT SPRING",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "(RYAN PEAK 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "42.767",
  longitude: "-115.725",
  spring_name: "LOWER INDIAN BATHTUB HOT SPRINGS",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "HOT SPRING 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.799",
  longitude: "-114.806",
  spring_name: "LOWER LOON CREEK HOT SPRING",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "RAMEY HILL 7.5"
  },
  {
  state_code: "ID",
  lattitude: "42.013",
  longitude: "-114.504",
  spring_name: "MAGIC HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "null"
  },
  {
  state_code: "ID",
  lattitude: "43.328",
  longitude: "-114.399",
  spring_name: "MAGIC HOT SPRINGS",
  degrees_f: "163",
  degrees_c: "73",
  usgs_quadrangle: "BELLEVUE 15"
  },
  {
  state_code: "ID",
  lattitude: "42.173",
  longitude: "-112.239",
  spring_name: "MALAD WARM SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(MALAD CITY EAST 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "42.308",
  longitude: "-111.707",
  spring_name: "MAPLE GROVE HOT SPRINGS",
  degrees_f: "172",
  degrees_c: "78",
  usgs_quadrangle: "ONEIDA NARROWS RESERVOIR 7."
  },
  {
  state_code: "ID",
  lattitude: "42.447",
  longitude: "-113.523",
  spring_name: "MARSH CREEK HOT SPRING",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "(ALBION 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "42.449",
  longitude: "-113.511",
  spring_name: "MARSH GULLY HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "ALBION 7.5"
  },
  {
  state_code: "ID",
  lattitude: "46.006",
  longitude: "-115.021",
  spring_name: "MARTEN HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "MINK PEAK 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.813",
  longitude: "-115.123",
  spring_name: "MIDDLE FORK INDIAN CREEK HOT SPRING",
  degrees_f: "162",
  degrees_c: "72",
  usgs_quadrangle: "PUNGO MOUNTAIN 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.363",
  longitude: "-113.779",
  spring_name: "MILFORD SWEAT HOT SPRING",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "null"
  },
  {
  state_code: "ID",
  lattitude: "44.642",
  longitude: "-115.693",
  spring_name: "MOLLYS HOT SPRING",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "(WARM LAKE 15)"
  },
  {
  state_code: "ID",
  lattitude: "43.588",
  longitude: "-115.988",
  spring_name: "MORES CREEK HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(ARROWROCK DAM 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "44.26",
  longitude: "-114.838",
  spring_name: "MORMON BEND HOT SPRING",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "(EAST BASIN CREEK 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "44.951",
  longitude: "-114.704",
  spring_name: "MORMON RANCH WARM SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "APAREJO POINT 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.255",
  longitude: "-114.829",
  spring_name: "MORMON RESERVOIR WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(FAIRFIELD 15)"
  },
  {
  state_code: "ID",
  lattitude: "42.374",
  longitude: "-111.726",
  spring_name: "MOUND VALLEY WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "ONEIDA NARROWS RESERVOIR 7."
  },
  {
  state_code: "ID",
  lattitude: "42.032",
  longitude: "-115.363",
  spring_name: "MURPHY HOT SPRINGS",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "null"
  },
  {
  state_code: "ID",
  lattitude: "42.337",
  longitude: "-114.509",
  spring_name: "NAT-SOO-PAH WARM SPRING",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "HOLLISTER 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.755",
  longitude: "-115.571",
  spring_name: "NINEMEYER HOT SPRINGS",
  degrees_f: "169",
  degrees_c: "76",
  usgs_quadrangle: "BARBER FLAT 7.5"
  },
  {
  state_code: "ID",
  lattitude: "42.173",
  longitude: "-113.861",
  spring_name: "OAKLEY HOT SPRING",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "BASIN 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.354",
  longitude: "-117.071",
  spring_name: "OLD HOMESTEAD WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "OLDS FERRY SE 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.652",
  longitude: "-114.734",
  spring_name: "OWEN CABIN HOT SPRING",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "ROCK CREEK 7.5"
  },
  {
  state_code: "ID",
  lattitude: "45.344",
  longitude: "-114.463",
  spring_name: "OWL CREEK HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "SHOUP 15"
  },
  {
  state_code: "ID",
  lattitude: "43.553",
  longitude: "-115.267",
  spring_name: "PARADISE HOT SPRINGS",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "FEATHERVILLE 7.5"
  },
  {
  state_code: "ID",
  lattitude: "42.426",
  longitude: "-111.378",
  spring_name: "PESCADERO WARM SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "NOUNAN 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.99",
  longitude: "-114.8",
  spring_name: "PIERSON HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "ALTURAS LAKE 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.791",
  longitude: "-111.435",
  spring_name: "PINCOCK (GREEN CANYON) HOT SPRINGS",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "WRIGHT CREEK 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.062",
  longitude: "-115.685",
  spring_name: "PINE FLAT HOT SPRINGS",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "PINE FLAT 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.721",
  longitude: "-115.207",
  spring_name: "PISTOL CREEK HOT SPRINGS",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "GREYHOUND RIDGE 15"
  },
  {
  state_code: "ID",
  lattitude: "42.156",
  longitude: "-112.348",
  spring_name: "PLEASANTVIEW WARM SPRINGS",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "MALAD CITY WEST 7.5"
  },
  {
  state_code: "ID",
  lattitude: "42.637",
  longitude: "-114.892",
  spring_name: "POISON SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "BUHL 15"
  },
  {
  state_code: "ID",
  lattitude: "43.76",
  longitude: "-115.56",
  spring_name: "POOL CREEK HOT SPRING",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "(BARBER FLAT 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "42.781",
  longitude: "-111.983",
  spring_name: "PORTNEUF RIVER WARM SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "(PORTNEUF 15)"
  },
  {
  state_code: "ID",
  lattitude: "43.576",
  longitude: "-114.83",
  spring_name: "PREIS HOT SPRING",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "SYDNEY BUTTE 7.5"
  },
  {
  state_code: "ID",
  lattitude: "42.025",
  longitude: "-112.226",
  spring_name: "PRICES WARM SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(HENDERSON CREEK 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "46.235",
  longitude: "-114.707",
  spring_name: "PROSPECTOR HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(WAHOO PEAK 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "43.831",
  longitude: "-115.192",
  spring_name: "QUEENS RIVER HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "ATLANTA WEST 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.605",
  longitude: "-115.664",
  spring_name: "RATTLESNAKE HOT SPRING",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "(LONG GULCH 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "45.788",
  longitude: "-115.198",
  spring_name: "RED RIVER HOT SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "SABLE HILL 7.5"
  },
  {
  state_code: "ID",
  lattitude: "42.286",
  longitude: "-113.446",
  spring_name: "RICE SPRING WARD SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "NIBBS CREEK 7.5"
  },
  {
  state_code: "ID",
  lattitude: "45.416",
  longitude: "-116.172",
  spring_name: "RIGGINS HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "RIGGINS HOT SPRINGS"
  },
  {
  state_code: "ID",
  lattitude: "44.247",
  longitude: "-114.676",
  spring_name: "ROBINSON BAR HOT SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "ROBINSON BAR 7.5"
  },
  {
  state_code: "ID",
  lattitude: "42.545",
  longitude: "-112.906",
  spring_name: "ROCKLAND WARM SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "ROCKLAND WEST 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.253",
  longitude: "-115.891",
  spring_name: "ROCKY CANYON HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "BOILING SPRINGS 15"
  },
  {
  state_code: "ID",
  lattitude: "44.101",
  longitude: "-114.865",
  spring_name: "ROSALYS WARM SPRING",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "OBSIDIAN 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.951",
  longitude: "-116.353",
  spring_name: "ROYSTONE HOT SPRINGS",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "MONTOUR 15"
  },
  {
  state_code: "ID",
  lattitude: "45.852",
  longitude: "-114.937",
  spring_name: "RUNNING WARM SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "THREE PRONG MTN. 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.367",
  longitude: "-113.884",
  spring_name: "RUSH WARM SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "null"
  },
  {
  state_code: "ID",
  lattitude: "43.805",
  longitude: "-114.585",
  spring_name: "RUSSIAN JOHN HOT SPRING",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "EASLEY HOT SPRINGS 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.16",
  longitude: "-115.177",
  spring_name: "SACAJAWEA HOT SPRINGS",
  degrees_f: "153",
  degrees_c: "67",
  usgs_quadrangle: "GRANDJEAN 7.5"
  },
  {
  state_code: "ID",
  lattitude: "42.704",
  longitude: "-114.856",
  spring_name: "SALMON FALLS HOT SPRING",
  degrees_f: "153",
  degrees_c: "67",
  usgs_quadrangle: "(THOUSAND SPRINGS 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "45.095",
  longitude: "-113.836",
  spring_name: "SALMON HOT SPRING",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "SALMON 15"
  },
  {
  state_code: "ID",
  lattitude: "42.24",
  longitude: "-113.588",
  spring_name: "SEARS SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "(ELBA 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "45.17",
  longitude: "-115.807",
  spring_name: "SECESH HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(LOON LAKE 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "45.013",
  longitude: "-113.605",
  spring_name: "SHARKEY HOT SPRING",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "GOLDSTONE MTN. 15"
  },
  {
  state_code: "ID",
  lattitude: "43.696",
  longitude: "-115.658",
  spring_name: "SHEEP CREEK BRIDGE HOT SPRING",
  degrees_f: "142",
  degrees_c: "61",
  usgs_quadrangle: "TWIN SPRINGS 7.5"
  },
  {
  state_code: "ID",
  lattitude: "45.035",
  longitude: "-115.561",
  spring_name: "SHEEP CREEK HOT SPRING",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "(PARKS PEAK 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "44.628",
  longitude: "-115.197",
  spring_name: "SHEEPEATER HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "GREYHOUND RIDGE 15"
  },
  {
  state_code: "ID",
  lattitude: "44.628",
  longitude: "-114.601",
  spring_name: "SHOWER BATH SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "SHELDON PEAK 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.33",
  longitude: "-115.802",
  spring_name: "SILVER CREEK HOT SPRING",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "BOILING SPRINGS 15"
  },
  {
  state_code: "ID",
  lattitude: "43.647",
  longitude: "-114.816",
  spring_name: "SKILLERN HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "PARADISE PEAK 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.171",
  longitude: "-114.624",
  spring_name: "SLATE CREEK HOT SPRING",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "LIVINGSTON CREEK 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.72",
  longitude: "-115.617",
  spring_name: "SMITH CABIN HOT SPRING",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "SHEEP CREEK 7.5"
  },
  {
  state_code: "ID",
  lattitude: "45.042",
  longitude: "-114.616",
  spring_name: "SNOWSHOE JOHNSONS HOT SPRING",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "(HOODOO MEADOWS 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "42.657",
  longitude: "-111.604",
  spring_name: "SODA SPRINGS",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "SODA SPRINGS 15"
  },
  {
  state_code: "ID",
  lattitude: "44.632",
  longitude: "-115.697",
  spring_name: "SOUTH FORK PLUNGE",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "(WARM LAKE 15)"
  },
  {
  state_code: "ID",
  lattitude: "42.119",
  longitude: "-111.928",
  spring_name: "SQUAW HOT SPRINGS",
  degrees_f: "163",
  degrees_c: "73",
  usgs_quadrangle: "WESTON 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.224",
  longitude: "-114.929",
  spring_name: "STANLEY HOT SPRING",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "STANLEY 7.5"
  },
  {
  state_code: "ID",
  lattitude: "46.316",
  longitude: "-115.258",
  spring_name: "STANLEY HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "HUCKLEBERRY BUTTE 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.853",
  longitude: "-116.442",
  spring_name: "STARKEY HOT SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "NEW MEADOWS 15"
  },
  {
  state_code: "ID",
  lattitude: "42.655",
  longitude: "-111.643",
  spring_name: "STEAMBOAT HOT SPRING",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "(SODA SPRINGS 15)"
  },
  {
  state_code: "ID",
  lattitude: "45.152",
  longitude: "-116.296",
  spring_name: "STINKY WARM SPRING",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "INDIAN MOUNTAIN 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.788",
  longitude: "-115.444",
  spring_name: "STRAIGHT CREEK HOT SPRING",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "(GRAND MTN. 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "46.138",
  longitude: "-115.09",
  spring_name: "STUART HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "BIG ROCK MTN. 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.254",
  longitude: "-114.443",
  spring_name: "SULLIVAN HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "CLAYTON 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.554",
  longitude: "-115.301",
  spring_name: "SULPHUR CREEK HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(CHINOOK MTN. 15)"
  },
  {
  state_code: "ID",
  lattitude: "44.585",
  longitude: "-115.072",
  spring_name: "SULPHUR CREEK HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(GREYHOUND RIDGE 15)"
  },
  {
  state_code: "ID",
  lattitude: "44.268",
  longitude: "-114.748",
  spring_name: "SUNBEAM HOT SPRINGS",
  degrees_f: "169",
  degrees_c: "76",
  usgs_quadrangle: "SUNBEAM 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.733",
  longitude: "-115.018",
  spring_name: "SUNFLOWER FLAT HOT SPRING",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "(GREYHOUND RIDGE 15)"
  },
  {
  state_code: "ID",
  lattitude: "44.73",
  longitude: "-114.993",
  spring_name: "SUNFLOWER HOT SPRINGS",
  degrees_f: "149",
  degrees_c: "65",
  usgs_quadrangle: "SLIDEROCK RIDGE 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.972",
  longitude: "-116.325",
  spring_name: "SWEET WARM SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(MONTOUR 15)"
  },
  {
  state_code: "ID",
  lattitude: "42.957",
  longitude: "-112.458",
  spring_name: "TADPOLE WARM SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "POCATELLO NORTH 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.607",
  longitude: "-111.189",
  spring_name: "TAYLOR SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "DRIGGS 15"
  },
  {
  state_code: "ID",
  lattitude: "44.914",
  longitude: "-115.722",
  spring_name: "TEAPOT HOT SPRING",
  degrees_f: "142",
  degrees_c: "61",
  usgs_quadrangle: "TEAPOT MTN. 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.677",
  longitude: "-116.208",
  spring_name: "TERTELING HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "BOISE NORTH 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.721",
  longitude: "-115.01",
  spring_name: "THOMAS CREEK RANCH HOT SPRING",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "GREYHOUND RIDGE 15"
  },
  {
  state_code: "ID",
  lattitude: "43.161",
  longitude: "-116.332",
  spring_name: "THOMAS FLATS WARM SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "WILD HORSE BUTTE 7.5"
  },
  {
  state_code: "ID",
  lattitude: "42.015",
  longitude: "-114.237",
  spring_name: "THOROUGHBRED WARM SPRINGS",
  degrees_f: "69",
  degrees_c: "21",
  usgs_quadrangle: "null"
  },
  {
  state_code: "ID",
  lattitude: "43.5",
  longitude: "-115.308",
  spring_name: "TOWNE CREEK WARM SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(PINE 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "44.626",
  longitude: "-115.749",
  spring_name: "TRAIL CREEK HOT SPRING",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "(WARM LAKE 15)"
  },
  {
  state_code: "ID",
  lattitude: "42.337",
  longitude: "-111.726",
  spring_name: "TREASURETON HOT SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "ONEIDA NARROWS RESERVOIR 7."
  },
  {
  state_code: "ID",
  lattitude: "43.038",
  longitude: "-114.988",
  spring_name: "TSCHANNE HOT SPRING",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "(DAVIS MOUNTAIN 15)"
  },
  {
  state_code: "ID",
  lattitude: "43.671",
  longitude: "-115.696",
  spring_name: "TWIN SPRINGS",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "TWIN SPRINGS 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.645",
  longitude: "-114.739",
  spring_name: "UPPER LOON CREEK HOT SPRINGS",
  degrees_f: "145",
  degrees_c: "63",
  usgs_quadrangle: "ROCK CREEK 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.738",
  longitude: "-115.583",
  spring_name: "VAUGHN HOT SPRING",
  degrees_f: "154",
  degrees_c: "68",
  usgs_quadrangle: "SHEEP CREEK 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.568",
  longitude: "-115.695",
  spring_name: "VULCAN HOT SPRINGS",
  degrees_f: "190",
  degrees_c: "88",
  usgs_quadrangle: "WARM LAKE 15"
  },
  {
  state_code: "ID",
  lattitude: "43.383",
  longitude: "-114.931",
  spring_name: "WARDROP HOT SPRING",
  degrees_f: "147",
  degrees_c: "64",
  usgs_quadrangle: "FAIRFIELD 15"
  },
  {
  state_code: "ID",
  lattitude: "43.641",
  longitude: "-114.487",
  spring_name: "WARFIELD HOT SPRING",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "GRIFFIN BUTTE 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.639",
  longitude: "-115.671",
  spring_name: "WARM LAKE SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(WARM LAKE 15)"
  },
  {
  state_code: "ID",
  lattitude: "43.816",
  longitude: "-115.863",
  spring_name: "WARM SPRINGS",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "IDAHO CITY 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.257",
  longitude: "-112.639",
  spring_name: "WARM SPRINGS",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "EDIE RANCH 15"
  },
  {
  state_code: "ID",
  lattitude: "44.154",
  longitude: "-115.993",
  spring_name: "WARM SPRINGS CREEK HOT SPRINGS",
  degrees_f: "167",
  degrees_c: "75",
  usgs_quadrangle: "GARDEN VALLEY 15"
  },
  {
  state_code: "ID",
  lattitude: "43.823",
  longitude: "-115.327",
  spring_name: "WEATHERBY HOT SPRING",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "PHIFER CREEK 7.5"
  },
  {
  state_code: "ID",
  lattitude: "46.464",
  longitude: "-115.035",
  spring_name: "WEIR CREEK HOT SPRINGS",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "GREYSTONE BUTTE 7.5"
  },
  {
  state_code: "ID",
  lattitude: "44.306",
  longitude: "-117.042",
  spring_name: "WEISER WARM SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "OLDS FERRY SE 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.982",
  longitude: "-114.486",
  spring_name: "WEST PASS HOT SPRING",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "RYAN PEAK 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.049",
  longitude: "-114.952",
  spring_name: "WHITE ARROW HOT SPRING",
  degrees_f: "145",
  degrees_c: "63",
  usgs_quadrangle: "DAVIS MOUNTAIN 15"
  },
  {
  state_code: "ID",
  lattitude: "44.679",
  longitude: "-116.231",
  spring_name: "WHITE LICKS HOT SPRING",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "CASCADE 15"
  },
  {
  state_code: "ID",
  lattitude: "44.612",
  longitude: "-113.363",
  spring_name: "WHITTAKER WARM SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "LEADORE 15"
  },
  {
  state_code: "ID",
  lattitude: "43.637",
  longitude: "-115.13",
  spring_name: "WILLOW CREEK HOT SPRING",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "CAYUSE POINT 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.021",
  longitude: "-111.695",
  spring_name: "WILSON LAKE WARM SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "(CRANES FLAT 15)"
  },
  {
  state_code: "ID",
  lattitude: "43.335",
  longitude: "-115.044",
  spring_name: "WOLF HOT SPRING",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "(HILL CITY 7.5)"
  },
  {
  state_code: "ID",
  lattitude: "42.056",
  longitude: "-112.246",
  spring_name: "WOODRUFF HOT SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "HENDERSON CREEK 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.563",
  longitude: "-114.798",
  spring_name: "WORSWICK HOT SPRINGS",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "SYDNEY BUTTE 7.5"
  },
  {
  state_code: "ID",
  lattitude: "43.114",
  longitude: "-112.167",
  spring_name: "YANDELL SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "YANDELL SPRINGS 15"
  },
  {
  state_code: "ID",
  lattitude: "45.039",
  longitude: "-116.291",
  spring_name: "ZIMS RESORT HOT SPRINGS",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "BALLY MOUNTAIN 7.5"
  },
  {
  state_code: "MA",
  lattitude: "42.735",
  longitude: "-73.2",
  spring_name: "SAND SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "WILLIAMSTOWN 7.5"
  },
  {
  state_code: "MT",
  lattitude: "46.448",
  longitude: "-111.982",
  spring_name: "ALHAMBRA HOT SPRINGS",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "(CLANCY 15)"
  },
  {
  state_code: "MT",
  lattitude: "46.106",
  longitude: "-112.903",
  spring_name: "ANACONDA HOT SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "ANACONDA 15"
  },
  {
  state_code: "MT",
  lattitude: "45.553",
  longitude: "-110.142",
  spring_name: "ANDERSON SPRINGS",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "MCLEOD BASIN 7.5"
  },
  {
  state_code: "MT",
  lattitude: "44.704",
  longitude: "-111.892",
  spring_name: "ANDERSONS PASTURE SPRINGS",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "LOWER RED ROCK LAKE"
  },
  {
  state_code: "MT",
  lattitude: "45.42",
  longitude: "-112.692",
  spring_name: "APEX WARM SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "GLEN 7.5"
  },
  {
  state_code: "MT",
  lattitude: "46.61",
  longitude: "-112.555",
  spring_name: "AVON WARM SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(AVON 15)"
  },
  {
  state_code: "MT",
  lattitude: "45.032",
  longitude: "-110.667",
  spring_name: "BEAR CREEK SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(GARDINER 15)"
  },
  {
  state_code: "MT",
  lattitude: "46.717",
  longitude: "-113.32",
  spring_name: "BEARMOUTH WARM SPRING 1",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "BEARMOUTH 15"
  },
  {
  state_code: "MT",
  lattitude: "46.718",
  longitude: "-113.306",
  spring_name: "BEARMOUTH WARM SPRING 2",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(BEARMOUTH 15)"
  },
  {
  state_code: "MT",
  lattitude: "45.392",
  longitude: "-112.452",
  spring_name: "BEAVERHEAD ROCK SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "BEAVERHEAD ROCK 7.5"
  },
  {
  state_code: "MT",
  lattitude: "46.355",
  longitude: "-111.565",
  spring_name: "BEDFORD HOT SPRINGS",
  degrees_f: "74",
  degrees_c: "24",
  usgs_quadrangle: "TOWNSEND 15"
  },
  {
  state_code: "MT",
  lattitude: "45.698",
  longitude: "-114.382",
  spring_name: "BLUE JOINT HOT SPRING 1",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "PAINTED ROCKS LAKE 15"
  },
  {
  state_code: "MT",
  lattitude: "45.697",
  longitude: "-114.365",
  spring_name: "BLUE JOINT HOT SPRINGS 2",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "PAINTED ROCKS LAKE 15"
  },
  {
  state_code: "MT",
  lattitude: "46.198",
  longitude: "-112.094",
  spring_name: "BOULDER HOT SPRINGS",
  degrees_f: "169",
  degrees_c: "76",
  usgs_quadrangle: "BOULDER 15"
  },
  {
  state_code: "MT",
  lattitude: "45.66",
  longitude: "-111.186",
  spring_name: "BOZEMAN HOT SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "BOZEMAN 15"
  },
  {
  state_code: "MT",
  lattitude: "45.708",
  longitude: "-110.976",
  spring_name: "BRIDGER CANYON WARM SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(BOZEMAN PASS 15)"
  },
  {
  state_code: "MT",
  lattitude: "46.596",
  longitude: "-112.108",
  spring_name: "BROADWATER (HELENA) HOT SPRINGS",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "(HELENA 15)"
  },
  {
  state_code: "MT",
  lattitude: "47.217",
  longitude: "-109.471",
  spring_name: "BROOKS WARM SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "LEWISTOWN 15"
  },
  {
  state_code: "MT",
  lattitude: "45.105",
  longitude: "-112.751",
  spring_name: "BROWNS SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "DALYS 7.5"
  },
  {
  state_code: "MT",
  lattitude: "47.607",
  longitude: "-114.663",
  spring_name: "CAMAS HOT SPRINGS",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "HOT SPRINGS 7.5"
  },
  {
  state_code: "MT",
  lattitude: "45.608",
  longitude: "-110.571",
  spring_name: "CARTER BRIDGE WARM SPRINGS",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "(BRISBIN 7.5)"
  },
  {
  state_code: "MT",
  lattitude: "45.337",
  longitude: "-110.691",
  spring_name: "CHICO HOT SPRINGS",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "EMIGRANT 15"
  },
  {
  state_code: "MT",
  lattitude: "46.334",
  longitude: "-112.886",
  spring_name: "DEERLODGE PRISON RANCH SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(MOUNT POWELL 7.5)"
  },
  {
  state_code: "MT",
  lattitude: "46.795",
  longitude: "-108.883",
  spring_name: "DURFEE CREEK SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "null"
  },
  {
  state_code: "MT",
  lattitude: "45.458",
  longitude: "-113.109",
  spring_name: "ELKHORN HOT SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "POLARIS 15"
  },
  {
  state_code: "MT",
  lattitude: "45.367",
  longitude: "-111.726",
  spring_name: "ENNIS HOT SPRINGS",
  degrees_f: "181",
  degrees_c: "83",
  usgs_quadrangle: "(ENNIS 15)"
  },
  {
  state_code: "MT",
  lattitude: "45.75",
  longitude: "-113.938",
  spring_name: "GALLOGLY SPRING",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "LOST TRAIL PASS 7.5"
  },
  {
  state_code: "MT",
  lattitude: "46.607",
  longitude: "-112.776",
  spring_name: "GARRISON WARM SPRINGS",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(GARRISON 15)"
  },
  {
  state_code: "MT",
  lattitude: "47.451",
  longitude: "-114.648",
  spring_name: "GREEN SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "PERMA 15"
  },
  {
  state_code: "MT",
  lattitude: "46.044",
  longitude: "-112.811",
  spring_name: "GREGSON HOT SPRINGS",
  degrees_f: "158",
  degrees_c: "70",
  usgs_quadrangle: "ANACONDA 15"
  },
  {
  state_code: "MT",
  lattitude: "45.757",
  longitude: "-110.256",
  spring_name: "HUNTERS HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "HUNTERS HOT SPRINGS"
  },
  {
  state_code: "MT",
  lattitude: "45.368",
  longitude: "-113.403",
  spring_name: "JARDINE HOT SPRING",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "JACKSON 7.5"
  },
  {
  state_code: "MT",
  lattitude: "45.09",
  longitude: "-110.774",
  spring_name: "LADUKE (CORWIN) HOT SPRING",
  degrees_f: "154",
  degrees_c: "68",
  usgs_quadrangle: "MINER 15"
  },
  {
  state_code: "MT",
  lattitude: "47.876",
  longitude: "-108.656",
  spring_name: "LANDUSKY SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "HAYS 7.5"
  },
  {
  state_code: "MT",
  lattitude: "47.971",
  longitude: "-108.395",
  spring_name: "LITTLE WARM SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(BEAR MOUNTAIN 7.5)"
  },
  {
  state_code: "MT",
  lattitude: "47.994",
  longitude: "-108.445",
  spring_name: "LODGEPOLE (BIG WARM) SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(BEAR MOUNTAIN 7.5)"
  },
  {
  state_code: "MT",
  lattitude: "46.728",
  longitude: "-114.533",
  spring_name: "LOLO HOT SPRINGS GRANITE SPRINGS",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "LOLO HOT SPRINGS 7.5"
  },
  {
  state_code: "MT",
  lattitude: "45.111",
  longitude: "-112.714",
  spring_name: "LOVELLS HOT SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "GALLAGHER MOUNTAIN 7.5"
  },
  {
  state_code: "MT",
  lattitude: "45.027",
  longitude: "-112.844",
  spring_name: "MCMENOMEY RANCH SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "DALYS 7.5"
  },
  {
  state_code: "MT",
  lattitude: "47.632",
  longitude: "-112.855",
  spring_name: "MEDICINE (SUN RIVER) SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "ARSENIC PEAK 7.5"
  },
  {
  state_code: "MT",
  lattitude: "45.841",
  longitude: "-114.038",
  spring_name: "MEDICINE HOT SPRINGS",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "MEDICINE HOT SPRINGS 7.5"
  },
  {
  state_code: "MT",
  lattitude: "45.462",
  longitude: "-112.475",
  spring_name: "NEW BILTMORE HOT SPRINGS",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "BEAVERHEAD ROCK 7.5"
  },
  {
  state_code: "MT",
  lattitude: "46.704",
  longitude: "-113.452",
  spring_name: "NIMROD SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(BEARMOUTH 15)"
  },
  {
  state_code: "MT",
  lattitude: "45.575",
  longitude: "-111.683",
  spring_name: "NORRIS HOT SPRINGS",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "NORRIS 15"
  },
  {
  state_code: "MT",
  lattitude: "45.896",
  longitude: "-112.233",
  spring_name: "PIPESTONE HOT SPRINGS",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "DRY MOUNTAIN 7.5"
  },
  {
  state_code: "MT",
  lattitude: "45.59",
  longitude: "-111.899",
  spring_name: "POTOSI HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "HARRISON 15"
  },
  {
  state_code: "MT",
  lattitude: "45.602",
  longitude: "-111.9",
  spring_name: "POTOSI WARM SPRINGS",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "HARRISON 15"
  },
  {
  state_code: "MT",
  lattitude: "45.171",
  longitude: "-112.153",
  spring_name: "PULLER HOT SPRINGS",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "METZEL RANCH 7.5"
  },
  {
  state_code: "MT",
  lattitude: "47.33",
  longitude: "-114.789",
  spring_name: "QUINNS HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "PLAINS 15"
  },
  {
  state_code: "MT",
  lattitude: "45.792",
  longitude: "-112.126",
  spring_name: "RENOVA HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "(VENDOME 7.5)"
  },
  {
  state_code: "MT",
  lattitude: "45.685",
  longitude: "-112.295",
  spring_name: "SILVER STAR HOT SPRINGS",
  degrees_f: "163",
  degrees_c: "73",
  usgs_quadrangle: "(TWIN BRIDGES 15)"
  },
  {
  state_code: "MT",
  lattitude: "46.106",
  longitude: "-114.004",
  spring_name: "SLEEPING CHILD HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "DEER MOUNTAIN 7.5"
  },
  {
  state_code: "MT",
  lattitude: "44.769",
  longitude: "-111.649",
  spring_name: "SLOAN COW CAMP SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "(CLIFF LAKE 15)"
  },
  {
  state_code: "MT",
  lattitude: "44.701",
  longitude: "-111.878",
  spring_name: "STAUDENMEYER SPRINGS",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "(LOWER RED ROCK LAKE 15)"
  },
  {
  state_code: "MT",
  lattitude: "47.843",
  longitude: "-108.598",
  spring_name: "THE (LANDUSKY) PLUNGE",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "HAYS SE 7.5"
  },
  {
  state_code: "MT",
  lattitude: "45.235",
  longitude: "-112.135",
  spring_name: "TRUDAU WARM SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "METZEL RANCH 7.5"
  },
  {
  state_code: "MT",
  lattitude: "45.037",
  longitude: "-111.953",
  spring_name: "VIGILANTE SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "VARNEY 15"
  },
  {
  state_code: "MT",
  lattitude: "46.178",
  longitude: "-112.794",
  spring_name: "WARM SPRINGS (STATE HOSPITAL)",
  degrees_f: "172",
  degrees_c: "78",
  usgs_quadrangle: "ANACONDA NE 7.5"
  },
  {
  state_code: "MT",
  lattitude: "44.785",
  longitude: "-111.649",
  spring_name: "WEST FORK SWIMMING HOLE",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(CLIFF LAKE 15)"
  },
  {
  state_code: "MT",
  lattitude: "46.547",
  longitude: "-110.903",
  spring_name: "WHITE SULPHUR SPRINGS",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "WHITE SULPHUR SPRINGS 7.5"
  },
  {
  state_code: "MT",
  lattitude: "44.984",
  longitude: "-111.613",
  spring_name: "WOLF CREEK HOT SPRINGS",
  degrees_f: "154",
  degrees_c: "68",
  usgs_quadrangle: "CLIFF LAKE 15"
  },
  {
  state_code: "NC",
  lattitude: "35.897",
  longitude: "-82.826",
  spring_name: "HOT SPRINGS",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "HOT SPRINGS 7.5"
  },
  {
  state_code: "NM",
  lattitude: "33.831",
  longitude: "-108.8",
  spring_name: "(UPPER) FRISCO HOT SPRING",
  degrees_f: "98",
  degrees_c: "37",
  usgs_quadrangle: "DILLON MOUNTAIN 7.5"
  },
  {
  state_code: "NM",
  lattitude: "35.06",
  longitude: "-107.133",
  spring_name: "ALAMOS SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "MESA GIGANTE 7.5"
  },
  {
  state_code: "NM",
  lattitude: "32.884",
  longitude: "-108.358",
  spring_name: "ALLEN SPRINGS",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "READING MOUNTAIN 7.5"
  },
  {
  state_code: "NM",
  lattitude: "32.644",
  longitude: "-108.128",
  spring_name: "APACHE TEJO WARM SPRING",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "(HURLEY WEST 7.5)"
  },
  {
  state_code: "NM",
  lattitude: "33.898",
  longitude: "-108.501",
  spring_name: "ARAGON SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(ARAGON 7.5)"
  },
  {
  state_code: "NM",
  lattitude: "32.821",
  longitude: "-108.408",
  spring_name: "ASH SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "CIRCLE MESA 7.5"
  },
  {
  state_code: "NM",
  lattitude: "34.995",
  longitude: "-106.454",
  spring_name: "CLEAR WATER SPRING",
  degrees_f: "69",
  degrees_c: "21",
  usgs_quadrangle: "(MOUNT WASHINGTON 7.5)"
  },
  {
  state_code: "NM",
  lattitude: "34.049",
  longitude: "-106.939",
  spring_name: "COOK SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "SOCORRO 7.5"
  },
  {
  state_code: "NM",
  lattitude: "32.795",
  longitude: "-107.276",
  spring_name: "DERRY WARM SPRINGS",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "GARFIELD 15"
  },
  {
  state_code: "NM",
  lattitude: "34.903",
  longitude: "-107.085",
  spring_name: "EL OJO ESCONDIDO",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "SOUTH GARCIA 7.5"
  },
  {
  state_code: "NM",
  lattitude: "32.554",
  longitude: "-107.994",
  spring_name: "FAYWOOD HOT SPRINGS",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "DWYER 15"
  },
  {
  state_code: "NM",
  lattitude: "33.708",
  longitude: "-109.025",
  spring_name: "FRIEBORN CANYON SPRING",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "(BLUE 15)"
  },
  {
  state_code: "NM",
  lattitude: "33.199",
  longitude: "-108.209",
  spring_name: "GILA HOT SPRINGS",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "GILA HOT SPRINGS 7.5"
  },
  {
  state_code: "NM",
  lattitude: "32.83",
  longitude: "-109.047",
  spring_name: "GOAT CAMP SPRING",
  degrees_f: "69",
  degrees_c: "21",
  usgs_quadrangle: "YORK VALLEY 15"
  },
  {
  state_code: "NM",
  lattitude: "33.237",
  longitude: "-108.88",
  spring_name: "HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "WILSON MOUNTAIN 7.5"
  },
  {
  state_code: "NM",
  lattitude: "32.455",
  longitude: "-104.489",
  spring_name: "INDIAN BIG SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "WEST CARLSBAD 15"
  },
  {
  state_code: "NM",
  lattitude: "35.592",
  longitude: "-106.753",
  spring_name: "INDIAN SPRINGS",
  degrees_f: "123",
  degrees_c: "51",
  usgs_quadrangle: "(SAN YSIDRO 7.5)"
  },
  {
  state_code: "NM",
  lattitude: "35.772",
  longitude: "-106.69",
  spring_name: "JEMEZ SPRINGS",
  degrees_f: "169",
  degrees_c: "76",
  usgs_quadrangle: "JEMEZ SPRINGS 7.5"
  },
  {
  state_code: "NM",
  lattitude: "32.562",
  longitude: "-108.027",
  spring_name: "KENNECOTT WARM SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "FAYWOOD STATION 7.5"
  },
  {
  state_code: "NM",
  lattitude: "34.833",
  longitude: "-107.091",
  spring_name: "LAGUNA PUEBLO SEEPS",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "SOUTH GARCIA SE 7.5"
  },
  {
  state_code: "NM",
  lattitude: "34.854",
  longitude: "-107.088",
  spring_name: "LAGUNA PUEBLO SPRINGS",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "SOUTH GARCIA SE 7.5"
  },
  {
  state_code: "NM",
  lattitude: "33.192",
  longitude: "-108.18",
  spring_name: "LYONS HUNTING LODGE HOT SPRINGS",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "(GILA HOT SPRINGS 7.5)"
  },
  {
  state_code: "NM",
  lattitude: "36.508",
  longitude: "-105.722",
  spring_name: "MANBY HOT SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "ARROYO HONDO 7.5"
  },
  {
  state_code: "NM",
  lattitude: "32.843",
  longitude: "-108.512",
  spring_name: "MANGAS SPRINGS",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "CLIFF 15"
  },
  {
  state_code: "NM",
  lattitude: "35.82",
  longitude: "-106.627",
  spring_name: "MCCAULEY HOT SPRINGS",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "JEMEZ SPRINGS 7.5"
  },
  {
  state_code: "NM",
  lattitude: "32.748",
  longitude: "-107.836",
  spring_name: "MIMBRES HOT SPRINGS",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "DWYER 15"
  },
  {
  state_code: "NM",
  lattitude: "35.653",
  longitude: "-105.29",
  spring_name: "MONTEZUMA  HOT SPRINGS",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "MONTEZUMA 7.5"
  },
  {
  state_code: "NM",
  lattitude: "32.248",
  longitude: "-104.411",
  spring_name: "MOSLEY SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "CARLSBAD CAVERNS EAST 15"
  },
  {
  state_code: "NM",
  lattitude: "34.116",
  longitude: "-106.98",
  spring_name: "OJITOS SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "SOCORRO 7.5"
  },
  {
  state_code: "NM",
  lattitude: "33.572",
  longitude: "-107.593",
  spring_name: "OJO CALIENTE",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "MONTOYA BUTTE 7.5"
  },
  {
  state_code: "NM",
  lattitude: "36.305",
  longitude: "-106.053",
  spring_name: "OJO CALIENTE (ARSENIC SPRING)",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "OJO CALIENTE 7.5"
  },
  {
  state_code: "NM",
  lattitude: "34.032",
  longitude: "-106.777",
  spring_name: "OJO DE LAS CANAS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "LOMA DE LAS CANAS 7.5"
  },
  {
  state_code: "NM",
  lattitude: "35.601",
  longitude: "-106.86",
  spring_name: "PHILLIPS SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "SAN YSIDRO 7.5"
  },
  {
  state_code: "NM",
  lattitude: "36.324",
  longitude: "-105.606",
  spring_name: "PONCE DE LEON SPRINGS",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "RANCHOS DE TAOS 7.5"
  },
  {
  state_code: "NM",
  lattitude: "32.501",
  longitude: "-106.926",
  spring_name: "RADIUM SPRINGS",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "SAN DIEGO MOUNTAIN 15"
  },
  {
  state_code: "NM",
  lattitude: "34.912",
  longitude: "-108.951",
  spring_name: "RAINBOW SPRING",
  degrees_f: "71",
  degrees_c: "22",
  usgs_quadrangle: "OJO CALIENTE RESERVOIR 7.5"
  },
  {
  state_code: "NM",
  lattitude: "35.938",
  longitude: "-106.646",
  spring_name: "SAN ANTONIO HOT SPRING",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "SEVEN SPRINGS 7.5"
  },
  {
  state_code: "NM",
  lattitude: "35.972",
  longitude: "-106.56",
  spring_name: "SAN ANTONIO WARM SPRING",
  degrees_f: "101",
  degrees_c: "38",
  usgs_quadrangle: "VALLE SAN ANTONIO 7.5"
  },
  {
  state_code: "NM",
  lattitude: "33.244",
  longitude: "-108.88",
  spring_name: "SAN FRANCISCO HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "WILSON MOUNTAIN 7.5"
  },
  {
  state_code: "NM",
  lattitude: "35.54",
  longitude: "-106.854",
  spring_name: "SAN YSIDRO HOT SPRINGS",
  degrees_f: "85",
  degrees_c: "29",
  usgs_quadrangle: "(SAN YSIDRO 7.5)"
  },
  {
  state_code: "NM",
  lattitude: "35.548",
  longitude: "-106.827",
  spring_name: "SAN YSIDRO WARM SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "SAN YSIDRO 7.5"
  },
  {
  state_code: "NM",
  lattitude: "34.038",
  longitude: "-106.94",
  spring_name: "SOCORRO SPRING SEDILLO SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "SOCORRO 7.5"
  },
  {
  state_code: "NM",
  lattitude: "35.793",
  longitude: "-106.685",
  spring_name: "SODA DAM HOT SPRINGS",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "JEMEZ SPRINGS 7.5"
  },
  {
  state_code: "NM",
  lattitude: "32.606",
  longitude: "-107.19",
  spring_name: "SOUSE SPRINGS",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "SOUSE SPRINGS 7.5"
  },
  {
  state_code: "NM",
  lattitude: "35.849",
  longitude: "-106.629",
  spring_name: "SPENCE HOT SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "JEMEZ SPRINGS 7.5"
  },
  {
  state_code: "NM",
  lattitude: "34.698",
  longitude: "-107.129",
  spring_name: "SPRING",
  degrees_f: "71",
  degrees_c: "22",
  usgs_quadrangle: "MESA APAREJO 15"
  },
  {
  state_code: "NM",
  lattitude: "33.233",
  longitude: "-108.235",
  spring_name: "SPRING (HOT)",
  degrees_f: "149",
  degrees_c: "65",
  usgs_quadrangle: "GILA HOT SPRINGS 7.5"
  },
  {
  state_code: "NM",
  lattitude: "33.162",
  longitude: "-108.209",
  spring_name: "SPRING (HOT)",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "GILA HOT SPRINGS 7.5"
  },
  {
  state_code: "NM",
  lattitude: "34.808",
  longitude: "-107.091",
  spring_name: "SPRING (SALT)",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "SOUTH GARCIA SE 7.5"
  },
  {
  state_code: "NM",
  lattitude: "34.769",
  longitude: "-107.085",
  spring_name: "SPRING (SALT)",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "SOUTH GARCIA SE 7.5"
  },
  {
  state_code: "NM",
  lattitude: "34.847",
  longitude: "-107.091",
  spring_name: "SPRING (SALT)",
  degrees_f: "76",
  degrees_c: "24",
  usgs_quadrangle: "SOUTH GARCIA SE 7.5"
  },
  {
  state_code: "NM",
  lattitude: "33.274",
  longitude: "-108.25",
  spring_name: "SPRING MFG FOUR",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "(WOODLAND PARK 7.5)"
  },
  {
  state_code: "NM",
  lattitude: "33.285",
  longitude: "-108.262",
  spring_name: "SPRING MFG ONE",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "(WOODLAND PARK 7.5)"
  },
  {
  state_code: "NM",
  lattitude: "33.293",
  longitude: "-108.282",
  spring_name: "SPRING MFG TWO SPRING MFG THREE",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "(WOODLAND PARK 7.5)"
  },
  {
  state_code: "NM",
  lattitude: "36.368",
  longitude: "-106.059",
  spring_name: "STATUE SPRING",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "OJO CALIENTE 7.5"
  },
  {
  state_code: "NM",
  lattitude: "35.908",
  longitude: "-106.615",
  spring_name: "SULPHUR SPRINGS",
  degrees_f: "189",
  degrees_c: "87",
  usgs_quadrangle: "VALLE SAN ANTONIO 7.5"
  },
  {
  state_code: "NM",
  lattitude: "33.306",
  longitude: "-108.324",
  spring_name: "THE MEADOWS WARM SPRING",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(WOODLAND PARK 7.5)"
  },
  {
  state_code: "NM",
  lattitude: "33.135",
  longitude: "-107.254",
  spring_name: "TRUTH OR CONSEQUENCES",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "CUCHILLO 7.5"
  },
  {
  state_code: "NM",
  lattitude: "33.108",
  longitude: "-108.483",
  spring_name: "TURKEY CREEK HOT SPRING",
  degrees_f: "165",
  degrees_c: "74",
  usgs_quadrangle: "(CANYON HILL 7.5)"
  },
  {
  state_code: "NM",
  lattitude: "33.279",
  longitude: "-107.563",
  spring_name: "WARM SPRINGS",
  degrees_f: "87",
  degrees_c: "31",
  usgs_quadrangle: "CHISE 7.5"
  },
  {
  state_code: "NM",
  lattitude: "35.646",
  longitude: "-106.888",
  spring_name: "WARM SPRINGS",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "HOLY GHOST SPRING 7.5"
  },
  {
  state_code: "NM",
  lattitude: "34.326",
  longitude: "-107.095",
  spring_name: "null",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(RILEY 15)"
  },
  {
  state_code: "NM",
  lattitude: "34.158",
  longitude: "-108.319",
  spring_name: "null",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NM",
  lattitude: "35.308",
  longitude: "-106.471",
  spring_name: "null",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(PLACITAS 7.5)"
  },
  {
  state_code: "NM",
  lattitude: "36.528",
  longitude: "-105.713",
  spring_name: "null",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "(ARROYO HONDO 7.5)"
  },
  {
  state_code: "NM",
  lattitude: "32.953",
  longitude: "-107.58",
  spring_name: "null",
  degrees_f: "94",
  degrees_c: "35",
  usgs_quadrangle: "(HILLSBORO 15)"
  },
  {
  state_code: "NM",
  lattitude: "32.693",
  longitude: "-107.811",
  spring_name: "null",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(DWYER 15)"
  },
  {
  state_code: "NM",
  lattitude: "32.975",
  longitude: "-108.631",
  spring_name: "null",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(CLIFF 15)"
  },
  {
  state_code: "NM",
  lattitude: "32.899",
  longitude: "-109.035",
  spring_name: "null",
  degrees_f: "69",
  degrees_c: "21",
  usgs_quadrangle: "(YORK VALLEY 15)"
  },
  {
  state_code: "NM",
  lattitude: "33.813",
  longitude: "-106.971",
  spring_name: "null",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(SAN ANTONIO 15)"
  },
  {
  state_code: "NM",
  lattitude: "33.258",
  longitude: "-108.233",
  spring_name: "null",
  degrees_f: "94",
  degrees_c: "34",
  usgs_quadrangle: "(BURNT CORRAL CANYON 7.5)"
  },
  {
  state_code: "NM",
  lattitude: "33.212",
  longitude: "-108.228",
  spring_name: "null",
  degrees_f: "149",
  degrees_c: "65",
  usgs_quadrangle: "(GILA HOT SPRINGS 7.5)"
  },
  {
  state_code: "NM",
  lattitude: "34.264",
  longitude: "-106.883",
  spring_name: "null",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(SAN ACACIA 7.5)"
  },
  {
  state_code: "NM",
  lattitude: "34.916",
  longitude: "-107.143",
  spring_name: "null",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(SOUTH GARCIA 15)"
  },
  {
  state_code: "NM",
  lattitude: "34.883",
  longitude: "-107.092",
  spring_name: "null",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(SOUTH GARCIA 7.5)"
  },
  {
  state_code: "NM",
  lattitude: "34.815",
  longitude: "-107.388",
  spring_name: "null",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(MARMON RANCH 7.5)"
  },
  {
  state_code: "NM",
  lattitude: "34.791",
  longitude: "-107.091",
  spring_name: "null",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "(SOUTH GARCIA SE 7.5)"
  },
  {
  state_code: "NV",
  lattitude: "39.565",
  longitude: "-118.856",
  spring_name: "(SODA LAKE AREA)",
  degrees_f: "210",
  degrees_c: "99",
  usgs_quadrangle: "SODA LAKE 15"
  },
  {
  state_code: "NV",
  lattitude: "38.365",
  longitude: "-115.867",
  spring_name: "ABEL SPRING",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "THE WALL SE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "37.825",
  longitude: "-117.337",
  spring_name: "ALKALI HOT SPRING",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "ALKALI 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.944",
  longitude: "-119.509",
  spring_name: "ANAHO ISLAND SPRING",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "(SUTCLIFFE 15)"
  },
  {
  state_code: "NV",
  lattitude: "36.942",
  longitude: "-115.425",
  spring_name: "ASH CREEK SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(DOG BONE LAKE NORTH 7.5)"
  },
  {
  state_code: "NV",
  lattitude: "37.463",
  longitude: "-115.192",
  spring_name: "ASH SPRINGS",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "ASH SPRINGS 7.5"
  },
  {
  state_code: "NV",
  lattitude: "36.426",
  longitude: "-116.411",
  spring_name: "ASH TREE SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(ASH MEADOWS 15)"
  },
  {
  state_code: "NV",
  lattitude: "41.921",
  longitude: "-118.709",
  spring_name: "BALTAZOR HOT SPRING",
  degrees_f: "181",
  degrees_c: "83",
  usgs_quadrangle: "DENIO 15"
  },
  {
  state_code: "NV",
  lattitude: "39.558",
  longitude: "-116.36",
  spring_name: "BARTINE HOT SPRINGS",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "BARTINE RANCH 15"
  },
  {
  state_code: "NV",
  lattitude: "36.918",
  longitude: "-116.744",
  spring_name: "BEATTY MUNICIPAL SPRING",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "BARE MTN. 15"
  },
  {
  state_code: "NV",
  lattitude: "37.783",
  longitude: "-114.528",
  spring_name: "BENNETT SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "BENNETT PASS 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.567",
  longitude: "-116.588",
  spring_name: "BEOWAWE HOT SPRINGS (THE GEYSERS)",
  degrees_f: "208",
  degrees_c: "98",
  usgs_quadrangle: "DUNPHY 15"
  },
  {
  state_code: "NV",
  lattitude: "36.375",
  longitude: "-116.274",
  spring_name: "BIG (ASH MEADOWS) SPRING",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  lattitude: "38.954",
  longitude: "-117.049",
  spring_name: "BIG BLUE (A) SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "CARVERS NE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.072",
  longitude: "-115.635",
  spring_name: "BIG BLUE SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "GREEN SPRINGS 15"
  },
  {
  state_code: "NV",
  lattitude: "38.95",
  longitude: "-115.7",
  spring_name: "BIG WARM SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "DUCKWATER 15"
  },
  {
  state_code: "NV",
  lattitude: "40.972",
  longitude: "-119.007",
  spring_name: "BLACK ROCK HOT SPRING",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "38.563",
  longitude: "-115.528",
  spring_name: "BLUE EAGLE SPRINGS",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "BLUE EAGLE SPRINGS 15"
  },
  {
  state_code: "NV",
  lattitude: "36.389",
  longitude: "-114.433",
  spring_name: "BLUE POINT SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "OVERTON BEACH 15"
  },
  {
  state_code: "NV",
  lattitude: "41.925",
  longitude: "-118.805",
  spring_name: "BOG HOT SPRINGS",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "RAILROAD POINT 15"
  },
  {
  state_code: "NV",
  lattitude: "40.262",
  longitude: "-119.379",
  spring_name: "BOILING SPRINGS",
  degrees_f: "187",
  degrees_c: "86",
  usgs_quadrangle: "KUMIVA PEAK 15"
  },
  {
  state_code: "NV",
  lattitude: "36.363",
  longitude: "-116.271",
  spring_name: "BOLE SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  lattitude: "39.342",
  longitude: "-118.578",
  spring_name: "BORAX SPRING",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "(CARSON LAKE 15)"
  },
  {
  state_code: "NV",
  lattitude: "39.286",
  longitude: "-119.84",
  spring_name: "BOWERS MANSION HOT SPRING",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "WASHOE CITY 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.787",
  longitude: "-119.011",
  spring_name: "BRADYS HOT SPRINGS",
  degrees_f: "209",
  degrees_c: "98",
  usgs_quadrangle: "FIREBALL RIDGE 15"
  },
  {
  state_code: "NV",
  lattitude: "40.829",
  longitude: "-117.306",
  spring_name: "BROOKS SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "BROOKS SPRING 7.5"
  },
  {
  state_code: "NV",
  lattitude: "36.033",
  longitude: "-115.888",
  spring_name: "BROWNS SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "PAHRUMP 15"
  },
  {
  state_code: "NV",
  lattitude: "40.22",
  longitude: "-116.068",
  spring_name: "BRUFFEYS HOT SPRINGS",
  degrees_f: "149",
  degrees_c: "65",
  usgs_quadrangle: "MINERAL HILL 15"
  },
  {
  state_code: "NV",
  lattitude: "40.418",
  longitude: "-117.415",
  spring_name: "BUFFALO SPRINGS",
  degrees_f: "162",
  degrees_c: "72",
  usgs_quadrangle: "BUFFALO SPRINGS 15"
  },
  {
  state_code: "NV",
  lattitude: "40.368",
  longitude: "-117.327",
  spring_name: "BUFFALO VALLEY HOT SPRINGS",
  degrees_f: "174",
  degrees_c: "79",
  usgs_quadrangle: "BUFFALO SPRINGS 15"
  },
  {
  state_code: "NV",
  lattitude: "36.968",
  longitude: "-116.723",
  spring_name: "BURRELL HOT SPRING",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "BARE MTN. 15"
  },
  {
  state_code: "NV",
  lattitude: "40.77",
  longitude: "-119.113",
  spring_name: "BUTTE SPRINGS (TREGO HOT SPRINGS)",
  degrees_f: "187",
  degrees_c: "86",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "38.44",
  longitude: "-115.011",
  spring_name: "BUTTERFIELD SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "SUNNYSIDE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "36.428",
  longitude: "-116.303",
  spring_name: "BUTTON SPRINGS",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  lattitude: "41.022",
  longitude: "-119.275",
  spring_name: "CAINE SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "37.621",
  longitude: "-114.51",
  spring_name: "CALIENTE HOT SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "(CALIENTE 7.5)"
  },
  {
  state_code: "NV",
  lattitude: "39.547",
  longitude: "-114.915",
  spring_name: "CAMPBELL RANCH SPRINGS",
  degrees_f: "76",
  degrees_c: "24",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "41.258",
  longitude: "-118.937",
  spring_name: "CANE SPRINGS",
  degrees_f: "74",
  degrees_c: "23",
  usgs_quadrangle: "PAIUTE MEADOWS 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.29",
  longitude: "-116.049",
  spring_name: "CARLOTTI RANCH SPRINGS",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "PINE VALLEY 15"
  },
  {
  state_code: "NV",
  lattitude: "39.193",
  longitude: "-119.752",
  spring_name: "CARSON HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "CARSON CITY 7.5"
  },
  {
  state_code: "NV",
  lattitude: "37.751",
  longitude: "-116.274",
  spring_name: "CEDAR SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "KAWICH PEAK 15"
  },
  {
  state_code: "NV",
  lattitude: "38.992",
  longitude: "-117.042",
  spring_name: "CHARNOCK (BIG BLUE) SPRINGS",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "CARVERS NE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.883",
  longitude: "-114.893",
  spring_name: "CHERRY CREEK HOT SPRINGS",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "40.187",
  longitude: "-116.79",
  spring_name: "CHILLIS HOT SPRING",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "CARICO LAKE 15"
  },
  {
  state_code: "NV",
  lattitude: "38.464",
  longitude: "-115.792",
  spring_name: "CHIMNEY WARM SPRING",
  degrees_f: "160",
  degrees_c: "71",
  usgs_quadrangle: "THE WALL NE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.087",
  longitude: "-114.647",
  spring_name: "COLLAR AND ELBOW SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "38.388",
  longitude: "-115.866",
  spring_name: "COYOTE HOLE SPRING",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "THE WALL NE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.763",
  longitude: "-119.172",
  spring_name: "COYOTE SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "40.404",
  longitude: "-116.517",
  spring_name: "CRESCENT VALLEY HOT SPRINGS",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "CRESCENT VALLEY 15"
  },
  {
  state_code: "NV",
  lattitude: "40.417",
  longitude: "-116.507",
  spring_name: "CRESCENT VALLEY HOT SPRINGS",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "CRESCENT VALLEY 15"
  },
  {
  state_code: "NV",
  lattitude: "36.421",
  longitude: "-116.322",
  spring_name: "CRYSTAL POOL",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  lattitude: "37.532",
  longitude: "-115.233",
  spring_name: "CRYSTAL SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "HIKO 7.5"
  },
  {
  state_code: "NV",
  lattitude: "38.822",
  longitude: "-117.183",
  spring_name: "DARROUGHS HOT SPRINGS",
  degrees_f: "203",
  degrees_c: "95",
  usgs_quadrangle: "CARVERS 7.5"
  },
  {
  state_code: "NV",
  lattitude: "36.408",
  longitude: "-116.313",
  spring_name: "DAVIS RANCH SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(ASH MEADOWS 15)"
  },
  {
  state_code: "NV",
  lattitude: "36.402",
  longitude: "-116.302",
  spring_name: "DAVIS RANCH SPRINGS",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  lattitude: "37.86",
  longitude: "-114.321",
  spring_name: "DELMUES SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "CONDOR CANYON 7.5"
  },
  {
  state_code: "NV",
  lattitude: "36.425",
  longitude: "-116.291",
  spring_name: "DEVILS HOLE",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  lattitude: "39.031",
  longitude: "-116.666",
  spring_name: "DIANAS PUNCH BOWL",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "DIANAS PUNCH BOWL 15"
  },
  {
  state_code: "NV",
  lattitude: "39.42",
  longitude: "-119.738",
  spring_name: "DIMONTE SPRING",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "(STEAMBOAT 7.5)"
  },
  {
  state_code: "NV",
  lattitude: "39.866",
  longitude: "-118.017",
  spring_name: "DIXIE COMSTOCK MINE",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "DIXIE HOT SPRINGS 15"
  },
  {
  state_code: "NV",
  lattitude: "39.797",
  longitude: "-118.067",
  spring_name: "DIXIE HOT SPRINGS",
  degrees_f: "162",
  degrees_c: "72",
  usgs_quadrangle: "DIXIE HOT SPRINGS 15"
  },
  {
  state_code: "NV",
  lattitude: "39.442",
  longitude: "-119.743",
  spring_name: "DOUBLE DIAMOND SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "(STEAMBOAT 7.5)"
  },
  {
  state_code: "NV",
  lattitude: "41.051",
  longitude: "-119.028",
  spring_name: "DOUBLE HOT SPRINGS",
  degrees_f: "178",
  degrees_c: "81",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "38.965",
  longitude: "-118.689",
  spring_name: "DOUBLE SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "GILLIS CANYON 15"
  },
  {
  state_code: "NV",
  lattitude: "38.796",
  longitude: "-119.65",
  spring_name: "DOUD SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "MT. SIEGEL 15"
  },
  {
  state_code: "NV",
  lattitude: "41.567",
  longitude: "-118.564",
  spring_name: "DYKE HOT SPRINGS",
  degrees_f: "158",
  degrees_c: "70",
  usgs_quadrangle: "DUFFER PEAK 15"
  },
  {
  state_code: "NV",
  lattitude: "39.733",
  longitude: "-119.039",
  spring_name: "EAGLE SALT WORKS SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(TWO TIPS 15)"
  },
  {
  state_code: "NV",
  lattitude: "40.813",
  longitude: "-115.778",
  spring_name: "ELKO HOT SPRING",
  degrees_f: "190",
  degrees_c: "88",
  usgs_quadrangle: "ELKO WEST 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.684",
  longitude: "-116.153",
  spring_name: "ELLISON RANCH WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "CARLIN 15"
  },
  {
  state_code: "NV",
  lattitude: "38.622",
  longitude: "-115.047",
  spring_name: "EMIGRANT SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "MOORMAN SPRING SE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "36.491",
  longitude: "-116.342",
  spring_name: "FAIRBANKS SPRING SODA SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  lattitude: "37.997",
  longitude: "-118.039",
  spring_name: "FISH SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(DAVIS MOUNTAIN 15)"
  },
  {
  state_code: "NV",
  lattitude: "40.103",
  longitude: "-119.884",
  spring_name: "FISH SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "STATE LINE PEAK 7.5"
  },
  {
  state_code: "NV",
  lattitude: "38.81",
  longitude: "-116.397",
  spring_name: "FISH SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "FISH SPRINGS 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.763",
  longitude: "-118.279",
  spring_name: "FIVEMILE SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "TRIDENT PEAK 15"
  },
  {
  state_code: "NV",
  lattitude: "38.423",
  longitude: "-115.022",
  spring_name: "FLAG SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "SUNNYSIDE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "37.896",
  longitude: "-114.227",
  spring_name: "FLATNOSE RANCH SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "URSINE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.857",
  longitude: "-119.328",
  spring_name: "FLY RANCH (WARDS) HOT SPRINGS",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "40.079",
  longitude: "-116.035",
  spring_name: "FLYNN RANCH SPRINGS",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "MINERAL HILL 15"
  },
  {
  state_code: "NV",
  lattitude: "39.954",
  longitude: "-117.917",
  spring_name: "FUMAROLES",
  degrees_f: "204",
  degrees_c: "96",
  usgs_quadrangle: "(HUMBOLDT SALT MARSH 15)"
  },
  {
  state_code: "NV",
  lattitude: "41.369",
  longitude: "-114.187",
  spring_name: "GAMBLE SPRING",
  degrees_f: "69",
  degrees_c: "20",
  usgs_quadrangle: "MONTELLO 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.884",
  longitude: "-114.117",
  spring_name: "GAMBLES HOLE",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "GOOSE CREEK 15"
  },
  {
  state_code: "NV",
  lattitude: "37.979",
  longitude: "-117.993",
  spring_name: "GAP SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "RHYOLITE RIDGE 15"
  },
  {
  state_code: "NV",
  lattitude: "38.645",
  longitude: "-114.632",
  spring_name: "GEYSER RANCH SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "MT. GRAFTON 7.5"
  },
  {
  state_code: "NV",
  lattitude: "38.654",
  longitude: "-114.633",
  spring_name: "GEYSER RANCH SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "MT. GRAFTON 7.5"
  },
  {
  state_code: "NV",
  lattitude: "38.671",
  longitude: "-114.628",
  spring_name: "GEYSER RANCH SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "MT. GRAFTON 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.814",
  longitude: "-115.612",
  spring_name: "GIOCOECHA WARM SPRINGS",
  degrees_f: "76",
  degrees_c: "24",
  usgs_quadrangle: "COLD CREEK RANCH 15"
  },
  {
  state_code: "NV",
  lattitude: "40.961",
  longitude: "-117.494",
  spring_name: "GOLCONDA HOT SPRING (NORTH)",
  degrees_f: "165",
  degrees_c: "74",
  usgs_quadrangle: "GOLCONDA 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.954",
  longitude: "-117.488",
  spring_name: "GOLCONDA HOT SPRING (SOUTH)",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "GOLCONDA 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.662",
  longitude: "-119.365",
  spring_name: "GREAT BOILING SPRING (GERLACH)",
  degrees_f: "208",
  degrees_c: "98",
  usgs_quadrangle: "GERLACH 15"
  },
  {
  state_code: "NV",
  lattitude: "38.292",
  longitude: "-114.272",
  spring_name: "HAMMOND RANCH SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "(TRAIL CANYON 7.5)"
  },
  {
  state_code: "NV",
  lattitude: "36.975",
  longitude: "-116.721",
  spring_name: "HICKS HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "BARE MTN. 15"
  },
  {
  state_code: "NV",
  lattitude: "37.598",
  longitude: "-115.215",
  spring_name: "HIKO SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "HIKO 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.059",
  longitude: "-119.815",
  spring_name: "HOBO HOT SPRINGS",
  degrees_f: "114",
  degrees_c: "46",
  usgs_quadrangle: "GENOA 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.178",
  longitude: "-117.496",
  spring_name: "HOME STATION RANCH HOT SPRING",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "MT. MOSES 15"
  },
  {
  state_code: "NV",
  lattitude: "40.603",
  longitude: "-116.463",
  spring_name: "HORSESHOE RANCH SPRINGS",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "(BEOWAWE 15)"
  },
  {
  state_code: "NV",
  lattitude: "38.521",
  longitude: "-116.365",
  spring_name: "HOT CREEK RANCH HOT SPRING",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "HOBBLE CANYON 7.5"
  },
  {
  state_code: "NV",
  lattitude: "38.383",
  longitude: "-115.153",
  spring_name: "HOT CREEK RANCH SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "SUNNYSIDE NW 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.576",
  longitude: "-115.181",
  spring_name: "HOT CREEK SPRINGS",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "HOT CREEK 15"
  },
  {
  state_code: "NV",
  lattitude: "38.437",
  longitude: "-116.277",
  spring_name: "HOT CREEK VALLEY SPRING",
  degrees_f: "142",
  degrees_c: "61",
  usgs_quadrangle: "(BLUE JAY SPRING 7.5)"
  },
  {
  state_code: "NV",
  lattitude: "40.819",
  longitude: "-115.777",
  spring_name: "HOT HOLE",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "ELKO WEST 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.148",
  longitude: "-116.733",
  spring_name: "HOT LAKE",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "SQUAW VALLEY RANCH 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.922",
  longitude: "-117.108",
  spring_name: "HOT POT (BLOSSOM HOT SPRINGS)",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "HOT POT 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.389",
  longitude: "-119.402",
  spring_name: "HOT SEEPS (SAN EMIDIO DESERT)",
  degrees_f: "203",
  degrees_c: "95",
  usgs_quadrangle: "(KUMIVA PEAK 15)"
  },
  {
  state_code: "NV",
  lattitude: "41.145",
  longitude: "-114.994",
  spring_name: "HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "OXLEY PEAK 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.98",
  longitude: "-114.376",
  spring_name: "HOT SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "GOLLAHER MOUNTAIN 15"
  },
  {
  state_code: "NV",
  lattitude: "35.944",
  longitude: "-114.731",
  spring_name: "HOT SPRING",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "RINGBOLT RAPIDS 7.5"
  },
  {
  state_code: "NV",
  lattitude: "35.964",
  longitude: "-114.743",
  spring_name: "HOT SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "RINGBOLT RAPIDS 7.5"
  },
  {
  state_code: "NV",
  lattitude: "38.859",
  longitude: "-119.175",
  spring_name: "HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "YERINGTON 15"
  },
  {
  state_code: "NV",
  lattitude: "39.041",
  longitude: "-116.663",
  spring_name: "HOT SPRING",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "DIANAS PUNCH BOWL 15"
  },
  {
  state_code: "NV",
  lattitude: "40.316",
  longitude: "-116.433",
  spring_name: "HOT SPRING",
  degrees_f: "186",
  degrees_c: "86",
  usgs_quadrangle: "FRENCHIE CREEK 15"
  },
  {
  state_code: "NV",
  lattitude: "41.175",
  longitude: "-115.278",
  spring_name: "HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "TWIN BUTTES 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.19",
  longitude: "-115.287",
  spring_name: "HOT SPRING",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "TWIN BUTTES 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.673",
  longitude: "-116.838",
  spring_name: "HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "BATTLE MOUNTAIN 15"
  },
  {
  state_code: "NV",
  lattitude: "41.261",
  longitude: "-115.305",
  spring_name: "HOT SPRINGS",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "HOT SPRINGS CREEK 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.325",
  longitude: "-116.058",
  spring_name: "HOT SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "PINE VALLEY 15"
  },
  {
  state_code: "NV",
  lattitude: "41.108",
  longitude: "-117.578",
  spring_name: "HOT SPRINGS",
  degrees_f: "158",
  degrees_c: "70",
  usgs_quadrangle: "(BLISS 15)"
  },
  {
  state_code: "NV",
  lattitude: "41.183",
  longitude: "-114.991",
  spring_name: "HOT SPRINGS",
  degrees_f: "142",
  degrees_c: "61",
  usgs_quadrangle: "OXLEY PEAK 7.5"
  },
  {
  state_code: "NV",
  lattitude: "35.982",
  longitude: "-114.748",
  spring_name: "HOT SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "RINGBOLT RAPIDS 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.941",
  longitude: "-116.681",
  spring_name: "HOT SPRINGS",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "WALTI HOT SPRINGS 15"
  },
  {
  state_code: "NV",
  lattitude: "39.316",
  longitude: "-117.549",
  spring_name: "HOT SPRINGS",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "CARROLL SUMMIT SE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.308",
  longitude: "-117.552",
  spring_name: "HOT SPRINGS",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "CARROLL SUMMIT SE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.191",
  longitude: "-117.107",
  spring_name: "HOT SPRINGS",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "THE CEDARS 15"
  },
  {
  state_code: "NV",
  lattitude: "40.198",
  longitude: "-117.103",
  spring_name: "HOT SPRINGS",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "THE CEDARS 15"
  },
  {
  state_code: "NV",
  lattitude: "40.761",
  longitude: "-117.492",
  spring_name: "HOT SPRINGS",
  degrees_f: "185",
  degrees_c: "85",
  usgs_quadrangle: "GOLDRUN CREEK 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.699",
  longitude: "-116.133",
  spring_name: "HOT SPRINGS (CARLIN)",
  degrees_f: "174",
  degrees_c: "79",
  usgs_quadrangle: "(CARLIN 15)"
  },
  {
  state_code: "NV",
  lattitude: "40.183",
  longitude: "-117.102",
  spring_name: "HOT SPRINGS RANCH",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "THE CEDARS 15"
  },
  {
  state_code: "NV",
  lattitude: "41.05",
  longitude: "-117.1",
  spring_name: "HOT SPRINGS RANCH SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "40.765",
  longitude: "-116.04",
  spring_name: "HOT SULPHUR SPRINGS",
  degrees_f: "147",
  degrees_c: "64",
  usgs_quadrangle: "HUNTSMAN RANCH 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.468",
  longitude: "-116.15",
  spring_name: "HOT SULPHUR SPRINGS (TUSCARORA)",
  degrees_f: "194",
  degrees_c: "90",
  usgs_quadrangle: "TUSCARORA 15"
  },
  {
  state_code: "NV",
  lattitude: "41.721",
  longitude: "-118.505",
  spring_name: "HOWARD HOT SPRING",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "DUFFER PEAK 15"
  },
  {
  state_code: "NV",
  lattitude: "39.457",
  longitude: "-119.722",
  spring_name: "HUFFAKER SPRINGS",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "(STEAMBOAT 7.5)"
  },
  {
  state_code: "NV",
  lattitude: "40.003",
  longitude: "-117.718",
  spring_name: "HYDER HOT SPRINGS",
  degrees_f: "176",
  degrees_c: "80",
  usgs_quadrangle: "CAIN MOUNTAIN 15"
  },
  {
  state_code: "NV",
  lattitude: "36.565",
  longitude: "-115.671",
  spring_name: "INDIAN SPRINGS",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "INDIAN SPRINGS 7.5"
  },
  {
  state_code: "NV",
  lattitude: "38.458",
  longitude: "-117.303",
  spring_name: "INDIAN SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(SAN ANTONIO RANCH 15)"
  },
  {
  state_code: "NV",
  lattitude: "40.929",
  longitude: "-116.895",
  spring_name: "IZZENHOOD RANCH SPRINGS",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "IZZENHOOD RANCH 7.5"
  },
  {
  state_code: "NV",
  lattitude: "36.39",
  longitude: "-116.278",
  spring_name: "JACK RABBIT SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  lattitude: "40.967",
  longitude: "-114.515",
  spring_name: "JOHNSON RANCH SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "INDEPENDENCE VALLEY"
  },
  {
  state_code: "NV",
  lattitude: "38.554",
  longitude: "-115.531",
  spring_name: "KATE SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "BLUE EAGLE SPRINGS 15"
  },
  {
  state_code: "NV",
  lattitude: "39.404",
  longitude: "-116.347",
  spring_name: "KLOBE (BARTHOLOMAE) HOT SPRING",
  degrees_f: "156",
  degrees_c: "69",
  usgs_quadrangle: "ANTELOPE PEAK 15"
  },
  {
  state_code: "NV",
  lattitude: "40.408",
  longitude: "-117.883",
  spring_name: "KYLE HOT SPRINGS",
  degrees_f: "171",
  degrees_c: "77",
  usgs_quadrangle: "KYLE HOT SPRINGS 15"
  },
  {
  state_code: "NV",
  lattitude: "36.205",
  longitude: "-115.141",
  spring_name: "KYLE SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "LAS VEGAS NW 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.283",
  longitude: "-114.866",
  spring_name: "LACKAWANNA HOT SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "EAST ELY 7.5"
  },
  {
  state_code: "NV",
  lattitude: "36.173",
  longitude: "-115.191",
  spring_name: "LAS VEGAS SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(LAS VEGAS NW 7.5)"
  },
  {
  state_code: "NV",
  lattitude: "39.512",
  longitude: "-119.907",
  spring_name: "LAWTON HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "VERDI 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.604",
  longitude: "-117.648",
  spring_name: "LEACH HOT SPRINGS",
  degrees_f: "207",
  degrees_c: "97",
  usgs_quadrangle: "LEACH HOT SPRINGS 15"
  },
  {
  state_code: "NV",
  lattitude: "39.208",
  longitude: "-118.723",
  spring_name: "LEE HOT SPRINGS ALLEN SPRINGS",
  degrees_f: "190",
  degrees_c: "88",
  usgs_quadrangle: "ALLEN SPRINGS 15"
  },
  {
  state_code: "NV",
  lattitude: "39.893",
  longitude: "-116.649",
  spring_name: "LITTLE HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "WALTI HOT SPRINGS 15"
  },
  {
  state_code: "NV",
  lattitude: "38.937",
  longitude: "-115.695",
  spring_name: "LITTLE WARM SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "DUCKWATER 15"
  },
  {
  state_code: "NV",
  lattitude: "38.556",
  longitude: "-115.767",
  spring_name: "LOCKES BIG SPRING HAY CORRAL SPR",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "LOCKES 7.5"
  },
  {
  state_code: "NV",
  lattitude: "36.468",
  longitude: "-116.325",
  spring_name: "LONGSTREET SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  lattitude: "40.035",
  longitude: "-117.604",
  spring_name: "LOWER RANCH HOT SPRINGS",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "CAIN MOUNTAIN 15"
  },
  {
  state_code: "NV",
  lattitude: "39.792",
  longitude: "-114.692",
  spring_name: "LOWER SHELLBOURNE SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "41.052",
  longitude: "-118.717",
  spring_name: "MACFARLANE HOT SPRING",
  degrees_f: "170",
  degrees_c: "77",
  usgs_quadrangle: "KING LEAR PEAK 15"
  },
  {
  state_code: "NV",
  lattitude: "36.147",
  longitude: "-115.893",
  spring_name: "MANSE RANCH SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "PAHRUMP 15"
  },
  {
  state_code: "NV",
  lattitude: "40.08",
  longitude: "-117.604",
  spring_name: "MCCOY SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "CAIN MOUNTAIN 15"
  },
  {
  state_code: "NV",
  lattitude: "39.413",
  longitude: "-114.779",
  spring_name: "MCGILL SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "MCGILL 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.028",
  longitude: "-117.136",
  spring_name: "MCLEOD RANCH HOT SPRING",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "MILLETT RANCH 15"
  },
  {
  state_code: "NV",
  lattitude: "41.788",
  longitude: "-114.735",
  spring_name: "MINERAL HOT SPRING",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "(DELAPLAIN 15)"
  },
  {
  state_code: "NV",
  lattitude: "39.484",
  longitude: "-119.804",
  spring_name: "MOANA SPRINGS",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "MT. ROSE NE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "36.71",
  longitude: "-114.714",
  spring_name: "MOAPA WARM SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "MOAPA 15"
  },
  {
  state_code: "NV",
  lattitude: "39.665",
  longitude: "-114.807",
  spring_name: "MONTE NEVA HOT SPRINGS",
  degrees_f: "176",
  degrees_c: "80",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "38.352",
  longitude: "-115.181",
  spring_name: "MOON RIVER SPRING",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "HOT CREEK BUTTE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "38.594",
  longitude: "-115.138",
  spring_name: "MOORMAN SPRING",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "MOORMAN SPRING 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.313",
  longitude: "-117.07",
  spring_name: "MOUND SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "MC COY 15"
  },
  {
  state_code: "NV",
  lattitude: "40.653",
  longitude: "-119.378",
  spring_name: "MUD SPRINGS",
  degrees_f: "184",
  degrees_c: "84",
  usgs_quadrangle: "(GERLACH 15)"
  },
  {
  state_code: "NV",
  lattitude: "36.722",
  longitude: "-114.716",
  spring_name: "MUDDY SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "MOAPA 15"
  },
  {
  state_code: "NV",
  lattitude: "41.354",
  longitude: "-119.116",
  spring_name: "MUSTANG SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "BIG MOUNTAIN 7.5"
  },
  {
  state_code: "NV",
  lattitude: "38.899",
  longitude: "-119.41",
  spring_name: "NEVADA (HINDS) HOT SPRINGS",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "WELLINGTON 15"
  },
  {
  state_code: "NV",
  lattitude: "39.159",
  longitude: "-119.737",
  spring_name: "NEVADA STATE PRISON SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(NEW EMPIRE 7.5)"
  },
  {
  state_code: "NV",
  lattitude: "41.929",
  longitude: "-114.071",
  spring_name: "NILE SPRING",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "GOOSE CREEK 15"
  },
  {
  state_code: "NV",
  lattitude: "41.706",
  longitude: "-118.261",
  spring_name: "NINEMILE SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "QUINN RIVER CROSSING 15"
  },
  {
  state_code: "NV",
  lattitude: "38.531",
  longitude: "-116.405",
  spring_name: "OLD DUGAN RANCH HOT SPRINGS",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "LITTLE FISH LAKE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "36.207",
  longitude: "-115.983",
  spring_name: "PAHRUMP (BENNETTS) SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "PAHRUMP 15"
  },
  {
  state_code: "NV",
  lattitude: "41.809",
  longitude: "-118.861",
  spring_name: "PAINTED HILLS MINE",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "(RAILROAD POINT 15)"
  },
  {
  state_code: "NV",
  lattitude: "37.807",
  longitude: "-114.38",
  spring_name: "PANACA SPRING",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "PANACA 7.5"
  },
  {
  state_code: "NV",
  lattitude: "36.464",
  longitude: "-116.319",
  spring_name: "PARENT SPRINGS",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  lattitude: "39.597",
  longitude: "-119.11",
  spring_name: "PATUA HOT SPRINGS (FERNLEY)",
  degrees_f: "187",
  degrees_c: "86",
  usgs_quadrangle: "(TWO TIPS 15)"
  },
  {
  state_code: "NV",
  lattitude: "37.822",
  longitude: "-117.48",
  spring_name: "PEARL HOT SPRINGS",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "PAYMASTER RIDGE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.385",
  longitude: "-116.058",
  spring_name: "PETAINI SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(TUSCARORA 15)"
  },
  {
  state_code: "NV",
  lattitude: "39.559",
  longitude: "-117.427",
  spring_name: "PETERSONS MILL HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "MOUNT AIRY 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.363",
  longitude: "-118.788",
  spring_name: "PINTO HOT SPRINGS",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "PINTO MOUNTAIN 7.5"
  },
  {
  state_code: "NV",
  lattitude: "36.402",
  longitude: "-116.274",
  spring_name: "POINT OF ROCKS SPRINGS KING SPRING",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  lattitude: "39.08",
  longitude: "-116.639",
  spring_name: "POTTS RANCH HOT SPRINGS",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "DIANAS PUNCH BOWL 15"
  },
  {
  state_code: "NV",
  lattitude: "38.927",
  longitude: "-115.082",
  spring_name: "PRESTON SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "39.98",
  longitude: "-119.502",
  spring_name: "PYRAMID ISLAND HOT SPRING",
  degrees_f: "null",
  degrees_c: "null",
  usgs_quadrangle: "(SUTCLIFFE 15)"
  },
  {
  state_code: "NV",
  lattitude: "40.592",
  longitude: "-116.157",
  spring_name: "RAINE RANCH SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "CARLIN 15"
  },
  {
  state_code: "NV",
  lattitude: "40.952",
  longitude: "-114.751",
  spring_name: "RALPHS WARM SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "SNOW WATER LAKE NE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "37.996",
  longitude: "-116.389",
  spring_name: "REVEILLE MILL SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "(KAWICH PEAK 15)"
  },
  {
  state_code: "NV",
  lattitude: "41.775",
  longitude: "-115.921",
  spring_name: "RIZZI RANCH HOT SPRING",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "MOUNTAIN CITY 15"
  },
  {
  state_code: "NV",
  lattitude: "36.378",
  longitude: "-114.443",
  spring_name: "ROGERS SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "OVERTON BEACH 15"
  },
  {
  state_code: "NV",
  lattitude: "36.479",
  longitude: "-116.326",
  spring_name: "ROGERS SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  lattitude: "40.873",
  longitude: "-117.937",
  spring_name: "ROSE CREEK SPRING",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "ROSE CREEK 15"
  },
  {
  state_code: "NV",
  lattitude: "41.877",
  longitude: "-115.628",
  spring_name: "ROWLAND HOT SPRINGS",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "ROWLAND 15"
  },
  {
  state_code: "NV",
  lattitude: "41.867",
  longitude: "-114.692",
  spring_name: "SAN JACINTO RANCH SPRING",
  degrees_f: "148",
  degrees_c: "64",
  usgs_quadrangle: "(DELAPLAIN 15)"
  },
  {
  state_code: "NV",
  lattitude: "37.906",
  longitude: "-118.171",
  spring_name: "SAND SPRING",
  degrees_f: "74",
  degrees_c: "23",
  usgs_quadrangle: "DAVIS MOUNTAIN 15"
  },
  {
  state_code: "NV",
  lattitude: "37.741",
  longitude: "-115.753",
  spring_name: "SAND SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "WHITE BLOTCH SPRINGS 15"
  },
  {
  state_code: "NV",
  lattitude: "39.281",
  longitude: "-118.42",
  spring_name: "SAND SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "FOURMILE FLAT 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.058",
  longitude: "-119.742",
  spring_name: "SARATOGA HOT SPRING",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "MC TARNAHAN HILL 7.5"
  },
  {
  state_code: "NV",
  lattitude: "38.255",
  longitude: "-116.829",
  spring_name: "SAULSBURY WARM SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "SAULSBURY BASIN 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.458",
  longitude: "-114.756",
  spring_name: "SCHOOLHOUSE SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "MCGILL 7.5"
  },
  {
  state_code: "NV",
  lattitude: "36.433",
  longitude: "-116.308",
  spring_name: "SCRUGGS SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  lattitude: "37.016",
  longitude: "-117.211",
  spring_name: "SEEP",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "BONNIE CLAIRE SW 7.5"
  },
  {
  state_code: "NV",
  lattitude: "36.567",
  longitude: "-114.446",
  spring_name: "SEEP",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(OVERTON 15)"
  },
  {
  state_code: "NV",
  lattitude: "41.732",
  longitude: "-119.785",
  spring_name: "SEEPS (HILLS WARM SPRING)",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "ALKALI LAKE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.995",
  longitude: "-117.854",
  spring_name: "SENATOR FUMAROLES",
  degrees_f: "B",
  degrees_c: "B",
  usgs_quadrangle: "(HUMBOLDT SALT MARSH 15)"
  },
  {
  state_code: "NV",
  lattitude: "39.943",
  longitude: "-116.073",
  spring_name: "SHIPLEY HOT SPRING",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "GARDEN VALLEY 15"
  },
  {
  state_code: "NV",
  lattitude: "37.761",
  longitude: "-117.632",
  spring_name: "SILVERPEAK HOT SPRING",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "SILVERPEAK 15"
  },
  {
  state_code: "NV",
  lattitude: "39.988",
  longitude: "-116.044",
  spring_name: "SIRI RANCH SPRING",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "GARDEN VALLEY 15"
  },
  {
  state_code: "NV",
  lattitude: "40.249",
  longitude: "-115.409",
  spring_name: "SMITH RANCH SPRINGS",
  degrees_f: "149",
  degrees_c: "65",
  usgs_quadrangle: "RUBY LAKE NW 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.526",
  longitude: "-118.876",
  spring_name: "SODA LAKE",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "(SODA LAKE 15)"
  },
  {
  state_code: "NV",
  lattitude: "38.343",
  longitude: "-118.103",
  spring_name: "SODA SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "SODAVILLE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.088",
  longitude: "-117.725",
  spring_name: "SOU (SEVEN DEVILS) HOT SPRINGS",
  degrees_f: "185",
  degrees_c: "85",
  usgs_quadrangle: "CAIN MOUNTAIN 15"
  },
  {
  state_code: "NV",
  lattitude: "38.823",
  longitude: "-116.717",
  spring_name: "SOUTH MOSQUITO CREEK RANCH SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "MOSQUITO CREEK 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.328",
  longitude: "-116.858",
  spring_name: "SPENCER HOT SPRINGS",
  degrees_f: "162",
  degrees_c: "72",
  usgs_quadrangle: "SPENCER HOT SPRINGS"
  },
  {
  state_code: "NV",
  lattitude: "39.853",
  longitude: "-119.719",
  spring_name: "SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "SUTCLIFFE 15"
  },
  {
  state_code: "NV",
  lattitude: "36.565",
  longitude: "-115.623",
  spring_name: "SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(INDIAN SPRINGS SE 7.5)"
  },
  {
  state_code: "NV",
  lattitude: "36.002",
  longitude: "-114.742",
  spring_name: "SPRING",
  degrees_f: "145",
  degrees_c: "63",
  usgs_quadrangle: "(HOOVER DAM 15)"
  },
  {
  state_code: "NV",
  lattitude: "41.398",
  longitude: "-119.165",
  spring_name: "SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "SOLDIER MEADOW 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.53",
  longitude: "-118.57",
  spring_name: "SPRING",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "DUFFER PEAK 15"
  },
  {
  state_code: "NV",
  lattitude: "37.074",
  longitude: "-116.691",
  spring_name: "SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "THIRSTY CANYON 15"
  },
  {
  state_code: "NV",
  lattitude: "36.363",
  longitude: "-116.263",
  spring_name: "SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "ASH MEADOWS 15"
  },
  {
  state_code: "NV",
  lattitude: "36.404",
  longitude: "-116.383",
  spring_name: "SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(ASH MEADOWS 15)"
  },
  {
  state_code: "NV",
  lattitude: "36.414",
  longitude: "-116.292",
  spring_name: "SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(ASH MEADOWS 15)"
  },
  {
  state_code: "NV",
  lattitude: "36.437",
  longitude: "-116.206",
  spring_name: "SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "(AMARGOSA FLAT 7.5)"
  },
  {
  state_code: "NV",
  lattitude: "36.45",
  longitude: "-116.313",
  spring_name: "SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "(ASH MEADOWS 15)"
  },
  {
  state_code: "NV",
  lattitude: "36.942",
  longitude: "-116.729",
  spring_name: "SPRING",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "BARE MTN. 15"
  },
  {
  state_code: "NV",
  lattitude: "36.999",
  longitude: "-116.706",
  spring_name: "SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "BARE MTN. 15"
  },
  {
  state_code: "NV",
  lattitude: "39.917",
  longitude: "-114.667",
  spring_name: "SPRING",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "38.95",
  longitude: "-119.388",
  spring_name: "SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(WELLINGTON 15)"
  },
  {
  state_code: "NV",
  lattitude: "38.027",
  longitude: "-116.683",
  spring_name: "SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "40.025",
  longitude: "-117.646",
  spring_name: "SPRING",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "CAIN MOUNTAIN 15"
  },
  {
  state_code: "NV",
  lattitude: "40.992",
  longitude: "-117.763",
  spring_name: "SPRING",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "ROSE CREEK 15"
  },
  {
  state_code: "NV",
  lattitude: "41.066",
  longitude: "-114.99",
  spring_name: "SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "WELLS 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.187",
  longitude: "-116.805",
  spring_name: "SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "CARICO LAKE 15"
  },
  {
  state_code: "NV",
  lattitude: "41.365",
  longitude: "-119.221",
  spring_name: "SPRING (HOT)",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "MUD MEADOW 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.353",
  longitude: "-119.216",
  spring_name: "SPRING (HOT)",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "MUD MEADOW 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.386",
  longitude: "-114.165",
  spring_name: "SPRING (HOT)",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "TWELVEMILE RANCH 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.322",
  longitude: "-119.206",
  spring_name: "SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "MUD MEADOW 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.127",
  longitude: "-116.884",
  spring_name: "SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "CARICO LAKE 15"
  },
  {
  state_code: "NV",
  lattitude: "41.338",
  longitude: "-119.168",
  spring_name: "SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "MUD MEADOW 7.5"
  },
  {
  state_code: "NV",
  lattitude: "36.486",
  longitude: "-114.329",
  spring_name: "SPRINGS",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(OVERTON BEACH 15)"
  },
  {
  state_code: "NV",
  lattitude: "37.029",
  longitude: "-116.719",
  spring_name: "SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "THIRSTY CANYON 15"
  },
  {
  state_code: "NV",
  lattitude: "39.068",
  longitude: "-119.786",
  spring_name: "SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "GENOA 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.83",
  longitude: "-119.538",
  spring_name: "SPRINGS",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "41.339",
  longitude: "-119.192",
  spring_name: "SPRINGS (HOT)",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "MUD MEADOW 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.357",
  longitude: "-119.188",
  spring_name: "SPRINGS (HOT)",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "MUD MEADOW 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.378",
  longitude: "-119.182",
  spring_name: "SPRINGS (HOT)",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "SOLDIER MEADOW 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.388",
  longitude: "-119.743",
  spring_name: "STEAMBOAT SPRINGS",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "STEAMBOAT 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.38",
  longitude: "-119.74",
  spring_name: "STEAMBOAT SPRINGS",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "STEAMBOAT 7.5"
  },
  {
  state_code: "NV",
  lattitude: "38.398",
  longitude: "-115.862",
  spring_name: "STORM SPRING",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "THE WALL NE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.585",
  longitude: "-115.285",
  spring_name: "SULPHUR HOT SPRINGS",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "LAMOILLE 15"
  },
  {
  state_code: "NV",
  lattitude: "40.864",
  longitude: "-117.349",
  spring_name: "SULPHUR SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "BROOKS SPRING 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.832",
  longitude: "-116.069",
  spring_name: "SULPHUR SPRING",
  degrees_f: "74",
  degrees_c: "23",
  usgs_quadrangle: "GARDEN VALLEY 15"
  },
  {
  state_code: "NV",
  lattitude: "41.421",
  longitude: "-117.388",
  spring_name: "THE HOT SPRINGS",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "HOT SPRINGS PEAK 15"
  },
  {
  state_code: "NV",
  lattitude: "40.146",
  longitude: "-119.673",
  spring_name: "THE NEEDLE ROCKS HOT SPRING",
  degrees_f: "208",
  degrees_c: "98",
  usgs_quadrangle: "THE NEEDLE ROCKS 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.141",
  longitude: "-119.687",
  spring_name: "THE NEEDLE ROCKS HOT SPRINGS",
  degrees_f: "208",
  degrees_c: "98",
  usgs_quadrangle: "THE NEEDLE ROCKS 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.901",
  longitude: "-115.868",
  spring_name: "THOMPSON RANCH SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "DIAMOND SPRINGS 15"
  },
  {
  state_code: "NV",
  lattitude: "41.159",
  longitude: "-114.986",
  spring_name: "THREEMILE SPRING SULPHUR HOT SPR",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "OXLEY PEAK 7.5"
  },
  {
  state_code: "NV",
  lattitude: "38.574",
  longitude: "-115.522",
  spring_name: "TOM SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "BLUE EAGLE SPRINGS 15"
  },
  {
  state_code: "NV",
  lattitude: "41.243",
  longitude: "-114.947",
  spring_name: "TWELVEMILE SPRING",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "OXLEY PEAK 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.591",
  longitude: "-119.862",
  spring_name: "TWIN (VYA) SPRING",
  degrees_f: "71",
  degrees_c: "22",
  usgs_quadrangle: "VYA 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.8",
  longitude: "-114.653",
  spring_name: "UPPER SHELLBOURNE SPRING",
  degrees_f: "74",
  degrees_c: "23",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "38.532",
  longitude: "-116.465",
  spring_name: "UPPER WARM SPRING",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "LITTLE FISH LAKE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "38.698",
  longitude: "-116.435",
  spring_name: "UPPER WARM SPRING",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "UPPER FISH LAKE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.161",
  longitude: "-119.183",
  spring_name: "WABUSKA HOT SPRINGS",
  degrees_f: "201",
  degrees_c: "94",
  usgs_quadrangle: "WABUSKA 15"
  },
  {
  state_code: "NV",
  lattitude: "38.981",
  longitude: "-119.833",
  spring_name: "WALLEYS HOT SPRINGS",
  degrees_f: "160",
  degrees_c: "71",
  usgs_quadrangle: "MINDEN 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.904",
  longitude: "-116.588",
  spring_name: "WALTI HOT SPRINGS",
  degrees_f: "162",
  degrees_c: "72",
  usgs_quadrangle: "WALTI HOT SPRINGS 15"
  },
  {
  state_code: "NV",
  lattitude: "38.633",
  longitude: "-114.638",
  spring_name: "WAMBOLT SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "MT. GRAFTON 7.5"
  },
  {
  state_code: "NV",
  lattitude: "38.339",
  longitude: "-116.662",
  spring_name: "WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "GEORGES CANYON RIM 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.782",
  longitude: "-115.363",
  spring_name: "WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "SOLDIER PEAK 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.529",
  longitude: "-116.388",
  spring_name: "WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "BARTINE RANCH 15"
  },
  {
  state_code: "NV",
  lattitude: "41.746",
  longitude: "-119.791",
  spring_name: "WARM SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "ALKALI LAKE 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.753",
  longitude: "-118.841",
  spring_name: "WARM SPRINGS",
  degrees_f: "112",
  degrees_c: "44",
  usgs_quadrangle: "RAILROAD POINT 15"
  },
  {
  state_code: "NV",
  lattitude: "41.934",
  longitude: "-118.808",
  spring_name: "WARM SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "RAILROAD POINT 15"
  },
  {
  state_code: "NV",
  lattitude: "38.188",
  longitude: "-116.373",
  spring_name: "WARM SPRINGS",
  degrees_f: "145",
  degrees_c: "63",
  usgs_quadrangle: "WARM SPRINGS 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.064",
  longitude: "-115.389",
  spring_name: "WARM SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "MORGAN HILL 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.355",
  longitude: "-114.133",
  spring_name: "WARM SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "MONTELLO 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.751",
  longitude: "-115.035",
  spring_name: "WARM SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "GORDON CREEK 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.971",
  longitude: "-114.574",
  spring_name: "WARM SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "DELAPLAIN 15"
  },
  {
  state_code: "NV",
  lattitude: "38.922",
  longitude: "-118.198",
  spring_name: "WEDELL HOT SPRINGS",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "41.357",
  longitude: "-118.809",
  spring_name: "WEST PINTO HOT SPRING",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "PINTO MOUNTAIN 7.5"
  },
  {
  state_code: "NV",
  lattitude: "40.746",
  longitude: "-116.689",
  spring_name: "WHITE HOUSE SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "DUNPHY 15"
  },
  {
  state_code: "NV",
  lattitude: "36.174",
  longitude: "-115.479",
  spring_name: "WHITE ROCK SPRING",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "LA MADRE MTN. 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.647",
  longitude: "-115.775",
  spring_name: "WILD HORSE HOT SPRINGS",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "WILD HORSE 15"
  },
  {
  state_code: "NV",
  lattitude: "38.952",
  longitude: "-115.23",
  spring_name: "WILLIAMS HOT SPRING",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "38.768",
  longitude: "-119.174",
  spring_name: "WILSON HOT SPRING",
  degrees_f: "183",
  degrees_c: "84",
  usgs_quadrangle: "YERINGTON 15"
  },
  {
  state_code: "NV",
  lattitude: "41.412",
  longitude: "-114.675",
  spring_name: "WINE CUP RANCH SPRINGS",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "WINE CUP RANCH 7.5"
  },
  {
  state_code: "NV",
  lattitude: "39.421",
  longitude: "-119.758",
  spring_name: "ZOLEZZI SPRING",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "(MT. ROSE NE 7.5)"
  },
  {
  state_code: "NV",
  lattitude: "40.578",
  longitude: "-117.219",
  spring_name: "null",
  degrees_f: "162",
  degrees_c: "72",
  usgs_quadrangle: "(ANTLER PEAK 15)"
  },
  {
  state_code: "NV",
  lattitude: "40.948",
  longitude: "-119.002",
  spring_name: "null",
  degrees_f: "194",
  degrees_c: "90",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "40.674",
  longitude: "-119.364",
  spring_name: "null",
  degrees_f: "194",
  degrees_c: "90",
  usgs_quadrangle: "(GERLACH 15)"
  },
  {
  state_code: "NV",
  lattitude: "39.242",
  longitude: "-116.88",
  spring_name: "null",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(WILDCAT PEAK 15)"
  },
  {
  state_code: "NV",
  lattitude: "38.86",
  longitude: "-116.738",
  spring_name: "null",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(MOSQUITO CREEK 7.5)"
  },
  {
  state_code: "NV",
  lattitude: "38.489",
  longitude: "-118.968",
  spring_name: "null",
  degrees_f: "110",
  degrees_c: "43",
  usgs_quadrangle: "(AURORA 15)"
  },
  {
  state_code: "NV",
  lattitude: "37.993",
  longitude: "-117.984",
  spring_name: "null",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "RHYOLITE RIDGE 15"
  },
  {
  state_code: "NV",
  lattitude: "41.029",
  longitude: "-117.318",
  spring_name: "null",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "OSGOOD MOUNTAINS 15"
  },
  {
  state_code: "NV",
  lattitude: "41.722",
  longitude: "-118.523",
  spring_name: "null",
  degrees_f: "163",
  degrees_c: "73",
  usgs_quadrangle: "DUFFER PEAK 15"
  },
  {
  state_code: "NV",
  lattitude: "41.496",
  longitude: "-118.429",
  spring_name: "null",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(BOTTLE CREEK 15)"
  },
  {
  state_code: "NV",
  lattitude: "41.397",
  longitude: "-119.197",
  spring_name: "null",
  degrees_f: "114",
  degrees_c: "46",
  usgs_quadrangle: "(SOLDIER MEADOW 7.5)"
  },
  {
  state_code: "NV",
  lattitude: "41.383",
  longitude: "-119.187",
  spring_name: "null",
  degrees_f: "130",
  degrees_c: "54",
  usgs_quadrangle: "(SOLDIER MEADOW 7.5)"
  },
  {
  state_code: "NV",
  lattitude: "41.334",
  longitude: "-119.223",
  spring_name: "null",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "MUD MEADOW 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.332",
  longitude: "-119.197",
  spring_name: "null",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "MUD MEADOW 7.5"
  },
  {
  state_code: "NV",
  lattitude: "41.175",
  longitude: "-119.957",
  spring_name: "null",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "41.147",
  longitude: "-119.022",
  spring_name: "null",
  degrees_f: "153",
  degrees_c: "67",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "41.137",
  longitude: "-119.135",
  spring_name: "null",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "41.112",
  longitude: "-119.002",
  spring_name: "null",
  degrees_f: "151",
  degrees_c: "66",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "41.029",
  longitude: "-119.017",
  spring_name: "null",
  degrees_f: "114",
  degrees_c: "46",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "41.022",
  longitude: "-119.015",
  spring_name: "null",
  degrees_f: "161",
  degrees_c: "72",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "41.013",
  longitude: "-119.01",
  spring_name: "null",
  degrees_f: "172",
  degrees_c: "78",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "41.003",
  longitude: "-119.008",
  spring_name: "null",
  degrees_f: "204",
  degrees_c: "96",
  usgs_quadrangle: "null"
  },
  {
  state_code: "NV",
  lattitude: "40.973",
  longitude: "-115.012",
  spring_name: "null",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(HUMBOLDT PEAK 7.5)"
  },
  {
  state_code: "NY",
  lattitude: "42.48",
  longitude: "-73.37",
  spring_name: "LEBANON SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "PITTSFIELD WEST 7.5"
  },
  {
  state_code: "OR",
  lattitude: "43.86",
  longitude: "-118.288",
  spring_name: "ALTNOW HOT SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "DREWSEY 15"
  },
  {
  state_code: "OR",
  lattitude: "42.544",
  longitude: "-118.533",
  spring_name: "ALVORD HOT SPRINGS",
  degrees_f: "174",
  degrees_c: "79",
  usgs_quadrangle: "ALVORD HOT SPRINGS 7.5"
  },
  {
  state_code: "OR",
  lattitude: "42.873",
  longitude: "-122.167",
  spring_name: "ANNIE SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "CRATER LAKE NATIONAL PARK"
  },
  {
  state_code: "OR",
  lattitude: "42.501",
  longitude: "-119.693",
  spring_name: "ANTELOPE HOT SPRINGS",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "CAMPBELL LAKE 7.5"
  },
  {
  state_code: "OR",
  lattitude: "45.021",
  longitude: "-122.009",
  spring_name: "AUSTIN HOT SPRINGS",
  degrees_f: "186",
  degrees_c: "86",
  usgs_quadrangle: "FISH CREEK MTN. 15"
  },
  {
  state_code: "OR",
  lattitude: "44.936",
  longitude: "-122.173",
  spring_name: "BAGBY HOT SPRINGS",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "BATTLE AX 15"
  },
  {
  state_code: "OR",
  lattitude: "43.477",
  longitude: "-119.075",
  spring_name: "BAKER SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(DOG MOUNTAIN 15)"
  },
  {
  state_code: "OR",
  lattitude: "42.156",
  longitude: "-120.345",
  spring_name: "BARRY RANCH HOT SPRINGS",
  degrees_f: "190",
  degrees_c: "88",
  usgs_quadrangle: "LAKEVIEW NE 7.5"
  },
  {
  state_code: "OR",
  lattitude: "43.272",
  longitude: "-119.293",
  spring_name: "BASQUE SPRING",
  degrees_f: "74",
  degrees_c: "23",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "42.38",
  longitude: "-120.33",
  spring_name: "BEAN HOT SPRING",
  degrees_f: "69",
  degrees_c: "20",
  usgs_quadrangle: "VALLEY FALLS 7.5"
  },
  {
  state_code: "OR",
  lattitude: "44.193",
  longitude: "-122.049",
  spring_name: "BELKNAP SPRINGS",
  degrees_f: "160",
  degrees_c: "71",
  usgs_quadrangle: "MCKENZIE BRIDGE 15"
  },
  {
  state_code: "OR",
  lattitude: "43.944",
  longitude: "-118.136",
  spring_name: "BEULAH HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "BEULAH 15"
  },
  {
  state_code: "OR",
  lattitude: "44.241",
  longitude: "-122.058",
  spring_name: "BIGELOW HOT SPRINGS",
  degrees_f: "142",
  degrees_c: "61",
  usgs_quadrangle: "(MCKENZIE BRIDGE 15)"
  },
  {
  state_code: "OR",
  lattitude: "45.741",
  longitude: "-118.233",
  spring_name: "BINGHAM SPRINGS",
  degrees_f: "93",
  degrees_c: "34",
  usgs_quadrangle: "BINGHAM SPRINGS 7.5"
  },
  {
  state_code: "OR",
  lattitude: "44.354",
  longitude: "-118.574",
  spring_name: "BLUE MOUNTAIN HOT SPRINGS",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "PRAIRIE CITY 15"
  },
  {
  state_code: "OR",
  lattitude: "42.327",
  longitude: "-118.602",
  spring_name: "BORAX LAKE (HOT LAKE)",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "BORAX LAKE 7.5"
  },
  {
  state_code: "OR",
  lattitude: "44.782",
  longitude: "-121.975",
  spring_name: "BREITENBUSH HOT SPRINGS",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "BREITENBUSH HOT SPRINGS 15"
  },
  {
  state_code: "OR",
  lattitude: "44.073",
  longitude: "-119.427",
  spring_name: "BRISBOIS RANCH SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(IZEE 15)"
  },
  {
  state_code: "OR",
  lattitude: "42.998",
  longitude: "-120.725",
  spring_name: "BUCKHORN CREEK SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "44.033",
  longitude: "-117.449",
  spring_name: "BULLY CREEK SPRING",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "JAMIESON 15"
  },
  {
  state_code: "OR",
  lattitude: "42.977",
  longitude: "-117.061",
  spring_name: "CANTERS HOT SPRING",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "(JORDAN VALLEY 7.5)"
  },
  {
  state_code: "OR",
  lattitude: "45.891",
  longitude: "-116.873",
  spring_name: "COOK CREEK HOT SPRING",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "WAPSHILLA CREEK 7.5"
  },
  {
  state_code: "OR",
  lattitude: "44.083",
  longitude: "-122.233",
  spring_name: "COUGAR RESERVOIR HOT SPRINGS",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "(MCKENZIE BRIDGE 15)"
  },
  {
  state_code: "OR",
  lattitude: "43.441",
  longitude: "-118.638",
  spring_name: "CRANE HOT SPRINGS",
  degrees_f: "172",
  degrees_c: "78",
  usgs_quadrangle: "CRANE 15"
  },
  {
  state_code: "OR",
  lattitude: "42.226",
  longitude: "-119.881",
  spring_name: "CRUMP GEYSER (CRUMP SPRING)",
  degrees_f: "172",
  degrees_c: "78",
  usgs_quadrangle: "ADEL 7.5"
  },
  {
  state_code: "OR",
  lattitude: "42.161",
  longitude: "-121.627",
  spring_name: "CRYSTAL SPRING",
  degrees_f: "78",
  degrees_c: "26",
  usgs_quadrangle: "(MERRILL 15)"
  },
  {
  state_code: "OR",
  lattitude: "43.739",
  longitude: "-117.178",
  spring_name: "DEER BUTTE HOT SPRING",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "OWYHEE DAM 7.5"
  },
  {
  state_code: "OR",
  lattitude: "43.281",
  longitude: "-119.311",
  spring_name: "DOUBLE O BARNYARD SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "43.276",
  longitude: "-119.34",
  spring_name: "DOUBLE O SPRING",
  degrees_f: "74",
  degrees_c: "23",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "43.264",
  longitude: "-119.015",
  spring_name: "DUNN SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "42.431",
  longitude: "-121.963",
  spring_name: "EAGLE POINT SPRING",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "(MODOC POINT 15)"
  },
  {
  state_code: "OR",
  lattitude: "43.719",
  longitude: "-121.209",
  spring_name: "EAST LAKE HOT SPRINGS",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "44.975",
  longitude: "-118.044",
  spring_name: "FISHER HOT SPRINGS",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "ROCK CREEK 7.5"
  },
  {
  state_code: "OR",
  lattitude: "42.297",
  longitude: "-119.776",
  spring_name: "FISHER HOT SPRINGS",
  degrees_f: "154",
  degrees_c: "68",
  usgs_quadrangle: "CRUMP LAKE 7.5"
  },
  {
  state_code: "OR",
  lattitude: "42.889",
  longitude: "-118.898",
  spring_name: "FIVEMILE SPRING (HOGHOUSE HOT SPRS)",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "IRISH LAKE 7.5"
  },
  {
  state_code: "OR",
  lattitude: "42.188",
  longitude: "-118.383",
  spring_name: "FLAGSTAFF BUTTE HOT SPRING",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "44.153",
  longitude: "-122.098",
  spring_name: "FOLEY SPRINGS",
  degrees_f: "178",
  degrees_c: "81",
  usgs_quadrangle: "MCKENZIE BRIDGE 15"
  },
  {
  state_code: "OR",
  lattitude: "43.529",
  longitude: "-119.081",
  spring_name: "GOODMAN SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "BURNS 7.5"
  },
  {
  state_code: "OR",
  lattitude: "42.075",
  longitude: "-119.927",
  spring_name: "HALLINAN SPRING",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "MAY LAKE 7.5"
  },
  {
  state_code: "OR",
  lattitude: "42.178",
  longitude: "-121.801",
  spring_name: "HARDBOARD SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(KLAMATH FALLS 15)"
  },
  {
  state_code: "OR",
  lattitude: "45.129",
  longitude: "-118.738",
  spring_name: "HIDAWAY SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "LEHMAN SPRINGS 7.5"
  },
  {
  state_code: "OR",
  lattitude: "45.244",
  longitude: "-117.958",
  spring_name: "HOT LAKE SPRINGS",
  degrees_f: "176",
  degrees_c: "80",
  usgs_quadrangle: "CRAIG MOUNTAIN 7.5"
  },
  {
  state_code: "OR",
  lattitude: "43.302",
  longitude: "-117.383",
  spring_name: "HOT SPRING",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "DIAMOND BUTTE 7.5"
  },
  {
  state_code: "OR",
  lattitude: "42.338",
  longitude: "-118.602",
  spring_name: "HOT SPRINGS",
  degrees_f: "207",
  degrees_c: "97",
  usgs_quadrangle: "BORAX LAKE 7.5"
  },
  {
  state_code: "OR",
  lattitude: "42.176",
  longitude: "-121.828",
  spring_name: "HOWARD HOLIDAY",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(KLAMATH FALLS 15)"
  },
  {
  state_code: "OR",
  lattitude: "43.252",
  longitude: "-119.258",
  spring_name: "HUGHET SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "42.221",
  longitude: "-120.368",
  spring_name: "HUNTERS HOT SPRINGS",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "LAKEVIEW NE 7.5"
  },
  {
  state_code: "OR",
  lattitude: "42.221",
  longitude: "-122.742",
  spring_name: "JACKSON HOT SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "ASHLAND 15"
  },
  {
  state_code: "OR",
  lattitude: "44.208",
  longitude: "-117.455",
  spring_name: "JAMIESON HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(JAMIESON 15)"
  },
  {
  state_code: "OR",
  lattitude: "44.28",
  longitude: "-118.956",
  spring_name: "JOAQUIN MILLER HOT SPRINGS",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "CANYON MTN. 7.5"
  },
  {
  state_code: "OR",
  lattitude: "43.265",
  longitude: "-119.276",
  spring_name: "JOHNSON SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "43.795",
  longitude: "-117.958",
  spring_name: "JONESBORO WARM SPRING",
  degrees_f: "112",
  degrees_c: "45",
  usgs_quadrangle: "(WESTFALL BUTTE 15)"
  },
  {
  state_code: "OR",
  lattitude: "43.758",
  longitude: "-118.067",
  spring_name: "JUNTURA WARM SPRING 1",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(BEULAH 15)"
  },
  {
  state_code: "OR",
  lattitude: "43.757",
  longitude: "-118.092",
  spring_name: "JUNTURA WARM SPRING 2",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "(BEULAH 15)"
  },
  {
  state_code: "OR",
  lattitude: "44.862",
  longitude: "-121.201",
  spring_name: "KAHNEETA HOT SPRINGS",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "EAGLE BUTTE 7.5"
  },
  {
  state_code: "OR",
  lattitude: "43.689",
  longitude: "-122.372",
  spring_name: "KITSON HOT SPRINGS",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "OAKRIDGE 15"
  },
  {
  state_code: "OR",
  lattitude: "45.013",
  longitude: "-117.885",
  spring_name: "KROPP HOT SPRING",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "(NORTH POWDER 7.5)"
  },
  {
  state_code: "OR",
  lattitude: "45.151",
  longitude: "-118.659",
  spring_name: "LEHMAN SPRINGS",
  degrees_f: "142",
  degrees_c: "61",
  usgs_quadrangle: "LEHMAN SPRINGS 7.5"
  },
  {
  state_code: "OR",
  lattitude: "42.162",
  longitude: "-120.344",
  spring_name: "LEITHEAD HOT SPRING",
  degrees_f: "162",
  degrees_c: "72",
  usgs_quadrangle: "LAKEVIEW NE 7.5"
  },
  {
  state_code: "OR",
  lattitude: "44.374",
  longitude: "-118.738",
  spring_name: "LIMEKILN HOT SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "PRAIRIE CITY 15"
  },
  {
  state_code: "OR",
  lattitude: "42.933",
  longitude: "-120.642",
  spring_name: "LOST CABIN SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "43.469",
  longitude: "-118.202",
  spring_name: "LUCE HOT SPRINGS",
  degrees_f: "145",
  degrees_c: "63",
  usgs_quadrangle: "MCEWEN BUTTE 7.5"
  },
  {
  state_code: "OR",
  lattitude: "43.708",
  longitude: "-122.288",
  spring_name: "MCCREDIE SPRINGS",
  degrees_f: "163",
  degrees_c: "73",
  usgs_quadrangle: "OAKRIDGE 15"
  },
  {
  state_code: "OR",
  lattitude: "45.018",
  longitude: "-117.625",
  spring_name: "MEDICAL HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "FLAGSTAFF BUTTE 7.5"
  },
  {
  state_code: "OR",
  lattitude: "42.676",
  longitude: "-118.344",
  spring_name: "MICKEY SPRINGS",
  degrees_f: "187",
  degrees_c: "86",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "43.54",
  longitude: "-119.081",
  spring_name: "MILLPOND HOT SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "BURNS 7.5"
  },
  {
  state_code: "OR",
  lattitude: "43.763",
  longitude: "-117.156",
  spring_name: "MITCHELL BUTTE HOT SPRING",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "MITCHELL BUTTE 7.5"
  },
  {
  state_code: "OR",
  lattitude: "42.307",
  longitude: "-119.875",
  spring_name: "MOSS RANCH SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "PRIDAY RESERVOIR 7.5"
  },
  {
  state_code: "OR",
  lattitude: "42.287",
  longitude: "-119.867",
  spring_name: "MOSS RANCH SPRINGS",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "CRUMP LAKE 7.5"
  },
  {
  state_code: "OR",
  lattitude: "45.372",
  longitude: "-121.697",
  spring_name: "MOUNT HOOD FUMAROLES",
  degrees_f: "194",
  degrees_c: "90",
  usgs_quadrangle: "(MOUNT HOOD SOUTH 7.5)"
  },
  {
  state_code: "OR",
  lattitude: "44.451",
  longitude: "-119.105",
  spring_name: "MOUNT VERNON HOT SPRINGS",
  degrees_f: "121",
  degrees_c: "49",
  usgs_quadrangle: "MOUNT VERNON 7.5"
  },
  {
  state_code: "OR",
  lattitude: "44.023",
  longitude: "-117.46",
  spring_name: "NEAL HOT SPRINGS",
  degrees_f: "189",
  degrees_c: "87",
  usgs_quadrangle: "JAMIESON 15"
  },
  {
  state_code: "OR",
  lattitude: "44.538",
  longitude: "-117.417",
  spring_name: "NELSON SPRING",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "(DURKEE 15)"
  },
  {
  state_code: "OR",
  lattitude: "42.174",
  longitude: "-121.615",
  spring_name: "OLENE GAP HOT SPRINGS",
  degrees_f: "165",
  degrees_c: "74",
  usgs_quadrangle: "(MERRILL 15)"
  },
  {
  state_code: "OR",
  lattitude: "42.116",
  longitude: "-121.287",
  spring_name: "OREGON HOT SPRINGS (BIG HOT SPRING)",
  degrees_f: "142",
  degrees_c: "61",
  usgs_quadrangle: "MALIN 15"
  },
  {
  state_code: "OR",
  lattitude: "42.93",
  longitude: "-120.798",
  spring_name: "PARDON WARM SPRING",
  degrees_f: "76",
  degrees_c: "24",
  usgs_quadrangle: "(SUMMER LAKE 7.5)"
  },
  {
  state_code: "OR",
  lattitude: "43.732",
  longitude: "-121.252",
  spring_name: "PAULINA SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(PAULINA PEAK 7.5)"
  },
  {
  state_code: "OR",
  lattitude: "44.927",
  longitude: "-117.939",
  spring_name: "RADIUM HOT SPRINGS",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "HAINES 7.5"
  },
  {
  state_code: "OR",
  lattitude: "44.892",
  longitude: "-119.141",
  spring_name: "RITTER HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "RITTER 15"
  },
  {
  state_code: "OR",
  lattitude: "43.501",
  longitude: "-119.091",
  spring_name: "ROADLAND SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "BURNS 7.5"
  },
  {
  state_code: "OR",
  lattitude: "44.779",
  longitude: "-117.811",
  spring_name: "SAM O SPRING",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "BAKER 7.5"
  },
  {
  state_code: "OR",
  lattitude: "42.756",
  longitude: "-117.55",
  spring_name: "SCOTT SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(SCOTT RESERVOIR 7.5)"
  },
  {
  state_code: "OR",
  lattitude: "43.793",
  longitude: "-118.472",
  spring_name: "SITZ WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "DREWSEY 15"
  },
  {
  state_code: "OR",
  lattitude: "43.727",
  longitude: "-117.203",
  spring_name: "SNIVELY HOT SPRING",
  degrees_f: "170",
  degrees_c: "77",
  usgs_quadrangle: "OWYHEE DAM 7.5"
  },
  {
  state_code: "OR",
  lattitude: "43.703",
  longitude: "-117.19",
  spring_name: "SOUTH BLACK WILLOW SPRING",
  degrees_f: "71",
  degrees_c: "22",
  usgs_quadrangle: "(OWYHEE DAM 7.5)"
  },
  {
  state_code: "OR",
  lattitude: "44.813",
  longitude: "-117.765",
  spring_name: "SPRING (HOT)",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "BAKER 7.5"
  },
  {
  state_code: "OR",
  lattitude: "43.893",
  longitude: "-117.596",
  spring_name: "SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "HARPER 15"
  },
  {
  state_code: "OR",
  lattitude: "44.867",
  longitude: "-121.228",
  spring_name: "SPRINGS",
  degrees_f: "125",
  degrees_c: "52",
  usgs_quadrangle: "EAGLE BUTTE 7.5"
  },
  {
  state_code: "OR",
  lattitude: "43.395",
  longitude: "-118.308",
  spring_name: "SPRINGS (HOT)",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "DUNNEAN 7.5"
  },
  {
  state_code: "OR",
  lattitude: "42.725",
  longitude: "-120.646",
  spring_name: "SUMMER LAKE HOT SPRING",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "SLIDE MTN 7.5"
  },
  {
  state_code: "OR",
  lattitude: "45.295",
  longitude: "-121.731",
  spring_name: "SWIM WARM SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(MOUNT HOOD SOUTH 7.5)"
  },
  {
  state_code: "OR",
  lattitude: "42.688",
  longitude: "-117.905",
  spring_name: "TUDORS SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "43.294",
  longitude: "-122.367",
  spring_name: "UMPQUA HOT SPRINGS",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "TOKETEE FALLS 15"
  },
  {
  state_code: "OR",
  lattitude: "45.206",
  longitude: "-117.912",
  spring_name: "UNION STATION HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "CRAIG MOUNTAIN 7.5"
  },
  {
  state_code: "OR",
  lattitude: "43.982",
  longitude: "-117.233",
  spring_name: "VALE HOT SPRINGS",
  degrees_f: "163",
  degrees_c: "73",
  usgs_quadrangle: "(VALE EAST 7.5)"
  },
  {
  state_code: "OR",
  lattitude: "43.808",
  longitude: "-122.309",
  spring_name: "WALL CREEK WARM SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "SARDINE BUTTE 15"
  },
  {
  state_code: "OR",
  lattitude: "45.061",
  longitude: "-118.455",
  spring_name: "WARM MINERAL SPRING",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "FLY VALLEY 7.5"
  },
  {
  state_code: "OR",
  lattitude: "42.04",
  longitude: "-120.924",
  spring_name: "WARM SPRING",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "STRAWBERRY BUTTE 15"
  },
  {
  state_code: "OR",
  lattitude: "43.776",
  longitude: "-118.047",
  spring_name: "WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "BEULAH 15"
  },
  {
  state_code: "OR",
  lattitude: "45.295",
  longitude: "-117.806",
  spring_name: "WARM SPRING",
  degrees_f: "85",
  degrees_c: "29",
  usgs_quadrangle: "COVE 7.5"
  },
  {
  state_code: "OR",
  lattitude: "42.815",
  longitude: "-118.899",
  spring_name: "WARM SPRINGS",
  degrees_f: "89",
  degrees_c: "32",
  usgs_quadrangle: "FRENCHGLEN 7.5"
  },
  {
  state_code: "OR",
  lattitude: "43.95",
  longitude: "-119.634",
  spring_name: "WARM SPRINGS",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "DELINTMENT LAKE 15"
  },
  {
  state_code: "OR",
  lattitude: "42.219",
  longitude: "-119.877",
  spring_name: "WARNER VALLEY RANCH",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "(ADEL 7.5)"
  },
  {
  state_code: "OR",
  lattitude: "44.002",
  longitude: "-119.647",
  spring_name: "WEBERG HOT SPRING",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "45.631",
  longitude: "-119.703",
  spring_name: "WELL SPRING",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "WELL SPRING 7.5"
  },
  {
  state_code: "OR",
  lattitude: "42.325",
  longitude: "-120.327",
  spring_name: "WHITE ROCK RANCH HOT SPRING",
  degrees_f: "71",
  degrees_c: "21",
  usgs_quadrangle: "CROOKED CREEK VALLEY 7.5"
  },
  {
  state_code: "OR",
  lattitude: "42.133",
  longitude: "-121.219",
  spring_name: "WILKERSONS HOT SPRING",
  degrees_f: "76",
  degrees_c: "24",
  usgs_quadrangle: "GERBER RESERVOIR 15"
  },
  {
  state_code: "OR",
  lattitude: "43.663",
  longitude: "-118.739",
  spring_name: "null",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(BUCHANAN 7.5)"
  },
  {
  state_code: "OR",
  lattitude: "43.858",
  longitude: "-118.544",
  spring_name: "null",
  degrees_f: "165",
  degrees_c: "74",
  usgs_quadrangle: "(VAN 15)"
  },
  {
  state_code: "OR",
  lattitude: "43.073",
  longitude: "-117.697",
  spring_name: "null",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(LAMBERT ROCKS 7.5)"
  },
  {
  state_code: "OR",
  lattitude: "43.215",
  longitude: "-117.502",
  spring_name: "null",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(THE HOLE IN THE GROUND 7."
  },
  {
  state_code: "OR",
  lattitude: "43.589",
  longitude: "-117.326",
  spring_name: "null",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "(THE ELBOW 7.5)"
  },
  {
  state_code: "OR",
  lattitude: "43.893",
  longitude: "-117.501",
  spring_name: "null",
  degrees_f: "158",
  degrees_c: "70",
  usgs_quadrangle: "(HARPER 15)"
  },
  {
  state_code: "OR",
  lattitude: "42.253",
  longitude: "-118.312",
  spring_name: "null",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "42.254",
  longitude: "-118.703",
  spring_name: "null",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(FIELDS 7.5)"
  },
  {
  state_code: "OR",
  lattitude: "42.837",
  longitude: "-118.863",
  spring_name: "null",
  degrees_f: "83",
  degrees_c: "28",
  usgs_quadrangle: "(PAGE SPRINGS 7.5)"
  },
  {
  state_code: "OR",
  lattitude: "43.646",
  longitude: "-118.251",
  spring_name: "null",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "(UPTON MOUNTAIN 7.5)"
  },
  {
  state_code: "OR",
  lattitude: "42.533",
  longitude: "-117.182",
  spring_name: "null",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "45.501",
  longitude: "-117.973",
  spring_name: "null",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(ELGIN 7.5)"
  },
  {
  state_code: "OR",
  lattitude: "43.185",
  longitude: "-119.058",
  spring_name: "null",
  degrees_f: "154",
  degrees_c: "68",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "43.2",
  longitude: "-119.128",
  spring_name: "null",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "43.21",
  longitude: "-119.058",
  spring_name: "null",
  degrees_f: "92",
  degrees_c: "33",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "43.213",
  longitude: "-119.137",
  spring_name: "null",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "43.238",
  longitude: "-119.062",
  spring_name: "null",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "43.338",
  longitude: "-119.428",
  spring_name: "null",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "null"
  },
  {
  state_code: "OR",
  lattitude: "42.079",
  longitude: "-117.76",
  spring_name: "null",
  degrees_f: "126",
  degrees_c: "52",
  usgs_quadrangle: "null"
  },
  {
  state_code: "SD",
  lattitude: "43.452",
  longitude: "-103.508",
  spring_name: "HOT BROOK SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "MINNEKHATA NE 7.5"
  },
  {
  state_code: "SD",
  lattitude: "43.442",
  longitude: "-103.481",
  spring_name: "HOT SPRINGS",
  degrees_f: "87",
  degrees_c: "31",
  usgs_quadrangle: "HOT SPRINGS 7.5"
  },
  {
  state_code: "TX",
  lattitude: "30.21",
  longitude: "-104.562",
  spring_name: "CAPOTE SPRINGS",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "(CAPOTE FALLS 7.5)"
  },
  {
  state_code: "TX",
  lattitude: "29.182",
  longitude: "-102.992",
  spring_name: "HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "BOQUILLAS 7.5"
  },
  {
  state_code: "TX",
  lattitude: "30.823",
  longitude: "-105.315",
  spring_name: "INDIAN HOT SPRINGS",
  degrees_f: "117",
  degrees_c: "47",
  usgs_quadrangle: "INDIAN HOT SPRINGS 7.5"
  },
  {
  state_code: "TX",
  lattitude: "30.133",
  longitude: "-104.602",
  spring_name: "NIXON SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "CAPOTE FALLS 7.5"
  },
  {
  state_code: "TX",
  lattitude: "30.861",
  longitude: "-105.34",
  spring_name: "RED BULL SPRING",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "INDIAN HOT SPRINGS 7.5"
  },
  {
  state_code: "TX",
  lattitude: "29.178",
  longitude: "-102.953",
  spring_name: "RIO GRANDE VILLAGE SPRING",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "BOQUILLAS 7.5"
  },
  {
  state_code: "TX",
  lattitude: "30.038",
  longitude: "-104.598",
  spring_name: "RUIDOSA HOT SPRINGS",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "RUIDOSA HOT SPRINGS"
  },
  {
  state_code: "TX",
  lattitude: "29.787",
  longitude: "-104.462",
  spring_name: "SPRINGS (LAS CIENEGAS)",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "CERRO ORONA 7.5"
  },
  {
  state_code: "TX",
  lattitude: "29.805",
  longitude: "-102.376",
  spring_name: "null",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(INDIAN WELLS 15)"
  },
  {
  state_code: "UT",
  lattitude: "39.613",
  longitude: "-112.729",
  spring_name: "BAKER (ABRAHAM CRATER) HOT SPRINGS",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "BAKER HOT SPRINGS 7.5"
  },
  {
  state_code: "UT",
  lattitude: "40.815",
  longitude: "-111.918",
  spring_name: "BECKS HOT SPRING",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "SALT LAKE CITY NORTH 7.5"
  },
  {
  state_code: "UT",
  lattitude: "37.166",
  longitude: "-113.383",
  spring_name: "BERRY SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "HURRICANE 15"
  },
  {
  state_code: "UT",
  lattitude: "38.138",
  longitude: "-112.863",
  spring_name: "BIG MAPLE SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "MINERSVILLE 15"
  },
  {
  state_code: "UT",
  lattitude: "40.743",
  longitude: "-112.642",
  spring_name: "BIG WARM SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "TIMPIE 15"
  },
  {
  state_code: "UT",
  lattitude: "40.176",
  longitude: "-111.801",
  spring_name: "BIRD ISLAND",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "(LINCOLN POINT 7.5)"
  },
  {
  state_code: "UT",
  lattitude: "41.833",
  longitude: "-112.454",
  spring_name: "BLUE CREEK SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "HOWELL 7.5"
  },
  {
  state_code: "UT",
  lattitude: "40.502",
  longitude: "-114.038",
  spring_name: "BLUE LAKE SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "WENDOVER SE 7.5"
  },
  {
  state_code: "UT",
  lattitude: "41.722",
  longitude: "-112.266",
  spring_name: "BOTHWELL WARM SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(THATCHER MOUNTAIN 7.5)"
  },
  {
  state_code: "UT",
  lattitude: "40.458",
  longitude: "-111.929",
  spring_name: "CAMP WILLIAMS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "(JORDAN NARROWS 7.5)"
  },
  {
  state_code: "UT",
  lattitude: "40.038",
  longitude: "-111.529",
  spring_name: "CASTILLA SPRINGS",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "SPANISH FORK PEAK 7.5"
  },
  {
  state_code: "UT",
  lattitude: "41.038",
  longitude: "-111.656",
  spring_name: "COMO SPRINGS",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "MORGAN 7.5"
  },
  {
  state_code: "UT",
  lattitude: "41.239",
  longitude: "-112.413",
  spring_name: "COMPTON SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "PROMONTORY POINT 7.5"
  },
  {
  state_code: "UT",
  lattitude: "38.77",
  longitude: "-112.871",
  spring_name: "COYOTE SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "CRUZ 7.5"
  },
  {
  state_code: "UT",
  lattitude: "39.424",
  longitude: "-113.485",
  spring_name: "COYOTE SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "SWASEY PEAK NW 7.5"
  },
  {
  state_code: "UT",
  lattitude: "41.901",
  longitude: "-112.999",
  spring_name: "COYOTE SPRING",
  degrees_f: "109",
  degrees_c: "43",
  usgs_quadrangle: "MONUMENT PEAK NW 7.5"
  },
  {
  state_code: "UT",
  lattitude: "40.353",
  longitude: "-111.895",
  spring_name: "CRATER HOT SPRING",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "(SARATOGA SPRINGS 7.5)"
  },
  {
  state_code: "UT",
  lattitude: "41.659",
  longitude: "-112.087",
  spring_name: "CRYSTAL (MADSENS) HOT SPRINGS",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "HONEYVILLE 7.5"
  },
  {
  state_code: "UT",
  lattitude: "40.488",
  longitude: "-111.911",
  spring_name: "CRYSTAL HOT SPRINGS",
  degrees_f: "187",
  degrees_c: "86",
  usgs_quadrangle: "JORDAN NARROWS 7.5"
  },
  {
  state_code: "UT",
  lattitude: "41.834",
  longitude: "-112.054",
  spring_name: "CUTLER WARM SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(CUTLER DAM 7.5)"
  },
  {
  state_code: "UT",
  lattitude: "40.172",
  longitude: "-112.426",
  spring_name: "DAVIS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(FAUST 7.5)"
  },
  {
  state_code: "UT",
  lattitude: "40.538",
  longitude: "-112.747",
  spring_name: "DESERET LIVESTOCK",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(TIMPIE 15)"
  },
  {
  state_code: "UT",
  lattitude: "40.558",
  longitude: "-112.739",
  spring_name: "DESERET LIVESTOCK SOUTH SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "TIMPIE 15"
  },
  {
  state_code: "UT",
  lattitude: "40.565",
  longitude: "-112.738",
  spring_name: "DESERET LIVESTOCK SOUTH SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "TIMPIE 15"
  },
  {
  state_code: "UT",
  lattitude: "40.118",
  longitude: "-111.337",
  spring_name: "DIAMOND FORK WARM SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "RAYS VALLEY 7.5"
  },
  {
  state_code: "UT",
  lattitude: "37.189",
  longitude: "-113.272",
  spring_name: "DIXIE (LAVERKIN) HOT SPRINGS",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "HURRICANE 15"
  },
  {
  state_code: "UT",
  lattitude: "38.217",
  longitude: "-112.904",
  spring_name: "DOTSONS (RADIUM) WARM SPRING",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "MINERSVILLE 7.5"
  },
  {
  state_code: "UT",
  lattitude: "40.545",
  longitude: "-111.928",
  spring_name: "EAST JORDAN CANAL",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(MIDVALE 7.5)"
  },
  {
  state_code: "UT",
  lattitude: "40.332",
  longitude: "-111.891",
  spring_name: "FAULT ZONE SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(SARATOGA SPRINGS 7.5)"
  },
  {
  state_code: "UT",
  lattitude: "39.842",
  longitude: "-113.392",
  spring_name: "FISH SPRINGS",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "FISH SPRINGS SW 7.5"
  },
  {
  state_code: "UT",
  lattitude: "39.616",
  longitude: "-112.803",
  spring_name: "FUMAROLE BUTTE",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "FUMAROLE BUTTE 7.5"
  },
  {
  state_code: "UT",
  lattitude: "41.917",
  longitude: "-111.958",
  spring_name: "GANCHEFF SPRING",
  degrees_f: "88",
  degrees_c: "31",
  usgs_quadrangle: "TRENTON 7.5"
  },
  {
  state_code: "UT",
  lattitude: "39.464",
  longitude: "-114.038",
  spring_name: "GANDY WARM SPRINGS",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "null"
  },
  {
  state_code: "UT",
  lattitude: "39.955",
  longitude: "-111.858",
  spring_name: "GOSHEN WARM SRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "SANTAQUIN 15"
  },
  {
  state_code: "UT",
  lattitude: "40.647",
  longitude: "-112.524",
  spring_name: "GRANTSVILLE WARM SPRINGS",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "TIMPIE 15"
  },
  {
  state_code: "UT",
  lattitude: "37.138",
  longitude: "-113.528",
  spring_name: "GREEN SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "ST. GEORGE 15"
  },
  {
  state_code: "UT",
  lattitude: "38.85",
  longitude: "-112.49",
  spring_name: "HATTON HOT SPRING",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "FILLMORE 15"
  },
  {
  state_code: "UT",
  lattitude: "41.829",
  longitude: "-113.654",
  spring_name: "HEAD SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "YOST 15"
  },
  {
  state_code: "UT",
  lattitude: "40.788",
  longitude: "-112.017",
  spring_name: "HOBO WARM SPRING",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "SALTAIR 7.5"
  },
  {
  state_code: "UT",
  lattitude: "41.138",
  longitude: "-112.175",
  spring_name: "HOOPER HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "OGDEN BAY 7.5"
  },
  {
  state_code: "UT",
  lattitude: "40.614",
  longitude: "-112.709",
  spring_name: "HORSESHOE SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "TIMPIE 15"
  },
  {
  state_code: "UT",
  lattitude: "37.393",
  longitude: "-113.61",
  spring_name: "IRVINE SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "CENTRAL EAST 7.5"
  },
  {
  state_code: "UT",
  lattitude: "38.603",
  longitude: "-112.111",
  spring_name: "JOHNSON WARM SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "MONROE 15"
  },
  {
  state_code: "UT",
  lattitude: "38.613",
  longitude: "-112.202",
  spring_name: "JOSEPH HOT SPRINGS",
  degrees_f: "147",
  degrees_c: "64",
  usgs_quadrangle: "MONROE 15"
  },
  {
  state_code: "UT",
  lattitude: "41.563",
  longitude: "-113.954",
  spring_name: "KIMBER (ROSE) SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "TOMS CABIN SPRING 7.5"
  },
  {
  state_code: "UT",
  lattitude: "39.249",
  longitude: "-113.877",
  spring_name: "KNOLL SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "CONGER RANGE 15"
  },
  {
  state_code: "UT",
  lattitude: "41.822",
  longitude: "-113.263",
  spring_name: "L.G. CARTER SPRINGS",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "PARK VALLEY 15"
  },
  {
  state_code: "UT",
  lattitude: "41.818",
  longitude: "-113.311",
  spring_name: "LARSON SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "PARK VALLEY 15"
  },
  {
  state_code: "UT",
  lattitude: "37.942",
  longitude: "-112.438",
  spring_name: "LEFEVRE",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(PANGUITCH NW 7.5)"
  },
  {
  state_code: "UT",
  lattitude: "40.146",
  longitude: "-111.806",
  spring_name: "LINCOLN POINT WARM SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "(LINCOLN POINT 7.5)"
  },
  {
  state_code: "UT",
  lattitude: "41.582",
  longitude: "-112.256",
  spring_name: "LITTLE MOUNTAIN HOT SPRING",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "PUBLIC SHOOTING GROUNDS 7.5"
  },
  {
  state_code: "UT",
  lattitude: "39.246",
  longitude: "-111.645",
  spring_name: "LIVINGSTON WARM SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(STERLING 7.5)"
  },
  {
  state_code: "UT",
  lattitude: "38.864",
  longitude: "-112.506",
  spring_name: "MEADOW HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "TABERNACLE HILL 15"
  },
  {
  state_code: "UT",
  lattitude: "40.517",
  longitude: "-111.475",
  spring_name: "MIDWAY HOT SPRING",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "HEBER CITY 7.5"
  },
  {
  state_code: "UT",
  lattitude: "40.525",
  longitude: "-111.468",
  spring_name: "MIDWAY HOT SPRINGS",
  degrees_f: "104",
  degrees_c: "40",
  usgs_quadrangle: "HEBER CITY 7.5"
  },
  {
  state_code: "UT",
  lattitude: "40.526",
  longitude: "-111.488",
  spring_name: "MIDWAY HOT SPRINGS",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "HEBER CITY 7.5"
  },
  {
  state_code: "UT",
  lattitude: "38.633",
  longitude: "-112.107",
  spring_name: "MONROE (COOPER) HOT SPRINGS",
  degrees_f: "169",
  degrees_c: "76",
  usgs_quadrangle: "MONROE 15"
  },
  {
  state_code: "UT",
  lattitude: "40.397",
  longitude: "-112.421",
  spring_name: "MORGANS WARM SPRING",
  degrees_f: "80",
  degrees_c: "27",
  usgs_quadrangle: "STOCKTON 15"
  },
  {
  state_code: "UT",
  lattitude: "39.887",
  longitude: "-113.413",
  spring_name: "NORTH SPRINGS",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "FISH SPRINGS NW 7.5"
  },
  {
  state_code: "UT",
  lattitude: "41.236",
  longitude: "-111.924",
  spring_name: "OGDEN HOT SPRING",
  degrees_f: "135",
  degrees_c: "57",
  usgs_quadrangle: "OGDEN 7.5"
  },
  {
  state_code: "UT",
  lattitude: "41.328",
  longitude: "-111.826",
  spring_name: "PATIO SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "HUNTSVILLE 7.5"
  },
  {
  state_code: "UT",
  lattitude: "41.449",
  longitude: "-112.442",
  spring_name: "POULSEN SPRING (SALT)",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "EAST PROMONTORY 7.5"
  },
  {
  state_code: "UT",
  lattitude: "41.831",
  longitude: "-113.391",
  spring_name: "PUGSLEY",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "PARK VALLEY 15"
  },
  {
  state_code: "UT",
  lattitude: "39.788",
  longitude: "-111.881",
  spring_name: "RAY LUNT SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "SANTAQUIN 15"
  },
  {
  state_code: "UT",
  lattitude: "37.174",
  longitude: "-112.535",
  spring_name: "RED CANYON",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(KANAB 15)"
  },
  {
  state_code: "UT",
  lattitude: "38.639",
  longitude: "-112.098",
  spring_name: "RED HILL HOT SPRING",
  degrees_f: "171",
  degrees_c: "77",
  usgs_quadrangle: "MONROE 15"
  },
  {
  state_code: "UT",
  lattitude: "40.653",
  longitude: "-112.907",
  spring_name: "REDLUM SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "null"
  },
  {
  state_code: "UT",
  lattitude: "38.774",
  longitude: "-112.096",
  spring_name: "RICHFIELD WARM SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(RICHFIELD 15)"
  },
  {
  state_code: "UT",
  lattitude: "38.503",
  longitude: "-112.849",
  spring_name: "ROOSEVELT HOT SPRINGS",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "(PINNACLE PASS 7.5)"
  },
  {
  state_code: "UT",
  lattitude: "40.39",
  longitude: "-112.424",
  spring_name: "RUSSELLS WARM SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "STOCKTON 15"
  },
  {
  state_code: "UT",
  lattitude: "38.981",
  longitude: "-111.829",
  spring_name: "SALT SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(SALINA 7.5)"
  },
  {
  state_code: "UT",
  lattitude: "40.35",
  longitude: "-111.905",
  spring_name: "SARATOGA HOT SPRINGS",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "SARATOGA SPRINGS 7.5"
  },
  {
  state_code: "UT",
  lattitude: "37.178",
  longitude: "-113.634",
  spring_name: "SNOW SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "ST. GEORGE 15"
  },
  {
  state_code: "UT",
  lattitude: "39.334",
  longitude: "-113.518",
  spring_name: "SOUTH TULE SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "COWBOY PASS 15"
  },
  {
  state_code: "UT",
  lattitude: "40.465",
  longitude: "-109.221",
  spring_name: "SPLIT MOUNTAIN WARM SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "SPLIT MOUNTAIN 7.5"
  },
  {
  state_code: "UT",
  lattitude: "41.687",
  longitude: "-113.986",
  spring_name: "SPRING (HOT)",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "GROUSE CREEK 7.5"
  },
  {
  state_code: "UT",
  lattitude: "38.762",
  longitude: "-112.87",
  spring_name: "SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "CRUZ 7.5"
  },
  {
  state_code: "UT",
  lattitude: "39.899",
  longitude: "-112.045",
  spring_name: "SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "EUREKA 7.5"
  },
  {
  state_code: "UT",
  lattitude: "41.643",
  longitude: "-112.281",
  spring_name: "SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "THATCHER MOUNTAIN 7.5"
  },
  {
  state_code: "UT",
  lattitude: "39.183",
  longitude: "-111.691",
  spring_name: "STERLING (PEACOCK) WARM SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "STERLING 7.5"
  },
  {
  state_code: "UT",
  lattitude: "41.578",
  longitude: "-112.23",
  spring_name: "STINKING HOT SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "BEAR RIVER CITY 7.5"
  },
  {
  state_code: "UT",
  lattitude: "38.56",
  longitude: "-112.578",
  spring_name: "SULPHURDALE",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "COVE FORT 15"
  },
  {
  state_code: "UT",
  lattitude: "37.937",
  longitude: "-112.424",
  spring_name: "TEBBS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "PANGUITCH NW 7.5"
  },
  {
  state_code: "UT",
  lattitude: "38.172",
  longitude: "-113.204",
  spring_name: "THERMO HOT SPRINGS",
  degrees_f: "181",
  degrees_c: "83",
  usgs_quadrangle: "THERMO 15"
  },
  {
  state_code: "UT",
  lattitude: "38.186",
  longitude: "-113.197",
  spring_name: "THERMO HOT SPRINGS",
  degrees_f: "185",
  degrees_c: "85",
  usgs_quadrangle: "THERMO 15"
  },
  {
  state_code: "UT",
  lattitude: "39.35",
  longitude: "-113.515",
  spring_name: "TULE SPRING",
  degrees_f: "82",
  degrees_c: "28",
  usgs_quadrangle: "COWBOY PASS 15"
  },
  {
  state_code: "UT",
  lattitude: "39.403",
  longitude: "-113.863",
  spring_name: "TWIN SPRINGS",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "GANDY 15"
  },
  {
  state_code: "UT",
  lattitude: "41.855",
  longitude: "-112.158",
  spring_name: "UDY HOT SPRINGS",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "RIVERSIDE 7.5"
  },
  {
  state_code: "UT",
  lattitude: "38.186",
  longitude: "-112.912",
  spring_name: "US BLM",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(MINERSVILLE 7.5)"
  },
  {
  state_code: "UT",
  lattitude: "40.733",
  longitude: "-112.621",
  spring_name: "UTAH FISH AND GAME DEPT",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(TIMPIE 15)"
  },
  {
  state_code: "UT",
  lattitude: "41.338",
  longitude: "-112.031",
  spring_name: "UTAH HOT SPRINGS",
  degrees_f: "138",
  degrees_c: "59",
  usgs_quadrangle: "PLAIN CITY 7.5"
  },
  {
  state_code: "UT",
  lattitude: "37.335",
  longitude: "-113.687",
  spring_name: "VEYO HOT SPRING",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "VEYO 7.5"
  },
  {
  state_code: "UT",
  lattitude: "37.158",
  longitude: "-113.399",
  spring_name: "VIRGIN RIVER SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "HURRICANE 15"
  },
  {
  state_code: "UT",
  lattitude: "41.808",
  longitude: "-113.327",
  spring_name: "W.R. CARTER SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "PARK VALLEY 15"
  },
  {
  state_code: "UT",
  lattitude: "40.536",
  longitude: "-111.478",
  spring_name: "WARM DITCH SPRING",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "HEBER CITY 7.5"
  },
  {
  state_code: "UT",
  lattitude: "37.137",
  longitude: "-113.513",
  spring_name: "WARM SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(ST. GEORGE 15)"
  },
  {
  state_code: "UT",
  lattitude: "37.7",
  longitude: "-110.421",
  spring_name: "WARM SPRING",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "(MANCOS MESA 15)"
  },
  {
  state_code: "UT",
  lattitude: "41.614",
  longitude: "-113.613",
  spring_name: "WARM SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "PROHIBITION SPRING 7.5"
  },
  {
  state_code: "UT",
  lattitude: "41.756",
  longitude: "-113.603",
  spring_name: "WARM SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "YOST 15"
  },
  {
  state_code: "UT",
  lattitude: "40.447",
  longitude: "-110.828",
  spring_name: "WARM SPRINGS",
  degrees_f: "79",
  degrees_c: "26",
  usgs_quadrangle: "HANNA 7.5"
  },
  {
  state_code: "UT",
  lattitude: "40.234",
  longitude: "-111.865",
  spring_name: "WARM SPRINGS",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(LINCOLN POINT 7.5)"
  },
  {
  state_code: "UT",
  lattitude: "40.228",
  longitude: "-111.867",
  spring_name: "WARM SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(LINCOLN POINT 7.5)"
  },
  {
  state_code: "UT",
  lattitude: "37.096",
  longitude: "-113.447",
  spring_name: "WARNER VALLEY SPRING",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "HURRICANE 15"
  },
  {
  state_code: "UT",
  lattitude: "40.788",
  longitude: "-111.899",
  spring_name: "WASATCH HOT SPRINGS",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "SALT LAKE CITY NORTH 7.5"
  },
  {
  state_code: "UT",
  lattitude: "38.155",
  longitude: "-112.901",
  spring_name: "WILLOW SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "MINERSVILLE 7.5"
  },
  {
  state_code: "UT",
  lattitude: "39.906",
  longitude: "-113.43",
  spring_name: "WILSON HEALTH SPRINGS",
  degrees_f: "142",
  degrees_c: "61",
  usgs_quadrangle: "FISH SPRINGS NW 7.5"
  },
  {
  state_code: "UT",
  lattitude: "40.167",
  longitude: "-111.622",
  spring_name: "WOOD SPRINGS",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "(SPRINGVILLE 7.5)"
  },
  {
  state_code: "UT",
  lattitude: "38.34",
  longitude: "-113.22",
  spring_name: "WOODHOUSE SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "MILFORD 15"
  },
  {
  state_code: "UT",
  lattitude: "40.703",
  longitude: "-112.579",
  spring_name: "null",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(TIMPIE 15)"
  },
  {
  state_code: "UT",
  lattitude: "40.625",
  longitude: "-112.703",
  spring_name: "null",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(TIMPIE 15)"
  },
  {
  state_code: "UT",
  lattitude: "40.697",
  longitude: "-111.493",
  spring_name: "null",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "PARK CITY EAST 7.5"
  },
  {
  state_code: "UT",
  lattitude: "39.305",
  longitude: "-113.491",
  spring_name: "null",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "(SWASEY PEAK SW 7.5)"
  },
  {
  state_code: "UT",
  lattitude: "39.388",
  longitude: "-113.504",
  spring_name: "null",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(COWBOY PASS 15)"
  },
  {
  state_code: "UT",
  lattitude: "38.869",
  longitude: "-112.484",
  spring_name: "null",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(FILLMORE 15)"
  },
  {
  state_code: "UT",
  lattitude: "41.336",
  longitude: "-112.406",
  spring_name: "null",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "POKES POINT 7.5"
  },
  {
  state_code: "UT",
  lattitude: "39.429",
  longitude: "-113.881",
  spring_name: "null",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(GANDY 15)"
  },
  {
  state_code: "VA",
  lattitude: "37.16",
  longitude: "-80.806",
  spring_name: "ALUM SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "WHITE GATE 7.5"
  },
  {
  state_code: "VA",
  lattitude: "38.218",
  longitude: "-79.673",
  spring_name: "BOLAR SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "BURNSVILLE 7.5"
  },
  {
  state_code: "VA",
  lattitude: "38.238",
  longitude: "-79.65",
  spring_name: "BRAGG SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(BURNSVILLE 7.5)"
  },
  {
  state_code: "VA",
  lattitude: "37.87",
  longitude: "-79.933",
  spring_name: "FALLING SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "COVINGTON 7.5"
  },
  {
  state_code: "VA",
  lattitude: "37.963",
  longitude: "-79.861",
  spring_name: "HEALING SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "HEALING SPRINGS 7.5"
  },
  {
  state_code: "VA",
  lattitude: "37.997",
  longitude: "-79.83",
  spring_name: "HOT SPRINGS",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "HEALING SPRINGS 7.5"
  },
  {
  state_code: "VA",
  lattitude: "37.86",
  longitude: "-79.988",
  spring_name: "LAYTON SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(COVINGTON 7.5)"
  },
  {
  state_code: "VA",
  lattitude: "37.29",
  longitude: "-80.619",
  spring_name: "NEW RIVER WHITE SULPHUR SPRINGS",
  degrees_f: "85",
  degrees_c: "29",
  usgs_quadrangle: "(EGGLESTON 7.5)"
  },
  {
  state_code: "VA",
  lattitude: "37.898",
  longitude: "-79.462",
  spring_name: "ROCKBRIDGE BATHS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "GOSHEN 7.5"
  },
  {
  state_code: "VA",
  lattitude: "37.645",
  longitude: "-80.238",
  spring_name: "SWEET CHALYBEATE SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "ALLEGHANY 7.5"
  },
  {
  state_code: "VA",
  lattitude: "38.055",
  longitude: "-79.78",
  spring_name: "WARM SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "WARM SPRINGS 7.5"
  },
  {
  state_code: "WA",
  lattitude: "48.763",
  longitude: "-121.667",
  spring_name: "BAKER HOT SPRING",
  degrees_f: "108",
  degrees_c: "42",
  usgs_quadrangle: "MT. SHUKSAN 15"
  },
  {
  state_code: "WA",
  lattitude: "45.701",
  longitude: "-121.728",
  spring_name: "COLLINS HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "(HOOD RIVER 15)"
  },
  {
  state_code: "WA",
  lattitude: "48.789",
  longitude: "-121.804",
  spring_name: "DORR FUMAROLE FIELD",
  degrees_f: "194",
  degrees_c: "90",
  usgs_quadrangle: "(MT. BAKER 15)"
  },
  {
  state_code: "WA",
  lattitude: "46.041",
  longitude: "-121.181",
  spring_name: "FISH HATCHERY WARM SPRING",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(OUTLET FALLS 7.5)"
  },
  {
  state_code: "WA",
  lattitude: "48.15",
  longitude: "-121.062",
  spring_name: "GAMMA HOT SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "GLACIER PEAK 15"
  },
  {
  state_code: "WA",
  lattitude: "47.892",
  longitude: "-121.342",
  spring_name: "GARLAND MINERAL SPRINGS",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "BLANCA LAKE 7.5"
  },
  {
  state_code: "WA",
  lattitude: "47.484",
  longitude: "-121.391",
  spring_name: "GOLDMEYER HOT SPRINGS",
  degrees_f: "127",
  degrees_c: "53",
  usgs_quadrangle: "SNOQUALMIE PASS 15"
  },
  {
  state_code: "WA",
  lattitude: "46.378",
  longitude: "-122.265",
  spring_name: "GREEN RIVER SODA SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "ELK ROCK 15"
  },
  {
  state_code: "WA",
  lattitude: "48.974",
  longitude: "-119.475",
  spring_name: "HOT LAKE",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "OROVILLE 15"
  },
  {
  state_code: "WA",
  lattitude: "48.118",
  longitude: "-121.192",
  spring_name: "KENNEDY HOT SPRING",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "GLACIER PEAK 15"
  },
  {
  state_code: "WA",
  lattitude: "45.821",
  longitude: "-121.133",
  spring_name: "KLICKITAT MINERAL SPRINGS",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "(KLICKITAT 15)"
  },
  {
  state_code: "WA",
  lattitude: "47.201",
  longitude: "-121.536",
  spring_name: "LESTER HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "GREENWATER 15"
  },
  {
  state_code: "WA",
  lattitude: "46.752",
  longitude: "-121.814",
  spring_name: "LONGMIRE MINERAL SPRINGS",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "MT. RAINIER WEST 7.5"
  },
  {
  state_code: "WA",
  lattitude: "45.658",
  longitude: "-121.962",
  spring_name: "MOFFETTS (BONNEVILLE) HOT SPRINGS",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "BONNEVILLE DAM 15"
  },
  {
  state_code: "WA",
  lattitude: "46.202",
  longitude: "-121.492",
  spring_name: "MOUNT ADAMS FUMAROLES",
  degrees_f: "150",
  degrees_c: "66",
  usgs_quadrangle: "(MOUNT ADAMS EAST 7.5)"
  },
  {
  state_code: "WA",
  lattitude: "46.852",
  longitude: "-121.758",
  spring_name: "MT RAINIER FUMAROLES",
  degrees_f: "162",
  degrees_c: "72",
  usgs_quadrangle: "(MT. RAINIER WEST 7.5)"
  },
  {
  state_code: "WA",
  lattitude: "46.198",
  longitude: "-122.197",
  spring_name: "MT ST HELENS FUMAROLES",
  degrees_f: "190",
  degrees_c: "88",
  usgs_quadrangle: "(MOUNT ST. HELENS 15)"
  },
  {
  state_code: "WA",
  lattitude: "46.738",
  longitude: "-121.562",
  spring_name: "OHANAPECOSH HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "PACKWOOD 15"
  },
  {
  state_code: "WA",
  lattitude: "47.977",
  longitude: "-123.682",
  spring_name: "OLYMPIC HOT SPRINGS",
  degrees_f: "118",
  degrees_c: "48",
  usgs_quadrangle: "MOUNT CARRIE 7.5"
  },
  {
  state_code: "WA",
  lattitude: "46.345",
  longitude: "-121.6",
  spring_name: "ORR CREEK WARM SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(GREEN MOUNTAIN 7.5)"
  },
  {
  state_code: "WA",
  lattitude: "46.575",
  longitude: "-121.706",
  spring_name: "PACKWOOD HOT SPRING",
  degrees_f: "100",
  degrees_c: "38",
  usgs_quadrangle: "(PACKWOOD 15)"
  },
  {
  state_code: "WA",
  lattitude: "48.906",
  longitude: "-119.455",
  spring_name: "POISON LAKE",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "(OROVILLE 15)"
  },
  {
  state_code: "WA",
  lattitude: "45.723",
  longitude: "-121.927",
  spring_name: "ROCK CREEK HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "BONNEVILLE DAM 15"
  },
  {
  state_code: "WA",
  lattitude: "47.707",
  longitude: "-121.155",
  spring_name: "SCENIC HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "(SCENIC 7.5)"
  },
  {
  state_code: "WA",
  lattitude: "48.77",
  longitude: "-121.813",
  spring_name: "SHERMAN CRATER FUMAROLES",
  degrees_f: "266",
  degrees_c: "130",
  usgs_quadrangle: "(MT. BAKER 15)"
  },
  {
  state_code: "WA",
  lattitude: "46.452",
  longitude: "-120.956",
  spring_name: "SIMCOE SODA SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "YESMOWIT CANYON 7.5"
  },
  {
  state_code: "WA",
  lattitude: "47.969",
  longitude: "-123.864",
  spring_name: "SOL DUC HOT SPRINGS",
  degrees_f: "122",
  degrees_c: "50",
  usgs_quadrangle: "BOGACHIEL PEAK 7.5"
  },
  {
  state_code: "WA",
  lattitude: "45.728",
  longitude: "-121.8",
  spring_name: "ST MARTINS HOT SPRINGS",
  degrees_f: "120",
  degrees_c: "49",
  usgs_quadrangle: "BONNEVILLE DAM 15"
  },
  {
  state_code: "WA",
  lattitude: "48.254",
  longitude: "-121.17",
  spring_name: "SULPHUR CREEK HOT SPRINGS",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "DOWNEY MTN. 7.5"
  },
  {
  state_code: "WA",
  lattitude: "46.024",
  longitude: "-118.771",
  spring_name: "WARM SPRINGS CANYON WARM SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "ZANGAR JUNCTION 7.5"
  },
  {
  state_code: "WV",
  lattitude: "39.618",
  longitude: "-78.23",
  spring_name: "BERKELEY SPRINGS",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "HANCOCK 7.5"
  },
  {
  state_code: "WV",
  lattitude: "38.163",
  longitude: "-79.975",
  spring_name: "MINNEHAHA SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "MINNEHAHA SPRINGS 7.5"
  },
  {
  state_code: "WV",
  lattitude: "37.63",
  longitude: "-80.24",
  spring_name: "OLD SWEET SPRING",
  degrees_f: "73",
  degrees_c: "23",
  usgs_quadrangle: "ALLEGHANY 7.5"
  },
  {
  state_code: "WV",
  lattitude: "39.471",
  longitude: "-77.877",
  spring_name: "SWAN POND SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(MARTINSBURG 7.5)"
  },
  {
  state_code: "WV",
  lattitude: "38.605",
  longitude: "-79.353",
  spring_name: "THORN SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "(SUGAR GROVE 7.5)"
  },
  {
  state_code: "WY",
  lattitude: "43.543",
  longitude: "-110.741",
  spring_name: "ABERCROMBIE WARM SPRINGS",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "GROS VENTRE JUNCTION 7.5"
  },
  {
  state_code: "WY",
  lattitude: "42.545",
  longitude: "-106.725",
  spring_name: "ALCOVA HOT SPRINGS",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "(ALCOVA 7.5)"
  },
  {
  state_code: "WY",
  lattitude: "44.797",
  longitude: "-110.725",
  spring_name: "AMPHITHEATER SPRINGS",
  degrees_f: "196",
  degrees_c: "91",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  lattitude: "44.842",
  longitude: "-110.732",
  spring_name: "APOLLINARIS SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  lattitude: "44.693",
  longitude: "-110.738",
  spring_name: "ARTISTS PAINTPOTS",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "43.3",
  longitude: "-110.775",
  spring_name: "ASTORIA MINERAL HOT SPRINGS",
  degrees_f: "99",
  degrees_c: "37",
  usgs_quadrangle: "MUNGER MOUNTAIN 7.5"
  },
  {
  state_code: "WY",
  lattitude: "42.828",
  longitude: "-110.999",
  spring_name: "AUBURN HOT SPRINGS",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "null"
  },
  {
  state_code: "WY",
  lattitude: "44.553",
  longitude: "-110.301",
  spring_name: "BEACH SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.679",
  longitude: "-110.746",
  spring_name: "BERYL SPRING",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.761",
  longitude: "-110.73",
  spring_name: "BIJAH SPRING",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  lattitude: "44.544",
  longitude: "-110.788",
  spring_name: "BLACK WARRIOR GROUP SHELF SPRING",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.244",
  longitude: "-111.022",
  spring_name: "BOUNDARY CREEK HOT SPRINGS",
  degrees_f: "181",
  degrees_c: "83",
  usgs_quadrangle: "WARM RIVER BUTTE 15"
  },
  {
  state_code: "WY",
  lattitude: "43.471",
  longitude: "-110.835",
  spring_name: "BOYLES HILL SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "(JACKSON 7.5)"
  },
  {
  state_code: "WY",
  lattitude: "44.498",
  longitude: "-109.193",
  spring_name: "BUFFALO BILL RESERVOIR SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(DEVILS TOOTH 15)"
  },
  {
  state_code: "WY",
  lattitude: "44.495",
  longitude: "-109.222",
  spring_name: "BUFFALO BILL RESERVOIR SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(DEVILS TOOTH 15)"
  },
  {
  state_code: "WY",
  lattitude: "44.482",
  longitude: "-109.204",
  spring_name: "BUFFALO BILL RESERVOIR SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "(DEVILS TOOTH 15)"
  },
  {
  state_code: "WY",
  lattitude: "44.521",
  longitude: "-110.275",
  spring_name: "BUTTE SPRINGS",
  degrees_f: "187",
  degrees_c: "86",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.908",
  longitude: "-110.393",
  spring_name: "CALCITE SPRINGS",
  degrees_f: "201",
  degrees_c: "94",
  usgs_quadrangle: "TOWER JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.711",
  longitude: "-110.741",
  spring_name: "CHOCOLATE POTS",
  degrees_f: "124",
  degrees_c: "51",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.733",
  longitude: "-110.703",
  spring_name: "CISTERN SPRING",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "(NORRIS JUNCTION 15)"
  },
  {
  state_code: "WY",
  lattitude: "44.756",
  longitude: "-110.308",
  spring_name: "COFFEE POT HOT SPRINGS",
  degrees_f: "196",
  degrees_c: "91",
  usgs_quadrangle: "TOWER JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.513",
  longitude: "-109.115",
  spring_name: "DE MARIS SPRINGS",
  degrees_f: "97",
  degrees_c: "36",
  usgs_quadrangle: "CODY 15"
  },
  {
  state_code: "WY",
  lattitude: "42.665",
  longitude: "-105.394",
  spring_name: "DOUGLAS HOT SPRINGS",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "CHALK BUTTES 7.5"
  },
  {
  state_code: "WY",
  lattitude: "44.588",
  longitude: "-110.341",
  spring_name: "EBRO SPRINGS",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.722",
  longitude: "-110.701",
  spring_name: "ECHINUS GEYSER",
  degrees_f: "185",
  degrees_c: "85",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.526",
  longitude: "-110.835",
  spring_name: "EXCELSIOR GEYSER CRATER",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.543",
  longitude: "-110.859",
  spring_name: "FAIRY SPRINGS",
  degrees_f: "201",
  degrees_c: "94",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.532",
  longitude: "-110.796",
  spring_name: "FIVE SISTERS SPRINGS",
  degrees_f: "192",
  degrees_c: "89",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.566",
  longitude: "-110.871",
  spring_name: "FLAT CONE SPRING STEEP CONE",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.52",
  longitude: "-110.828",
  spring_name: "FLOOD GROUP",
  degrees_f: "203",
  degrees_c: "95",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.708",
  longitude: "-110.461",
  spring_name: "FOREST SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.554",
  longitude: "-110.812",
  spring_name: "FOUNTAIN GROUP",
  degrees_f: "201",
  degrees_c: "94",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.55",
  longitude: "-110.805",
  spring_name: "FOUNTAIN PAINT POT",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.741",
  longitude: "-110.699",
  spring_name: "GAS VENT",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.75",
  longitude: "-110.714",
  spring_name: "GAS VENT",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  lattitude: "44.612",
  longitude: "-110.618",
  spring_name: "GAS VENT",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.601",
  longitude: "-110.632",
  spring_name: "GAS VENT EAST OF MARY LAKE",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.715",
  longitude: "-110.555",
  spring_name: "GAS VENTS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.825",
  longitude: "-110.675",
  spring_name: "GAS VENTS AT HORSESHOE HILL",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  lattitude: "44.595",
  longitude: "-110.622",
  spring_name: "GAS VENTS SOUTHEAST OF MARY LAKE",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "43.56",
  longitude: "-109.732",
  spring_name: "GEYSER (WARM SPRING CREEK SPRINGS)",
  degrees_f: "84",
  degrees_c: "29",
  usgs_quadrangle: "DUBOIS 7.5"
  },
  {
  state_code: "WY",
  lattitude: "44.691",
  longitude: "-110.728",
  spring_name: "GEYSER SPRINGS GROUP",
  degrees_f: "201",
  degrees_c: "94",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.697",
  longitude: "-110.724",
  spring_name: "GIBBON HILL GEYSER",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "43.365",
  longitude: "-110.443",
  spring_name: "GRANITE FALLS HOT SPRINGS",
  degrees_f: "112",
  degrees_c: "45",
  usgs_quadrangle: "(GRANITE FALLS 7.5)"
  },
  {
  state_code: "WY",
  lattitude: "43.37",
  longitude: "-110.445",
  spring_name: "GRANITE HOT SPRING",
  degrees_f: "106",
  degrees_c: "41",
  usgs_quadrangle: "GRANITE FALLS 7.5"
  },
  {
  state_code: "WY",
  lattitude: "44.616",
  longitude: "-110.616",
  spring_name: "HIGHLAND HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "42.702",
  longitude: "-107.105",
  spring_name: "HORSE CREEK SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "HORSE CREEK SPRINGS"
  },
  {
  state_code: "WY",
  lattitude: "44.733",
  longitude: "-110.712",
  spring_name: "HORSESHOE SPRING",
  degrees_f: "187",
  degrees_c: "86",
  usgs_quadrangle: "(NORRIS JUNCTION 15)"
  },
  {
  state_code: "WY",
  lattitude: "44.985",
  longitude: "-110.689",
  spring_name: "HOT RIVER",
  degrees_f: "136",
  degrees_c: "58",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  lattitude: "44.752",
  longitude: "-110.256",
  spring_name: "HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "TOWER JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.642",
  longitude: "-110.238",
  spring_name: "HOT SPRING",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "PELICAN CONE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.743",
  longitude: "-110.242",
  spring_name: "HOT SPRING BASIN GROUP",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "PELICAN CONE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.739",
  longitude: "-110.258",
  spring_name: "HOT SPRING BASIN GROUP",
  degrees_f: "153",
  degrees_c: "67",
  usgs_quadrangle: "CANYON VILAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.723",
  longitude: "-110.358",
  spring_name: "HOT SPRING ON MOSS CREEK",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.61",
  longitude: "-110.438",
  spring_name: "HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.572",
  longitude: "-110.691",
  spring_name: "HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.766",
  longitude: "-110.3",
  spring_name: "HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "TOWER JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.734",
  longitude: "-110.029",
  spring_name: "HOT SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "PELICAN CONE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.711",
  longitude: "-110.468",
  spring_name: "HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.701",
  longitude: "-110.036",
  spring_name: "HOT SPRINGS",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "PELICAN CONE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.672",
  longitude: "-110.236",
  spring_name: "HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "PELICAN CONE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.667",
  longitude: "-110.282",
  spring_name: "HOT SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.752",
  longitude: "-110.418",
  spring_name: "HOT SPRINGS AT SEVENMILE HOLE",
  degrees_f: "189",
  degrees_c: "87",
  usgs_quadrangle: "TOWER JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.591",
  longitude: "-110.321",
  spring_name: "HOT SPRINGS AT SULPHUR HILLS",
  degrees_f: "196",
  degrees_c: "91",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.607",
  longitude: "-110.617",
  spring_name: "HOT SPRINGS EAST OF MARY LAKE",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.598",
  longitude: "-110.236",
  spring_name: "HOT SPRINGS IN PELICAN VALLEY",
  degrees_f: "156",
  degrees_c: "69",
  usgs_quadrangle: "PELICAN CONE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.69",
  longitude: "-110.384",
  spring_name: "HOT SPRINGS ON BOG CREEK",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.697",
  longitude: "-110.375",
  spring_name: "HOT SPRINGS ON BOG CREEK",
  degrees_f: "185",
  degrees_c: "85",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.681",
  longitude: "-110.326",
  spring_name: "HOT SPRINGS ON UPPER SOUR CREEK",
  degrees_f: "194",
  degrees_c: "90",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.518",
  longitude: "-110.813",
  spring_name: "HOT SPRINGS RABBIT CREEK GROUP",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.841",
  longitude: "-110.167",
  spring_name: "HOT ON LAMAR RIVER",
  degrees_f:  "W",
  degrees_c: "W",
  usgs_quadrangle: "(ABIATHAR PEAK 15)"
  },
  {
  state_code: "WY",
  lattitude: "44.532",
  longitude: "-110.874",
  spring_name: "IMPERIAL GEYSER SPRAY GEYSER",
  degrees_f:  "192",
  degrees_c: "89",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.662",
  longitude: "-110.768",
  spring_name: "IRON SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "43.958",
  longitude: "-110.696",
  spring_name: "JACKSON LAKE HOT SPRINGS",
  degrees_f: "162",
  degrees_c: "72",
  usgs_quadrangle: "(COLTER BAY 7.5)"
  },
  {
  state_code: "WY",
  lattitude: "43.489",
  longitude: "-109.605",
  spring_name: "JAKEYS FORK SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(TORREY LAKE 7.5)"
  },
  {
  state_code: "WY",
  lattitude: "42.817",
  longitude: "-110.997",
  spring_name: "JOHNSON SPRINGS",
  degrees_f: "115",
  degrees_c: "46",
  usgs_quadrangle: "null"
  },
  {
  state_code: "WY",
  lattitude: "44.739",
  longitude: "-110.324",
  spring_name: "JOSEPHS COAT SPRINGS",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "43.639",
  longitude: "-110.615",
  spring_name: "KELLY WARM SPRING",
  degrees_f: "81",
  degrees_c: "27",
  usgs_quadrangle: "SHADOW MOUNTAIN 7.5"
  },
  {
  state_code: "WY",
  lattitude: "43.282",
  longitude: "-110.019",
  spring_name: "KENDALL WARM SPRING",
  degrees_f: "86",
  degrees_c: "30",
  usgs_quadrangle: "KLONDIKE HILL 7.5"
  },
  {
  state_code: "WY",
  lattitude: "44.749",
  longitude: "-108.188",
  spring_name: "LITTLE SHEEP MOUNTAIN SPRING",
  degrees_f: "68",
  degrees_c: "20",
  usgs_quadrangle: "(SPENCE 7.5)"
  },
  {
  state_code: "WY",
  lattitude: "43.52",
  longitude: "-109.669",
  spring_name: "LITTLE WARM SPRING",
  degrees_f: "77",
  degrees_c: "25",
  usgs_quadrangle: "(DUBOIS 7.5)"
  },
  {
  state_code: "WY",
  lattitude: "44.967",
  longitude: "-110.708",
  spring_name: "MAMMOTH HOT SPRINGS",
  degrees_f: "163",
  degrees_c: "73",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  lattitude: "44.684",
  longitude: "-110.753",
  spring_name: "MONUMENT GEYSER BASIN",
  degrees_f: "197",
  degrees_c: "92",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.571",
  longitude: "-110.811",
  spring_name: "MORNING MIST SPRINGS",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.617",
  longitude: "-110.432",
  spring_name: "MUD GEYSERS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.625",
  longitude: "-110.433",
  spring_name: "MUD VOLCANO",
  degrees_f: "131",
  degrees_c: "55",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.511",
  longitude: "-109.156",
  spring_name: "NEEDLE HOT SPRINGS",
  degrees_f: "75",
  degrees_c: "24",
  usgs_quadrangle: "(CODY 15)"
  },
  {
  state_code: "WY",
  lattitude: "43.907",
  longitude: "-110.198",
  spring_name: "NORTH BUFFALO FORK SPRINGS",
  degrees_f: "113",
  degrees_c: "45",
  usgs_quadrangle: "(JOY PEAK 7.5)"
  },
  {
  state_code: "WY",
  lattitude: "44.671",
  longitude: "-110.29",
  spring_name: "PONUNTPA SPRINGS GROUP",
  degrees_f: "180",
  degrees_c: "82",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.568",
  longitude: "-110.805",
  spring_name: "QUAGMIRE GROUP",
  degrees_f: "203",
  degrees_c: "95",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.564",
  longitude: "-110.869",
  spring_name: "QUEENS LAUNDRY",
  degrees_f: "192",
  degrees_c: "89",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.514",
  longitude: "-110.828",
  spring_name: "RABBIT CREEK GROUP",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.769",
  longitude: "-110.269",
  spring_name: "RAINBOW SPRINGS",
  degrees_f: "190",
  degrees_c: "88",
  usgs_quadrangle: "TOWER JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.556",
  longitude: "-110.832",
  spring_name: "RIVER GROUP",
  degrees_f: "196",
  degrees_c: "91",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.563",
  longitude: "-110.834",
  spring_name: "RIVER GROUP",
  degrees_f: "205",
  degrees_c: "96",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.753",
  longitude: "-110.724",
  spring_name: "ROADSIDE SPRINGS FRYING PAN SPRING",
  degrees_f: "158",
  degrees_c: "70",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  lattitude: "41.45",
  longitude: "-106.804",
  spring_name: "SARATOGA HOT SPRINGS",
  degrees_f: "129",
  degrees_c: "54",
  usgs_quadrangle: "SARATOGA 7.5"
  },
  {
  state_code: "WY",
  lattitude: "44.671",
  longitude: "-110.786",
  spring_name: "SECRET VALLEY HOT SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "(MADISON JUNCTION 15)"
  },
  {
  state_code: "WY",
  lattitude: "44.786",
  longitude: "-110.74",
  spring_name: "SEMI-CENTENNIAL GEYSER",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  lattitude: "44.754",
  longitude: "-110.403",
  spring_name: "SEVENMILE HOLE",
  degrees_f: "154",
  degrees_c: "68",
  usgs_quadrangle: "(TOWER JUNCTION 15)"
  },
  {
  state_code: "WY",
  lattitude: "44.608",
  longitude: "-108.138",
  spring_name: "SHEEP MOUNTAIN SPRINGS",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "SHEEP CANYON 7.5"
  },
  {
  state_code: "WY",
  lattitude: "44.513",
  longitude: "-109.129",
  spring_name: "SHOSHONE HOT SPRINGS",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "(CODY 15)"
  },
  {
  state_code: "WY",
  lattitude: "44.551",
  longitude: "-110.85",
  spring_name: "SPRINGS ON FAIRY CREEK",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.781",
  longitude: "-110.738",
  spring_name: "STEAM VENTS AT ROARING MOUNTAIN",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  lattitude: "44.53",
  longitude: "-110.297",
  spring_name: "STEAMBOAT SPRINGS",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "42.75",
  longitude: "-109.616",
  spring_name: "STEELE HOT SPRINGS",
  degrees_f: "102",
  degrees_c: "39",
  usgs_quadrangle: "FREMONT BUTTE 7.5"
  },
  {
  state_code: "WY",
  lattitude: "44.628",
  longitude: "-110.433",
  spring_name: "SULPHUR CALDRON",
  degrees_f: "190",
  degrees_c: "88",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.653",
  longitude: "-110.482",
  spring_name: "SULPHUR SPRINGS",
  degrees_f: "194",
  degrees_c: "89",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "42.492",
  longitude: "-108.172",
  spring_name: "SWEETWATER STATION WARM SPRINGS",
  degrees_f: "90",
  degrees_c: "32",
  usgs_quadrangle: "HAPPY SPRING 7.5"
  },
  {
  state_code: "WY",
  lattitude: "44.702",
  longitude: "-110.767",
  spring_name: "SYLVAN SPRINGS",
  degrees_f: "192",
  degrees_c: "89",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.634",
  longitude: "-110.234",
  spring_name: "THE MUDKETTLES",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "PELICAN CONE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.634",
  longitude: "-110.226",
  spring_name: "THE MUSHPOTS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "PELICAN CONE 15"
  },
  {
  state_code: "WY",
  lattitude: "43.654",
  longitude: "-108.194",
  spring_name: "THERMOPOLIS HOT SPRINGS",
  degrees_f: "133",
  degrees_c: "56",
  usgs_quadrangle: "THERMOPOLIS 7.5"
  },
  {
  state_code: "WY",
  lattitude: "44.544",
  longitude: "-110.258",
  spring_name: "TURBID SPRINGS",
  degrees_f: "198",
  degrees_c: "92",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.582",
  longitude: "-110.314",
  spring_name: "VERMILION SPRINGS",
  degrees_f: "140",
  degrees_c: "60",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.656",
  longitude: "-110.572",
  spring_name: "VIOLET SPRINGS",
  degrees_f: "H",
  degrees_c: "H",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.708",
  longitude: "-110.471",
  spring_name: "WARM SPRING",
  degrees_f: "W",
  degrees_c: "W",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "42.249",
  longitude: "-104.781",
  spring_name: "WARM SPRINGS (IMMIGRANTS WASHTUB)",
  degrees_f: "70",
  degrees_c: "21",
  usgs_quadrangle: "WHEATLAND NE 7.5"
  },
  {
  state_code: "WY",
  lattitude: "43.008",
  longitude: "-108.835",
  spring_name: "WASHAKIE MINERAL HOT SPRINGS",
  degrees_f: "111",
  degrees_c: "44",
  usgs_quadrangle: "ETHETE 7.5"
  },
  {
  state_code: "WY",
  lattitude: "44.766",
  longitude: "-110.429",
  spring_name: "WASHBURN HOT SPRINGS",
  degrees_f: "196",
  degrees_c: "91",
  usgs_quadrangle: "TOWER JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.529",
  longitude: "-110.791",
  spring_name: "WHITE CREEK GROUP",
  degrees_f: "185",
  degrees_c: "85",
  usgs_quadrangle: "(MADISON JUNCTION 15)"
  },
  {
  state_code: "WY",
  lattitude: "44.537",
  longitude: "-110.801",
  spring_name: "WHITE DOME GEYSER SURPRISE POOL",
  degrees_f: " 203",
  degrees_c: "95",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.781",
  longitude: "-110.699",
  spring_name: "WHITEROCK SPRINGS",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "MAMMOTH 15"
  },
  {
  state_code: "WY",
  lattitude: "43.583",
  longitude: "-108.213",
  spring_name: "WIND RIVER CANYON SPRING",
  degrees_f: "72",
  degrees_c: "22",
  usgs_quadrangle: "WEDDING OF THE WATERS 7.5"
  },
  {
  state_code: "WY",
  lattitude: "44.742",
  longitude: "-110.579",
  spring_name: "WOLF LAKE SPRINGS",
  degrees_f: "91",
  degrees_c: "33",
  usgs_quadrangle: "(NORRIS JUNCTION 15)"
  },
  {
  state_code: "WY",
  lattitude: "44.6",
  longitude: "-110.203",
  spring_name: "null",
  degrees_f: "95",
  degrees_c: "35",
  usgs_quadrangle: "PELICAN CONE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.566",
  longitude: "-110.816",
  spring_name: "null",
  degrees_f: "199",
  degrees_c: "93",
  usgs_quadrangle: "MADISON JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.728",
  longitude: "-110.701",
  spring_name: "null",
  degrees_f: "192",
  degrees_c: "89",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.722",
  longitude: "-110.708",
  spring_name: "null",
  degrees_f: "201",
  degrees_c: "94",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.72",
  longitude: "-110.715",
  spring_name: "null",
  degrees_f: "144",
  degrees_c: "62",
  usgs_quadrangle: "NORRIS JUNCTION 15"
  },
  {
  state_code: "WY",
  lattitude: "44.714",
  longitude: "-110.475",
  spring_name: "null",
  degrees_f: "167",
  degrees_c: "75",
  usgs_quadrangle: "CANYON VILLAGE 15"
  },
  {
  state_code: "WY",
  lattitude: "44.69",
  longitude: "-110.75",
  spring_name: "null",
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
