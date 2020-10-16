class Paper{

    constructor(x, y, r){
   
       var options= {
         isStatic: false,
         restitution: 0.8,
         friction: 1,
         density: 1.2,
       }
   
       this.body=Bodies.circle(x, y, r, options);
       this.radius= r;
       this.image= loadImage("Images/paper.png");
       World.add(world,this.body);
   
    }
   
    display(){
       
       var pos= this.body.position;
       var ang= this.body.angle
       push();
       translate(pos.x,pos.y);
       rotate(ang)
       //ellipseMode(RADIUS);
       //ellipse(0, 0, this.radius, this.radius);
       imageMode(CENTER);
       image(this.image, 0, 0, this.radius, this.radius);
       pop();
       }
   
    }