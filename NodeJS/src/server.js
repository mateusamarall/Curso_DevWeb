const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const routes = require("./routes");

mongoose.connect(
  "mongodb+srv://chuvasp:chuvasp@cursodevweb.gplu8.gcp.mongodb.net/CursoDevWeb?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
