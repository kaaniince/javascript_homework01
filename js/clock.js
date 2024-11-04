// Get the user's name and write it to the HTML

let userName = prompt("Adınız Nedir?");

if (userName) {
  const myNameDOM = document.querySelector("#myName");
  myNameDOM.innerHTML = `${userName}`;
} else {
  alert("Lütfen geçerli bir isim giriniz.");
}

const clockDOM = document.querySelector("#myClock");

// Days of the week in Turkish

const days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

// Function to display the current time and date
function showTime() {
  let date = new Date();
  let hour = date.getHours().toString().padStart(2, "0");
  let minute = date.getMinutes().toString().padStart(2, "0");
  let second = date.getSeconds().toString().padStart(2, "0");
  let dayShow = days[date.getDay()];

  // Combine the time format and the day
  let timeDay = `${hour}:${minute}:${second} ${dayShow}`;
  clockDOM.innerText = timeDay;
}

// Update the time every second
setInterval(showTime, 1000);

// Initial call to display the time immediately
showTime();
