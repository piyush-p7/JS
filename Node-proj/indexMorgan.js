const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require('body-parser');

const hostname = 'Localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

//when use .all method, no matter what method(GET, POST, DElETE), this code 
//will be executed first by defualt.
app.all('/dishes', (req, res, next) => {
    //handle the incoming requests.
    res.statusCode = 200;
    //Plain text will be sent back to client.
    res.setHeader('Content-Type', 'text/plain');
    //next will be to see the additional specifications done 
    //down below [mtlb ki line no: 23 k baad]
    next();
})
//'/dishes' k liye modified 'req, res, next' pass hojnyne
// modified value for 'req, res, next' will be passed for below GET method.
app.get('/dishes', (req, res, next) => {
    res.end('Will send all the dishes to you');

});
app.post('/dishes', (req, res, next) => {
    //Body-parser, parser the content from body of the website into
    //'app' in the form of JSON format. [it meeans we can get the properties in the website].
    //hence getting the contents from the client and sending it back to client [the way of doing verification].
    res.end('Will add the dish: '+req.body.name + ', with details: '+req.body.description);
});

//The way for acknoleding the user, put method is not supported
app.put('/dishes', (req, res, next)=>{
    //we don't to get PUT Method hence sending responce as given below
    res.statusCode = 403; //403 = not Supported
    res.end('PUT method is not supported on /dishes.');
});

app.delete('/dishes', (req, res, next)=>{
    res.end('deleting all the dishes.');
});

//FOR DishID:
app.get('/dishes/:dishID', (req, res, next) => {
    res.end('Will send detail of the dish:'+req.params.dishID+' to you');

});
app.post('/dishes/:dishID', (req, res, next) => {
    res.statusCode = 403; //403 = not Supported
    res.end('Post method is not supported on /dishes/'+req.params.dishID);
});

app.put('/dishes/:dishID', (req, res, next)=>{
    res.write('Updating the dish:'+req.params.dishID+'\n');
    res.end("Will update the dish: "+req.body.name + ', with details '+req.body.description);
});

app.delete('/dishes/:dishID', (req, res, next)=>{
    res.end('deleting dish: '+req.params.dishID);
});

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