import {JUMP_STATE} from "../../Components/JumpState.js";

export function playerMovement(p5, player) {
    if (p5.kb.pressing('left')) player.vel.x = Math.max(player.vel.x - 0.25, -4);
    if (p5.kb.pressing('right')) player.vel.x = Math.min(player.vel.x + 0.25, 4);

    if (p5.kb.presses(' ')) {
        if (player.jumpState !== JUMP_STATE.DOUBLE_JUMP) {
            if (p5.kb.pressing('left') && player.vel.x > -2) {
                player.rotationSpeed = -6;
            }
            if (p5.kb.pressing('right') && player.vel.x < 2) {
                player.rotationSpeed = 6;
            }
            player.vel.y = -6;
        }
        if (player.jumpState === JUMP_STATE.GROUNDED) {
            player.jumpState = JUMP_STATE.ONE_JUMP;
        } else if (player.jumpState === JUMP_STATE.ONE_JUMP) {
            player.jumpState = JUMP_STATE.DOUBLE_JUMP;
        }
    }

    if (player.jumpState === JUMP_STATE.GROUNDED) {
        player.rotation = 0;
    }
}