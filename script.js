let pomodoroElem = document.querySelector('.pomodoroButton');
let shortBreakElem = document.querySelector('.shortBreakButton');
let longBreakElem = document.querySelector('.longBreakButton');
let startElem = document.querySelector('.start');
let stopElem = document.querySelector('.stop');
let resetElem = document.querySelector('.reset');
let timerElem = document.querySelector('.timer');

let counter = 0;
let timeLeft = 65;

pomodoroElem.addEventListener('click', () => {
    console.log("pomodoro");
    counter = 25;
    updateTimer(counter);
});

shortBreakElem.addEventListener('click', () => {
    console.log("shortbreak");
    counter = 5;
    updateTimer(counter);
});

longBreakElem.addEventListener('click', () => {
    console.log("longbreak");
    counter = 10;
    updateTimer(counter);
});

startElem.addEventListener('click', () => {
    console.log("start");
});

stopElem.addEventListener('click', () => {
    console.log("stop");
});

resetElem.addEventListener('click', () => {
    console.log("reset");
    timerElem.innerHTML = timer;
});

function convertSeconds(s) {
    let min = Math.floor(s / 60);
    let sec = s % 60;
    return nf(min,2) + ":" + nf(sec,2);
}


function updateTimer(counter){
    timerElem.innerHTML = convertSeconds((timeLeft - counter));
    return counter;
};

function timerStart(){
    counter++;
    timerElem.innerHTML = convertSeconds((timeLeft - counter));
};

setInterval(timerStart, 1000);