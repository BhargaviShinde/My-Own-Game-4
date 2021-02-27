class Vehicles extends Box{
    constructor(x,y,w,h){
        super(x,y,w,h);

        var rand = Math.round(random(1,4));
        switch(rand){
            case 1:this.image = loadImage("car.png");
                    break;
            case 2: this.image = loadImage("train.png");
                    break;
            case 3: this.image = loadImage("truck.png");
                    break;
            case 4: this.image = loadImage("bus.png");
                    break;
        }

    }

    display(){
        super.display();
    }
}