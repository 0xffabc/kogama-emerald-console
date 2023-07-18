import WebSocket_Interface from './interfaces/ws';
import { check_supress } from './pipes/packet_filter';
/** Original WebSocket **/
const ws_: WebSocket_Interface = window.WebSocket.prototype;
let original_onmessage: object;
let original_ws: any = WebSocket;
let hook: object = function(target: WebSocket_Interface): void {
    // @ts-ignore
    WebSocket = class {
        constructor(url: string | URL, protocols: string | string[] | undefined) {
            // @ts-ignore
            let ws: any = window.ws = new original_ws(...arguments);
            return ws;
        };
        readonly CONNECTING = 0;
        readonly OPEN = 1;
        readonly CLOSING = 2;
        readonly CLOSED = 3;
        binaryType = "arrayBuffer";
        bufferedAmount = 0;
        extensions = "none";
        close(error: number) {
            original_ws.prototype.close.call(this, [ error ]);
        };
        set onmessage(value: object) {
            original_onmessage = new Proxy(value, {
                apply(target: object, thisArg: object, argArray: any[]) {
                    if (check_supress(argArray[0].data) == true) {
                        return 0;
                    } else {
                        // @ts-ignore
                        return target.apply(thisArg, argArray);
                    }
                },
            });
        }
        get onmessage() {
            return original_onmessage;
        }
    };
};

export default hook;
