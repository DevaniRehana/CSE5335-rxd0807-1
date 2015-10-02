var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/json', function(request, response) {
var list1 = [
    {"firstName":"John", "lastName":"Doe"}, 
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"},
    {"firstName":"John", "lastName":"Doe"}, 
    {"firstName":"John", "lastName":"Doe"}, 
    {"firstName":"John", "lastName":"Doe"}, 
    {"firstName":"John", "lastName":"Doe"}, 
    {"firstName":"John", "lastName":"Doe"}, 
    {"firstName":"John", "lastName":"Doe"}, 
    {"firstName":"John", "lastName":"Doe"}, 
]

  response.json(list1);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


