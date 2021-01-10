class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");

    this.path = [];   //empty array
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    //TRACKING THE TRAJECTORY OF THE BIRD
    if(this.body.position.x>200 && this.body.velocity.x>10){
      this.path.push([this.body.position.x ,this.body.position.y]);
    }
    

    //DISPLAYING THE SMOKE AT THE TRAJECTORY
    for(var a =0; a<this.path.length; a = a+1 ){
      image(this.smoke,this.path[a][0], this.path[a][1]);
    };
    
  }
}


/*
var i = 0
i = i + 1
i < array.length

this.path[0][0], this.path[0][1]
this.path[1][0], this.path[1][1]
this.path[2][0], this.path[2][1]
.
.
.
this.path[length-1][0], this.path[length-1][1]


*/
