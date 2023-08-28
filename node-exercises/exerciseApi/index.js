import express from 'express'
import movies from './movies.json' assert {type: 'json'}
const app = express()
const port = 3000;

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


app.listen(port, () => {
    console.log(`Server listening on port${port}`)
})
