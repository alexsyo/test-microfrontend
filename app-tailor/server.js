const http = require('http');
const Tailor = require('node-tailor');
const tailor = new Tailor({});
const server = http.createServer((req, res) => {
  req.url = req.url !== '/' ? req.url : '/index'
  tailor.requestHandler(req, res)
});
server.listen(process.env.PORT || 3000);