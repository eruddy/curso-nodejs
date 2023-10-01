const http= require("http");
const host= '127.0.0.1';
const port= 8000;
const requestListener=function(req,res){
    res.writeHead(200);
    res.end("Mi primer Servidor");
}

const server =http.createServer(requestListener);
server.listen(port,host,()=>{
    console.log(`Servidor esta corriendo en http://${host}:${port}`)
})