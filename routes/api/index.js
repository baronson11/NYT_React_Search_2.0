// Dependencies -------------------------------
const router = require("express").Router();
const articleRoutes = require("./articles");
const nytRoutes = require("./nyt");

// Router ------------------------------------
router.use("/articles", articleRoutes);
router.use("/nyt", nytRoutes);

// Exports ------------------------------------
module.exports = router;
