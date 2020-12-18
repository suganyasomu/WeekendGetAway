const router = require("express").Router();
const itineraryRoutes = require("./itinerary");
const hotspringRoutes = require("./hotspring");
const campsiteRoutes = require("./campsite");
const hikeRoutes = require("./hike");
const mtbikeRoutes = require("./mtbike");
const locationRoutes = require("./location");
const weatherRoutes = require("./weather");
const natParksRoutes = require("./natParks");
const climbingRoutes = require("./climbing");
const directionRoutes = require("./directions");

//routes
router.use("/itinerary", itineraryRoutes);
router.use("/hotspring", hotspringRoutes);
router.use("/campsite", campsiteRoutes);
router.use("/hike", hikeRoutes);
router.use("/mtbike", mtbikeRoutes);
router.use("/location", locationRoutes);
router.use("/weather", weatherRoutes);
router.use("/natParks", natParksRoutes);
router.use("/climbing", climbingRoutes);
router.use("/directions", directionRoutes);

module.exports = router;
