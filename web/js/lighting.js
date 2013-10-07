var Lighting = {};

Lighting.init = function(){
    this.context = document.getElementById("lighting").getContext("2d");
    // this.context.globalAlpha = 0.5;
    //
    this.gradient = this.context.createRadialGradient(Game.tileSize * 5, Game.tileSize * 5, 0, Game.tileSize * 5, Game.tileSize * 5, 50);
    this.gradient.addColorStop(0,"#fff");
    this.gradient.addColorStop(1,"transparent");
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
    // this.context.fillStyle   = 'transparent'; // blue
    this.context.globalCompositeOperation = 'source-out';

    // this.context.globalCompositeOperation = 'lighten';
    self.drawLight(Game.entities[0].x, Game.entities[0].y, 10);

};

Lighting.drawLight = function(x, y, size){



    this.context.save();
    this.context.fillStyle = this.gradient;
    // this.context.fillStyle = 'rgba(255, 255, 255, 0.5)';
    this.context.translate(x - (size / 2 * Game.tileSize) , y - (size / 2 * Game.tileSize));

    this.context.fillRect(
        0,
        0,
        size * Game.tileSize,
        size * Game.tileSize
    );


    this.context.restore();

    // for (var i = 0; i < 5; i++){


    //     this.context.fillStyle = 'rgba(255, 255, 255, 0.9)';
    //     // Draw the actual tile


    // }

};