/* eslint-disable no-unused-vars */
function accessor(obj){
    return function(key, value){
        if (value === undefined) {
            //If value is not provided, it's a getter
            return obj[key]; 
        } else {
            //If value is provided, it's a setter
            obj[key] = value; 
        }
    }
}