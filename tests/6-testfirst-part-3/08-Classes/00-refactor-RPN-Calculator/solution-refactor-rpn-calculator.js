class RPNCalculator {
  constructor() {
    this.stack = [];
  }

  //Push a value to the stack
  push(value) {
    this.stack.push(value);
  }

  //Check if there are at least 2 numbers in the stack
  _checkOperands() {
    if (this.stack.length < 2) {
      throw new Error('rpnCalculatorInstance is empty');
    }
  }

  //Add the top two numbers from the stack
  plus() {
    this._checkOperands();
    const b = this.stack.pop();
    const a = this.stack.pop();
    this.stack.push(a + b);
  }

  //Subtract the top two numbers from the stack
  minus() {
    this._checkOperands();
    const b = this.stack.pop();
    const a = this.stack.pop();
    this.stack.push(a - b);
  }

  //Multiply the top two numbers from the stack
  times() {
    this._checkOperands();
    const b = this.stack.pop();
    const a = this.stack.pop();
    this.stack.push(a * b);
  }

  //Divide the top two numbers from the stack
  divide() {
    this._checkOperands();
    const b = this.stack.pop();
    const a = this.stack.pop();
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.stack.push(a / b);
  }

  //Return the current top value of the stack
  value() {
    if (this.stack.length === 0) {
      throw new Error('rpnCalculatorInstance is empty');
    }
    return this.stack[this.stack.length - 1];
  }
}
