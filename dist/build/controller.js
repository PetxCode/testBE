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
exports.bulkRead = exports.bulkPost = void 0;
const csvtojson_1 = __importDefault(require("csvtojson"));
const model_1 = __importDefault(require("./model"));
const bulkPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, csvtojson_1.default)().fromFile(req.file.path);
        for (let i of data) {
            // console.log(i);
            yield model_1.default.create(Object.assign(Object.assign({}, i), { grade: "Awesome" }));
        }
        // const createData = await userModel.insertMany(data);
        res.status(201).json({
            message: "Done",
            // read: createData,
        });
    }
    catch (error) {
        res.status(404).send(error.message);
    }
});
exports.bulkPost = bulkPost;
const bulkRead = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield model_1.default.find();
        res.status(201).json({
            message: "Done",
            data,
        });
    }
    catch (error) {
        res.status(404).send(error);
    }
});
exports.bulkRead = bulkRead;
