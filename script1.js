    
    //Fetching Variable from HTML
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var tens=document.getElementById("tens");
    var startBtn=document.getElementById("startBtn");
    var stopBtn=document.getElementById("stopBtn");
    var resetBtn=document.getElementById("resetBtn");
    var lapTimer=document.querySelector("lap-timer");


    //Declaring Variable Values for Start Button
    var minutesSet=0;
    var secondsSet=0;
    var tensSet=0;
    var Interval;
    


    //Start Button 
    startBtn.onclick=function()
    {
        Interval=setInterval(startTimer,10);
        lapTimer.classList.add("diming-effect")  //Effect is given in timer box
    }

     //Stop Button 
    stopBtn.onclick=function()
    {
        clearInterval(Interval);
        const lap=document.getElementById("laps");
        const li=document.createElement('li');  //lap will be  created according to STOP button is pressed
        li.innerHTML=`lap: <span>${minutes.innerHTML}:${seconds.innerHTML}:${tens.innerHTML}</span>`;
        lap.appendChild(li);
        lapTimer.classList.remove("diming-effect");
    }

     //Reset Button 
    resetBtn.onclick=function()
    {
        clearInterval(Interval);
        minutesSet="00";
        secondsSet="00";
        tensSet="00";
        minutes.innerHTML=minutesSet;
        seconds.innerHTML=secondsSet;
        tens.innerHTML=tensSet;
        laps.innerHTML="";
        lapTimer.classList.remove("diming-effect");
    }


    //Start Function
    function startTimer()
    {
        tensSet++;
        
        if(tensSet<9)
            {
                tens.innerHTML="0"+tensSet;
            }
            if(tensSet>9)
                {
                    tens.innerHTML=tensSet;
                }
                if(tensSet>99)
                    {
                        secondsSet++;
                        seconds.innerHTML="0"+secondsSet;
                        tensSet=0;
                        tens.innerHTML="0"+0;
                    }
                    if(secondsSet>9)
                        {
                            seconds.innerHTML=secondsSet;
                        }
                        if(secondsSet==60)
                            {
                                minutesSet++;
                                minutes.innerHTML="0"+minutesSet;
                                secondsSet=0;
                            }
                            if(minutesSet>9)
                                {
                                    minutes.innerHTML=minutesSet;
                                }
    }

