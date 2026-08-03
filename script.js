// =========================
// ELEMENTS
// =========================

const welcome = document.getElementById("welcome");
const verify = document.getElementById("verify");
const others = document.getElementById("others");

const mituBtn = document.getElementById("mituBtn");
const otherBtn = document.getElementById("otherBtn");

const continueBtn = document.getElementById("continueBtn");
const leaveBtn = document.getElementById("leaveBtn");

const input = document.getElementById("secretInput");
const message = document.getElementById("message");

const doorScene = document.getElementById("doorScene");
const openDoorBtn = document.getElementById("openDoorBtn");
const door = document.querySelector(".door");

const messageScene = document.getElementById("messageScene");
const finalText = document.getElementById("finalText");
const endBtn = document.getElementById("endBtn");

// =========================

const SECRET = "NOYON";
let wrongCount = 0;

// =========================
// BUTTONS
// =========================

mituBtn.onclick = () => {
    welcome.classList.add("hidden");
    verify.classList.remove("hidden");
};

otherBtn.onclick = () => {
    welcome.classList.add("hidden");
    others.classList.remove("hidden");
};

leaveBtn.onclick = () => {
    location.reload();
};

continueBtn.onclick = checkSecret;

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        checkSecret();
    }
});

// =========================
// SECRET WORD
// =========================

function checkSecret(){

    const value = input.value.trim().toUpperCase();

    if(value === SECRET){

        message.style.color="#55ff88";
        message.innerHTML="✅ Access Granted...";

        setTimeout(()=>{

            verify.classList.add("hidden");
            doorScene.classList.remove("hidden");

        },1200);

    }else{

        wrongCount++;

        message.style.color="#ff5d5d";
        message.innerHTML="❌ Wrong Secret Word";

        if(wrongCount>=3){

            message.innerHTML="⛔ Access Denied";

            setTimeout(()=>{

                verify.classList.add("hidden");
                welcome.classList.remove("hidden");

                input.value="";
                message.innerHTML="";
                wrongCount=0;

            },2000);

        }

    }

}

// =========================
// DOOR
// =========================

openDoorBtn.onclick = ()=>{

    door.classList.add("opening");

    setTimeout(()=>{

        doorScene.classList.add("hidden");
        messageScene.classList.remove("hidden");

        typeMessage();

    },900);

};

// =========================
// MESSAGE
// =========================

function typeMessage(){

    finalText.innerHTML="";

    const text=`Hi Mitu...

I have been waiting for you.

Thank you for opening this door.

I made this only for you.

I'm sorry. 💙`;

    let i=0;

    function typing(){

        if(i<text.length){

            finalText.innerHTML+=text.charAt(i);

            i++;

            setTimeout(typing,50);

        }else{

            endBtn.classList.remove("hidden");

        }

    }

    typing();

}

// =========================
// END
// =========================

endBtn.onclick=()=>{

    document.body.style.transition="1.5s";
    document.body.style.opacity="0";

};
