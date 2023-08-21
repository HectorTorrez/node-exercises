const http = require('node:http')

const server = http.createServer((req, res)=> {
    console.log('Server created')
    res.end('Hello welcome')
})


server.listen(0,()=>{
    console.log(`server listening on port http://localhost:${server.address().port}`)
})