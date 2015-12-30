var port = process.env.OPENSHIFT_INTERNAL_PORT;
var ip = process.env.OPENSHIFT_INTERNAL_IP;
var connect = require('connect');
var app = connect().use(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
});
connect.createServer(app).listen(port, ip);