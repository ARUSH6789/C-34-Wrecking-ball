class Ball{
    constructor(x,y){
        var options = {
            restitution : 0.9,
            friction : 0.6,
            density : 1.1
        }
        this.body = Bodies.circle(x , y , 50 , options)
        this.radius = 50;
        World.add(world , this.body);
    }

    display(){
        var pos = this.body.position
        push();
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(pos.x , pos.y , this.radius , this.radius)


        pop();
    }
}