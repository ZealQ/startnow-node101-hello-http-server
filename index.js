
// var http and requires http to run in new tab
var http = require('http');
// in this line we are creating  a server to make it work in
http.createServer(function(req, res) {
    // in this line we need writeHead to  indicate code 200(ok) and  type and text
    res.writeHead(200,{ "content-Type": "text/plain"});
    //res end stops the code and gives you what the text output 
    res.end("Hello World");    
})
.listen(8080, '127.0.0.1');
