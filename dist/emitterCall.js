"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myEvent = void 0;
const node_events_1 = __importDefault(require("node:events"));
const moment_1 = __importDefault(require("moment"));
const uuid_1 = require("uuid");
class MyEmitter extends node_events_1.default {
}
exports.myEvent = new MyEmitter();
exports.myEvent.on("message1", () => {
    console.log({ id: (0, uuid_1.v4)(), time: (0, moment_1.default)(new Date().getTime()).format("lll") });
});
