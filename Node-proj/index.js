const express = require("express");
const http = require("http");

const hostname = 'Localhost';
const port = 3000;

const app = express();

//next is to use middleware works on our behalf. 
app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("<html><body><h1>Express, I'm comming</h1></body></html>");
});

const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});