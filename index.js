
var http = require('http');

var server = http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type':'text/plain/json'});
	res.end('/addrjsonp(\'{"Address":[' +
	'{"streetName":"WallStreet","Place":"NewYorkCity"},' +
	'{"streetName":"Broadway","Place":"NewYorkCity"},' +
	'{"streetName":"HollywoodBlvd","Place":"LA"},' +
	'{"streetName":"LasVegasBlvd","Place":"LasVegas"},' +
	'{"streetName":"MichiganAvenue","Place":"Chicago"},' +
    '{"streetName":"Cooper","Place":"Dallas"},' +
    '{"streetName":"BeverlyHills","Place":"California"},' +
    '{"streetName":"CanalStreet","Place":"Manhattan"},' +
    '{"streetName":"SpringCreek","Place":"Dallas"},' +
    '{"streetName":"DowningStreet","Place":"England"}]}\')');
	});
	server.listen(8087);
	
console.log('Listening port number:8087'); 
	

