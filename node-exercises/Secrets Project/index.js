//The password is ILoveProgramming
import express from 'express'
import bodyParser from 'body-parser'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
const __dirname = dirname(fileURLToPath(import.meta.url))



const app = express()
const port = 3000

let userIsAuthorised = false

app.use(bodyParser.urlencoded({ extended: true }))

const loggin = ((req, res, next) => {
    if(req.body['password'] === 'ILoveProgramming'){
        userIsAuthorised = true
    }
    
    next()
})
app.use(loggin)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})



app.post('/check', (req, res) => {
    if(userIsAuthorised){
        res.sendFile(__dirname + '/public/secret.html')
    }else{
        res.sendFile(__dirname + '/public/index.html')
    }

})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



