# tomato-timer

The classic tomato timer, a [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique). This was a fun mini project that introduced me to the setInterval functionality.

I use the tomato timer daily to assist in staying focused and to take quick breaks to stretch the legs and help reset the mind. It helps to break up the day, and tackle bigger projects.

I was inspired to build an app similar to the website; [Tomato-Timer.com](https://tomato-timer.com/)!

## Table of Contents

- [Overview](#overview)
    - [App Breakdown](#app-breakdown)
    - [Screenshot](#screenshot) 
    - [Links](#links) 
- [My Process](#my-process)
    - [Built With](#built-with)
    - [What I Learned](#what-i-learned)
    - [Continued Development](#continued-development)
    - [Useful Resources](#useful-resources)


## Overview

### App Breakdown

This application is a countdown timer that assists those using the [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique). 

The app gives you the choice to set the timer to either 25 minutes, or a series of breaks, 10 minutes for a long break, or 5 minutes for a short break.

You can also stop the timer at anytime, re-start the timer, or reset the timer to begin the countdown again.

### Screenshot

![Screenshot](screenshot.png)

### Links

- [Live View](https://johnmichaeld.github.io/tomato-timer/)
- [Github Repository](https://github.com/JohnMichaelD/tomato-timer)
- [Website](johnmdarrin.com)

## My Process

### Built With

- Javascript ES6
- HTML5
- CSS3
- Adobe XD
- Mobile First Design
- Webkit

### What I Learned

- JS Timer Functionality 
- [Webkit](https://webkit.org/)
- setInterval() caused the most issues for me:
    - I came across an issue when I wanted to use setInterval in multiple functions. This caused a few issues. Each time setInterval was called, it would multiply in speed by the number of times it was called.
    - For example, clicking 'start' when the timer was already counting down, would accelerate the countdown, it would increase in speed with each click, 'stop' would no longer work even with calling clearInterval, and reset would work, but the countdown would still be just as fast.
    - I figured how best to call setInterval, I removed the global setInterval, added it into the 'start' eventListener. 
    - This allowed the stop eventListener to function correctly, however it did not fix the acceleration issue.
    - By adding a simply 'on' / 'off' switch of sorts, I was able to fix the problem.
- clearInterval()
    - I was able to use clearInterval() to pause the timer when the 'stop' eventListener was called.
- `${}`
- I am  currently experience an issue with what I see using 

### Continued Development

I would like to come back to this project and add sound (an alarm) for when the timer hits 00:00.

I would like to update the document title in the browser tab to update and reflect the timer countdown. Fixed 12.19.21.

I find that when changing the time of the counter, it seems to JUMP over the first sec iteration. I would like to fix that. Using setTimeout did not seem to do what I wanted.

I would also like to practice a bit on my CSS skills, and make the clock look more like a [retro 90's alarm clock](https://pictures.depop.com/b0/6331641/496631841_Vz5Zqg9wdm/P0.jpg)! As well as bring the design to a more modern look.

Horizontal orientation of mobile view needs to be fixed. Fixed 12.18.21.

### Useful Resources

- [CSS Animations](https://www.youtube.com/watch?v=MLtAMg9_Svw)
- [Query Selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector#escaping_special_characters)
- [JS Timer](https://stackoverflow.com/questions/31559469/how-to-create-a-simple-javascript-timer)
- [setTimeout()](https://www.sitepoint.com/delay-sleep-pause-wait/)
- [setTimeout()](https://stackoverflow.com/questions/8539079/how-to-start-and-stop-pause-setinterval)
- [clearInterval()](https://www.w3schools.com/jsref/met_win_clearinterval.asp)

## Author

- [John M Darrin - Website](johnmdarrin.com)
- Reference: [tomatoTimer.com](https://tomato-timer.com/)