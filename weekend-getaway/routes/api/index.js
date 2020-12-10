const router = require("express").Router();
const itineraryRoutes = require("./itinerary");
const hotspringRoutes = require("./hotspring");
const campsiteRoutes = require("./campsite");
const hikeRoutes = require("./hike");
const mtbikeRoutes = require("./mtbike");

//routes
router.use("/itinerary", itineraryRoutes);
router.use("/hotspring", hotspringRoutes);
router.use("/campsite", campsiteRoutes);
router.use("/hike", hikeRoutes);
router.use("/mtbike", mtbikeRoutes);

module.exports = router;
