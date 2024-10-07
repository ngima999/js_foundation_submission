/* eslint-disable no-unused-vars, no-prototype-builtins */

function alternate(fn) {
    //Track whether the function should be called
    let shouldCall = true;  
  
    return function() {
      if (shouldCall) {
        //Call the function if `shouldCall` is true
        fn();  
      }
      //Toggle the flag for the next call
      shouldCall = !shouldCall;  
    };
  }
  

function twice(fun){
    //track number of times function has been called
    let callCount=0;

    return function(){
    if(callCount<2){
        //Increment call count
        callCount++;
        //Call the provided function if count is less than 2
        return fun();
    }else{
        return 0;
    }
}
}