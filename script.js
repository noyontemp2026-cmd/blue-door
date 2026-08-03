const welcome = document.getElementById("welcome");
const verify = document.getElementById("verifyScreen");
const others = document.getElementById("othersScreen");

const mituBtn = document.getElementById("mituBtn");
const otherBtn = document.getElementById("otherBtn");
const continueBtn = document.getElementById("continueBtn");
const leaveBtn = document.getElementById("leaveBtn");

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
