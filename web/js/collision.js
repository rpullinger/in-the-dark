var Collision = {};

Collision.map = Map.layout;

Collision.getPosition = function(isY, x, y, distance){

    var newX = isY ? x : Math.floor(x + distance),
        newY = isY ? Math.floor(y + distance) : y;

    // Check if walking into something solid
    var tileAbove = this.isSolidTile(newX, newY) || this.isSolidTile(newX + Game.tileSize -1, newY);
    var tileBelow = this.isSolidTile(newX, newY + Game.tileSize -1) || this.isSolidTile(newX + Game.tileSize -1, newY + Game.tileSize - 1);
    var tileRight = this.isSolidTile(newX + Game.tileSize -1, newY) || this.isSolidTile(newX + Game.tileSize -1 , newY + Game.tileSize -1);
    var tileLeft = this.isSolidTile(newX, newY) || this.isSolidTile(newX, newY + Game.tileSize -1);

    if(!isY){
        if (newX > x && !tileRight || newX < x && !tileLeft){
            return newX;
        } else {
            return x;
        }
    } else {
        if (newY > y && !tileBelow || newY < y && !tileAbove){
            return newY;
        } else {
            return y;
        }
    }
};


Collision.isSolidTile = function(x, y){
    var tileX = Math.floor(x / Game.tileSize);
    var tileY = Math.floor(y / Game.tileSize);
    var tileType = this.map[tileY][tileX];

    if (tileType === 2){
        Game.finish();
    }

    return tileType === 1;
};