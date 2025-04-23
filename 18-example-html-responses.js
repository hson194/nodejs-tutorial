const http = require("http");

const { readFileSync } = require("fs");

const homepage = readFileSync("./navbar-app/index.html");
const styles = readFileSync("./navbar-app/styles.css");
const logo = readFileSync("./navbar-app/logo.svg");
const browserLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  //REMOVE ME
  console.log("url", url);

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(homepage);
  } else if (url === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(styles);
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.end(logo);
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "Content-Type": "application/javascript" });
    res.end(browserLogic);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(5000, () => {
  console.log("server is listening on port 5000");
});
