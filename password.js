var lengthSlider = document.querySelector(".pass input"),
    progressCounter = document.querySelector(".pass span"),
    button = document.querySelector("button"),
    outPut = document.querySelector("#password"),
    inputChecks = document.querySelectorAll("li input"),
    passIndicator = document.querySelector(".passIndicator"),
    done = document.querySelector(".inputField img");

const characters = {
    lowercase : "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols:"!@#$%^&*()_+-|\}]{[><?~"
}


const generatePassword = ()=>{
    var removeDuplicate  = false;
    var staticPassword = "";
    var createdPassword ="";
    inputChecks.forEach((inputCheck)=>{
        if (inputCheck.id != "space" && inputCheck.id !="duplicate"){
            if (inputCheck.checked){
                staticPassword += characters[inputCheck.id];
            }
        }
        else if (inputCheck.id === "space"){
            staticPassword += ` ${staticPassword} `;
        }
        else{
            removeDuplicate = true;
        }
    })
    for (let i=0;i<lengthSlider.value; i++){
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)]
        if (removeDuplicate){
            (!createdPassword.includes(randomChar) || randomChar == " ")? createdPassword+=randomChar:i--;
        }
        else{
            createdPassword += randomChar;
        }

    }
    password.value = createdPassword;
}

const updateSlider = ()=>{
    progressCounter.innerHTML = lengthSlider.value;
    // pass week to pass indicater id if lenght slider value <=8
    // pass medium to pass indicator id if leghth of slider value <=50
    // else pass strong to the pass indicator id
    passIndicator.id = lengthSlider.value <=18 ? "weak": lengthSlider.value <=50?"medium":"strong";
    console.log(passIndicator.id);
}
const copied = ()=>{
    navigator.clipboard.writeText(password.value);
    done.src = "./done.svg";
    setInterval(()=>{
        done.src = "./copy.svg";
    },1500);
}

lengthSlider.addEventListener('input', updateSlider);
button.addEventListener("click", generatePassword);
done.addEventListener("click", copied);
updateSlider();
