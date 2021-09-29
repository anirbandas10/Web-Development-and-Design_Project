"use strict";
class Add {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    Display() {
        console.log("x value " + this.x);
        console.log("y value " + this.y);
        console.log("Sum =" + (this.x + this.y));
    }
}
let add = new Add(10, 20);
add.Display();
