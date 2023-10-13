let count = 50;
let i = 0;

let rocket = document.getElementById("rocket");
let smoke = document.getElementById("smoke");

let position = 350;

while(i < count) {

    let star = document.createElement('i');
    let x = Math.floor(Math.random() * window.innerWidth);


    let duration = Math.random() * 1;
    let h = Math.random() * 100;

    star.style.top = x + 'px';
    star.style.height = 1 + 'px';
    star.style.width = h + 'px';
    star.style.animationDuration = duration + 's';

    document.querySelector('.scene').appendChild(star);
    i++;

}

let bullet = document.getElementById("bullet");

function bulletMove() {
    var id = null;
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos >= 200) {
            bullet.style.width = '10px';
            clearInterval(id);
        } else {
            pos = pos + 3;
            bullet.style.width = pos + 'px';
        }
    }
}



window.addEventListener("keyup", function(event) {

    if(event.key == 'w') {
        position = position - 50;
    }

    if(event.key == 's'){
        position = position + 50;
    }

    if(position > 650){
        rocket.style.top = 650 + 'px';
        smoke.style.top = 650 - 50 + "px";
        position = 650;
    }else if(position < 0){
        rocket.style.top = 0 + 'px';
        smoke.style.top = -50 + "px";
        position = 0;
    }else{
        rocket.style.top = position + "px";
        smoke.style.top = position - 50 + "px";
        bullet.style.top = position + 48 + "px";
    }

    if(event.key == ' '){
        bulletMove();
    }

});



let enemy = document.getElementById("enemy");

function enemyMove() {
    var id = null;
    var pos = 1600;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos <= -100) {
            clearInterval(id);
        } else {
            pos = pos - 3;
            enemy.style.left = pos + 'px';
        }
    }
}


let enemy2 = document.getElementById("enemy2");

function enemy2Move() {
    var id = null;
    var pos = 1600;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos <= -100) {
            clearInterval(id);
        } else {
            pos = pos - 3;
            enemy2.style.left = pos + 'px';
        }
    }
}


let enemy3 = document.getElementById("enemy3");

function enemy3Move() {
    var id = null;
    var pos = 1600;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos <= -100) {
            clearInterval(id);
        } else {
            pos = pos - 3;
            enemy3.style.left = pos + 'px';
        }
    }
}


let enemy4 = document.getElementById("enemy4");

function enemy4Move() {
    var id = null;
    var pos = 1600;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos <= -100) {
            clearInterval(id);
        } else {
            pos = pos - 3;
            enemy4.style.left = pos + 'px';
        }
    }
}


let enemy5 = document.getElementById("enemy5");

function enemy5Move() {
    var id = null;
    var pos = 1600;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos <= -100) {
            clearInterval(id);
        } else {
            pos = pos - 3;
            enemy5.style.left = pos + 'px';
        }
    }
}


let x = 0;

setInterval(function(){

    x++;

    if(x == 1){
        enemy.style.top = position + 'px';
        enemyMove();
    }

    if(x == 2){
        enemy2.style.top = position + 'px';
        enemy2Move();
    }

    if(x == 3){
        enemy3.style.top = position + 'px';
        enemy3Move();
    }

    if(x == 4){
        enemy4.style.top = position + 'px';
        enemy4Move();
    }

    if(x == 5){
        enemy5.style.top = position + 'px';
        enemy5Move();
        x = 0;
    }

},2000);
