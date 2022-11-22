"use strict";
/*
 * @LastEditors: chenlu chenlu0917boy@163.com
 * @Date: 2022-11-18 17:41:03
 * @LastEditTime: 2022-11-18 19:05:54
 * @FilePath: \demo-ts\packages\include\index.ts
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = __importDefault(require("./src/add"));
(0, add_1.default)(1, 2);
function multi(a, b) {
    return a * b;
}
multi(1, 2);
