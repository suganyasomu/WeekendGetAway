const router = require("express").Router();
const itineraryRoutes = require("./itinerary");
const hotspringRoutes = require("./hotspring");
const campsiteRoutes = require("./campsites");

//routes
router.use("/itinerary", itineraryRoutes);
router.use("/hotspring", hotspringRoutes);
router.use("/campsites", campsiteRoutes);

module.exports = router;
