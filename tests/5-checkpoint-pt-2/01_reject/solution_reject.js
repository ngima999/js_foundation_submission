const reject = function(arr, func) {
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (!func(arr[i])) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  };
  
  const testWord = word => { return word.length > 3; }
  const listOfWords = reject(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'], testWord);