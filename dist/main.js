/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const prop_wait_1 = __importDefault(__webpack_require__(/*! ./modules/prop_wait */ "./src/modules/prop_wait.js"));
const hack_menu_1 = __importDefault(__webpack_require__(/*! ./modules/hack_menu */ "./src/modules/hack_menu.js"));
let kogama_ws = window.WebSocket.prototype;
const hooker_1 = __importDefault(__webpack_require__(/*! ./modules/hooker */ "./src/modules/hooker.js"));
// @ts-ignore
(0, hooker_1.default)(kogama_ws);
(0, prop_wait_1.default)(function () {
    const game_ws = eval((function assign_game_ws() {
        const window_ = Object.assign({}, window);
        // @ts-ignore
        return window_.ws;
    }).toString());
    (0, hack_menu_1.default)(game_ws);
});
console.log("[Emerald Console] 3m3r4ld 0n t0P");


/***/ }),

/***/ "./src/modules/hack_menu.js":
/*!**********************************!*\
  !*** ./src/modules/hack_menu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function menu_init(ws) {
    const client_menu = document.createElement("div");
    // @ts-ignore
    client_menu.style = [
        "position: fixed",
        "color: rgba(0, 0, 0, 0.5)",
        "width: 450px",
        "height: 300px",
        "background: rgba(40, 40, 40)",
        "color: rgb(120, 120, 120)",
        "border-radius: 20px",
        "z-index: 100",
        "top: 25%",
        "left: 25%"
    ].join(";");
    client_menu.innerHTML = `
         <header style = "text-align: center; font-family: Arial; font-size: 20px; width: 100%; background-color: rgb(50, 50, 50); border-top-right-radius: 20px; border-top-left-radius: 20px; z-index: 999; height: 50px; ">
             Emerald Client
             <button onclick = "this.parentElement.parentElement.style.display = 'none'" style = "width: 10%; height: 50px; position: absolute; pointer-events: all; right: 0; border-top-right-radius: 20px; border: 0; font-size: 30px; background-color: rgb(75, 75, 75);"> × </button>
         </header>
         <style>
         .block_ {
           background-color: rgb(70, 70, 70);
           width: 100%;
           height: 25%;
           text-align: center;
         }
         </style>
         <section style = "display: flex; width: 30%; height: 83.5%; pointer-events: all; position: absolute; top: 50px; bottom: 0; background-color: rgb(60, 60, 60); border-bottom-left-radius: 20px; font-size: 20px; text-align: center; flex-direction: column;">
            <block class = "block_">
               About
            </block>
            <block class = "block_">
               Physics
            </block>
            <block class = "block_">
               Guns
            </block>
            <block class = "block_" style = "border-bottom-left-radius: 20px">
               Server
            </block>
         </section>
      `;
    client_menu.id = "console_";
    // @ts-ignore
    document.getElementById("main-content").append(client_menu);
    console.log("[Emerald Console] Hack is ready!", ws);
    return client_menu;
}
;
exports["default"] = menu_init;


/***/ }),

/***/ "./src/modules/hooker.js":
/*!*******************************!*\
  !*** ./src/modules/hooker.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const packet_filter_1 = __webpack_require__(/*! ./pipes/packet_filter */ "./src/modules/pipes/packet_filter.js");
/** Original WebSocket **/
const ws_ = window.WebSocket.prototype;
let original_onmessage;
let original_ws = WebSocket;
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
            let ws = window.ws = new original_ws(...arguments);
            return ws;
        }
        ;
        close(error) {
            original_ws.prototype.close.call(this, [error]);
        }
        ;
        set onmessage(value) {
            original_onmessage = new Proxy(value, {
                apply(target, thisArg, argArray) {
                    if ((0, packet_filter_1.check_supress)(argArray[0].data) == true) {
                        return 0;
                    }
                    else {
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
exports["default"] = hook;


/***/ }),

/***/ "./src/modules/pipes/packet_filter.js":
/*!********************************************!*\
  !*** ./src/modules/pipes/packet_filter.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.check_supress = exports.myPlayerId = exports.players = void 0;
let players, myPlayerId;
function check_supress(packet) {
    switch (packet[2]) {
        case 32:
            return false;
            break;
        case 61:
            /** Parse players **/
            exports.players = players = String.fromCharCode.apply(null, packet);
            exports.myPlayerId = myPlayerId = players.split(":")[1].replace(',"spawnRoleAvatarIds"', "");
            break;
    }
    return false;
}
exports.check_supress = check_supress;
;


/***/ }),

/***/ "./src/modules/prop_wait.js":
/*!**********************************!*\
  !*** ./src/modules/prop_wait.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function prop_wait(callback) {
    const check_exists = function (value) {
        let has_prop = false;
        eval((function check_if_prop_exists() {
            // @ts-ignore
            if (window.ws) {
                has_prop = true;
            }
        }).toString());
        return has_prop;
    };
    const interval_id = setInterval(function () {
        if (check_exists()) {
            clearInterval(interval_id);
            callback();
        }
        ;
    }, 1000 / 60);
}
;
exports["default"] = prop_wait;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;