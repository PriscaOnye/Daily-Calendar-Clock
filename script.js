const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];




function updateCalendar() {

    const today = new Date();

    date.innerHTML = today.getDate();
    day.innerHTML = daysOfWeek[today.getDay()];
    month.innerHTML = months[today.getMonth()];
    year.innerHTML = today.getFullYear();

    console.log(today);
}

updateCalendar();



function updateTime(){
    const currentTime = new Date();

    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');

    const displayTime = `${hours} : ${minutes} : ${seconds}`;

    const digitalTime = document.getElementById("time");
    digitalTime.innerHTML = displayTime;

    console.log(currentTime);
}

setInterval(updateTime, 1000);

updateTime();
