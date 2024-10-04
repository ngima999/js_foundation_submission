/* eslint-disable no-unused-vars */


function sometimes(func){
    let callCount = 0; 
    return function (...args) {
        callCount++; 

        if (callCount <= 3) {
            //Return the result of the function for the first 3 calls
            return func(...args);
        } else if (callCount === 4) {
            //Return the specific string on the 4th call
            return 'I do not know!';
        } else {
            //Alternate between the function's return value and the string
            return callCount % 2 === 0 ? 'I do not know!' : func(...args);
        }
    };
}