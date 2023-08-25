import express from 'express'
import bodyParser from 'body-parser'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { bandNameGenerator, loggin, banName } from './myMiddleware.js'
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 3000


app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})
app.use(loggin)

app.use(bandNameGenerator)

app.post('/submit', (req, res) => {
    console.log(req.body)
    res.send(`<h1>${banName}</h1>`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
