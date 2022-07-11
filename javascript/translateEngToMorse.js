import { morseCodeDict } from "./morseCode.js";

const translateEngToMorse = (englishStr) => {
    englishStr = englishStr.toUpperCase()
    let morseStr = "";

    for(let i = 0; i < englishStr.length; i++) {
        if ( englishStr[i] == " ") {
            morseStr += " / "
        }
        else {
            morseStr +=  morseCodeDict[englishStr.charAt(i)] + " "
        }
    }
    return console.log(morseStr);
};

translateEngToMorse("How are you")