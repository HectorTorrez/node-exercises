import express from 'express'
import { loggin } from './myMiddleware.js';
const app = express()
const port = 3000;

app.use(loggin)

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
})