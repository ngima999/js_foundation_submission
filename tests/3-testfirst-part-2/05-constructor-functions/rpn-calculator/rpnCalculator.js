/* eslint-disable no-unused-vars, no-throw-literal*/
function RPNCalculator(){
    this.stack = [];
}


RPNCalculator.prototype.push = function(num){
    this.stack.push(num);
 }
 RPNCalculator.prototype.plus = function(){
     if (this.stack.length < 2) {
         throw 'rpnCalculatorInstance is empty';
     }

    const num1 = this.stack.pop();
    const num2 = this.stack.pop();
    const sum = num2+num1;
    this.stack.push(sum);
 }
 RPNCalculator.prototype.value = function(){
     return this.stack[0];
 }
 RPNCalculator.prototype.minus = function(){
     if (this.stack.length < 2) {
         throw 'rpnCalculatorInstance is empty';
     }
     const num1 = this.stack.pop();
     const num2 = this.stack.pop();
     const sub = num2-num1;
     this.stack.push(sub);
 }

 RPNCalculator.prototype.times = function(){
     if (this.stack.length < 2) {
         throw 'rpnCalculatorInstance is empty';
     }

     const num1 = this.stack.pop();
     const num2 = this.stack.pop();
     const product = num1 * num2;
     this.stack.push(product);
 }

 RPNCalculator.prototype.divide = function(){
     if (this.stack.length < 2) {
         throw 'rpnCalculatorInstance is empty';
     }
     
     const num1 = this.stack.pop();
     const num2 = this.stack.pop();
     const divide = num2 / num1;
     this.stack.push(divide);
 }

