"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const packet_filter_1 = __importDefault(require("./pipes/packet_filter"));
/** Original WebSocket **/
const ws_ = window.WebSocket.prototype;
let original_onmessage;
let original_ws = WebSocket;
let ws;
function injector_(event) {
    // @ts-ignore
    if ((0, packet_filter_1.default)(event.data) == true) {
        return;
    }
    else {
        /** TODO: This fixes issue when kogama doesnt connected to the server. **/
        try {
            ws._server(event);
        }
        catch (E) {
        }
    }
}
let hook = function (target) {
    // @ts-ignore
    WebSocket = class {
        constructor(url, protocols) {
            this.CONNECTING = 0;
            this.OPEN = 1;
            this.CLOSING = 2;
            this.CLOSED = 3;
            this.binaryType = "arrayBuffer";
            this.bufferedAmount = 0;
            this.extensions = "none";
            // @ts-ignore
            ws = top.ws = window.ws = new original_ws(...arguments);
            function backend_(event) {
                injector_(event);
                if (!ws.hooked) {
                    ws.removeEventListener('message', backend_);
                    ws._server = ws.onmessage;
                    ws.onmessage = injector_;
                    ws.hooked = true;
                }
            }
            ;
            ws.addEventListener('message', backend_);
            return ws;
        }
        ;
        close(error) {
            original_ws.prototype.close.call(this, [error]);
        }
        ;
    };
};
exports.default = hook;
