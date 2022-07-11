import {expect, it} from "@jest/globals"; 
import { translateEngToMorse } from "../javascript/translateEngToMorse";

// writing a test
it("a to '.-'", () => {
    const result = translateEngToMorse("a");
    expect(result).toBe(".-")
})

it("abcd to '.- -... -.-. -..'", () => {
    const result = translateEngToMorse("abcd");
    expect(result).toBe(".- -... -.-. -..")
})

it("a b c d to '.- / -... / -.-. / -..'", () => {
    const result = translateEngToMorse("a b c d");
    expect(result).toBe(".- / -... / -.-. / -..")
})

it("**** to 'unavaliable'", () => {
    const result = translateEngToMorse("****");
    expect(result).toBe("unavaliable")
})
