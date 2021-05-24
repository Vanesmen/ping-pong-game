import {Vector} from "./vector";

export class Body {
    constructor(x, y, speed = 5000, width = 14, height = 80){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.height = height;
        this.width = width;
        this.velocity = new Vector();
    }

    direction(direction) {
        this.velocity.setDirection(direction, this.speed);
    }

    bodyMove() {
        this.velocity.kinematic(this.dx, this.dy);
    }

    update() {
        this.velocity.move(this);
    }
}