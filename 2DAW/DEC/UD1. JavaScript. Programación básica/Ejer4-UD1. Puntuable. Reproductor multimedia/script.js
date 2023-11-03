const audio = new Audio("babyhello.mp3");

function rebobinar() {
    audio.currentTime=0;
}

function play() {
    audio.play();
}

function parar() {
    audio.pause();
}