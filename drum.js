
//sound wave effect png
function SoundWave(){

    var wave = document.querySelector(".wave");

    wave.classList.remove("active");
    void wave.offsetWidth; 

    wave.classList.add("active");

    setTimeout(function(){
        wave.classList.remove("active");
    }, 150);
}

function playSound(key){
    switch(key){
        case "a":
            new Audio("cymbals.mp3").play();
            break;

        case "s":
            new Audio("stick.mp3").play();
            break;

        case "d":
            new Audio("snare drum.mp3").play();
            break;

        case "k":
            new Audio("bass.mp3").play();
            break;
    }
}


// for the screen buttons
var buttons = document.querySelectorAll(".B");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        var key = this.innerHTML.toLowerCase();

        playSound(key);
        SoundWave();
    });
}

// for the keyboard
document.addEventListener("keydown", function(event){

    var key = event.key.toLowerCase();

    playSound(key);
    SoundWave();
});

//for the component touch sound effect
var drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++){
    drums[i].addEventListener("click", function(){

        var key = this.getAttribute("data-sound");
        console.log("clicked key:", key);

        playSound(key);
        SoundWave();
    });
}



