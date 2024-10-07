/* eslint-disable no-unused-vars, no-prototype-builtins */


function aQuarter(func){
    //Counter to record number of calls
    let counter=0;
    return function (...args){
        //Increment hte counter on each function call
        counter++;
        //Checking if count is divisible by 4 or not
        if(counter%4===0){
            return func(...args);
        }
        return 'something went wrong :/';
    };
}