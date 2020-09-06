// // It is an inbuilt Module 
const http = require("http");
// // http module is used to create a local server
// // two parameters are passed in create server request and response
const server=http.createServer(function(req,res){
    res.writeHead("200",
    // {"content-type":"text/plain"}
    {"content-type":"text/html"}
    );
    res.write("<h1>First Server Created Sucessfully</h1>");//use to print default response 
   res.end(); //we always have to end the response to make a end point
}).listen(3000,()=>console.log("Server started on port 3000 "));
