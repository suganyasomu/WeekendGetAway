const router = require("express").Router();
const hotspringController = require("../../controllers/hotspringController");

// Matches with "/api/hotspring"
router.route("/")
  .get(hotspringController.findAll)

// Matches with "/api/hotspring/:id"
router
  .route("/:id")
  .get(hotspringController.findById)

module.exports = router;
