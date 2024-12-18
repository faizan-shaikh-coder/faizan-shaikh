let watch =true;
let sec = 0;
let min = 0;
let hr = 0;
 
function startTime()
{
    if (watch == true){
        
        watch =false;
        document.getElementById("display").style.color="green";
        
        
    }
    set();
}

function set()
{
    if(watch == false){
    
    sec =parseInt(sec);
    min =parseInt(min);
    hr=parseInt(hr);

    sec++;


    if(sec == 60)
    {
        sec = 0;
        min ++;
    }

    if(min == 60)
    {
        min = 0;
        hr ++;
    }

    if (sec<10)
    {
     sec = "0" + sec;
    }
    if (min<10){
        min = "0" + min;
    }

    if (hr<10)
    {
        hr = "0" + hr;

    }
    document.getElementById("display").innerHTML= hr + ":" + min + ":" + sec;
    setTimeout("set()",1000);
    }
}

    function stop()
    {
        watch = true;
        document.getElementById("display").style.color ="red";
    }

    function resetTime()
    {
      watch = true;
      sec = 0;
      min = 0;
      hr = 0;
      document.getElementById("display").innerHTML="00:00:00";
    }