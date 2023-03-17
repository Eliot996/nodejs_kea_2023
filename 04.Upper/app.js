import express from "express";
const app = express();
app.use(express.static("public"));

import path from "path";
import templateEngine from "./util/templateEngine.js"
import getJoke from "./util/jokes.js";


// Pages
const frontpagePath = "./public/pages/frontpage/frontpage.html";
const frontpage = templateEngine.readPage(frontpagePath);
const frontpagePage = templateEngine.renderPage(frontpage, {tabTitle: "Welcome | Upper"});

const IRLQuestsPath = "./public/pages/IRLQuests/IRLQuests.html";
const IRLQuests = templateEngine.readPage(IRLQuestsPath); 
const IRLQuestsPage = templateEngine.renderPage(IRLQuests , {tabTitle: "IRLQuests | Upper"});

const jokesPath     = "./public/pages/jokes/jokes.html";
const jokes = templateEngine.readPage(jokesPath); 
const jokesPage     = templateEngine.renderPage(jokes, {
    tabTitle: "Jokes  | Upper",
    cssLink: ` <link rel="stylesheet" href="/pages/jokes/jokes.css">`
});

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/IRLQuests", (req, res) => {
    res.send(IRLQuestsPage);
});

app.get("/jokes", (req, res) => {
    res.send(jokesPage)
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port", PORT);
});
