let currentDay = new Date();
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let day = weekday[currentDay.getDay()];
document.getElementById('curret-day').innerText = day;

const month = ["Jan","Feb","March","Apr","May","Jun","Jul","Aug","Sept","Oct","Dec"];
let thisMonth = month[currentDay.getMonth()];
document.getElementById('curret-month').innerText = thisMonth;

let date = currentDay.getDate();
document.getElementById("current-date").innerHTML = date;

let year = currentDay.getFullYear();
document.getElementById("current-year").innerHTML = year;