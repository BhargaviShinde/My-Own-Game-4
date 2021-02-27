class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,150,200);
    this.image = loadImage("Metal Bottle.png");
  }

  display() {
    console.log("Inside display");
    super.display();
  }

  destroy(){
    World.remove(world, this.body);
  }
}
