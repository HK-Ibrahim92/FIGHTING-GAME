



//------------music play---------



var bgMusic = document.getElementById("bgMusic");
var bgclick = document.getElementById("bgclick");
var stopMusicButton = document.getElementById("stopMusicButton");
var gamefinishmusic=document.getElementById("gamefinish")
var threepunchmusic=document.getElementById("threepunchmusic")
var punch=document.getElementById("punch")
var punchimpact=document.getElementById("punchimpact")
var spideypunch=document.getElementById("spideypunch")

console.log(bgclick)


var music_card = document.querySelector(".align");


music_card.addEventListener("mouseover", function () {
    bgclick.play();
});

music_card.addEventListener("mouseout", function () {
    bgclick.pause();
    bgclick.currentTime = 0; // Reset the playback position
})






document.addEventListener("onclick", username())

// stop the background music when the button is clicked
stopMusicButton.addEventListener("click", function () {
    bgMusic.pause();
    bgMusic.currentTime = 0; // Reset the playback position
});




