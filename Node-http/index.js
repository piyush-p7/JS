const http = require('http');
const fs = require('fs');
const path = require('path');


const hostname = 'localhost', port = "3000";

const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} by method ${req.method}`);

    if(req.method == 'GET'){
        var  fileUrl;
        if(req.url ==  '/') fileUrl = '/index.html';
        else fileUrl = req.url;
        
        var filePath = path.resolve('./public'+fileUrl);
        const fileExt = path.extname(filePath);
        if(fileExt == '.html'){
            fs.exists(filePath, (exists)=>{
                if(!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-type', 'text/html');
                    res.end('<hmtl><body><h1>The page is not available <br> Error 404: '+fileUrl+'</h1></body></html');
                    
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(res);
            });
        }

        //File is not HTML
        else{
            res.statusCode = 404;
            res.setHeader('Content-type', 'text/html');
            res.end('<hmtl><body><h1>The file is not Html<br>Error 404: '+fileUrl+'</h1></body></html');
            
            return;
        }
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-type', 'text/html');
        res.end('<hmtl><body><h1>Invalid Method [Other than GET] Error 404: '+req.method+'</h1></body></html');
        
        return;

    }

})


server.listen(port, hostname, () => {
    console.log(`Server Listenting at http://${hostname}:${port}`);
})
