export default interface ws {
    CLOSED: number,
    CLOSING: number,
    CONNECTING: number,
    OPEN: number,
    binaryType: string,
    bufferedAmount: number,
    close: object,
    extensions: string,
    onclose: any,
    onerror: any,
    onmessage: any,
    onopen: any,
    protocol: string,
    readyState: number,
    send: any,
    url: string
};