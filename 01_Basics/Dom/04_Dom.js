//Dom Styling
let colorA = "#7A091614";
let colorB = "#FFAB0014";
let colorC = "#00B8D91F";
let colorD = "#919EAB14";
let attendancecards = document.querySelector(".inner-container :first-child");
attendancecards.style.backgroundColor = colorA;
let icThirdChild = document.querySelector(".inner-container :nth-child(3)");
icThirdChild.style.backgroundColor = colorC;
let icForthChild = document.querySelector(".inner-container :nth-child(4)");
icForthChild.style.backgroundColor = colorD;

//Data Update
let shifts;
function attendanceCard(shifts) {
  let totalShifts = 5 * 7 * 60;
  let expectedMinutes = totalShifts;
  let workedMinutes = shifts * 60 * 7;

  let shortMinutes = expectedMinutes - workedMinutes;
  document.querySelector(".inner-container :first-child p").innerHTML = shifts;
  document.querySelector(".inner-container :nth-child(2) p").innerHTML = expectedMinutes;
  document.querySelector(".inner-container :nth-child(3) p").innerHTML =workedMinutes;
  document.querySelector(".inner-container :nth-child(4) p").innerHTML =shortMinutes;
}
let inputSlot = document.querySelector(".input-slot");
let myButton = document.querySelector(".myButton");
myButton.addEventListener("click", function () {
  let inputValue = inputSlot.value;
  if (inputValue <= 5) {
    attendanceCard(inputValue);
  } else {
    alert("Value Must be less then 5");
  }
});


function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
showTime();