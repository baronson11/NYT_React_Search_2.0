// Dependencies ---------------------------------------------
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

// Express and PORT ------------------------------------------
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware ------------------------------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routing ----------------------------------------------------
app.use(routes);

// MongoDB connection -----------------------------------------
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/nytarticles"
);

// Server ----------------------------------------------------
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
