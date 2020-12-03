var ball;

var database;

var position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,20,20);
    ball.shapeColor = "red";

    database = firebase.database();
    database.ref("ball/position").on("value",readop);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+5);
    }
    drawSprites();
}

function changePosition(x,y){
   // ball.x = ball.x + x;
   //ball.y = ball.y + y;
   database.ref("ball/position").set({x:ball.x+x,y:ball.y+y})
}

function readop(data){
    position = data.val()
    ball.x = position.x;
    ball.y = position.y;

}
