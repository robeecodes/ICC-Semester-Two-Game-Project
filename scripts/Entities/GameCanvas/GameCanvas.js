export const GAME_CANVAS_DATA = {
    aspectRatio: {
        width: 4,
        height: 3,
        getRatio: function () {
            return this.width / this.height;
        }
    },
    position: {
        x: 0,
        y: 0,
        setPosition: function (x, y) {
            this.x = x;
            this.y = y;
        }
    },
    dimensions: {
        width: 0,
        height: 0,
        minWidth: 320,
        minHeight: 240,
        setDimensions: function (width, height) {
            this.width = width;
            this.height = height;
        },
        getDimensions: function () {
            return this.width < this.minWidth ?
                {width: this.minWidth, height: this.minHeight} :
                {width: this.width, height: this.height}
        }
    }
}

export function buildGameCanvas(p5) {

    const GAME_CANVAS_SIZE = GAME_CANVAS_DATA.dimensions.getDimensions();
    const GAME_CANVAS = p5.createCanvas(GAME_CANVAS_SIZE.width, GAME_CANVAS_SIZE.height);

    GAME_CANVAS_DATA.position.setPosition(
        (p5.windowWidth - GAME_CANVAS_SIZE.width) / 2,
        (p5.windowHeight - GAME_CANVAS_SIZE.height) / 2
    );
    GAME_CANVAS.position(GAME_CANVAS_DATA.position.x, GAME_CANVAS_DATA.position.y);
    p5.pixelDensity(window.devicePixelRatio);
}

export function sizeGameCanvas(p5) {
    if (p5.windowWidth / p5.windowHeight > GAME_CANVAS_DATA.aspectRatio.getRatio()) {
        GAME_CANVAS_DATA.dimensions.setDimensions(
            p5.windowHeight * GAME_CANVAS_DATA.aspectRatio.getRatio(),
            p5.windowHeight
        );
    } else {
        GAME_CANVAS_DATA.dimensions.setDimensions(
            p5.windowWidth,
            p5.windowWidth / GAME_CANVAS_DATA.aspectRatio.getRatio()
        );
    }
}