
var express = require('express');
var app = express();
const path = require('path');

const options ={
    root: path.join(__dirname,"")
};

app.get('/', function(req, res) {
  res.sendFile('./index.html',options);
});

app.get('/about', function(req, res) {
    res.sendFile('./about.html',options);
  });

  app.get('/contact', function(req, res) {
    res.sendFile('./contact_me.html',options);
  });

  app.get('/index', function(req, res) {
    res.sendFile('./index.html',options);
  });

  app.use((req,res,next) =>{
    res.status(404).sendFile('./error.html',options);
  });
app.listen(3000, function() {
  console.log('Listening on port 3000!');
});