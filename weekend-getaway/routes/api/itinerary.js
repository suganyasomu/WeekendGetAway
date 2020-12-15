const router = require("express").Router();
const itineraryController = require("../../controllers/itineraryController");

// Matches with "/api/itinerary"
router.route("/")
  .get(itineraryController.findAll)
  .post(itineraryController.create);

// Matches with "/api/itinerary/:uid" (where uid is the user's ID)
router
  .route("/:uid")
  .get(itineraryController.findById)
  .put(itineraryController.update)
  .delete(itineraryController.remove);

  router
  .route("/api/history/:uid")
  .post();
module.exports = router;
