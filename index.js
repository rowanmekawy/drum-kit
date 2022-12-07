
var buttons = document.querySelectorAll(".drum");
for (var i =0; i< buttons.length; i++)
{
    buttons[i].addEventListener("click", function() {
        sound(this.innerHTML);
        make_flash(this.innerHTML);
        
    });
}

document.addEventListener("keydown", function(pressed){
    sound(pressed.key);
    make_flash(pressed.key);
});

function sound(key){
    switch (key) {
        case "w":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "a":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;    
        case "s":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break; 
        case "k":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break; 
        case "l":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;             

        default:
            break;
    }
}

function make_flash(key)
{
    var active_key = document.querySelector("."+key);
    active_key.classList.add("pressed");
    setTimeout(function(){
        active_key.classList.remove("pressed");
    }, 100);
}