const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// used to change type of data
app.use(bodyParser.urlencoded());

// routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
