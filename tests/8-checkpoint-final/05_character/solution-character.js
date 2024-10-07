/* eslint-disable no-unused-vars, no-prototype-builtins */

class Character{
    constructor(character, fontName, fontSize){
        this.character=character;
        this.fontName=fontName;
        this.fontSize=fontSize;
    }

    drawCharacter(){
        return this.character;
    }
}


class Letter extends Character{
    constructor(character, fontName, fontSize, charCase){
        super(character, fontName, fontSize);
        this.charCase=charCase;
    }

    toLowerCase(){
        this.charCase='lowerCase';
        this.character=this.character.toLowerCase();
    }

    toUpperCase(){
        this.charCase='upperCase';
        this.character=this.character.toUpperCase();
    }
    
    getCase(){
        return this.charCase;
    }
}



class Digit extends Character {
    constructor(character, fontName, fontSize) {
        super(character, fontName, fontSize);
        this.isDigit = typeof character === 'number';
        if (typeof character === 'string' && !isNaN(character)) {
            this.isDigit = false; // Set to false if character is a numeric string
        }
    }

    integerValue() {
        if (this.isDigit) {
            return this.character; // Already a number
        }
        if (typeof this.character === 'string' && !isNaN(this.character)) {
            this.isDigit = true; // Set isDigit to true
            this.character = Number(this.character); // Convert to number
        }
        return this.character; // Return the numeric value
    }

    drawCharacter() {
        return this.isDigit ? this.integerValue() : this.character;
    }
}
