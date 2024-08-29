/* eslint-disable no-unused-vars */

function forEach(arr, callback){
    for(let i=0;i<arr.length;i++){
        callback(arr[i], i, arr);
    }
}


const doubler = n => n*2;
function map(arr, funC) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(funC(arr[i]));
    }
    return result;
}
  


function filter(arr, filterFun){
    let result =[];
    for(let i=0;i<arr.length;i++){
        if(filterFun(arr[i]))  {
     result.push(arr[i]);
        }
    }
    return result;
}


function includes(arr, element){
    let result =[];
    for(key in arr){
        if(arr.hasOwnProperty(key))  {
           if(arr[key] === element){
            return true;
           }
        }
    }
    return false;
}




function countWords(currentVal, sentence){
    return currentVal+sentence.split(' ').length;
}




function reduce(arr, startingVal, combiningFun){
    let accumulates=startingVal;
    for(let i=0;i<arr.length;i++){
        accumulates= combiningFun(accumulates, arr[i]);
    }   
    return accumulates;
}


function sum(arr){
   let result=0;
   for(let i=0;i<arr.length;i++){
    result+=arr[i];
   }
   return result;
}



function every(arr, guess){
   for(let i=0;i<arr.length;i++){
    if(!guess(arr[i])){
        return false;
    }
   }
   return true;
}



function some(arr, guess){
    for(let i=0;i<arr.length;i++){
        if(guess(arr[i])){
           return true;
        }
    }
    return false;
}
