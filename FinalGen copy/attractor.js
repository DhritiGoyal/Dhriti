class Attractor {
    constructor(x,y,m){
        this.pos = createVector(x,y);
        this.vel = p5.Vector.random2D();
        this.acc = createVector (0,0);
        this.mass = m;
        this.r = sqrt(this.mass) * 10;
    }
    attract(mover){
        let force = p5.Vector.sub(this.pos, mover.pos);
        let distanceSq = constrain(force.magSq(), 25, 2500);

        let G = 5;
        let strength = G * (this.mass * mover. mass) / distanceSq;

        force.setMag(strength);
        mover.applyForce(force);
    }
    show(){
        fill(0);
        image(pickedShapeLoadede, this.pos.x, this.pos.y, this.r*2);
    }
} 