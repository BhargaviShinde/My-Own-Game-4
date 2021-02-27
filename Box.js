class Box {
  constructor(x, y, width, height){

    this.width = width;
    this.height = height;
    this.visiblity = 255;
    this.body = Bodies.rectangle(x,y,width,height,{isStatic: false, friction:900, density: 9.5});
    this.image = loadImage("Plastic Bottle Obj.png");
    World.add(world,this.body);

  }

  display(){
    if(this.body.speed < 4){
    var pos = this.body.position;
    //var x = this.x;
    //var y = this.y;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image, 0,0,120,150);
    pop();
    }
    else{
      World.remove(world,this.body);
      push();
      this.visiblity = this.visiblity - 5;
      tint(255,this.visiblity);
      pop();
    }
  }

  destroy(){
    World.remove(world,this.body);
  }
   
  score(){
    if(this.visiblity<0 && this.visiblity>-255){
      score++;
    }
  }
}
