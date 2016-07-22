var express = require('express');

var app = express();

// SERVER CONFIGURATION
app.use(express.static(__dirname + '/../')); // set the static files location /public/img will be /img for users

app.listen(8080);

console.log('app now running on 8080');