let audio = document.getElementById("audio1")
let audio2 = document.getElementById("audio2")
let logo = document.getElementById("logo")
let nomeMusica = document.getElementById("nomeMusica")
let controles = document.getElementById("control")
let play1 = document.getElementById("play1")
let btn1 = document.getElementById("btn1")


function playpause(){
    if (audio.paused){
        play1.setAttribute("src", "./assets/pause.png");
        audio.play();
    } else {
        play1.setAttribute("src", "./assets/play.png");
        audio.pause();
    }
}

function start(){
    audio.pause;
    audio.currentTime = 0;
}

function end(){
    audio.pause;
    audio.currentTime = 99999;
}

function btnplay(){
    audio.setAttribute("src", "./assets/song1.mp3");
    logo.setAttribute("src", "./assets/Capa_de_Blinding_Lights.png")
    nomeMusica.innerText = "The Weeknd - Blinding Lights";
    audio.play();
}
function btnplay2(){
    if (audio.play){
        audio.setAttribute("src", "./assets/song2.mp3");
        logo.setAttribute("src", "./assets/teto.jpg");
        nomeMusica.innerText = "TETO - GOUPIES";
        audio.play();
    } else {
        return btnplay();
    }
}
