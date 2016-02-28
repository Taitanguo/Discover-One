var http = require('http');
var fs = require('fs');

function send404(response){//404 response
	response.writeHead(404, {"Context-Type":"text/plain"} );
	response.write("Error 404- page not found");
	response.end();
}

function onRequest(request, response){
	if (request.method == 'GET' && request.url == '/'){ 
		response.writeHead(200, {"Context-Type": "text/html"});
		fs.createReadStream("./site.html").pipe(response);
	}
	else{
		send404(response);
	}
}

http.createServer(onRequest).listen(8888); //port is 8888
console.log("Server is running...");