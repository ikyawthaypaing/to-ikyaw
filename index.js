const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(308, { Location: "https://www.ikyawthetpaing.com" });
  res.end();
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

module.exports = server