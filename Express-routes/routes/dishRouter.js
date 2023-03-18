const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
//this will declare dishRouter as an express-router.

dishRouter.use(bodyParser.json());

//Dish-router is one sinlge group all the down to .delete Method
dishRouter.route('/')
//when use .all method, no matter what method(GET, POST, DElETE), this code 
//will be executed first by defualt.
.all((req, res, next) => {
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
.get((req, res, next) => {
    res.end('Will send all the dishes to you');

})
.post((req, res, next) => {
    //Body-parser, parser the content from body of the website into
    //'app' in the form of JSON format. [it meeans we can get the properties in the website].
    //hence getting the contents from the client and sending it back to client [the way of doing verification].
    res.end('Will add the dish: '+req.body.name + ', with details: '+req.body.description);
})
.put((req, res, next)=>{
    //we don't to get PUT Method hence sending responce as given below
    res.statusCode = 403; //403 = not Supported
    res.end('PUT method is not supported on /dishes.');
})
.delete((req, res, next)=>{
    res.end('deleting all the dishes.');
});

module.exports = dishRouter;