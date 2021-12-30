let pomodoroElem = document.querySelector('.pomodoroButton');
let shortBreakElem = document.querySelector('.shortBreakButton');
let longBreakElem = document.querySelector('.longBreakButton');
let startElem = document.querySelector('.start');
let stopElem = document.querySelector('.stop');
let resetElem = document.querySelector('.reset');
let timerElem = document.querySelector('.timer');
let tabTimerElem = document.querySelector('.tabTimer');

const startTiming = 25;
let time = startTiming * 60;
let timerCheck = 'off';
let alarmSound = new Audio('alarm.mp3');

pomodoroElem.addEventListener('click', () => {
    //set time to 25 minutes
    time = 1500;
    updateTimer(time);
});

shortBreakElem.addEventListener('click', () => {
    //set time to 5 minutes
    time = 300;
    updateTimer(time);
});

longBreakElem.addEventListener('click', () => {
    //set time to 10 minutes
    time = 600;
    updateTimer(time);
});


startElem.addEventListener('click', () => {
    //confirms that start button has not already been clicked
    if (timerCheck === 'off') {
        myInterval = setInterval(updateTimer, 1000);
        timerCheck = 'on';
    } else
    return 0;
});

stopElem.addEventListener('click', () => {
    timerCheck = 'off';
    clearInterval(myInterval);
});

resetElem.addEventListener('click', () => {
    //set time back to 25 minutes
    time = 1500;
    updateTimer(time);
});

//
function updateTimer(){
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    //
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerElem.innerHTML  = `${minutes}:${seconds}`;
    tabTimerElem.innerHTML  = `(${minutes}:${seconds})`;
    time--;

    //stops count at 0
    if (time < 0) {
        clearInterval(myInterval);
        alarm();
    }
};

//plays alarm when called, sets timer to off position so you can restart timer
function alarm() {
    alarmSound.play();
    timerCheck = 'off';
}