import { morseCodeDict } from "./morseCode.js";

const englishInput = document.querySelector("#english-input")
const englishBtn = document.querySelector("#english-submit-btn")
const morseOutput = document.querySelector(".main__output-morse")
//const morseInput = document.querySelector("#morse-input")

export const translateEngToMorse = () => {
    let englishStr = englishInput.value;
    englishStr = englishStr.toUpperCase();
    let morseStr = "";
    for(let i = 0; i < englishStr.length; i++) {
        if ( englishStr[i] == " ") {
            morseStr += " / "
        }
        else {
            console.log(englishStr.charAt(i));
            morseStr +=  morseCodeDict[englishStr.charAt(i)] + " "
        }
    }
    console.log(morseStr);
    morseOutput.innerHTML = morseStr
    return;
};

englishBtn.addEventListener("click", translateEngToMorse)