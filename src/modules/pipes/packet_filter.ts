let players, myPlayerId;
function check_supress(packet: number[]): boolean {
    switch(packet[2]) {
        case 32:
            return false;
            break;
        case 61:
            /** Parse players **/
            players = String.fromCharCode.apply(
                null,
                packet
            );
            myPlayerId = players.split(":")[1].replace(',"spawnRoleAvatarIds"', "");
            break;
    }
    return false;
};

export default check_supress;