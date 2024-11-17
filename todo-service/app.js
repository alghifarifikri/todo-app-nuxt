require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./src/routes/routes");
const port = process.env.APP_PORT;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/todo", routes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
