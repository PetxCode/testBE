"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myEvent = void 0;
const node_events_1 = __importDefault(require("node:events"));
class MyEmitter extends node_events_1.default {
}
exports.myEvent = new MyEmitter();
