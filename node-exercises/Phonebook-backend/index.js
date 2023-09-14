const express = require('express');
const app = express();
let list = require('./list.json');
const { unkownEnpoint } = require('./middlewares/unkownEnpoint')

const PORT = 3001;
app.disable('x-powered-by');
app.use(express.json());


app.use(unkownEnpoint)

app.get('/api/persons', (req, res) => {
    res.json(list)
});

app.get('/info', (req, res) => {
    const time = new Date()
    const entrie = `Phonebook has infor for ${list.length}`
    res.send(`<p>${entrie}</p> <p>${time}</p>`)
});

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = list.find(item => item.id === id)
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
});

const getRandomId = () => {
    const maxId = list.length > 0
        ? Math.max(...list.map(n => n.id))
        : 0

    return maxId + 1
}

app.post('/api/persons', (req, res) => {
    const body = req.body

    if (!body.name || !body.number) {
        return res.status(404).json({
            error: 'Name and number is missing'
        })
    }

    const select = list.some(item => item.name.toLowerCase() === 'dan abramov')
    if (select) {
        return res.json({
            error: 'name must be unique'
        })
    }

    const newPerson = {
        id: getRandomId(),
        name: body.name,
        number: body.number
    }

    // list.push(newPerson)

    res.json(newPerson)
});

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
});