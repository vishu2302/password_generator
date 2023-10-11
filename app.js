const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "/*-+,./;[]{}'<>?:|`\"~!@#$%^&*()_=";

const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");

const generatebtn = document.getElementById("generate");
const passwordEl = document.getElementById("password");

generatebtn.addEventListener("click", function(){
    const length = lengthEl.value;
    let characters = "";
    let passwords = "";

    if(lowercaseEl.checked){
        characters += lowercaseLetters;
    }
    if(uppercaseEl.checked){
        characters += uppercaseLetters;
    }

    if(numberEl.checked){
        characters += numbers;
    }
    if(symbolEl.checked){
        characters += symbols;
    }

    for(let i = 0; i < length; i++){
        passwords += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passwordEl.value = passwords; // Use "passwords" instead of "password"
});
