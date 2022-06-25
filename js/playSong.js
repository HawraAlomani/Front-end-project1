let song = document.getElementById("pianoMusic");
let icon = document.getElementById("playIcon");
let iconSound= document.getElementById("soundIcon")
icon.onclick = function(){
    if(song.paused){
        song.play();
        icon.src ="/images/pause.png";
        iconSound.src="/images/sound.png";
    }
    else{
        song.pause();
        icon.src ="/images/play-button.png";
        iconSound.src="/images/sound-empty.png";
    }
}