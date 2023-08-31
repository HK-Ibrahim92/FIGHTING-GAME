



//------------music play---------



var bgMusic = document.getElementById("bgMusic");
var bgclick = document.getElementById("bgclick");
var stopMusicButton = document.getElementById("stopMusicButton");
var gamefinishmusic=document.getElementById("gamefinish")
var threepunchmusic=document.getElementById("threepunchmusic")
var punch=document.getElementById("punch")
var punchimpact=document.getElementById("punchimpact")
var spideypunch=document.getElementById("spideypunch")
var finalcry=document.getElementById("finalcry")

var music_card = document.querySelector(".align");

music_card.addEventListener("mouseover", function () {
    bgclick.play();
});

music_card.addEventListener("mouseout", function () {
    bgclick.pause();
    bgclick.currentTime = 0; 
})

document.addEventListener("onclick", username())
stopMusicButton.addEventListener("click", function () {
    bgMusic.pause();
    bgMusic.currentTime = 0; 
});




