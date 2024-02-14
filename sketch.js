import {buildGameCanvas, sizeGameCanvas} from "./scripts/Entities/GameCanvas/GameCanvas.js";
import {createPlayer} from "./scripts/Entities/Player/Player.Sprite.js";
import {playerMovement} from "./scripts/Entities/Player/Player.Movement.js";
import {collisionManager, createCollisionGroups} from "./scripts/Systems/CollisionManager.js";

new p5((p5) => {

    let player, floor, collisionGroups;

    p5.setup = () => {
        // Initialise Game Canvas
        sizeGameCanvas(p5);
        buildGameCanvas(p5);

        // Initialise Collision Groups
        collisionGroups = createCollisionGroups(p5);

        // Initialise world
        p5.world.gravity.y = 10;

        // Initialise player
        player = createPlayer(p5);

        ////////////////////!!!!!!!!!!!!DO NOT FORGET TO DELETE THIS FLOOR!!!!!!!!!!!!////////////////////
        floor = new collisionGroups.FLOOR.Sprite();
    }

    p5.draw = () => {
        // Handle player collision
        collisionManager(p5, player, collisionGroups);
        playerMovement(p5, player);
        p5.background(255);
    }

    p5.windowResized = () => {
        // Change window size if screen size changes
        sizeGameCanvas(p5);
        buildGameCanvas(p5);
    }
})