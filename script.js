let pomodoroElem = document.querySelector('.pomodoroButton');
let shortBreakElem = document.querySelector('.shortBreakButton');
let longBreakElem = document.querySelector('.longBreakButton');
let startElem = document.querySelector('.start');
let stopElem = document.querySelector('.stop');
let resetElem = document.querySelector('.reset');
let timerElem = document.querySelector('.timer');

let timer = 0;

pomodoroElem.addEventListener('click', () => {
    console.log("pomodoro");
    timer = 25;
    updateTimer(timer);
});

shortBreakElem.addEventListener('click', () => {
    console.log("shortbreak");
    timer = 5;
    updateTimer(timer);
});

longBreakElem.addEventListener('click', () => {
    console.log("longbreak");
    timer = 10;
    updateTimer(timer);
});

startElem.addEventListener('click', () => {
    console.log("start");
});

stopElem.addEventListener('click', () => {
    console.log("stop");
});

resetElem.addEventListener('click', () => {
    console.log("reset");
});


function updateTimer(timer){
    timerElem.innerHTML = timer;
}