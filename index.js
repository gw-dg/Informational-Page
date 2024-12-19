const http = require("http");
const fs = require("fs");
const path = require("path");
const myServer = http.createServer((req, res) => {
  if (req.url === "/") {
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Contet-Type": "text/plain" });
        res.end("500 Internal Error");
        console.log(err);
        return;
      }
      res.writeHead(200, { "Contet-Type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/about") {
    const filePath = path.join(__dirname, "about-me.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Contet-Type": "text/plain" });
        res.end("500 Internal Error");
        console.log(err);
        return;
      }
      res.writeHead(200, { "Contet-Type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/contact-me") {
    const filePath = path.join(__dirname, "contact-me.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Contet-Type": "text/plain" });
        res.end("500 Internal Error");
        console.log(err);
        return;
      }
      res.writeHead(200, { "Contet-Type": "text/html" });
      res.end(data);
    });
  } else {
    const filePath = path.join(__dirname, "404.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Contet-Type": "text/plain" });
        res.end("500 Internal Error");
        console.log(err);
        return;
      }
      res.writeHead(200, { "Contet-Type": "text/html" });
      res.end(data);
    });
  }
});

myServer.listen(8080, () => {});
