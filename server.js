'use strict';

const express = require('express');
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static('./starter-code/public'));

app.get('/new', function(request, response){
  response.sendFile('starter-code/public/new.html', {root: '.'});
});

app.get('*', function(request, response){
  response.status(404).send('404 Page not found');
});

app.post('/articles', bodyParser, function(request, response) {
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.listen(PORT, function() {
  console.log('express is listening on port ' + PORT);
});
