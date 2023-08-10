function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6b1gOjH8iLN":
        Script1();
        break;
      case "5XwphgzypNJ":
        Script2();
        break;
      case "64O2EPYgvNH":
        Script3();
        break;
      case "5wxF077zZgg":
        Script4();
        break;
      case "6bWynn4V1N7":
        Script5();
        break;
      case "6HTMjoH12MR":
        Script6();
        break;
      case "6pAGspYV8Wg":
        Script7();
        break;
      case "6CgZfQszRXZ":
        Script8();
        break;
      case "6lU10x9EtKI":
        Script9();
        break;
      case "6Njl8uohUt9":
        Script10();
        break;
      case "6r1IVCCYiJu":
        Script11();
        break;
      case "5yot2W9u4zb":
        Script12();
        break;
      case "5j8s1pMAdTm":
        Script13();
        break;
      case "5ZiNhnSU5Mj":
        Script14();
        break;
      case "6hZ02JwYtxi":
        Script15();
        break;
      case "5vvqfrDGV4W":
        Script16();
        break;
      case "66zi9R8sAy3":
        Script17();
        break;
      case "5kDsGRtJhZu":
        Script18();
        break;
      case "6Vg4YLx0Gnc":
        Script19();
        break;
      case "5xMzAeKDUSh":
        Script20();
        break;
      case "5e6GEilc8IV":
        Script21();
        break;
      case "6R83CKxiLms":
        Script22();
        break;
      case "6R3uq8WpDBr":
        Script23();
        break;
      case "6KXlPYUQya7":
        Script24();
        break;
      case "5q9nZeekSZ1":
        Script25();
        break;
      case "6Sc9p2JlFsM":
        Script26();
        break;
      case "6JfUzBXsL2M":
        Script27();
        break;
      case "5rS6BcwUZbV":
        Script28();
        break;
      case "6HyAfzBP4uq":
        Script29();
        break;
      case "5zo09Z10tWD":
        Script30();
        break;
      case "6qK5infHLzQ":
        Script31();
        break;
      case "6g3Aa02C8te":
        Script32();
        break;
      case "6Fokv2EwFcm":
        Script33();
        break;
      case "6IA6tA0Nxmj":
        Script34();
        break;
      case "6p27ATTOG7f":
        Script35();
        break;
      case "5YZC4dU9Fbb":
        Script36();
        break;
      case "6jOJdXIhWYS":
        Script37();
        break;
      case "5zT4VX9F6FV":
        Script38();
        break;
      case "6Oq2f7y4LXl":
        Script39();
        break;
  }
}

function Script1()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
  
    setTimer=setInterval(function () {
      
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins",minutes)
       GetPlayer().SetVar("sec",seconds)

        if (--timer < 0) {
            timer = 00;
        }
      
        
   
    }, 1000);
      
}



 startTimer(60*3.5);
}

function Script2()
{
  console.log(localStorage.getItem("status"))
if(localStorage.getItem("status") =="accepted"){
GetPlayer().SetVar('result',"Accepted")
GetPlayer().SetVar('coins',GetPlayer().GetVar('coins')+5)
GetPlayer().SetVar("correctNum",GetPlayer().GetVar('correctNum')+1)
}
else if(localStorage.getItem("status") =="wrong answer"){
	GetPlayer().SetVar('result',"Wrong Answer")
}

else {
GetPlayer().SetVar('result',"Not Answer")
}
localStorage.removeItem('status')
}

function Script3()
{
  clearInterval(setTime);
}

function Script4()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.pause();
});
}

function Script5()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.play();
});
}

function Script6()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script7()
{
  if(GetPlayer().GetVar("coins") >= 3){
GetPlayer().SetVar("coins",GetPlayer().GetVar("coins")-3)
}
}

function Script8()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins",minutes)
       GetPlayer().SetVar("sec",seconds)

        if (--timer < 0) {
            timer = 00;
        }
    }, 1000);
}



 startTimer(60*3.5);
}

function Script9()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins_1",minutes)
       GetPlayer().SetVar("sec_1",seconds)

        if (--timer < 0) {
            timer = 00;
        }
    }, 1000);
}



 startTimer(60*3.5);
}

function Script10()
{
  console.log(localStorage.getItem("status"))
if(localStorage.getItem("status") =="accepted"){
GetPlayer().SetVar('result_1',"Accepted")
}
else if(localStorage.getItem("status") =="wrong answer"){
	GetPlayer().SetVar('result_1',"Wrong Answer")
}

else {
GetPlayer().SetVar('result_1',"Not Answer")
}
if(localStorage.getItem("status")=="accepted" && GetPlayer().GetVar('problemShowed')==false && GetPlayer().GetVar("sec_1") != 0){
GetPlayer().SetVar('coins',GetPlayer().GetVar('coins')+5)
GetPlayer().SetVar("correctNum",GetPlayer().GetVar('correctNum')+1)
localStorage.removeItem('status')
}
}

function Script11()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.pause();
});
}

function Script12()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.play();
});
}

function Script13()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script14()
{
  if(GetPlayer().GetVar("coins") >= 3){
GetPlayer().SetVar("coins",GetPlayer().GetVar("coins")-3)
}
}

function Script15()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins",minutes)
       GetPlayer().SetVar("sec",seconds)

        if (--timer < 0) {
            timer = 00;
        }
    }, 1000);
}



 startTimer(60*3.5);
}

function Script16()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins_2",minutes)
       GetPlayer().SetVar("sec_2",seconds)

        if (--timer < 0) {
            timer = 00;
        }
    }, 1000);
}



 startTimer(60*3.5);
}

function Script17()
{
  console.log(localStorage.getItem("status"))
if(localStorage.getItem("status") =="accepted"){
GetPlayer().SetVar('result_2',"Accepted")
GetPlayer().SetVar('coins',GetPlayer().GetVar('coins')+5)
GetPlayer().SetVar("correctNum",GetPlayer().GetVar('correctNum')+1)

}
else if(localStorage.getItem("status") =="wrong answer"){

GetPlayer().SetVar('result_2',"Wrong Answer")
}

else {
GetPlayer().SetVar('result_2',"Not Answer")
}

localStorage.removeItem('status')
}

function Script18()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.pause();
});
}

function Script19()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.play();
});
}

function Script20()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script21()
{
  if(GetPlayer().GetVar("coins") >= 3){
GetPlayer().SetVar("coins",GetPlayer().GetVar("coins")-3)
}
}

function Script22()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins_3",minutes)
       GetPlayer().SetVar("sec_3",seconds)

        if (--timer < 0) {
            timer = 00;
        }
    }, 1000);
}



 startTimer(60*3.5);
}

function Script23()
{
  console.log(localStorage.getItem("status"))
if(localStorage.getItem("status") =="accepted"){
GetPlayer().SetVar('result_3',localStorage.getItem("status"))
GetPlayer().SetVar('coins',GetPlayer().GetVar('coins')+5)
GetPlayer().SetVar("correctNum",GetPlayer().GetVar('correctNum')+1)
}
else if(localStorage.getItem("status") =="wrong answer"){

GetPlayer().SetVar('result_3',"Wrong Answer")
}

else {
GetPlayer().SetVar('result_3',"Not Answer")
}

localStorage.removeItem('status')
}

function Script24()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.pause();
});
}

function Script25()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.play();
});
}

function Script26()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script27()
{
  if(GetPlayer().GetVar("coins") >= 3){
GetPlayer().SetVar("coins",GetPlayer().GetVar("coins")-3)
}
}

function Script28()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins_4",minutes)
       GetPlayer().SetVar("sec_4",seconds)

        if (--timer < 0) {
            timer = 00;
        }
    }, 1000);
}



 startTimer(60*3.5);
}

function Script29()
{
  console.log(localStorage.getItem("status"))
if(localStorage.getItem("status") =="accepted"){
GetPlayer().SetVar('result_4',"Accepted")
GetPlayer().SetVar('coins',GetPlayer().GetVar('coins')+5)
GetPlayer().SetVar("correctNum",GetPlayer().GetVar('correctNum')+1)
}else if(localStorage.getItem("status") =="wrong answer"){
GetPlayer().SetVar('result_4',"Wrong Answer")

}



else {
GetPlayer().SetVar('result_4',"Not Answer")
}



localStorage.removeItem('status')
}

function Script30()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.pause();
});
}

function Script31()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.play();
});
}

function Script32()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script33()
{
  if(GetPlayer().GetVar("coins") >= 3){
GetPlayer().SetVar("coins",GetPlayer().GetVar("coins")-3)
}
}

function Script34()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.pause();
});
}

function Script35()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.play();
});
}

function Script36()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.pause();
});
}

function Script37()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.play();
});
}

function Script38()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.pause();
});
}

function Script39()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.play();
});
}

