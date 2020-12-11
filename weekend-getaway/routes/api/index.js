const router = require("express").Router();
const itineraryRoutes = require("./itinerary");
const hotspringRoutes = require("./hotspring");
const campsiteRoutes = require("./campsite");
const hikeRoutes = require("./hike");
const mtbikeRoutes = require("./mtbike");
const locationRoutes = require("./location");

//routes
router.use("/itinerary", itineraryRoutes);
router.use("/hotspring", hotspringRoutes);
router.use("/campsite", campsiteRoutes);
router.use("/hike", hikeRoutes);
router.use("/mtbike", mtbikeRoutes);
router.use("/location", locationRoutes);

module.exports = router;
