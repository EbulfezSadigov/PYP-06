
// let [milliseconds,seconds,minutes] = [0,0,0];
// let timer = document.querySelector('#timer');
// let int = null;

// document.getElementById('start-button').addEventListener('click', ()=>{
//     if(int!==null){
//         clearInterval(int);
//     }
//     int = setInterval(displayTimer,10);
// });

// document.getElementById('stop-button').addEventListener('click', ()=>{
//     clearInterval(int);
// });

// document.getElementById('reset-button').addEventListener('click', ()=>{
//     clearInterval(int);
//     [milliseconds,seconds,minutes] = [0,0,0];
//     timer.innerHTML = '00:00:000';
// });

// function displayTimer(){
//     milliseconds+=10;
//     if(milliseconds == 1000){
//         milliseconds = 0;
//         seconds++;
//         if(seconds == 60){
//             seconds = 0;
//             minutes++;
//         }
//     }

//  let m = minutes < 10 ? "0"+minutes : minutes;
//  let s = seconds < 10 ? "0"+seconds : seconds;
//  let ms = milliseconds < 10 ? "00"+milliseconds : milliseconds < 100 ? "0"+milliseconds:milliseconds;

//  timer.innerHTML = ` ${m} : ${s} : ${ms}`;
// }