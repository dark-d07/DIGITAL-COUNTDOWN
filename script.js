function showTime(){
    const date = new Date();//class
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session ="AM";
    if(hours>12){
        hours=hours-12;
        session="PM";
    }else{
        session="AM";
    }
    //Ternary operator condition ? T/F
    hours=hours<10?"0"+hours:hours;
    minutes=minutes<10?"0"+minutes:minutes;
    seconds=seconds<10?"0"+seconds:seconds;
    let time = hours + ":" + minutes + ":" + seconds +" " + session;
    document.querySelector("#clock").innerText = time;
}
showTime()


// setTimeout(function(){
//     console.log("Called after 5 SeC");
// },5000);
setInterval(function(){
    showTime();
},1000);
function countdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    let diff = newYear - now;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(diff % (1000 * 60) / 1000);
    const currentYear = now.getFullYear(); // Get the current year
    days=days<10?"0"+days:days;
    hours=hours<10?"0"+hours:hours;
    minutes=minutes<10?"0"+minutes:minutes;
    seconds=seconds<10?"0"+seconds:seconds;
    let count = days + "d " + hours + "h " + minutes + "m " + seconds + "s "+"Remains in " + currentYear;
    document.querySelector("#countdown").innerText = count;
}  
setInterval(function() {
    countdown();
}, 1000);
function year(){
    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth()+1;
    const currentYear = now.getFullYear();
    let y = date +"/"+month+"/"+ currentYear;
    document.querySelector("#year").innerText = y;
}
setInterval(function(){
    year();
},1000);
