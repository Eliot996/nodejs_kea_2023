import express from "express";
const app = express();
app.use(express.static("public"));

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);


io.on("connection", (socket) => {
    console.log("A client has connected", socket.id);

    socket.on("color choice", ({ data }) => {
        console.log(socket.id, "chose this color: ", data);

        // sends only to the socket
        // socket.emit("a color was chosen", { data: data} );
        
        // broadcast to all but the socket itself
        // socket.broadcast.emit("a color was chosen", { data: data} );
        
        // sends to all in io namespace
        io.emit("a color was chosen", { data: data})
    });
});


const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log("server is running on ", PORT))

