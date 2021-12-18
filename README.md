# tomato-timer
The classic tomato timer, a pomodoro technique, a mini project.

## Table of Contents




### Things I Learned or Practiced

- CSS GRID
- JS Timer Functionality 
- webkit
- timer in js
- setInterval()
    Calling setInterval in multiple functions did not work, it would multiple the interval count each time it was called, which makes sense, but was not the solution i was hoping for. 

    at a point, clicking 'start' when the timer was already counting down, would accelerate the countdown, multiplied by each click, 'stop' would no longer work, and reset would work, but the countdown would still be as fast.

    removed initial decleration of setInterval, only in start function now
        - fixed stop not working, did not fix speed

- setTimeout()
- clearInterval()




### Resources

- https://stackoverflow.com/questions/16344354/how-to-make-blinking-flashing-text-with-css-3
- https://www.youtube.com/watch?v=MLtAMg9_Svw
- https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector#escaping_special_characters
- https://stackoverflow.com/questions/31559469/how-to-create-a-simple-javascript-timer
- https://www.sitepoint.com/delay-sleep-pause-wait/
- https://stackoverflow.com/questions/8539079/how-to-start-and-stop-pause-setinterval
- https://www.w3schools.com/jsref/met_win_clearinterval.asp