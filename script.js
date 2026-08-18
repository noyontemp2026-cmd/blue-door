// ================= ELEMENTS =================

const welcome = document.getElementById("welcome");
const verifyScreen = document.getElementById("verifyScreen");
const othersScreen = document.getElementById("othersScreen");
const doorScene = document.getElementById("doorScene");
const messageScene = document.getElementById("messageScene");

const mituBtn = document.getElementById("mituBtn");
const otherBtn = document.getElementById("otherBtn");
const leaveBtn = document.getElementById("leaveBtn");
const continueBtn = document.getElementById("continueBtn");
const openDoorBtn = document.getElementById("openDoorBtn");
const endBtn = document.getElementById("endBtn");

const secretInput = document.getElementById("secretInput");
const message = document.getElementById("message");
const finalText = document.getElementById("finalText");
const door = document.querySelector(".door");

const SECRET = "NOYON";
let wrongCount = 0;

// ================= WELCOME =================

mituBtn.onclick = () => {
    welcome.classList.add("hidden");
    verifyScreen.classList.remove("hidden");
};

otherBtn.onclick = () => {
    welcome.classList.add("hidden");
    othersScreen.classList.remove("hidden");
};

leaveBtn.onclick = () => {
    othersScreen.classList.add("hidden");
    welcome.classList.remove("hidden");
};

// ================= VERIFY =================

continueBtn.onclick = checkSecret;

secretInput.addEventListener("keydown", (e)=>{
    if(e.key==="Enter"){
        checkSecret();
    }
});

function checkSecret(){

    if(secretInput.value.trim().toUpperCase()===SECRET){

        message.style.color="#7CFF9A";
        message.innerHTML="Access Granted...";

        setTimeout(()=>{

            verifyScreen.classList.add("hidden");
            doorScene.classList.remove("hidden");

        },800);

    }else{

        wrongCount++;

        message.style.color="#ff6b6b";
        message.innerHTML="Wrong Secret Word";

        if(wrongCount>=3){

            setTimeout(()=>{

                verifyScreen.classList.add("hidden");
                welcome.classList.remove("hidden");

                secretInput.value="";
                message.innerHTML="";
                wrongCount=0;

            },1000);

        }

    }

}

// ================= DOOR =================

openDoorBtn.onclick=()=>{

    door.classList.add("opening");

    setTimeout(()=>{

        doorScene.classList.add("hidden");
        messageScene.classList.remove("hidden");

        typeMessage();

    },800);

};

// ================= MESSAGE =================

function typeMessage(){

  const text = `Hi future gf . 💙

I love you so much.
Thank you for opening this secret door.
You are very special to me.i love u ❤️`;

    finalText.innerHTML="";

    let i=0;

    function typing(){

        if(i<text.length){

            finalText.innerHTML+=text.charAt(i);

            i++;

            setTimeout(typing,45);

        }else{

            endBtn.classList.remove("hidden");

        }

    }

    typing();

}

// ================= END =================

endBtn.onclick=()=>{

    document.body.style.transition="1.5s";
    document.body.style.opacity="0";

};
