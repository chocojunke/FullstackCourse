const express = require('express');
const app = express();

app.use(express.json());

let phonebook = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

const generateId = () => {
    return Math.floor((Math.random() * 1_000_000));
  }

app.get('/api/persons', (request, response) => {
    response.send(phonebook);
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    const person = phonebook.find(elem => elem.id === id);

    if (person) {
        response.send(person);
    } else {
        response.status(404).send();
    }
})

app.post('/api/persons', (request, response) => {

    if (!request.body.name || !request.body.number) {
        return response.status(400).json({ error: 'name or number missing' });
    } else if (phonebook.find(elem => elem.name === request.body.name)) {
        return response.status(400).json({ error: 'name must be unique' });
    }

    const person = {
        name: request.body.name,
        number: request.body.number,
        id: generateId()
    }
    phonebook = phonebook.concat(person);

});

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    phonebook = phonebook.filter(elem => elem.id !== id);

    response.status(204).send();
})

app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has info for ${phonebook.length} people.</p><p>${new Date()}</p>`);
})



const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})