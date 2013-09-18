var Lighting = {};

Lighting.init = function(){
    this.context = document.getElementById("lighting").getContext("2d");
    //this.context.globalAlpha = 0.5;
};

Lighting.draw = function(){

    var self = this;

    // Clear the map
    this.context.clearRect(0, 0, 480, 320);

    // Copy the map into this canvas
    this.context.drawImage(Map.canvas, 0, 0);

    // Cover the whole map in darkness
    this.context.fillStyle   = '#000';
    this.context.fillRect(
        0,
        0,
        20 * Game.tileSize,
        20 * Game.tileSize
    );

    // Draw the light over the map - and cut it out
    this.context.fillStyle   = '#000'; // blue
    this.context.globalCompositeOperation = 'source-out';
    self.drawTile(Game.entities[0].x, Game.entities[0].y, 10);

};

Lighting.drawTile = function(x, y, size){

    // Draw the actual tile
    this.context.fillRect(
        x - (size / 2 * Game.tileSize),
        y - (size / 2 * Game.tileSize),
        size * Game.tileSize,
        size * Game.tileSize
    );
};