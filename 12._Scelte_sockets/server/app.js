import express from "express";
const app = express();
app.use(express.static("public"));

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);


io.on("connection", (socket) => {

});


const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log("server is running on port:", PORT))

