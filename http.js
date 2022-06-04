const http = require ('http');

const server = http.createServer((req,res)=>{
    if(req.url== '/'){
        res.end("Welcome ")
    }
    if(req.url =='/about'){
        res.end('Here is our History')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We cant find ur page</p>
    <a href="/">back home</a>`)
})

server.listen(5000)