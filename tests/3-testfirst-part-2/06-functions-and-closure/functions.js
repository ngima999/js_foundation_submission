/* eslint-disable no-unused-vars */

function concatString(){
 let str=Array.from(arguments);
 return str.join('');
}


function yourFunctionRunner(fun){
 let str='';
 for(let i=0;i<arguments.length;i++){
    str+=arguments[i]();
 }
    return str;
}



function makeAdder(a){
   return function(b){
    return a+b;
   }
}



function once(fun){
    let notCalled = true;
    return function(){
        if(notCalled){
            notCalled=false;
            return fun();
        }
        return 'the function has already been called...';
    }
}



const createObjectWithClosures = function () {
    let total = 0;
    return {
      oneIncrementer: function () {
        total += 1;
      },
      tensIncrementer: function () {
        total += 10;
      },
      getValue: function () {
        return total;
      },
      setValue: function (val) {
        total = val;
      },
    };
  };
  




function dontSpillTheBeans(secret){
    return {
        getSecret: function(){
              return secret;
        },
        setSecret: function(arg){
            secret = arg;
        }
    };
}


