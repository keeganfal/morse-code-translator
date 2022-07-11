import { morseCodeDict } from "./morseCode.js";

const morseInput = document.querySelector("#morse-input")
const morseBtn = document.querySelector("#morse-submit-btn")
const englishOutput = document.querySelector(".main__output-english")

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

export const translateMorseToEng = () => {
    let morseStr = morseInput.value;
    
    let morseWordArr = morseStr.split(" / ")
    console.log(morseWordArr);
    let morseCharArr = [];
    //let morseCharArr = [];
    for (let i = 0; i < morseWordArr.length; i++){
        morseCharArr[i] = morseWordArr[i].split(" ");
    }  
    console.log(morseCharArr);

    //console.log(morseCharArr);

    let englishStr = "";

    for(let i = 0; i < morseCharArr.length; i++) {
        for(let j = 0; j < morseCharArr[i].length; j++) {
        englishStr +=  getKeyByValue(morseCodeDict, morseCharArr[i][j])
        }
        englishStr += " "
    }
    console.log(englishStr);
    englishOutput.innerHTML = englishStr
    return;
};

morseBtn.addEventListener("click", translateMorseToEng)