var imagesrc = ["https://media2.giphy.com/media/7XqRXKYV9odtm/giphy.gif?cid=ecf05e476l5ua9v3lgudn3aup4dgr01e2lrl6s49mo2dw6xe&ep=v1_gifs_search&rid=giphy.gif&ct=g", "http://twistedsifter.com/wp-content/uploads/2013/05/animated-gifs-of-fighting-game-backgrounds-36.gif", "http://twistedsifter.com/wp-content/uploads/2013/05/animated-gifs-of-fighting-game-backgrounds-47.gif", "http://twistedsifter.com/wp-content/uploads/2013/05/animated-gifs-of-fighting-game-backgrounds-48.gif", "http://twistedsifter.com/wp-content/uploads/2013/05/animated-gifs-of-fighting-game-backgrounds-12.gif", "http://twistedsifter.com/wp-content/uploads/2013/05/animated-gifs-of-fighting-game-backgrounds-18.gif"]

var count = 0;

var body = document.getElementById("body")


//----------- PROGRESS BAR------------

var mybar = document.getElementById("mybar")
var score = 0
function move() {
    if (score < 100) {
        score = score + 20
        var width = mybar.style.width = score + '%';
        console.log(score)
    } else {
        console.log("finish")
    }
}

function changebg() {
    count = count + 1;
    if (count < imagesrc.length) {
        body.style.backgroundImage = "url('" + imagesrc[count] + "')";
        console.log("next" + count)
    } else {
        alert("finish")
    }
}

function backbg() {
    count = count - 1;
    if (count < imagesrc.length) {
        body.style.backgroundImage = "url('" + imagesrc[count] + "')";
        console.log("back" + count)
    } else {
        alert("finish")
    }
}

function gotologin() {
    window.location.href = "main.html"
}
function gamestart() {
    var playerInfo = document.querySelector('.playerinfo');
    playerInfo.style.display = 'none';

    var playbtn = document.querySelector('.playbtn');
    playbtn.style.display = 'none';

    var loader = document.querySelector(".loader")

    setTimeout(function () {
        loader.style.display = 'none'
    }, 2000);
    console.log("running")
};

