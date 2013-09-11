var Key = {
    pressed : [],
    keys : {
        Left: 37,
        Up: 38,
        Right: 39,
        Down: 40
    }
};

Key.isDown = function(key){
    return this.pressed[key];
};

Key.onKeydown = function(event){
    this.pressed[event.keyCode] = true;
};

Key.onKeyup = function(event){
    delete this.pressed[event.keyCode];
};

window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);