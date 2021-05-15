class Box{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50 , 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }

    display(){
      var angle = this.body.angle;
      push();
      //translate moves the 0,0 axis from the top left corner of the canvas
      //to the center of the body
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("white")
      fill("red");
      rect( 0, 0, this.width, this.height);
      pop();
    }
}