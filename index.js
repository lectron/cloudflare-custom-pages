const express = require("express");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const path = require("path");
const serveIndex = require("serve-index");

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "static"));

var server = express();

var PORT = 3000;

server.use(connectLivereload());
server.use(serveIndex(path.join(__dirname, "static")));
server.use(express.static(path.join(__dirname, "static")));

server.listen(PORT, function () {
  console.log("Listening on port", PORT);
  console.log("open http://127.0.0.1:" + PORT);
});
