import hook from './modules/hooker';
import ws from './modules/interfaces/ws';
import prop_wait from './modules/prop_wait';
import property_wait from './modules/prop_wait';
import menu_init from './modules/hack_menu';

let kogama_ws: ws = WebSocket.prototype;

/** Extremely flex hook **/
Object.defineProperties(kogama_ws, hook);

prop_wait(function() {
    const game_ws = eval((function(): void {
        const window_ = Object.assign({}, window);
        // @ts-ignore
        return window_.ws;
    }).toString());
    menu_init(game_ws);
});

console.log("[Emerald Console] 3m3r4ld 0n t0P");