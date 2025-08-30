// heard click ++ section 
let heardCount = 0;
const heardDisplay = document.getElementById("heardCount");
document.getElementById("heard-btn1").addEventListener('click', function () {
  heardCount++;
  heardDisplay.textContent = heardCount;
});

document.getElementById("heard-btn2").addEventListener('click', function () {
  heardCount++;
  heardDisplay.textContent = heardCount;
});
document.getElementById("heard-btn3").addEventListener('click', function () {
  heardCount++;
  heardDisplay.textContent = heardCount;
});
document.getElementById("heard-btn4").addEventListener('click', function () {
  heardCount++;
  heardDisplay.textContent = heardCount;
});
document.getElementById("heard-btn5").addEventListener('click', function () {
  heardCount++;
  heardDisplay.textContent = heardCount;
});
document.getElementById("heard-btn6").addEventListener('click', function () {
  heardCount++;
  heardDisplay.textContent = heardCount;
});
document.getElementById("heard-btn7").addEventListener('click', function () {
  heardCount++;
  heardDisplay.textContent = heardCount;
});
document.getElementById("heard-btn8").addEventListener('click', function () {
  heardCount++;
  heardDisplay.textContent = heardCount;
});
document.getElementById("heard-btn9").addEventListener('click', function () {
  heardCount++;
  heardDisplay.textContent = heardCount;
});

//   copy click ++ section

let copyCount = 0;
const copyDisplay = document.getElementById("copyCount");
document.getElementById("copy-btn1").addEventListener('click', function () {
  copyCount++;
  copyDisplay.textContent = copyCount;
  navigator.clipboard.writeText(document.getElementById('number1').innerText).then(() => alert('নাম্বার কপি হয়েছে : 999'))
});
document.getElementById("copy-btn2").addEventListener('click', function () {
  copyCount++;
  copyDisplay.textContent = copyCount;
   navigator.clipboard.writeText(document.getElementById('number2').innerText).then(() => alert('নাম্বার কপি হয়েছে : 999'))

});

document.getElementById("copy-btn3").addEventListener('click', function () {
  copyCount++;
  copyDisplay.textContent = copyCount;
 
   navigator.clipboard.writeText(document.getElementById('number3').innerText).then(() => alert('নাম্বার কপি হয়েছে : 999'))
});

document.getElementById("copy-btn4").addEventListener('click', function () {
  copyCount++;
  copyDisplay.textContent = copyCount;
   
   navigator.clipboard.writeText(document.getElementById('number4').innerText).then(() => alert('নাম্বার কপি হয়েছে :1994-999999'))
});

document.getElementById("copy-btn5").addEventListener('click', function () {
  copyCount++;
  copyDisplay.textContent = copyCount;
 
  navigator.clipboard.writeText(document.getElementById('number5').innerText).then(() => alert('নাম্বার কপি হয়েছে :109'))
});

document.getElementById("copy-btn6").addEventListener('click', function () {
  copyCount++;
  copyDisplay.textContent = copyCount;
 
  navigator.clipboard.writeText(document.getElementById('number6').innerText).then(() => alert('নাম্বার কপি হয়েছে :106'))
});

document.getElementById("copy-btn7").addEventListener('click', function () {
  copyCount++;
  copyDisplay.textContent = copyCount;
   
  navigator.clipboard.writeText(document.getElementById('number7').innerText).then(() => alert('নাম্বার কপি হয়েছে :16216'))
});

document.getElementById("copy-btn8").addEventListener('click', function () {
  copyCount++;
  copyDisplay.textContent = copyCount;
  
  navigator.clipboard.writeText(document.getElementById('number8').innerText).then(() => alert('নাম্বার কপি হয়েছে :16445'))
});

document.getElementById("copy-btn9").addEventListener('click', function () {
  copyCount++;
  copyDisplay.textContent = copyCount;
 
   navigator.clipboard.writeText(document.getElementById('number9').innerText).then(() => alert('নাম্বার কপি হয়েছে :163'))
});

// call section

let coin = 100;
const coincontainer = document.getElementById("coin");
const callBtn = document.querySelectorAll(".callBtn");
const history = document.getElementById("history");
const clearBtn = document.getElementById("clearBtn");
callBtn.forEach(callBtn => {
  callBtn.addEventListener("click", function () {
    const service = this.getAttribute("data-service");
    const number = this.getAttribute("data-number");

    if (coin >= 20) {
      coin -= 20;
      coincontainer.textContent = coin;

      alert(`কল করা হলো ${service} (${number})`);

      const h1 = document.createElement("h1");
      h1.innerText = `${service}  ${number}`;
      h1.className = "text-xl font-bold";
      history.appendChild(h1);
    } else {
      alert("কয়েন শেষ");
    }
  });
});

clearBtn.addEventListener("click", function () {
  history.innerHTML = "";
});





