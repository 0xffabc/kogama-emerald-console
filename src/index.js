"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hack_menu_1 = __importDefault(require("./modules/hack_menu"));
let kogama_ws = window.WebSocket.prototype;
const hooker_1 = __importDefault(require("./modules/hooker"));
// @ts-ignore
(0, hooker_1.default)(kogama_ws);
(0, hack_menu_1.default)();
// @ts-ignore
top.console.log("[Emerald Console] 3m3r4ld 0n t0P");
