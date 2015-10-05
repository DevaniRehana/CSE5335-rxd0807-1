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
    {"firstName":"John", "lastName":"Doe", "location":"-33.890542,151.274856"}, 
    {"firstName":"Anna", "lastName":"Smith", "location":"-33.923036,151.259052"},
    {"firstName":"Peter", "lastName":"Jones", "location":"-34.028249,151.157507"},
    {"firstName":"John", "lastName":"Doe", "location":"-33.80010128657071,151.28747820854187"}, 
    {"firstName":"Stephen", "lastName":"Morgan", "location":"-33.950198,151.259302"}, 
    {"firstName":"Danny", "lastName":"James", "location":"-32.9567,151.954"}, 
    {"firstName":"Mike", "lastName":"James", "location":"-32.80010,151.1575"}, 
    {"firstName":"Rose", "lastName":"Bush", "location":"-32.0386,151.9576"}, 
    {"firstName":"Jenny", "lastName":"Clinton", "location":"-33. 2867,151.1516"}, 
    {"firstName":"Alex", "lastName":"Trump", "location":"-33.9876,151.27468"}, 
]

  response.json(list1);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


