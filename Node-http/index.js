const http = require('http');

const hostname = 'localhost', port = "3000";

const server = http.createServer((req, res) => {
    console.log(req.headers);

    res.statusCode = 200;//Telling its okay.
    res.setHeader('Content-type', 'text/html');
    res.end('<html><body> <h1>Piyush Pandita</h1></body></html>');

})


server.listen(port, hostname, () => {
    console.log(`Server Listenting at http://${hostname}:${port}`);
})
