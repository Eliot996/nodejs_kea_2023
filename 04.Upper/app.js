import express from "express";
const app = express();
app.use(express.static("public"));

import path from "path";
import renderPage from "./util/templateEngine.js"
import getJoke from "./util/jokes.js";


// Pages
const frontpagePath = "./public/pages/frontpage/frontpage.html";
const frontpagePage = renderPage(frontpagePath, {tabTitle: "Welcome | Upper"});

const IRLQuestsPath = "./public/pages/IRLQuests/IRLQuests.html";
const IRLQuestsPage = renderPage(IRLQuestsPath , {tabTitle: "IRLQuests | Upper"});

const jokesPath     = "./public/pages/jokes/jokes.html";
const jokesPage     = renderPage(jokesPath, {
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
