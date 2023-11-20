const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const user = document.getElementById("user");
const robott = document.getElementById("robott")
const win = document.getElementById("win")
const lose = document.getElementById("lose")
const draw = document.getElementById("draw")
const userscore = document.getElementById("userscore")
const robotscore = document.getElementById("robotscore")
let x = 0;
let y = 0;
let randominteger = () => Math.floor(Math.random() * 3) + 1;

rock.onclick = function() {
    user.style.backgroundImage = 'url("rock.png")';
    robot();
    score();
    clear();
};
paper.onclick = function() {
    user.style.backgroundImage = 'url("paper.png")';
    robot();
    score();
    clear();
};
scissor.onclick = function() {
    user.style.backgroundImage = 'url("scissor.png")';
    robot();
    score();
    clear();
};

function score(){
    setTimeout(function(){
        if(win.style.display == "block"){
            x++;
            userscore.innerHTML="Score: "+x;
        }
        if(lose.style.display == "block") {
            y++;
            robotscore.innerHTML="Score: "+y;
        }
    },200)
}

function robot() {
    switch(randominteger()){
        case 1:
            robott.style.backgroundImage = 'url("rock.png")';
            break;
        case 2:
            robott.style.backgroundImage = 'url("paper.png")';
            break;
        case 3:
            robott.style.backgroundImage = 'url("scissor.png")';
            break;
    }
}

check = function() {
    if (user.style.backgroundImage == 'url("rock.png")' && robott.style.backgroundImage == 'url("rock.png")') {draw.style.display = "block";}
    else if (user.style.backgroundImage == 'url("paper.png")' && robott.style.backgroundImage == 'url("paper.png")') {draw.style.display = "block";}
    else if (user.style.backgroundImage == 'url("scissor.png")' && robott.style.backgroundImage == 'url("scissor.png")') {draw.style.display = "block";}
    else if (user.style.backgroundImage == 'url("rock.png")' && robott.style.backgroundImage == 'url("paper.png")') {lose.style.display = "block";}
    else if (user.style.backgroundImage == 'url("rock.png")' && robott.style.backgroundImage == 'url("scissor.png")') {win.style.display = "block";}
    else if (user.style.backgroundImage == 'url("paper.png")' && robott.style.backgroundImage == 'url("rock.png")') {win.style.display = "block";}
    else if (user.style.backgroundImage == 'url("paper.png")' && robott.style.backgroundImage == 'url("scissor.png")') {lose.style.display = "block";}
    else if (user.style.backgroundImage == 'url("scissor.png")' && robott.style.backgroundImage == 'url("rock.png")') {lose.style.display = "block";}
    else if (user.style.backgroundImage == 'url("scissor.png")' && robott.style.backgroundImage == 'url("paper.png")') {win.style.display = "block";}
}

clear = function() {
    win.style.display = "none";
    lose.style.display = "none";
    draw.style.display = "none";
}

setInterval(check, 200);