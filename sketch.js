import {GAME_CANVAS_DATA, buildGameCanvas, sizeGameCanvas} from "./scripts/Entities/GameCanvas/GameCanvas.js";
import {createPlayer} from "./scripts/Entities/Player/Player.Sprite.js";
import {playerMovement} from "./scripts/Entities/Player/Player.Movement.js";
import {collision, createCollisionGroups} from "./scripts/Components/Collision.js";

new p5((p5) => {

    let player, floor, collisionGroups;

    p5.setup = () => {
        // Initialise Game Canvas
        sizeGameCanvas(p5);
        buildGameCanvas(p5);

        collisionGroups = createCollisionGroups(p5);

        p5.world.gravity.y = 10;

        player = createPlayer(p5);

        ////////DO NOT FORGET TO DELETE THIS FLOOR!!!!!!!!!!!!//////////
        floor = new collisionGroups.FLOOR.Sprite();

    }

    p5.draw = () => {
        collision(p5, player, collisionGroups);
        playerMovement(p5, player);
        p5.background(255);
    }

    p5.windowResized = () => {
        sizeGameCanvas(p5);
        buildGameCanvas(p5);
    }
})