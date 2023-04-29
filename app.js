const express = require("express");
const app = express();
app.get("/", (Request, Response) => {
  Response.send("Express JS");
});
module.exports = app;
