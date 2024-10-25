import { world } from "@minecraft/server";
import config from "./config";

world.afterEvents.playerSpawn.subscribe(({ player, intialSpawn }) => {
    if (!intialSpawn) return;
    const device = player.clientSystemInfo.platformType;
    if (
        (device == "Desktop" && config.pc == false) ||
        (device == "Mobile" && config.mobile == false) || 
        (device == "Console" && config.console == false)
    ) {
        player.runCommand(`kick "${player.name}" §r\nOn this server it is forbidden to play from this device!`);
    }
});
