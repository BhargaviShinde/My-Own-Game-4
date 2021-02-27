class Level3 {
        constructor(){
        Mbottle.image = loadImage("apple.png");
    
        this.box1 = new JunkF(900,570,40,35);
        this.box2 = new JunkF(1000,570,40,35);
        this.box3 = new JunkF(1040,570,40,35);
    
        this.box5 = new JunkF(1200,570,40,35);
        this.box6 = new JunkF(1200,530,40,35);
    
        this.box8 = new JunkF(940,550,40,35);
    
        
        this.box11 = new JunkF(960,240,40,35);
        this.box12 = new JunkF(1010,240,40,35);
        this.box13 = new JunkF(980,240,40,35);
    
        this.box14 = new JunkF(970.5,220,40,35);
        this.box15 = new JunkF(990.5,220,40,35);
    
        this.box16 = new JunkF(980.5,200,40,35);
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
