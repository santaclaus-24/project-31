class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();

        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();

        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,10,this.r);

        pop();
    }
}