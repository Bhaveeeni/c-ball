class Dustbin {
    constructor(x,y,height,width,angle){
        var options ={
            "restitution":0,
            "isStatic":true
        }
        this.body=Bodies.rectangle(x,y,height,width,options)
        this.width=width;
        this.height=height;
        Matter.Body.setAngle(this.body,angle)
  
        World.add(world,this.body)
    }
  
    display(){
        var pos=this.body.position;
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
       rotate(angle)
       rectMode(CENTER);
       strokeWeight(4);
      stroke("green")
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop()
        
    }
  }