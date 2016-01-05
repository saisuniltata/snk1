var express = require('express');
var path = require('path');

var port = process.env.OPENSHIFT_NODEJS_PORT||8080;
var ip = process.env.OPENSHIFT_NODEJS_IP||'127.0.0.1';
app = express(),
server = require('http').createServer(app),
io = require('socket.io').listen(server);

server.listen(port,ip);

app.get('/',function(req,res){    
    res.sendFile(__dirname +'/index.html');
});