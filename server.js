var express = require('express');
var fs = require('fs');
var port = process.env.OPENSHIFT_NODEJS_PORT||8080;
var ip = process.env.OPENSHIFT_NODEJS_IP||'127.0.0.1';
app = express(),
server = require('http').createServer(app),
io = require('socket.io').listen(server);

server.listen(port,ip);

app.get('/',function(req,res){
    res.send('<!doctype html>
<html lang="en">
<head>
<title>Chat</title>
<style>
#mainWrapper{
    
}

#namesWrapper{
    display:none;
}

#userWrapper{

}
</style>
<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
</head>

<body>
    <div id = "container">
        <div id = "namesWrapper">
            <div class="col-xs-3">
                <div class="panel panel-primary">
                     <div class="panel-heading">Chat App</div>
                 
                        <form id ="userName">
                            <div class="panel-body" >Username
                            <br/><br/>
                            <input size = "10" class="form-control" id="username"  ><br/>
                            <input type="submit" class="btn btn-info" value="Submit"><br/>
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
            
        </div>

        <div id = "mainWrapper">
            <div class="col-xs-6">
                <div class="panel panel-primary">
                     <div class="panel-heading">Chat App</div>
                                <div id = "userWrapper">
                                    <div id = "users">
                        
                                    </div>
                                <div id = "chatWrapper">
                                    <form id = "messageForm"
                                    <div class="panel-body" ></br>
                                        <div class="col-xs-8">
                                        <textarea class="form-control" rows="10" id="message"></textarea><br/>
                                        <input type="submit" class="btn btn-info" value="Submit">
                                        </div>
                                    </form>
                                </div>  
                                </div>
                                
                        </div>
                </div>
            </div>
        </div>  
    </div>
    <script src = "http://code.jquery.com/jquery-latest.min.js"></script>
    <script src="/socket.io/socket.io.js"></script>
    <script>
    $(function(){
        var socket = io.connect();
        var $messageForm = $('#messageForm');
        var $message = $('#message');
        var $chat = $('#chatWindow');
        $messageForm.submit(function(e){
            e.preventDefault();
            socket.emit('send message', $message.val());
            $message.val('');
        })
        socket.on('new message', function(data){
            $chat.append(data.msg+'<br/>');
        });
    });
    </script>
</body>
<html>');
});

io.sockets.on('connection',function(data){
    io.sockets.emit('new message',{msg:data})
})