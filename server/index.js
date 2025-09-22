const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Request Received\n`;
    fs.appendFile('log.txt', log, (err, data) => {
        switch(req.url){
            case "/":
                res.end("Hello World");
                break;
            case "/about":
                res.end("About Page");
                break;
            default:
                res.end("404 Not Found");
                break;
        }
    });
    
});

myServer.listen(3000, () => {
    console.log("Server is running on port 3000");
});
