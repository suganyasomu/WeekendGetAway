const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotspringSchema = new Schema({
  state_code: { type: String, required: true },
  loc: {
    type: { type: String, default: "Point" },
    coordinates: [Number],
  },
  spring_name: { type: String, required: false },
  degrees_f: { type: String, required: false },
  degrees_c: { type: String, required: false },
  usgs_quadrangle: { type: String, required: false },
});

const Hotspring = mongoose.model("Hotspring", hotspringSchema);

module.exports = Hotspring;
