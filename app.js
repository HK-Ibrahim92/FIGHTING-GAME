var imagesrc = ["https://media2.giphy.com/media/7XqRXKYV9odtm/giphy.gif?cid=ecf05e476l5ua9v3lgudn3aup4dgr01e2lrl6s49mo2dw6xe&ep=v1_gifs_search&rid=giphy.gif&ct=g", "http://twistedsifter.com/wp-content/uploads/2013/05/animated-gifs-of-fighting-game-backgrounds-36.gif", "http://twistedsifter.com/wp-content/uploads/2013/05/animated-gifs-of-fighting-game-backgrounds-47.gif", "http://twistedsifter.com/wp-content/uploads/2013/05/animated-gifs-of-fighting-game-backgrounds-48.gif", "http://twistedsifter.com/wp-content/uploads/2013/05/animated-gifs-of-fighting-game-backgrounds-12.gif", "http://twistedsifter.com/wp-content/uploads/2013/05/animated-gifs-of-fighting-game-backgrounds-18.gif"]

var count = 0;
let userName;
var body = document.getElementById("body")
var character1 = document.querySelector(".character1")


function username() {
    bgMusic.play();
    Swal.fire({
        title: 'Enter Your Name',
        input: 'text',
        inputLabel: 'Name',
        inputPlaceholder: 'Enter your name...',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        cancelButtonText: 'Cancel',
        allowOutsideClick: false,
        inputValidator: (value) => {
            if (!value) {
                return 'Name cannot be empty!';
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            userName = result.value;
            localStorage.setItem('userName', userName);
            gotologin()
        }
    });
};



//----------- PROGRESS BAR------------

var mybar = document.getElementById("mybar")
var score = 0
function move() {
    if (score <= 80) {
        score = score + 20
        var width = mybar.style.width = score + '%';
        console.log(score)
    } else {
        gamefinishmusic.play();
        swal.fire({
            title: "Victory!",
            text: "Congratulations! Player 2 won the game.",

            buttons: {
                playAgain: {
                    text: "Play",
                    value: true,
                },
            },
            confirmButtonText: "Play"
        })
            .then((playAgain) => {
                if (playAgain) {
                    location.reload();
                }
            });
    }
}

var mybar2 = document.getElementById("mybar2")
var score2 = 0
function move2() {
    if (score2 <= 80) {
        score2 = score2 + 20
        var width2 = mybar2.style.width = score2 + '%';
        console.log("score2:" + score2)
    } else {
        gamefinishmusic.play();

        swal.fire({
            title: "Yahoo!",
            text: "Congratulations! Player 1 won the game.",
            icon: "success",
            buttons: {
                playAgain: {
                    text: "Play",
                    value: true,
                },
            },
            confirmButtonText: "Play", // Custom button text
        })
            .then((playAgain) => {
                if (playAgain) {
                    location.reload();
                }
            });
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

    
        const storedUserName = localStorage.getItem('userName'); // Retrieve from localStorage
    
        if (storedUserName) {
    
            swal.fire({
                title: `Hello, ${storedUserName}!`,
                icon:'info',
            });
        } else {
    
            swal.fire({
                title: `User name not found`
            });
    
        }
    

}
function gamestart() {
    var playerInfo = document.querySelector('.playerinfo');
    playerInfo.style.display = 'none';

    var playbtn = document.querySelector('.playbtn');
    playbtn.style.display = 'none';


    var charac1 = document.querySelector(".character1")
    charac1.style.visibility = 'visible'


    var charac2 = document.querySelector("#character2")
    charac2.style.visibility = 'visible'

    // var loader = document.querySelector(".loader")

    // setTimeout(function () {
    //     loader.style.display = 'none'
    // }, 2000);
    // console.log("running")

    var progressbar = document.querySelector(".progressbar")

    progressbar.style.visibility = 'visible'

};


//-------------check position--------------

// Calculate the distance between two characters
function calculateDistance(x1, x2) {
    return Math.abs(x1 - x2);
}

// Check for proximity and show injured image
function checkProximityAndShowInjured1() {
    var distance = calculateDistance(value1, value2);


    if (distance < 250 && distance != 0) {
        character1.style.transformOrigin = "center center";
        character1.style.transform = "scale(2)";
        character1.src = "CHARACTER/spidermen/spidey-throw-player.gif";
        character2.src = ""
        spideypunch.play();
        move2()
    }
    setTimeout(function () {
        character2.src = originalSrc2;
    }, 2000);

}
function checkProximityAndShowInjuredcaptain() {
    var distance = calculateDistance(value1, value2);

    if (distance < 250 && distance != 0) {
        move2();
        finalcry.play();
        character2.src = "CHARACTER/captain-america/captainamerica-down.gif";
        
    }
    setTimeout(function () {
        character2.src = originalSrc2;
    }, 2000);
    }


function checkProximityAndShowInjure2() {
    var distance = calculateDistance(value1, value2);

    if (distance < 250 && distance != 0) {
        character1.src = "CHARACTER/spidermen/spidey-injured.gif";
        move();
        punchimpact.play()
    }
}

//----------CHARACTER 1---------------

var value1 = 0;
var character1 = document.querySelector(".character1");
var originalSrc1 = character1.src;
window.addEventListener("keydown", function (event) {
    console.log(event.keyCode)

    if (event.keyCode === 83) {
        character1.src = "CHARACTER/spidermen/spidey-walk1.gif";

        if (value1 > 0) {
            value1 = value1 - 25;
        }
        console.log("val1:" + value1);
        console.log("val2:" + value2);
        character1.style.left = value1 + "px";

        setTimeout(function () {
            character1.src = originalSrc1;
        }, 1000);
    }

    if (event.keyCode === 70) {
        character1.src = "CHARACTER/spidermen/spidey-walk1.gif";
        value1 = value1 + 25;
        console.log("val1:" + value1);
        console.log("val2:" + value2);
        character1.style.left = value1 + "px";

        setTimeout(function () {
            character1.src = originalSrc1;
        }, 1000);
    }
    if (event.keyCode === 68) {
        value1 = value1;
        // console.log(value1);
        character1.style.left = value1 + "px";
        checkProximityAndShowInjured1()
        setTimeout(function () {

            character1.style.transformOrigin = "initial"; // Revert the transform origin
            character1.style.transform = "initial";

            character1.src = originalSrc1;
        }, 1500);


    }

    if (event.keyCode === 69) {

        character1.style.transformOrigin = "center center";
        character1.style.transform = "scale(2)";
        character1.src = "CHARACTER/spidermen/spider-jump.gif";
        value1 = value1;
        // console.log(value1);
        character1.style.left = value1 + "px";
        checkProximityAndShowInjuredcaptain()
        spideypunch.play()

        setTimeout(function () {

            character1.style.transformOrigin = "initial"; // Revert the transform origin
            character1.style.transform = "initial";

            character1.src = originalSrc1;
        }, 1500);
    }
    if (event.keyCode === 67) {
        character1.src = "CHARACTER/spidermen/spidey-kick.gif";
        value1 = value1;
        // console.log(value1);
        character1.style.left = value1 + "px";

        setTimeout(function () {
            character1.src = originalSrc1;
        }, 1000);
    }

});


//----------CHARACTER 2---------------

var value2 = 0;

var character2 = document.querySelector("#character2");
var originalSrc2 = character2.src; // Store the original image source

window.addEventListener("keydown", function (event) {

    if (event.keyCode === 39) {
        character2.src = "CHARACTER/captain-america/captain-america-walk.gif";
        // console.log(value2);
        if (value2 > 0) {
            value2 = value2 - 25;

        }
        character2.style.right = value2 + "px";
        character2.style.transform = 'scaleX(-1)';

        console.log("val1:" + value1)
        console.log("val2:" + value2)

        setTimeout(function () {

            character2.src = originalSrc2;
        }, 1000);
    }


    if (event.keyCode === 37) {
        character2.src = "CHARACTER/captain-america/captain-america-walk.gif";
        // console.log(value2);
        value2 = value2 + 25;
        character2.style.right = value2 + "px";
        character2.style.transform = 'scaleX(-1)';

        console.log("val1:" + value1)
        console.log("val2:" + value2)


        setTimeout(function () {
            character2.src = originalSrc2;
        }, 1000);
    }
    if (event.keyCode === 38) {

        character2.src = "CHARACTER/captain-america/captainamerica-chargingstar.gif";
        value2 = value2;
        // console.log(value2);
        character2.style.right = value2 + "px";
        character2.style.transform = 'scaleX(-1)'
        punch.play();
        checkProximityAndShowInjure2();

        setTimeout(function () {
            character2.src = originalSrc2;
        }, 1000);
        setTimeout(function () {
            character1.src = originalSrc1;
        }, 1500);

    }
    if (event.keyCode === 40) {
        character2.src = "CHARACTER/captain-america/captainamerica-down.gif";
        value2 = value2;
        // console.log(value2);
        character2.style.right = value2 + "px";
        character2.style.transform = 'scaleX(1)'

        setTimeout(function () {
            character2.src = originalSrc2;
            character2.style.transform = 'scaleX(-1)'

        }, 1000);
    }
});


