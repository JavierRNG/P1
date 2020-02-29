
'use strict';
const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
res.end('Hola Mundo \n6IV7\n Negrete Gonzalez Javier Ramon');
});
server.listen(8000);

