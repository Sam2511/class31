/*
To store data --> variables

DATA TYPES:
    1. Undefined
    2. Number
    3. string
    4. Boolean (T/F)
    5. Null (empty)


    Multiple variables --> DATA STRUCTURE

    ARRAY
    - list of items
    - Contains same or different data types
    - Items = elements
    - created using []
    - Elements are separated using a comma
    - Length: Number of elements
    - Index Number : 0 - (length-1)
*/

//Array containing same data type
var arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
console.log(arr1[2]);

//Array containing different data types
var arr2 = [100, "Samarth", true];
console.log(arr2);
console.log(arr2[1]);

//Array containing arrays inside
var arr3 = [[1, 2], [2, 3], [3, 4], [4, 5]];
console.log(arr3);
console.log(arr3[3]);
console.log(arr3[3][0]);

//Adding a new element to an array
arr3.push("Srishti");
console.log(arr3);

//Remove an element
arr3.pop();
console.log(arr3);

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gamestate  = "onsling";



function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gamestate !== "launched"){  //NOT - !
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gamestate  = "launched";
}

function keyPressed(){
    if(keyCode === 32){
    //    slingshot.attach(bird.body);
    }
}