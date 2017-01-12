// var http = require('http');

// http.createServer(function (req, res) {
// 	res.writeHead(200, {'Context-Type':'text/html'});
// 	res.end('<h1>kkkkkk</h1>');
// }).listen(4042, function(){
// 	console.log('server running at 127.0.0.1:4042');	
// })

//git test
var express = require('express');
var path = require('path');

var app = express();

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')));

var data = {count:0}
app.get('/', function(req,res){
	data.count++;
	res.render('my_ejs',data);
})

app.get('/reset', function(req, res){
	data.count = 0;
	res.render('my_ejs',data);
});

app.listen(4042, function(){
	console.log("localhost:4042 running");
});