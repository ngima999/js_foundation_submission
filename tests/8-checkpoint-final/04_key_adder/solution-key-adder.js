/* eslint-disable no-unused-vars, no-prototype-builtins */


function keyAdder(){
    //`this` refers to the object context in which keyAdder is called.
  //`Object.keys` is used to get an array of the object's own property keys.
    return Object.keys(this).reduce((sum, key) => {
        //Checking if the value of property is number
        if(typeof this[key]==='number'){
            sum+=this[key];
        }
        return sum;
    }, 0);
}