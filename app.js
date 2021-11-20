//selectors:
const btnStart = document.querySelector('.start-btn');
const output = document.getElementById('time');
const text = document.getElementById('text');
const container = document.querySelector('.container');

//event handlers:
btnStart.addEventListener('click', startTimer);


let idWork;
let idRest;

//functions:
function startTimer() {
    if (idRest !== null) clearInterval(idRest);
    btnStart.style.display = "none";
    let minutes = 25;
    let seconds = 00;
    text.innerText = "Time Left";
    output.innerText = minutes + ":" + seconds;
    idWork = setInterval(function() {
        if (seconds === 0) {
            minutes -= 1;
            seconds = 59;
        } else {
            seconds -= 1;
        }

        if (minutes ===0 && seconds===0) {
            rest();
        }
        output.innerText = minutes + ":" + seconds;
    }, 1000);
}


function rest() {
    clearInterval(idWork);
    let minutes = 05;
    let seconds = 00;
    container.classList.toggle('rest-container');
    output.innerText = minutes + ":" + seconds;
    text.innerText = "Rest";
    idRest = setInterval(function() {
        if (seconds === 0) {
            minutes -= 1;
            seconds = 59;
        } else {
            seconds -= 1;
        }

        if (minutes ===0 && seconds===0) {
            container.classList.toggle('rest-container');
            startTimer();
        }
        output.innerText = minutes + ":" + seconds;
    }, 1000);
}