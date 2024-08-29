/* eslint-disable no-unused-vars */

function setPropsOnObj(obj){
    obj.x=7;
    obj.y=8;
    obj.onePlus = function (arg){
        return arg+1;
    }
}


function setPropsOnArr(arrObj){
arrObj.hello = function(){
    return `Hello!`;
}
arrObj.full = 'stack'
arrObj[0] = 5;
arrObj.twoTimes = function(arg){
    return arg*2;
}
}




function setPropsOnFunc(functionObject) {
    functionObject.year='20??';
    functionObject.divideByTwo = function (arg){
       return arg/2;
    }
}




function shallowCopy(arg1, arg2){
    if(Array.isArray(arg1) && Array.isArray(arg2)){
        return [...arg1, ...arg2];
    }else if( typeof arg1==='object' && typeof arg2 ==='object'){
        return {...arg1, ...arg2};
    }
}