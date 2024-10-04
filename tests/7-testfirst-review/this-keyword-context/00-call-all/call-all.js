/* eslint-disable no-unused-vars */

function callAll(obj, arr){
    return arr.map(fun=>fun.call(obj));
}