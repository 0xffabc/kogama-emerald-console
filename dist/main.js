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
const hack_menu_1 = __importDefault(__webpack_require__(/*! ./modules/hack_menu */ "./src/modules/hack_menu.js"));
let kogama_ws = window.WebSocket.prototype;
const hooker_1 = __importDefault(__webpack_require__(/*! ./modules/hooker */ "./src/modules/hooker.js"));
// @ts-ignore
(0, hooker_1.default)(kogama_ws);
(0, hack_menu_1.default)();
// @ts-ignore
top.console.log("[Emerald Console] 3m3r4ld 0n t0P");


/***/ }),

/***/ "./src/modules/hack_menu.js":
/*!**********************************!*\
  !*** ./src/modules/hack_menu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function menu_init() {
    /** HTML (Hyper-text markup language stuff) **/
    const client_menu = document.createElement("div");
    client_menu.style = [
        "position: fixed",
        "color: rgba(0, 0, 0, 0.5)",
        "width: 450px",
        "height: 300px",
        "background: rgba(40, 40, 40)",
        "color: rgb(120, 120, 120)",
        "border-radius: 20px",
        "z-index: 100",
        "top: 10%",
        "left: 0%",
        "font-weight: bold"
    ].join(";");
    client_menu.innerHTML = `
       <header style = "text-align: center; font-family: Arial; font-size: 20px; width: 100%; background-color: rgb(50, 50, 50); border-top-right-radius: 20px; border-top-left-radius: 20px; z-index: 999; height: 50px; ">
           <img src = "https://cdn.discordapp.com/attachments/1120791600243683438/1129853049624608890/IMG_20230716_000650.jpg" style = "width: 50px; height: 50px; border-radius: 50px; position: absolute; top: 0%; left: 5%; filter: contrast(0.5)"> Emerald Client - KoGaMa
           <button onclick = "this.parentElement.parentElement.style.display = 'none'" style = "width: 10%; height: 50px; position: absolute; pointer-events: all; right: 0; border-top-right-radius: 20px; border: 0; font-size: 30px; background-color: rgb(75, 75, 75);"> × </button>
       </header>
       <style>
       @keyframes bgsmooth {
         0% {
           background-color: rgb(70, 70, 70);
           border-bottom: 2px solid rgb(60, 60, 60);
         },
         100% {
           background-color: rgb(60, 60, 60);
           border-bottom: 2px solid rgb(30, 30, 30);
         }
       }
       @keyframes bgsmoothout {
         100% {
           background-color: rgb(70, 70, 70);
           border-bottom: 2px solid rgb(60, 60, 60);
         },
         0% {
           background-color: rgb(60, 60, 60);
           border-bottom: 2px solid rgb(30, 30, 30);
         }
       }
       .block_ {
         background-color: rgb(70, 70, 70);
         width: 100%;
         height: 25%;
         text-align: center;
         border-bottom: 2px solid rgb(60, 60, 60);
         animation: bgsmoothout 0.5s;
       }
       .block_:hover {
         background-color: rgb(60, 60, 60);
         border-bottom: 2px solid rgb(30, 30, 30);
         animation: bgsmooth 0.5s;
       }
       span:hover {
         animation: bgsmooth 0.5s;
       }
       input[type=range] {
           height: 17px;
           -webkit-appearance: none;
           margin: 10px 0;
           width: 100%;
           border-radius: 0;
           background-color: #000000;
           color: white;
           outline: none;
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          background-color: rgb(50, 50, 50);
          width: 17px;
          height: 17px;
        }
        input[type=button] {
          filter: invert(1);
          color: rgb(200, 200, 200);
          border: 0;
        }
        input[type=button]:hover {
          color: rgb(20, 20, 20);
        }
       </style>
       <section style = "display: flex; width: 30%; height: 83.5%; pointer-events: all; position: absolute; top: 50px; bottom: 0; background-color: rgb(60, 60, 60); border-bottom-left-radius: 20px; font-size: 20px; text-align: center; flex-direction: column;">
          <block class = "block_" id = "about">
             About
          </block>
          <block class = "block_" id = "physic">
             Physics
          </block>
          <block class = "block_" id = "gunpicker">
             Guns
          </block>
          <block class = "block_" style = "border-bottom-left-radius: 20px" id = "server">
             Server
          </block>
       </section>
       <div id = "text" style = "height: 83.5%; width: 68%; background-color: rgb(40, 40, 40); position: absolute; right: 0; pointer-events: all; touch-events: all;">
       Select any tab to see information or hacks! Good luck and thanks for using my console <3
       </div>
    `;
    client_menu.id = "console_";
    top.document.documentElement.append(client_menu);
    /** Automatisation **/
    const about_hack = top.document.getElementById("about");
    const physic_hack = top.document.getElementById("physic");
    const guns_hack = top.document.getElementById("gunpicker");
    const server_hack = top.document.getElementById("server");
    const hacks_text = top.document.getElementById("text");
    const hacks_body = {
        "about": `
      <h2> ~ Emerald Console ~ </h2>
      Hack made by 0xfffabc.<br><br>
      WebSocket Uint8Array's stolen from MCC5 By Masterix.<br><br>
      Indeed as non-official continution of MCC.
      `,
        "physic": `
         <h3> Physics Changer </h3>
         Player Speed <input type = "range" min = "5" max = "150" id = "pspeed" value = "5"> <br>
         BunnyHop: <input type = "checkbox" id = "bhop" style = "outline: 0; accent-color: white; filter: invert(1)"><br>
         Gravity: <input type = "range" min = "5" max = "150" id = "grav" value = "5"> <br>
         Player Scale: <input type = "range" min = "1" max = "900" id = "pscal" value = "1" style = "width: 50px"> <br>
         <button style = "width: 30%; height: 35px; filter: invert(1); position: absolute; right: 10%; border-radius: 0; border: 0; bottom: 2.5%">
             APPLY
         </button>
      `,
        "gunpicker": `
      <h2> Guns Picker </h2>
      <span> Bazooka </span> <br>
      <span> Dual Revolers </span> <br>
      <span> Flamethrower </span> <br>
      <span> Impulse Gun </span> <br>
      <span> Machine Gun </span> <br>
      <span> Mouse Gun </span> <br>
      <span> Shotgun </span>
      <button style = "width: 30%; height: 35px; filter: invert(1); position: absolute; right: 10%; border-radius: 0; border: 0; bottom: 2.5%;">
             APPLY
         </button>
         <div style = "position: absolute; right: 10%; top: 30%;">
         Rapid Fire: <input type = "checkbox" id = "rfire" style = "outline: 0; accent-color: white; filter: invert(1)"> <br>
         Infinity Gun: <input type = "checkbox" id = "infg" style = "outline: 0; accent-color: white; filter: invert(1)">
         </div>
      `,
        "server": `
      Kick player: <input type = "number" style = "filter: invert(1); outline: 0" id = "kick"> <br>
      Kill player: <input type = "number" style = "filter: invert(1); outline: 0" id = "killp"> <br>
      ~ Effects ~ <br>
      <input type = "button" value = "Immortality"> <input type = "button" value = "Ring"> <input type = "button" value = "Big"> <input type = "button" value = "Small"> <input type = "button" value = "Dead"> <input type = "button" value = "Stand"> <input type = "button" value = "Swim"><br>
      <button style = "width: 30%; height: 35px; filter: invert(1); position: absolute; right: 10%; border-radius: 0; border: 0; bottom: 2.5%;">
             APPLY
         </button>
      `
    };
    about_hack.onclick = function () {
        hacks_text.innerHTML = hacks_body[this.id];
    };
    physic_hack.onclick = function () {
        hacks_text.innerHTML = hacks_body[this.id];
    };
    guns_hack.onclick = function () {
        hacks_text.innerHTML = hacks_body[this.id];
    };
    server_hack.onclick = function () {
        hacks_text.innerHTML = hacks_body[this.id];
    };
    return client_menu;
}
exports["default"] = menu_init;


/***/ }),

/***/ "./src/modules/hooker.js":
/*!*******************************!*\
  !*** ./src/modules/hooker.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const packet_filter_1 = __importDefault(__webpack_require__(/*! ./pipes/packet_filter */ "./src/modules/pipes/packet_filter.js"));
/** Original WebSocket **/
const ws_ = window.WebSocket.prototype;
let original_onmessage;
let original_ws = WebSocket;
let ws;
function injector_(event) {
    // @ts-ignore
    if ((0, packet_filter_1.default)(event) == true) {
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
exports["default"] = hook;


/***/ }),

/***/ "./src/modules/pipes/packet_filter.js":
/*!********************************************!*\
  !*** ./src/modules/pipes/packet_filter.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
let players, myPlayerId;
function check_supress(packet) {
    // @ts-ignore
    const packet_ = new Uint8Array(packet.data);
    switch (packet_[2]) {
        case 32:
            return true;
            break;
        case 61:
            /** Parse players **/
            players = String.fromCharCode.apply(null, 
            // @ts-ignore
            packet_);
            // @ts-ignore
            window.myPlayerId = players.split(":")[1].replace(',"spawnRoleAvatarIds"', "");
            // @ts-ignore
            top.console.log(window.myPlayerId);
            break;
    }
    return false;
}
;
exports["default"] = check_supress;


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