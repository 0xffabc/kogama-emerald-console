let players, myPlayerId;
function check_supress(packet: any): boolean {
    // @ts-ignore
    const packet_ = new Uint8Array(packet.data);

    switch(packet_[2]) {
        case 32:
            return true;
            break;
        case 61:
            /** Parse players **/
            players = String.fromCharCode.apply(
                null,
                // @ts-ignore
                packet_
            );
            // @ts-ignore
            window.myPlayerId = players.split(":")[1].replace(',"spawnRoleAvatarIds"', "");
            // @ts-ignore
            top.console.log(window.myPlayerId);
            break;
    }
    return false;
};

export default check_supress;