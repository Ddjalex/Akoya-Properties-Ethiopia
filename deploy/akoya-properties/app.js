var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = process.env.PORT || 3000;
var ROOT = __dirname;

app.disable("x-powered-by");

app.use(function (req, res, next) {
  if (/\/assets\//.test(req.url) || /\.[a-zA-Z0-9]+$/.test(req.url)) {
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  } else {
    res.setHeader("Cache-Control", "no-cache");
  }
  next();
});

app.use(
  express.static(ROOT, {
    index: false,
    fallthrough: true,
    maxAge: 0,
  })
);

app.get("*", function (req, res) {
  var indexPath = path.join(ROOT, "index.html");
  if (fs.existsSync(indexPath)) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.sendFile(indexPath);
  } else {
    res.status(500).send("index.html not found");
  }
});

app.listen(PORT, function () {
  console.log("Akoya Properties listening on port " + PORT);
});
