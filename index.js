import express from "express";
import bodyParser from "body-parser";
const app = express();

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  }
];

let info = {
  data: `Phonebook has info for ${persons.length} people`,
  date: new Date()
};

app.use(bodyParser.json());

//root page

app.get("/", (request, response) => {
  response.send("<h1>Hi there!</h1>");
  console.log(response);
});

const generateId = () => {
  const maxId =
    persons.length > 0 ? Math.max(...persons.map(person => person.id)) : 0;

  return maxId + 1;
};

//persons page

app.post("/api/persons", (request, response) => {
  const body = request.body;

  //If there's no content
  if (!body.content || !body.number) {
    return response.status(400).json({
      error: "content missing"
    });
  }

  if (
    persons.find(
      person => person.name.toLowerCase() === body.content.toLowerCase()
    )
  ) {
    return response.status(400).json({
      error: "name must be unique"
    });
  }

  const person = {
    name: body.content,
    number: body.number,
    id: Math.random(generateId())
  };

  console.log(body);

  persons = persons.concat(person);
  response.json(body);
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find(person => person.id === id);
  person ? response.json(person) : response.status(404).end();
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter(person => person.id !== id);

  response.status(204).end();
});

//info page

app.post("/info", (request, response) => {
  response.json(info);
});

app.get("/info", (request, response) => {
  response.send(`<p>${info.data}</p><p>${info.date}</p>`);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
