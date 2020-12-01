const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
require("dotenv").config();

const app = express();
app.listen(process.env.PORT);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.use(require("./routes/routes"));
