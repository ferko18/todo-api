const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/todos");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5555;
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://0.0.0.0:27017")
  .then(() => console.log("you are now connected to MONGO DB"))
  .catch((error) => console.error("Could not connect to MONGO DB", error));

app.use("/api/todos", routes);
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
