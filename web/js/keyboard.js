var Key = {
    pressed : false,
    keys : {
        Left: 37,
        Up: 38,
        Right: 39,
        Down: 40
    }
};

Key.isDown = function(key){
    return this.pressed === key;
};

Key.onKeydown = function(){
    this.pressed = event.keyCode;
};

Key.onKeyup = function(){
    this.pressed = null;
};

window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);