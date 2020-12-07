const router = require("express").Router();
const itineraryRoutes = require("./itinerary");
const hotspringRoutes = require("./hotspring");

//routes
router.use("/itinerary", itineraryRoutes);
router.use("/hotspring", hotspringRoutes);

module.exports = router;
