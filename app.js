const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

require("dotenv").config({ path: "./config.env" });
require("./server");

// initiate express
const app = express();
app.use(express.json());
app.use(bodyParser());
app.use(cors());


app.use(express.static("images"));

const userRouter = require("./Router/userRouter");





app.use("/api/user", userRouter);





app.use(express.static("Client/build"));
app.use("*", (req, res) => {
  res.send(path.resolve(__dirname, "Client", "build", "index.html"));
});



app.listen(process.env.PORT, () => {
  console.log("listening on port");
});
