const app = require('express')(); // import and init

app.get('/', (req, res) => {
    res.send({ message: 'Hello, World' });
});


let bicycleSpins = 0;

app.get('/spinthebicycle', (req, res) => {
    bicycleSpins += 1;
    res.send({ message: 'The bicycle was spun ' + bicycleSpins + ' times' })
});


app.get('/kickthedinosaur', (req, res) => {
    res.send({ message: 'The dinosaur says: "ow ow ow"' })
});

app.get('/about', (req, res) => res.send(`
    <h1>About</h1>
    <h3>This is my about page</h3>
    `)
);

app.get("/bat", (req, res) => {
    res.send({ message: `The bat is ${req.query.adjective}`})
});

app.get("/bottle/:bottleSize", (req, res) => {
    res.send({ bottleSize: req.params.bottleSize})
});

app.listen(8080);
