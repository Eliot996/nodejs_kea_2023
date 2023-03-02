const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public/"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});

module.exports = app;
