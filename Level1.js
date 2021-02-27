class Level1 {
    constructor(){
    this.box1 = new Box(900,525,50,100);
    this.box2 = new Box(950,525,50,100);
    this.box3 = new Box(980,525,50,100);

    this.box5 = new Box(940,450,50,100);
    this.box6 = new Box(970,450,50,100);
 
    this.box8 = new Box(940,375,50,100);


    this.box11 = new Box(1000,525,50,100);
    this.box12 = new Box(1050,525,50,100);
    this.box13 = new Box(1100,525,50,100);

    this.box14 = new Box(1040,450,50,100);
    this.box15 = new Box(1090,450,50,100);

    this.box16 = new Box(1080,375,50,100);

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