import express from "express";
const app = express();

app.use("/room", houseButler);

import roomRouter from "./routers/roomRouter.js"
app.use(roomRouter);

function houseButler(req, res, next) {
    console.log("This way...");
    next();
}


function guard(req, res, next) {
    if (req.query.name === "anders") {
        req.myName = "Anders";
        next();
    } else {
        res.send({ message: "You cannot enter" });
    }
}

app.get("/frontdoor", [guard, guard], (req, res) => {
    res.send({ message: `Please enter ${req.myName}` });
})

app.get("/inlinemiddelware", 
    (res, req, next) => {
        console.log("Enters here first");
        next();
    },
    (req, res, next) => {
        console.log("Enters here after")
        res.send({message: "called the inline middelware"})
    }
);

app.get("*", (req, res, next) => {
    res.send("<h1> 404 - page not found</h1>");
});

const PORT = 8080
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})