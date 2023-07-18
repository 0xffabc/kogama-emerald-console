"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function prop_wait(callback) {
    const check_exists = function () {
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
exports.default = prop_wait;
