window.onload = function () {

    var seconds = 00;
    var tens = 00;
    var timeSeconds = document.getElementById("seconds");
    var timeTens = document.getElementById("tens");
    var btnStart = document.getElementById("btn-start");
    var btnStop = document.getElementById("btn-stop");
    var btnReset = document.getElementById("btn-reset");
    var Interval;

    btnStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10)
    }
    btnStop.onclick = function () {
        clearInterval(Interval);
    }
    btnReset.onclick = function () {
        clearInterval(Interval);
        seconds = "00";
        tens = "00";
        timeSeconds.innerHTML = seconds;
        timeTens.innerHTML = tens;
    }

    function startTimer() {
        tens++;

        if (tens < 9) {
            timeTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            timeTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            timeSeconds.innerHTML = "0" + seconds;
            tens = 0;
            timeTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            timeSeconds.innerHTML = seconds;
        }
    }

}