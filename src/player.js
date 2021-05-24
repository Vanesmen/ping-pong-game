import {Body} from "./body";

export class Player extends Body {
    constructor(game, x, y, control, color) {
        super(x,y);

        this.game = game;
        this.control = control;
        this.score = 0;
        this.color = color;
    }

    drow() {
        this.game.screen.get("gamelayer").drowRect(this.x, this.y, this.width, this.height, this.color);
    }

    scoreInc() {
        this.score++
    }

    update() {
        if ( this.control.up ) {
            if (this.y > 0) {
                this.direction("up");
            } else {
                this.y = 0;
            }
        } else if ( this.control.down ) {
            if ( this.y + this.height < this.game.screen.get("gamelayer").element.height ) {
                this.direction("down");
            } else {
                this.y = this.game.screen.get("gamelayer").element.height - this.height;
            }
        } else {
            this.direction("idle");
        }

        super.update();
    }
}