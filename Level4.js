class Level4 {
    constructor(){

    Mbottle.image = loadImage("e vehicle.png"); 

    this.base1 = new Ground(840,600,95,10);
    this.box1 = new Vehicles(840,550,85,75);

    this.base2 = new Ground(495,570,95,10);
    this.box2 = new Vehicles(495,520,85,75);
    
    this.base3 = new Ground(980,250,95,10);
    this.box3 = new Vehicles(980,180,85,75);
    
    this.base4 = new Ground(1310,150,95,10);
    this.box5 = new Vehicles(1310,100,85,75);

    this.base5 = new Ground(1350,650,95,10);
    this.box6 = new Vehicles(1350,600,85,75);
    
    this.base6 = new Ground(1390,420,95,10);
    this.box8 = new Vehicles(1390,370,85,75);

    this.base7 = new Ground(710,95,95,10);
    this.box11 = new Vehicles(710,45,85,75);

    this.base8 = new Ground(1140,380,95,10);
    this.box12 = new Vehicles(1140,330,85,75);

    this.base9 = new Ground(705,740,95,10);
    this.box13 = new Vehicles(705,690,85,75);

    this.base10 = new Ground(1435,590,95,10);
    this.box14 = new Vehicles(1435,540,85,75);

    this.box15 = new Vehicles(1225,830,85,75);
    
    this.base11 = new Ground(455,100,95,10);
    this.box16 = new Vehicles(455,30,85,75);
    
    }

    display(){
        this.base1.display();
        this.base2.display();
        this.base3.display();
        this.base4.display();
        this.base5.display();
        this.base6.display();
        this.base7.display();
        this.base8.display();
        this.base9.display();
        this.base10.display();
        this.base11.display();

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