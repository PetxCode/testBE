"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
// Configuration
cloudinary_1.v2.config({
    //   cloud_name: "dv4dlmp4e",
    //   api_key: "464513458841612",
    //   api_secret: "VxFfeGaNMPPudxcq0GWcsh6zfRk",
    cloud_name: "dv4dlmp4e",
    api_key: "464513458841612",
    api_secret: "VxFfeGaNMPPudxcq0GWcsh6zfRk",
});
exports.default = cloudinary_1.v2;
