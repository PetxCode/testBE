import express, { Application } from "express";
import { createServer } from "http";
import cors from "cors";
import { connect } from "mongoose";
import user from "./router";
import { v4 as uuid } from "uuid";
import { Server } from "socket.io";

const app: Application = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use(express.json());
app.use(cors());

app.use("/api", user);

const url: string = "mongodb://127.0.0.1:27017/bulkDB";

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  // Custom event example
  socket.on("message", (msg) => {
    console.log("Message received:", msg);
    console.log();

    io.emit("message", `Server received: ${msg}`); // Send back to all clients

    socket.on("next", (res) => {
      console.log("Next clicked", res);
      // Broadcast "next" to all other clients
      socket.broadcast.emit("moveNext");
    });
  });
});

httpServer.listen(process.env.PORT || 1122, async () => {
  await connect(url).then(() => {
    console.clear();
    console.log("connection established");
  });
});
