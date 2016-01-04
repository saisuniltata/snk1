var express = require('express');
var port = process.env.OPENSHIFT_NODEJS_PORT||8080;
var ip = process.env.OPENSHIFT_NODEJS_IP||'127.0.0.1';
app = express(),
server = require('http').createServer(app),
io = require('socket.io').listen(server);

server.listen(port,ip);

app.get('/',function(req,res){
   res.sendFile(/var/lib/openshift/568327d17628e18f7c000140/app-root/runtime/repo/index.html);
});

io.sockets.on('connection',function(data){
    io.sockets.emit('new message',{msg:data})
})