"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const uuid_1 = require("uuid");
const emitterCall_1 = require("./emitterCall");
setImmediate(() => {
    emitterCall_1.myEvent.emit("message1");
});
emitterCall_1.myEvent.on("message", () => {
    console.log({ id: (0, uuid_1.v4)(), time: (0, moment_1.default)(new Date().getTime()).format("lll") });
});
