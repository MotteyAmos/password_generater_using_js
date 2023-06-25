/*var passwordLength = document.querySelector(".passwordLength"),
    passwordCounter = document.querySelector(".password span"),
    inputs = document.querySelectorAll("li input"),
    button = document.querySelector("button"),
    output = document.querySelector(".output input"),
    passwordStright = document.querySelector(".passwordStright");

var characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "1234567890",
    symbol: "!#$@%^&*()_+-=}{][|\\?"
}

const increaseLenght = ()=>{
    passwordCounter.innerHTML = passwordLength.value;
}


passwordLength.addEventListener("input", increaseLenght);
increaseLenght();


var duplicate = false;
button.addEventListener("click", ()=>{
   
    var passwordCharacters = "";
    var generatedPassword = "";

    inputs.forEach(element => {
        if (element.id != "space" || element.id != "duplicate"){
            if (element.checked){
                passwordCharacters += characters[element.id];   
            }
        }
        else if(element.id == "space"){
            passwordCharacters = ` ${passwordCharacters} `;
        }
        else if (element.id == "duplicate"){
            duplicate = true;
        }

    });

    for (let i=0; i< passwordLength.value; i++){
        var randomCharacter =  passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
       if (duplicate){
            if (!generatedPassword.includes(randomCharacter)){
                generatedPassword += randomCharacter 
            }
            else{
                i--;
            }
        }
        else{
            generatedPassword += randomCharacter; 
        }
       
    }
    output.value = generatedPassword;
})
*/






const passwordLength = document.querySelector(".passwordLength"),
    passwordCounter = document.querySelector(".password span"),
    inputs = document.querySelectorAll("li input"),
    button = document.querySelector("button"),
    output = document.querySelector(".output input"),
    passwordStright = document.querySelector(".passwordStright");

var characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "1234567890",
    symbol: "!#$@%^&*()_+-=}{][|\\?"
}

const increaseLenght = ()=>{
    passwordCounter.innerHTML = passwordLength.value;
    passwordStright.id = (passwordLength.value <= 18) ? "weak": (passwordLength.value <=50) ? "medium": "strong";
}


passwordLength.addEventListener("input", increaseLenght);
increaseLenght();




button.addEventListener("click", ()=>{
    var passwordCharacters = "";
    var generatedPassword = "";
    var duplicate = false;

    inputs.forEach(element => {
        if (element.checked){
            if (element.id != "space" && element.id != "duplicate"){
                passwordCharacters += characters[element.id];
            }

            else if(element.id == "space"){
                passwordCharacters = ` ${passwordCharacters} `;
            }   
            else if (element.id == "duplicate"){
                duplicate = true;
            }
        }
    });


    for (var i=0; i< passwordLength.value; i++){
        var randomCharacter = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        if (duplicate){
            if (!generatedPassword.includes(randomCharacter) ||  randomCharacter == " "){
                generatedPassword += randomCharacter;
               console.log(3); 
            }
            else{
              i--;  
              console.log(5); 
            }
        }
    }
    output.value = generatedPassword;
})