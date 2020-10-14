class paperclass{
    constructor(x,y,radius){
        var option={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        };
        this.radius=radius;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(this.x,this.y,this.radius/2,option);
        
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
        fill("blue");
        ellipse(0,0,this.radius,this.radius); 
  pop();
}
}