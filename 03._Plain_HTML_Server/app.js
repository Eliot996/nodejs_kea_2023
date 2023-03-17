const { response } = require("express");
const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html");
});

// server side redirection
app.get("/api/guards", (req, res) => {
    if (req.query.passport === "theskyisblue") {
        return res.redirect("/api/tanks");
    } 
    res.send( { message: "You are not allowed to see the tanks. Give us the secret in the query string with the key being passport."} );
});

// using the server as a proxy to return google.com
app.get("/proxy", (req, res) => {
    fetch("https://www.google.com")          // get the fetch
        .then((response) => response.text()) // parse as text
        .then((result) => res.send(result)); // send result as response
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});
