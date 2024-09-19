"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = require("mongoose");
const router_1 = __importDefault(require("./router"));
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", router_1.default);
const url = "mongodb://127.0.0.1:27017/bulkDB";
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
httpServer.listen(process.env.PORT || 1122, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongoose_1.connect)(url).then(() => {
        console.clear();
        console.log("connection established");
    });
}));
