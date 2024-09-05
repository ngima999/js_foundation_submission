/* eslint-disable no-unused-vars */
function thrice(fun){
    let counter=0;
    return function(...arg){
        if(counter<3){
            counter++;
            return fun(...arg);
        }
    }
}