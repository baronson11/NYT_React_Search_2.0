// Dependencies ----------------------------------
const router = require("express").Router();
const articleController = require("../../controllers/nytController");

// Router ----------------------------------------

// Matches with "/api/nyt"
router
  .route("/")
  .get(articleController.findAll);

// Exports ---------------------------------------
module.exports = router;
