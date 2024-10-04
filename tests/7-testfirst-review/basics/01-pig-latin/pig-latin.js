/* eslint-disable no-unused-vars */
function pigify(sentence) {
    return sentence.split(' ').map(word => {
      const vowelIndex = word.search(/[aeiou]/); //Find the index of the first vowel
      const quIndex = word.indexOf('qu'); //Find the index of 'qu'
  
      if (vowelIndex === 0) {
        return word + 'ay'; //Word starts with a vowel
      }
  
      if (quIndex > -1 && quIndex === vowelIndex - 1) {
        //Special case handling for 'qu' anywhere in the word, as long as it's near a consonant
        return word.slice(quIndex + 2) + word.slice(0, quIndex + 2) + 'ay';
      }
  
      if (word.startsWith('sch')) {
        return word.slice(3) + 'schay'; //Special case handling for 'sch'
      }
  
      return word.slice(vowelIndex) + word.slice(0, vowelIndex) + 'ay'; //Consonant starting word
    }).join(' ');
  }
  