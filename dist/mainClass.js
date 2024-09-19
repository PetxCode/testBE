"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const uuid_1 = require("uuid");
class Student {
    //   protected age: number;
    constructor(name, score, lang = "TS") {
        this.name = name;
        this.score = score;
        this.lang = lang;
    }
}
let student = new Student("Amaka", 70, "JAVA");
// console.log(student);
// console.log(student.score); moment and uuid
class Attendance {
    constructor(name, gender, id = (0, uuid_1.v4)(), time = (0, moment_1.default)(new Date().getTime()).format("llll")) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.time = time;
    }
    set updateTime(x) {
        this.time = x;
    }
    getName(x = 0) {
        return ` ${this.name.charAt(x)}`;
    }
    getTime() {
        return ` ${this.time.split(",")[0]}`;
    }
}
const attendance = new Attendance("Amaka", "Male");
attendance.updateTime = "Wed, Sep 16, 2024 2:50 PM";
console.log(attendance.getName(2));
console.log(attendance.getTime());
