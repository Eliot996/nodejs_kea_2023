const express = require("express");
const app = express();

app.use(express.json());

const birds = [
    {name: "falcon"}, 
    {name: "owl"},  
    {name: "hawk"},  
];

app.get('/birds', (req, res) => {
    res.send({data: birds})
});

app.get('/birds/:id', (req, res) => {
    res.send({data: birds[req.params.id]})
});

app.listen(8080);