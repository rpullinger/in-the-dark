function Player(x, y){
    this.x = x;
    this.y = y;



}

Player.prototype.draw = function(context){

    context.fillStyle   = '#00f'; // blue

    // Draw the actual tile
    context.fillRect(
        this.x,
        this.y,
        Game.tileSize,
        Game.tileSize
    );

    context.fillStyle   = '#000'; // black
};

Player.prototype.update = function(context){

    if (Key.isDown(Key.keys.Up)){
        this.y--;
    }

    if (Key.isDown(Key.keys.Left)){
        this.x--;
    }

    if (Key.isDown(Key.keys.Right)){
        this.x++;
    }

    if (Key.isDown(Key.keys.Down)){
        this.y++;
    }

    this.draw(context);

};

Player.prototype.move = function(x, y){
    this.x = x;
    this.y = y;
};