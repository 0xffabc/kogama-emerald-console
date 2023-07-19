import WebSocket_Interface from './interfaces/ws';
import check_supress from './pipes/packet_filter';
/** Original WebSocket **/
const ws_: WebSocket_Interface = window.WebSocket.prototype;
let original_onmessage: object;
let original_ws: any = WebSocket;
let ws: any;
function injector_(event: any): void {
    // @ts-ignore
    if (check_supress(event) == true) {
        return;
    } else {
        /** TODO: This fixes issue when kogama doesnt connected to the server. **/
        try {
            ws._server(event);
        } catch(E) {

        }
    }
}
let hook: object = function(target: WebSocket_Interface): void {
    // @ts-ignore
    WebSocket = class {
        constructor(url: string | URL, protocols: string | string[] | undefined) {
            // @ts-ignore
            ws = top.ws = window.ws = new original_ws(...arguments);
            function backend_(event: object) {
                injector_(event);
                if (!ws.hooked) {
                    ws.removeEventListener('message', backend_);
                    ws._server = ws.onmessage;
                    ws.onmessage = injector_;
                    ws.hooked = true;
                }
            };
            ws.addEventListener('message', backend_);
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
    };
};

export default hook;
