"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userModel = new mongoose_1.Schema({
    StudentName: {
        type: String,
        //   required: true,
    },
    studentLocation: {
        type: String,
        //   required: true,
    },
    studentClass: {
        type: String,
        //   required: true,
    },
    grade: {
        type: String,
        //   required: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("users", userModel);
