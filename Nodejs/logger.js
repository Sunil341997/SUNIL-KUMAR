var time = 0;
var timer = setInterval(function(){
    time +=2;
    console.log(time + 'seconds passsed')
    if (time > 5){
        clearInterval(timer);
    }
}, 2000);