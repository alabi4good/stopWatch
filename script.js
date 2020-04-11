//declare the vars for the millisecs, seconds,minutes and hours
let millisecs;
let seconds;
let minutes;
let hours;

//let us define vars to hold the display values
let displaySeconds;
let displayMinutes;
let displayHours;

//var to hold setInterval()
let theInterval = null;

//mode of the watch
let mode = true;

//reset the watch to all zeros
function reset() {
    window.clearInterval(theInterval);
    millisecs = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    displaySeconds = 0;
    displayMinutes = 0;
    displayHours = 0;
    
    document.getElementById('display').innerHTML = `0${displayHours}:0${displayMinutes}:0${displaySeconds}:0${millisecs}`;
    document.getElementById('startStop').innerHTML = "start";
}

function stopWatch() {
   millisecs++;
    if(millisecs / 100 === 1){
        millisecs = 0;
        seconds++;
        if(seconds/60 === 1){
            seconds = 0;
            minutes++;
        }

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
        
    }
    //add "0" to the results if its just one digit
    if(seconds <= 9){
        displaySeconds = `0${seconds.toString()}`;
    }else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = `0${minutes.toString()}`;
    }else{
        displayMinutes = minutes;
    }
    if(hours < 10){
        displayHours = `0${hours.toString()}`;
    }else{
        displayHours = minutes;
    }
    
    document.getElementById('display').innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}:${millisecs}`;
}

function startStop(){

    //start the watch if it is in stop mode
    if(mode === true){
        theInterval = window.setInterval(stopWatch, 10);
        document.getElementById('startStop').innerHTML = "stop"
        mode = false;
    }else{
        window.clearInterval(theInterval);
        document.getElementById('startStop').innerHTML = "start";
        mode = true;
    }
}

reset();
document.getElementById('startStop').addEventListener('click', startStop);
document.getElementById('reset').addEventListener('click', reset);