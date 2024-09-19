"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const multer_1 = __importDefault(require("./multer"));
// import multer from "multer";
// const upload = multer().single("file");
// const upload = multer().single("file");
const router = (0, express_1.Router)();
router.route("/").post(multer_1.default, controller_1.bulkPost);
router.route("/").get(controller_1.bulkRead);
exports.default = router;
