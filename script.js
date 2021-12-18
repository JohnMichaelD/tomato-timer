let pomodoroElem = document.querySelector('.pomodoroButton');
let shortBreakElem = document.querySelector('.shortBreakButton');
let longBreakElem = document.querySelector('.longBreakButton');
let startElem = document.querySelector('.start');
let stopElem = document.querySelector('.stop');
let resetElem = document.querySelector('.reset');
let timerElem = document.querySelector('.timer');

const startTiming = .15;
let time = startTiming * 60;


pomodoroElem.addEventListener('click', () => {
    console.log("pomodoro");
    time = 1500;
    setTimeout(() => {
        updateTimer(time); }, 1000);
});

shortBreakElem.addEventListener('click', () => {
    console.log("shortbreak");
    time = 300;
    setTimeout(() => {
        updateTimer(time); }, 1000);
});

longBreakElem.addEventListener('click', () => {
    console.log("longbreak");
    time = 600;
    setTimeout(() => {
        updateTimer(time); }, 1000);
});


startElem.addEventListener('click', () => {
    console.log("start");
});

stopElem.addEventListener('click', () => {
    console.log("stop");
    clearInterval(myInterval);
});

resetElem.addEventListener('click', () => {
    console.log("reset");
    time = 1500;
    updateTimer(time);
});

function updateTimer(){
    let minutes = Math.floor(time/60);
    let seconds = time % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerElem.innerHTML  = `${minutes}:${seconds}`;
    time--;

    if (time < 0) {
        clearInterval(myInterval);
    }
};

myInterval = setInterval(updateTimer, 1000);