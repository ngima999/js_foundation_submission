/* eslint-disable no-unused-vars */


//Adding the 'maap' method to Array.prototype
Array.prototype.maap = function(callback) {
    const result = [];
    this.forEach((element, index, array) => {
        result.push(callback(element, index, array));
    });
    return result;
};


//Adding the 'fiilter' method to Array.prototype
Array.prototype.fiilter=function(callback){
    const result=[];
    this.forEach((element, index, array) => {
        if(callback(element, index, array)){
            result.push(element);
        }
    });
    return result;
}


//Adding the 'reeduce' method to Array.prototype
Array.prototype.reeduce=function(callback, initialValue){
    let accumulator=initialValue !== undefined ? initialValue : this[0];
    let startIndex=initialValue !==undefined ? 0 : 1;

    this.forEach((element, index)=>{
        if(index>=startIndex){
            accumulator=callback(accumulator, element, index, this);
        }
    });
    return accumulator;
};