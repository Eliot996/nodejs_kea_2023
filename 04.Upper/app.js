import express from "express";
const app = express();

import path from "path";

import getJoke from "./util/jokes.js";

app.use(express.static("public"));

import fs from "fs";
// Components
const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

// Pages
const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const IRLQuests = fs.readFileSync("./public/pages/IRLQuests/IRLQuests.html").toString();
const jokes     = fs.readFileSync("./public/pages/jokes/jokes.html").toString();

// Constructed pages
const frontpagePage = navbar + frontpage + footer;
const IRLQuestsPage = navbar + IRLQuests + footer;
const jokesPage     = navbar + jokes     + footer;


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
