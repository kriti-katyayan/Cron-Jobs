// index.js
const cron = require("node-cron");
const express = require("express");
const fs = require("fs");

app = express();
 var n=10;
// schedule tasks to be run on the server   
cron.schedule("* * * * * *", function() {
    console.log("running a task every Second");
  });

  app.listen(3128);