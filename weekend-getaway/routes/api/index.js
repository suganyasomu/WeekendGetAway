const router = require("express").Router();
const itineraryRoutes = require("./itinerary");
const hotspringRoutes = require("./hotspring");
const campsiteRoutes = require("./campsite");
const hikeRoutes = require("./hike");
const mtbikeRoutes = require("./mtbike");
const locationRoutes = require("./location");
const weatherRoutes = require("./weather");
const natParksRoutes = require("./natParks");

//routes
router.use("/itinerary", itineraryRoutes);
router.use("/hotspring", hotspringRoutes);
router.use("/campsite", campsiteRoutes);
router.use("/hike", hikeRoutes);
router.use("/mtbike", mtbikeRoutes);
router.use("/location", locationRoutes);
router.use("/weather", weatherRoutes);
router.use("/natParks", natParksRoutes);

module.exports = router;
