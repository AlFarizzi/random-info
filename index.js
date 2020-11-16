const express = require("express");
const app = new express();
const presiden = require("./Router/presiden");
const top = require("./Router/top-200");

app.use('/presiden',presiden);
app.use('/charts',top);

app.listen(process.env.PORT || 3000);