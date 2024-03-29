const express = require("express");
const mysql = require("mysql2");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const port = 4000;
const dotenv = require("dotenv");
const cors = require("cors");
const authMiddleware = require("./middlewares/auth_middleware");
const cafe = require("./endpoints/endpoint_cafe");
const logout = require("./endpoints/endpoint_logout");
const fs = require("fs");
const https = require("https");

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_16jhkx",
  password: "SqJj6le5ZWS61lTQ",
  database: "lab_blank01_163hqvb",
});

const privateKey = fs.readFileSync("cert.pem", "utf8");
const certificate = fs.readFileSync("certpub.pem", "utf8");
const credentials = { key: privateKey, cert: certificate };

dotenv.config();

connection.connect(() => {
  console.log("Database is connected");
});

global.connection = connection;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyParser.json({ type: "application/json" }));

app.use(cookieParser());

app.get("/", require("./endpoints/test"));
app.post("/login", require("./endpoints/endpoint_login"));
app.post("/register", require("./endpoints/endpoint_register"));
app.get("/profile", authMiddleware, require("./endpoints/endpoint_getprofile"));
app.post("/logout", authMiddleware, logout.logout);
//cafe
app.post("/cafe", authMiddleware, cafe.create);
app.get("/cafe", authMiddleware, cafe.read);
app.patch("/cafe/:id", cafe.update);
app.delete("/cafe/:id", authMiddleware, cafe.remove);

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
