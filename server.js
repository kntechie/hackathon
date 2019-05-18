var express = require('express');
var http = require('http');
var https = require('https');
var bodyParser = require('body-parser');
var jsonBodyParser = require('body-parser').json();
var path = require('path');
var cors = require('cors');
var fs = require('fs');

//fs.readFileSync(path, 'utf8')
// JSON.parse()

var server = express();

var httpServer = http.createServer(server);
var httpsServer = https.createServer(server);

server.use(bodyParser.urlencoded({
    extended: false
}));
server.use(bodyParser.json());
server.use(cors());

var serviceListner = require('./utilities/serviceListner');
serviceListner.listenServices(jsonBodyParser, server);

httpServer.listen('3000', function(){
    console.log('Http stub server listening at http://%s:%s', 'localhost', '3000');
});

httpsServer.listen('3100', function(){
    console.log('Https stub server listening at https://%s:%s', 'localhost', '3100');
})