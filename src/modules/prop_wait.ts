import ws from './interfaces/ws';

type Timer = /** Not finished yet... **/ any;
function prop_wait(callback: any): void {
    const check_exists: any = function(value: ws) {
        let has_prop: boolean = false;
        eval((function check_if_prop_exists(): void {
            // @ts-ignore
            if (window.ws) {
                has_prop = true;
            }
        }).toString());
        return has_prop;
    };
    const interval_id: Timer = setInterval(function(): void {
        if (check_exists()) {
            clearInterval(interval_id);
            callback();
        };
    }, 1000 / 60);
};

export default prop_wait;