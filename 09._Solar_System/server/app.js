import express  from "express";
const app = express();

import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true
}));

app.use(express.json())

import planetsRouter from "./routes/planetsRouter.js";
app.use(planetsRouter);

import peopleRouter from "./routes/peopleRouter.js";
app.use(peopleRouter);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log("Server is running on", server.address().port));