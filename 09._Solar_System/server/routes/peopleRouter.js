import { Router } from "express";
const router = Router();

import db from "../databases/connection.js";

router.post("/people", async (req, res) => {
    const person = req.body.person;

    if (!person.name) {
        return res.status(400).send("name is not defined");
    }
    
    const {lastID} = await db.run(`INSERT INTO people (name, planet_id) VALUES ("${person.name}", ${person.planet_id || 3})`)

    res.send({ id: lastID, name: person.name });
});

router.get("/people", async (req, res, next) => {
    const people = await db.all("SELECT * from people")

    res.send({ people: people});
});


export default router;
