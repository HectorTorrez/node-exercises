import express from 'express';
const app = express()




const server = app.listen(0, ()=>{
    console.log(`Server running in http://localhost:${server.address().port}`)
})


