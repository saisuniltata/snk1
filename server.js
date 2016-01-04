var express = require('express');
var fs = require('fs');
var port = process.env.OPENSHIFT_NODEJS_PORT||8080;
var ip = process.env.OPENSHIFT_NODEJS_IP||'127.0.0.1';
app = express(),
server = require('http').createServer(app),
io = require('socket.io').listen(server);

server.listen(port,ip);

app.get('/',function(req,res){
    if(fs.existsSync(__dirname + '/index.html'))
    {
        res.send('Sucess');
    }
    else {
   res.send('failure');
   }
});

io.sockets.on('connection',function(data){
    io.sockets.emit('new message',{msg:data})
})