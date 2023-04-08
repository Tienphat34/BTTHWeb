const screenClock = document.getElementById('screen-clock');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let intervalId;
let minute = 0;
let second = 0;
let millisecond = 0;

function startTimer() {
    intervalId = setInterval(() => {
        millisecond++;
        if (millisecond === 100) {
            millisecond = 0;
            second++;
        }
        if (second === 60) {
            second = 0;
            minute++;
        }
        screenClock.textContent = `${minute.toString().padStart(2, '0')}: ${second.toString().padStart(2, '0')}. ${millisecond.toString().padStart(2, '0')}`;
    }, 10);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
}

function stopTimer() {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
}

function resetTimer() {
    clearInterval(intervalId);
    minute = 0;
    second = 0;
    millisecond = 0;
    screenClock.textContent = '00: 00. 00';
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);