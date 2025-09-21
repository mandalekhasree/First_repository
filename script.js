let timerE1=document.getElementById("timer")
let defuserE1=document.getElementById("defuser")
let counter=10;
let intervalId=setInterval(function(){
    counter=counter-1;
    timerE1.textContent=counter;
    if(counter===0){
        timerE1.textContent="BOOM.......!"
        clearInterval(intervalId)
    }
},1000);
defuserE1.addEventListener("keydown",function(event){
    let bombDefuse=defuserE1.value;
    if(event.key==="Enter" && bombDefuse==="defuse" && counter!=0){
        timerE1.textContent="You did it!";
        clearInterval(intervalId);
    }
})