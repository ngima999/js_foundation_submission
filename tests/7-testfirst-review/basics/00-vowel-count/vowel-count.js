function vowelsCount(str) {
    const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  
    //Convert string to lowercase and into an array
    const lowerStr = str.toLowerCase().split('');
  
    //Reduce to count vowels
    const total = lowerStr.reduce((acc, char) => {
      if (vowels.hasOwnProperty(char)) {
        vowels[char]++;
        acc++;
      }
      return acc;
    }, 0);
  
    vowels.total = total;
    return vowels;
  }
  