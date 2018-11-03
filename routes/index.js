// Dependencies -----------------------------------
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes -------------------------------------
router.use("/api", apiRoutes);

// Use React App if no API routes in use ----------
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

// Exports ----------------------------------------
module.exports = router;
