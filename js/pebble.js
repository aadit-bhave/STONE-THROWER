class Pebble {
  constructor(x, y, w, h) {
    var options = {
      isStatic: true,
      friction:1
    };

    this.w = 50;
    this.h = 50;

    this.body = Bodies.rectangle(x, y, this.w, this.h, options);

    this.image = loadImage("./assets/pebble.png");

    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.w, this.h);
    pop();
  }


  force() {
  Matter.Body.setStatic(this.body,false);
  Matter.Body.applyForce(this.body,{x:0,y:0}, {x:-0.005,y:-0.0035})
  setTimeout(()=>{
     Matter.Body.applyForce(this.body,{x:0,y:0}, {x:0.002,y:0.002})
    },1000)
}

}