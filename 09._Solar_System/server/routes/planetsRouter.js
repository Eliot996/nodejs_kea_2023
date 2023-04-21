import { Router } from "express";
const router = Router();

import db from "../databases/connection.js";


router.get("/planets", async (req, res, next) => {
    const planets = await db.all("SELECT * from planets")

    res.send({ planets: planets});
});

router.post("/planets", (req,res,next) => {

});

export default router;