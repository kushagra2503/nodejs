const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.method} ${req.url} New Request Received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile('log.txt', log, (err, data) => {
        switch(myUrl.pathname){
            case "/":
                if (req.method === "GET"){
                    res.end("Home Page");
                }
                break;
            case "/about":
                res.end("About Page");
                break;
            default:
                res.end("404 Not Found");
                break;

            case "/Signup" :
                if (req.method === "GET"){
                    res.end("Signup Page");
                } else if (req.method === "POST"){
                    res.end(" user wants to signup");
                }
                break;
        }
    });
    
});

myServer.listen(3000, () => {
    console.log("Server is running on port 3000");
});
