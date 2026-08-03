const doorScene = document.getElementById("doorScene");

const mituBtn = document.getElementById("mituBtn");
const otherBtn = document.getElementById("otherBtn");
const continueBtn = document.getElementById("continueBtn");
const leaveBtn = document.getElementById("leaveBtn");
https://github.com/noyontemp2026-cmd/blue-door/blob/main/script.js
const input = document.getElementById("secretInput");
const message = document.getElementById("message");

const SECRET = "NOYON";

let wrongCount = 0;


// I'm Mitu
mituBtn.onclick = () => {
    welcome.classList.add("hidden");
    verify.classList.remove("hidden");
}


// Others
otherBtn.onclick = () => {
    welcome.classList.add("hidden");
    others.classList.remove("hidden");
}


// Leave
leaveBtn.onclick = () => {
    location.reload();
}


// Continue
continueBtn.onclick = checkSecret;


// Enter key
input.addEventListener("keypress", function(e){
    if(e.key==="Enter"){
        checkSecret();
    }
});


function checkSecret(){

    const value = input.value.trim().toUpperCase();

   if(value===SECRET){

    message.style.color="#55ff88";
    message.innerHTML="✅ Access Granted...";

    setTimeout(()=>{

        verify.classList.add("hidden");
        doorScene.classList.remove("hidden");

    },1200);

}

    else{

        wrongCount++;

        message.style.color="#ff5d5d";
        message.innerHTML="❌ Wrong Secret Word";

        input.style.transform="translateX(10px)";

        setTimeout(()=>{
            input.style.transform="translateX(-10px)";
        },80);

        setTimeout(()=>{
            input.style.transform="translateX(0)";
        },160);


        if(wrongCount>=3){

            message.innerHTML="⛔ Access Denied";

            setTimeout(()=>{

                verify.classList.add("hidden");
                welcome.classList.remove("hidden");

                input.value="";
                message.innerHTML="";
                wrongCount=0;

            },2500);

        }

    }

}
const door = document.querySelector(".door");

openDoorBtn.onclick = () => {

    door.classList.add("opening");

    setTimeout(()=>{

        alert("🚪 The Blue Door is opening...\n\nScene 4 Coming Soon 💙");

        door.classList.remove("opening");

    },900);

}

    alert("🚧 Scene 4 is under construction.\n\nComing Soon... 💙");

}
