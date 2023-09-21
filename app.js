var hour = 0;
var min = 0;
var sec = 0;
var millisec = 0;
var a;

var hours = document.getElementById("hour");
var minutes = document.getElementById("min");
var second = document.getElementById("sec");
var millisecond = document.getElementById("millisec");

function timer() {
    millisec++;
    millisecond.innerHTML = millisec;
    if (millisec > 99) {
        sec++;
        second.innerHTML = sec;
        millisec = 0;
        millisecond.innerHTML = millisec;
    }
    else if (sec > 59) {
        min++;
        minutes.innerHTML = min;
        sec = 0;
        second.innerHTML = sec;
    }
    else if (min > 59) {
        hour++;
        hours.innerHTML = hour;
        min = 0;
        minutes.innerHTML = min;
    }

}

function start() {
    a = setInterval(timer, 10)
}

function pause() {
    clearInterval(a)
}

function reset() {
    hour = 0;
    min = 0;
    sec = 0;
    millisec = 0;
    hours.innerHTML = hour ;
    minutes.innerHTML = min;
    second.innerHTML = sec;
    millisecond.innerHTML = millisec;
    pause();
}

function disableBtn() {
    document.getElementById("Start").disabled = true;
}

function enableBtn() {
    document.getElementById("Start").disabled = false;
}
function newLap() {
    var lap = ("lap" + ": " + +hour + ":" + min + ":" + +sec + ":" + +millisec + ";<br>");
    if (a == null) {
        alert("Please start your stop watct")
    }
    else {
        document.getElementById("lap").innerHTML += lap;
    }
}

function save() {
    if (a == null) {
        alert("Please start your stop watct")
    }
    else {
        var name = prompt("Enter your name", "Azam")
        var b = name + " came back in " + ": " + hour + ":" + min + ":" + +sec + ":" + +millisec + "; <br>";
        document.getElementById("record").innerHTML += b;
    }

}