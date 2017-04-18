

function createClock(){
    var oClock = document.querySelector('#time ul');
    var oStyle = document.querySelector('style');
    var cssStr = '';
    var oClockStr = ''
    for(var i = 0;i<60;i++){
        cssStr += '#content #time ul li:nth-of-type('+i+'){transform:rotate('+i*6+'deg)}';
        oClockStr += '<li></li>';
    }
    oClock.innerHTML = oClockStr;
    oStyle.innerHTML = cssStr;

    var timer = setInterval(tick,1000);
}

function tick(){
    var date = new Date();

    var sec = date.getSeconds();
    var min = date.getMinutes()+sec/60;
    var hour = date.getHours()+min/60;

    var oSec = document.querySelector('#sec');
    var oMin = document.querySelector('#min');
    var oHour = document.querySelector('#hour');
    oSec.style.transform = 'rotate('+sec*6+'deg)';
    oMin.style.transform = 'rotate('+min*6+'deg)';
    oHour.style.transform = 'rotate('+hour*30+'deg)';
}



window.onload = function(){

    createClock();

}