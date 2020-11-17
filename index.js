const express = require("express");
const app = new express();
const presiden = require("./Router/presiden");
const film = require("./Router/film")
const top = require("./Router/top-200");
const cors = require("cors");

app.use(cors());
app.use('/presiden', presiden);
app.use('/charts', top);
app.use('/films', film)

app.listen(process.env.PORT || 3000);