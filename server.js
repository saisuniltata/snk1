var express = require('express');
app = express();

var http = require('http');
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    port = process.env.OPENSHIFT_NODEJS_PORT || '8080';




server = require('http').createServer(app);
io = require('socket.io').listen(server);
server.listen(port);

app.get('/',function(req,res){
    res.sendfile(__dirname+'/index.html');
});