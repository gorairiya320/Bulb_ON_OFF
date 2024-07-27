let modebtn=document.querySelector("#btn");
let currentMode="off";

modebtn.addEventListener("click",()=>{
    if(currentMode==="off"){
        currentMode="on";
        document.querySelector(".bulb").style.backgroundImage="url('bulb_on.gif')";
        document.querySelector("#btn").style.backgroundColor="red";
        modebtn.innerText="OFF";
    }
    else{
        currentMode="off";
        document.querySelector(".bulb").style.backgroundImage="url('off.gif')";
        document.querySelector("#btn").style.backgroundColor="green";
        modebtn.innerText="ON";
    }
    console.log(currentMode);
});