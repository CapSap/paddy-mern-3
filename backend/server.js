const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const orders = require("./routes/api/orders");

const app = express();

//body parser middleware
app.use(bodyParser.json);

//mongoo config
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => {
    console.log("mongo db connected");
  })
  .catch((error) => {
    console.log(error);
  });

//use routes
app.use("/api/orders", orders);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
