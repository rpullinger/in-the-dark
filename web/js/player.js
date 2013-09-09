function Player(x, y){
    this.x = x;
    this.y = y;
}

Player.prototype.draw = function(context){

    context.fillStyle   = '#00f'; // blue

    // Draw the actual tile
    context.fillRect(
        this.x * Game.tileSize,
        this.y * Game.tileSize,
        Game.tileSize,
        Game.tileSize
    );

    context.fillStyle   = '#000'; // blue
};

Player.prototype.update = function(context){
    this.draw(context);
};