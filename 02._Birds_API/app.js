const express = require("express");

const app = express();

app.use(express.json());

const birds = [
    {
        id: 1,
        name: "Violet-backed starling",
        maleRating: 10,
        femaleRating: 2,
    },
];

app.get("/birds", (req, res) => {
    res.send({ date: birds });
});

app.get("/birds/:id", (req, res) => {
    const foundBird = birds.find(((bird) => bird.id === Number(req.params.id)));

    res.send({ date: foundBird });
});

app.post("/birds", (req, res) => {
    const maxId = birds.reduce(
        (accumulator, bird) => ((bird.id > accumulator) ? bird.id : accumulator),
        1,
    );

    req.body.id = maxId + 1;

    birds.push(req.body);

    res.send({ message: birds[birds.length - 1] });
});

app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});
