import ws from './modules/interfaces/ws';
import menu_init from './modules/hack_menu';
let kogama_ws: ws = window.WebSocket.prototype;
import hook from './modules/hooker';

// @ts-ignore
hook(kogama_ws);

menu_init();

// @ts-ignore

top.console.log("[Emerald Console] 3m3r4ld 0n t0P");