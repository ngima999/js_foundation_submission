/* eslint-disable no-unused-vars */
function makeIterator(arr) {
    
    let index = 0;

   
    return {
        //Method to get the next value from the array
        getNext() {
            //Check if there are more elements in the array
            if (index < arr.length) {
               
                return { value: arr[index++], done: false };
            } else {
                
                return { value: arr[index++], done: true };
            }
        },

        //Method to get the current index without changing it
        getIndex() {
            
            return index;
        },
    };
}
