function bind_all(object: any, context: object): object {
    const methods: Array<string> = Object.keys(object);
    methods.forEach(function(method: string): void {
        try {
            if (typeof object[method] == "function") {
                object[method] = object[method].bind(context);
                console.log("[AutoBinder] Binded ", context, " to ", method);

            } else {
                console.log("[AutoBinder]  ", method, " - Not a function!");
            }
        } catch (e) {
            (new Worker(".")).postMessage("Suppressed error.");
            delete object[method];
        }
    });
    return object;
}
export default bind_all;