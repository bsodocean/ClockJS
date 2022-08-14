let weekDay = document.getElementById('weekDay');
let month = document.getElementById('month');
let numDate = document.getElementById('numDate');
let year = document.getElementById('year');

let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let period = document.getElementById('period');
let clock = document.querySelector('.clock-container');



function timeCheck(i) {
    if(i < 0){
        i = "0" + i;
    }
    return i
}


function displayTime () {
    let today = new Date();
    hour.innerText = String(today.getHours()).padStart(2,"0") + ":";
    minute.innerText = String(today.getMinutes()).padStart(2,"0") + ":";
    second.innerText = String(today.getSeconds()).padStart(2,"0");


    minute = timeCheck(minute);
    second = timeCheck(second);

    requestAnimationFrame(displayTime);
}


function displayDate () {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let today = new Date();
    let dayName = weekDays[today.getDay()];
    weekDay.innerText = dayName;

    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let monthName = months[today.getMonth()];
    month.innerText = monthName;

    year.innerText = today.getFullYear();
    numDate.innerText = today.getDate();
}


displayDate();
displayTime();