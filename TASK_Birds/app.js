const express = require("express");
const app = express();

app.use(express.json());

const birds = [
    {id: 1, name: "falcon"}, 
    {id: 2, name: "owl"},  
    {id: 3, name: "hawk"},  
];

app.get('/birds', (req, res) => {
    res.send({data: birds})
});

app.get('/birds/:id', (req, res) => {
    res.send({data: birds[req.params.id]})
});

app.listen(8080);