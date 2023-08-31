import express, { json } from 'express'
import movies from './movies.json' assert {type: 'json'}
import crypto from 'node:crypto'
import  { validateMovie } from'./chemas/movies.js'

const app = express()
const port = 3000;
app.use(express.json())

app.disable('x-powered-by')

app.get('/movies', (req, res) => {
    const {genre} = req.query
    if(genre){
        const byGenre = movies.filter(movie => movie.genre.some(ge => ge.toLowerCase() === genre.toLowerCase()))
        return res.json(byGenre)
    }

    res.json(movies)
})

app.get('/movies/:id', (req, res) => {
    const {id} = req.params
    const movieById = movies.find(movie => movie.id === id)

    res.json(movieById)
})

app.post('/movies', (req, res)=>{
    const result = validateMovie(req.body)


    if(!result.success){
        return res.status(400).json({error: JSON.parse(result.error)})
    }

    const newMovie = {
        id: crypto.randomUUID(),
        ...result.data
    }

    movies.push(newMovie)

    res.status(201).json(newMovie)
})


app.listen(port, () => {
    console.log(`Server listening on port${port}`)
})
