"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColor = void 0;
var getDominantColor_1 = require("./getDominantColor");
function getColor(path, callback) {
    (0, getDominantColor_1.getDominantColor)(path)
        .then(function (color) {
        callback(color);
    })
        .catch(function (error) {
        console.error("Error:", error);
        // Handle the error here if needed
    });
}
exports.getColor = getColor;
