/* eslint-disable no-unused-vars */


const createCalculator = function (){
  
   return {
    add(num){
      this.total+=num;
    },
    subtract(num){
      this.total-=num;
    },
    clear(){
        return this.total=0;
    },
    value(){
        return this.total;
    },
    total: 0
   };
};


const addSquareMethod = function(arr){
for(let i=0;i<arr.length;i++){
    let calculatorInstance = arr[i];
    calculatorInstance.square = function(){
     return this.total* this.total;
    };
}

return [...arr]
};



const humanCalculatorPrototype = {
    add(num){
        this.total+=num;
    },
    subtract(num){this.total-=num;
        
    },
    value(){
        return this.total;
    },
    clear(){
        return this.total=-10;
    }
}


const createHumanCalculator = function(){
let humanCalculator = Object.create(humanCalculatorPrototype);
humanCalculator.total= -10;
return humanCalculator;
}


console.log(createHumanCalculator());