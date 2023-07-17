import WebSocket_Interface from './interfaces/ws';
import { check_supress } from './pipes/packet_filter';
/** Original WebSocket **/
const ws_: WebSocket_Interface = WebSocket.prototype;
let original_onmessage: object;
let hook: PropertyDescriptorMap = {
    send: {
        get() {
            return new Proxy(ws_.send, {
                  apply(target: any, thisArg: WebSocket_Interface, argArray: any[]) {
                    /** HACK: ASSIGNING WS CONTEXT TO WINDOW **/
                    eval((function(): void {
                        Object.defineProperty(window, "ws", {
                            value: thisArg
                        });
                    }).toString());
                    const data_: number[] = [...argArray[0]];
                       data_;
                    return target.apply(thisArg, argArray);
                 }
             });
        }, set(value: object) {
            console.log("[Emerald Client] WS Change supressed");
        }
    }, onmessage: {
        get() {
            return original_onmessage;
        }, set(hooked_func: object) {
            original_onmessage = new Proxy(hooked_func, {
                apply(target: any, thisArg: object, argArray: any[]): void {
                    const data_: number[] = [...argArray[0].data];
                    if (check_supress(data_) === true) {
                        console.log("Supressed packet: ", data_);
                    } else {
                        target.apply(thisArg, argArray);
                    }
                }
            });
        }
    }
};

export default hook;
