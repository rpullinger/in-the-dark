var Map = {};

Map.layout = [
    [1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1]
];

Map.init = function(){
    this.context = document.getElementById("maparea").getContext("2d");
};

Map.draw = function(){

    var self = this;

    // Clear the map
    this.context.clearRect(0, 0, 480, 320);

    // Draw the tiles
    _(this.layout).each(function(row, i){
        _(row).each(function(tile, j){
            if(tile !== 0){
                self.drawTile(j, i);
            }
        });
    });

};

Map.drawTile = function(x, y){

    // Draw the actual tile
    this.context.fillRect(
        x * Game.tileSize,
        y * Game.tileSize,
        Game.tileSize,
        Game.tileSize
    );
};