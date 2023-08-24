import express from 'express';
const app = express()
const port = 3000

app.disable('x-powered-by')

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/contact', (req, res) => {
    res.send('<h1>Héctor Torrez</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>Info</h1>')
})
app.post( "/register", (req, res) => {
    res.sendStatus(201)
})

app.put( "/user/hector", (req, res) => {
    res.sendStatus(200)
})
app.delete( "/user/hector", (req, res) => {
    res.sendStatus(200)
})

app.use('/*', (req, res)=>{
    res.send('<h1>404</h1>')

})



// const server = app.listen(0, ()=>{
//     console.log(`Server running in http://localhost:${server.address().port}`)
// })

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})


