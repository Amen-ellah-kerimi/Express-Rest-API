const express = require('express');
const app = express();
const port = 3000;

app.use(express.json);

console.log("Welcome to our REST API with Express \n");
console.log(`you can open your browser at this link http://localhost:${port}/`);
// GET HTTP Requests
app.get('/', (req, res) => {
    res.send("<h1>Welcome to our API REST avec Express </h1>")
    console.log(`Recieved a GET HTTP Request at http://localhost:${port}`); 
});

app.get('/users', (req, res) => {
    res.send("This is the users page ");
});

// POST HTTP Requests 
//
//
// PUT/PATCH HTTP Requests
//
// DELETE HTTP Requests

// Start Server 

app.listen(port, () => {
    console.log("server started");
});
