var Game = {};

Game.fps = 30;
Game.tileSize = 10;

Game.initialize = function(){
    this.entities = [];
    this.context = document.getElementById("gamearea").getContext("2d");

    // Draw the map
    Map.init();
    Map.draw();

    // Lighting
    Lighting.init();
};

Game.draw = function(){

    var self = this;

    // Lighting
    Lighting.draw();

    // Clear the screen
    this.context.clearRect(0, 0, 480, 320);



    // Loop over all the entities and draw them
    _(this.entities).each(function(entity, i){
        entity.draw(self.context);
    });

};


Game.update = function(){

    var self = this;

    // Loop over all the entities and update them
    _(this.entities).each(function(entity, i){
        entity.update(self.context);
    });
};


Game.addPlayer = function(x, y){
    Game.entities.push(new Player(x, y));
};



Game.run = (function(){

    var loops = 0,
        skipTicks = 1000 / Game.fps,
        maxFrameSkip = 10,
        nextGameTick = (new Date()).getTime();

    return function(){
        loops = 0;

        while ((new Date()).getTime() > nextGameTick && loops < maxFrameSkip){
            Game.update();
            nextGameTick += skipTicks;
            loops++;
        }

        Game.draw();
    };

})();


Game.initialize();
Game.addPlayer(2 * Game.tileSize, 2 * Game.tileSize);

// Start the game loop
Game._intervalId = setInterval(Game.run, 0);