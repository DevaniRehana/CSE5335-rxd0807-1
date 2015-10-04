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
    {"firstName":"John", "lastName":"Doe", "location":"-34.397,150.644"}, 
    {"firstName":"Anna", "lastName":"Smith", "location":"-30.397,15.644"},
    {"firstName":"Peter", "lastName":"Jones", "location":"-20.397,-50.644"},
    {"firstName":"John", "lastName":"Doe", "location":"-99.397,50.644"}, 
    {"firstName":"John", "lastName":"Doe", "location":"-84.397,-10.644"}, 
    {"firstName":"John", "lastName":"Doe", "location":"10.397,25.644"}, 
    {"firstName":"John", "lastName":"Doe", "location":"92.397,82.644"}, 
    {"firstName":"John", "lastName":"Doe", "location":"118.397,67.644"}, 
    {"firstName":"John", "lastName":"Doe", "location":"-118.397,76.644"}, 
    {"firstName":"John", "lastName":"Doe", "location":"84.397,-65.644"}, 
]

  response.json(list1);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


