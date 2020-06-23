var canvas, backgroundImg;
var gameState = 0;
var playerCount, database, form, player, game, allPlayers;
var car1, car2, car3, car4, cars;

function setup(){
    database = firebase.database();
    canvas = createCanvas(displayWidth - 20, displayHeight - 30);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    // text(mouseX+";"+mouseY,100,500);
    if(playerCount === 4){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    drawSprites();
}