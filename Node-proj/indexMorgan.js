const express = require("express");
const http = require("http");
const morgan = require("morgan");

const hostname = 'Localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

//Static webserver files will be loaded.
app.use(express.static(__dirname+'/public'))

//next is to use middleware works on our behalf. 
app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("<html><body><h1>Express, I'm comming</h1></body></html>");
});

const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});