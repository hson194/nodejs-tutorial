const http = require("http");
const fs = require("fs");

const appServer = http.createServer((req, res) => {
  // const text = fs.readFileSync("./content/big-file.txt", "utf8"); // size: 1.8Mb

  const stream = fs.createReadStream("./content/big-file.txt", {
    encoding: "utf8",
  });

  stream.on("open", () => {
    //"open" event is emitted when the stream is successfully opened and ready for operations
    stream.pipe(res); //streams data (chunks) from the source (file) to the destination (HTTP response)
  });

  stream.on("error", (err) => {
    res.end(err);
  });
});

appServer.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
