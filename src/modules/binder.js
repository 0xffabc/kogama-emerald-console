"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bind_all(object, context) {
    const methods = Object.keys(object);
    methods.forEach(function (method) {
        try {
            if (typeof object[method] == "function") {
                object[method] = object[method].bind(context);
                console.log("[AutoBinder] Binded ", context, " to ", method);
            }
            else {
                console.log("[AutoBinder]  ", method, " - Not a function!");
            }
        }
        catch (e) {
            (new Worker(".")).postMessage("Suppressed error.");
            delete object[method];
        }
    });
    return object;
}
exports.default = bind_all;
