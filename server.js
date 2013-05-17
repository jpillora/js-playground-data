var bouncy = require('bouncy');
var http = require('http');
var net = require('net');
var port = process.env.PORT || 11000;

var TestStream = require('./lib/test-stream');

bouncy(function (req, bounce) {

  var host = req.headers.targetHost;
  var port = parseInt(req.headers.targetPort, 10);
  var stream = net.createConnection(port, host);

  bounce(stream.pipe(new TestStream()));

}).listen(port);

var server2 = http.createServer(function (req, res) {
  console.log(req.headers);
  res.end();
});

server2.listen(12000);

console.log("Listening on " + port);