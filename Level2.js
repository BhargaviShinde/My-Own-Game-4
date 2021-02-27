class Level2 {
    constructor(){
    Mbottle.image = loadImage("Cloth Bag.png");

    this.box1 = new PlasticBag(840,570,75,75);
    this.box2 = new PlasticBag(900,570,75,75);
    this.box3 = new PlasticBag(960,570,75,75);

    this.box5 = new PlasticBag(860,500,75,75);
    this.box6 = new PlasticBag(920,500,75,75);

    this.box8 = new PlasticBag(880,480,75,75);

    
    this.box11 = new PlasticBag(960,240,75,75);
    this.box12 = new PlasticBag(1010,240,75,75);
    this.box13 = new PlasticBag(980,240,75,75);

    this.box14 = new PlasticBag(970.5,220,75,75);
    this.box15 = new PlasticBag(990.5,220,75,75);

    this.box16 = new PlasticBag(980.5,200,90, 40);
    }

    display(){
        this.box1.display();
        this.box2.display();
        this.box3.display();

        this.box5.display();
        this.box6.display();

        this.box8.display();

        this.box11.display();
        this.box12.display();
        this.box13.display();

        this.box14.display();
        this.box15.display();

        this.box16.display();
    }

    destroy(){
        this.box1.destroy();
        this.box2.destroy();
        this.box3.destroy();

        this.box5.destroy();
        this.box6.destroy();

        this.box8.destroy();

        this.box11.destroy();
        this.box12.destroy();
        this.box13.destroy();

        this.box14.destroy();
        this.box15.destroy();

        this.box16.destroy();
    }

    score(){
        this.box1.score();
        this.box2.score();
        this.box3.score();

        this.box5.score();
        this.box6.score();

        this.box8.score();

        this.box11.score();
        this.box12.score();
        this.box13.score();

        this.box14.score();
        this.box15.score();

        this.box16.score();
    }
}