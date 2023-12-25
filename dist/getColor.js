"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColor = void 0;
const getDominantColor_1 = require("./getDominantColor");
function getColor(path, callback) {
    (0, getDominantColor_1.getDominantColor)(path)
        .then((color) => {
        callback(color);
    })
        .catch((error) => {
        console.error("Error:", error);
        // Handle the error here if needed
    });
}
exports.getColor = getColor;
