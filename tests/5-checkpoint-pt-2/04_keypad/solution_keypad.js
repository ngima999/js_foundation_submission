/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
function presses(input) {
    let val = input.toLowerCase(); //Converting the input to lowercase for uniformity
    let counter = 0;

    // Mapping characters to the number of key presses required based on a traditional mobile keypad
    const keyPresses = {
        '1': 1, 
        'a': 1, 'b': 2, 'c': 3, 
        'd': 1, 'e': 2, 'f': 3, 
        'g': 1, 'h': 2, 'i': 3, 
        'j': 1, 'k': 2, 'l': 3, 
        'm': 1, 'n': 2, 'o': 3, 
        'p': 1, 'q': 2, 'r': 3, 's': 4, 
        't': 1, 'u': 2, 'v': 3, 
        'w': 1, 'x': 2, 'y': 3, 'z': 4, 
        '0': 2, ' ': 1, 
        '2': 1, '3': 1, '4': 1, '5': 1, '6': 1, '7': 1, '8': 1, '9': 1 
    };

    //Iterating through each character in the string and count presses
    for (let char of val) {
        counter += keyPresses[char] || 0; // Add the number of presses for the character or 0 if not found
    }

    return counter;
}

