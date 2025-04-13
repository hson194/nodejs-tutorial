const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    // BLOCKING CODE
    for (let i = 0; i < 2000; i++) {
      for (let j = 0; j < 2000; j++) {
        console.log(i, j);
      }
    }

    res.end("Welcome to our about page");
  } else {
    res.end("<h1>404 Not Found</h1>");
  }
});
server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
