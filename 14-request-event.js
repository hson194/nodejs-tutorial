const http = require("http");

const appServer = http.createServer();
appServer.on("request", (req, res) => {
  res.end("Hello from the server");
});

appServer.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
