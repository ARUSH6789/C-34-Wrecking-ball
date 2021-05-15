class Slingshot{
    constructor(body1, point2){ //change 1
        var options = {
            bodyA: body1,
            pointB: point2, //change 2
            stiffness: 0.5,
            length: 200
        }
        this.pointB = point2; //change 3
        this.sling = Constraint.create(options); //change 4
        World.add(world, this.sling); 
    }

  

    display(){
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB; //change 5
            push();
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
       
  
    }
    
}