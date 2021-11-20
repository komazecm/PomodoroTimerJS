//selectors:
const btnStart = document.querySelector('.start-btn');
const output = document.getElementById('time');

//event handlers:
btnStart.addEventListener('click', startTimer);

//functions:
function startTimer() {
    let minutes = 25;
    let seconds = 0;
    output.innerText = minutes + ":" + seconds;
}
