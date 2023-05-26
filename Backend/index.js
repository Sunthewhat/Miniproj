const express = require("express");
const mysql = require("mysql2");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const port = 4000;
const dotenv = require("dotenv");
const cors = require("cors");

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_16jhkx",
  password: "SqJj6le5ZWS61lTQ",
  database: "lab_blank01_163hqvb",
});

dotenv.config();

connection.connect(() => {
  console.log("Database is connected");
});

global.connection = connection;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(bodyParser.json({ type: "application/json" }));

app.use(cookieParser());

app.get("/", require("./endpoints/test"));
app.get("/login", require("./endpoints/endpoint_login"));
app.post("/register", require("./endpoints/endpoint_register"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});