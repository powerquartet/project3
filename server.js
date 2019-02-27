const express = require("express");
const routes = require("./routes");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

app.get("/api/test", (request, response) => {
  response.json({ "test": "value" });
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// app.post("api/users", (req, res) => console.log(req.body));
app.put("api/users", (req, res) => console.log(req.body));


// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI ||
  "mongodb://localhost/portionCrushDB"
  // "mongodb://local:power4tet@ds347665.mlab.com:47665/heroku_s7jskswt"
);

console.log(`! MONGO, online and listening`);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
