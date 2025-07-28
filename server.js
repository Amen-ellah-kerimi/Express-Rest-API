const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// In-memory data for users and todos.
// In a real application, these would be stored in a database.
let users = [
    { id: 1, name: 'amen', email: 'amen@gmail.com' },
    { id: 2, name: 'mohamed', email: 'mohamed@gmail.com' }
];

let todos = [
    { id: 1, title: 'Learn Express.js', completed: false, userId: 1 },
    { id: 2, title: 'Build a REST API', completed: false, userId: 1 },
    { id: 3, title: 'Deploy to Heroku', completed: false, userId: 2 }
];

let nextUserId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
let nextTodoId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

console.log("Welcome to our REST API with Express \n");
console.log(`You can open your browser at this link http://localhost:${port}/`);

app.get('/', (req, res) => {
    res.send("<h1>Welcome to our API REST avec Express </h1>");
});

// --- User HTTP Requests ---

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required for a new user.' });
    }

    const newUser = { id: nextUserId++, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required for updating a user (PUT).' });
    }

    const updatedUser = { id: id, name, email };
    users[userIndex] = updatedUser;

    res.status(200).json(updatedUser);
});

app.delete('/users/:id', (req, res) => {
    const idToDelete = parseInt(req.params.id);
    const initialUserLength = users.length;
    
    users = users.filter(user => user.id !== idToDelete);

    if (users.length < initialUserLength) {
        // Also delete any todos associated with this user
        todos = todos.filter(todo => todo.userId !== idToDelete);
        res.status(200).json({ message: `User with ID ${idToDelete} and associated todos deleted successfully.` });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// --- Todo HTTP Requests ---

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.get('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

app.post('/todos', (req, res) => {
    const { title, completed, userId } = req.body;

    if (!title || typeof completed !== 'boolean' || typeof userId !== 'number') {
        return res.status(400).json({ message: 'Title (string), completed (boolean), and userId (number) are required for a new todo.' });
    }

    const userExists = users.some(user => user.id === userId);
    if (!userExists) {
        return res.status(400).json({ message: 'Associated userId does not exist.' });
    }

    const newTodo = { id: nextTodoId++, title, completed, userId };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todoIndex = todos.findIndex(t => t.id === id);

    if (todoIndex === -1) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    const { title, completed, userId } = req.body;

    if (!title || typeof completed !== 'boolean' || typeof userId !== 'number') {
        return res.status(400).json({ message: 'Title (string), completed (boolean), and userId (number) are required for updating a todo (PUT).' });
    }

    const userExists = users.some(user => user.id === userId);
    if (!userExists) {
        return res.status(400).json({ message: 'Associated userId does not exist.' });
    }

    const updatedTodo = { id: id, title, completed, userId };
    todos[todoIndex] = updatedTodo;

    res.status(200).json(updatedTodo);
});

app.delete('/todos/:id', (req, res) => {
    const idToDelete = parseInt(req.params.id);
    const initialTodoLength = todos.length;

    todos = todos.filter(todo => todo.id !== idToDelete);

    if (todos.length < initialTodoLength) {
        res.status(200).json({ message: `Todo with ID ${idToDelete} deleted successfully.` });
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});


// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke on the server! An unexpected error occurred.');
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
