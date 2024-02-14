import {JUMP_STATE} from "../Components/JumpState.js";

export function createCollisionGroups(p5) {
    let floor = new p5.Group();
    floor.width = 1000;
    floor.y = p5.windowHeight - 300;
    floor.collider = "static";

    return {FLOOR: floor}
}

export function collisionManager(p5, entity, collisionGroups) {
    if (entity.collides(collisionGroups.FLOOR) && Object.hasOwn(entity, 'jumpState')) {
        entity.jumpState = JUMP_STATE.GROUNDED;
    }
}