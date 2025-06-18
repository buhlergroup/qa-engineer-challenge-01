import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const port = 3000;

interface Todo {
    id: number;
    text: string;
    done: boolean;
}

let todos: Todo[] = [];
let nextId = 1;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/api/todos', (req, res) => {
    const todo: Todo = { id: nextId++, text: req.body.text, done: false };
    todos.push(todo);
    res.json(todo);
});

app.get('/api/todos', (_req, res) => {
    res.json(todos);
});

app.put('/api/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.done = !todo.done;
        res.json(todo);
    } else {
        res.status(404).send();
    }
});

app.delete('/api/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = todos.findIndex(t => t.id === id);
    if (index !== -1) {
        todos.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
