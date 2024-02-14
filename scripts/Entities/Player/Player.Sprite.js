import {GAME_CANVAS_DATA} from "../GameCanvas/GameCanvas.js";
import {JUMP_STATE} from "../../Components/JumpState.js";

export function createPlayer(p5) {
    const PLAYER = new p5.Sprite();
    PLAYER.width = 30;
    PLAYER.height = 60;
    PLAYER.x = 50;
    PLAYER.y = GAME_CANVAS_DATA.dimensions.getDimensions().height - 150;
    PLAYER.jumpState = JUMP_STATE.GROUNDED;

    return PLAYER;
}