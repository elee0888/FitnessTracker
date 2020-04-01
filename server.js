const express = require("express"),
 logger = require("morgan"),
 mongoose = require("mongoose"),
 routes = require("./routes/routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT} !`)
});