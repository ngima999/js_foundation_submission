/* eslint-disable no-unused-vars */

function indexAndValue(array){
    return array.map((value, index) => ({
        value: value,
        index: index
    }));
}



function capitalize(str){
  return str.toUpperCase();
}

function capitalize(str) {
    return str.toUpperCase();
  }
  
  
  function swapCase(sentence) {
    return sentence
      .split(' ') 
      .map((word, index) => {
    
        return index % 2 === 0 ? capitalize(word) : word;
      })
      .join(' '); 
  }



function extensionSearch(ext, arr){
   return arr.filter(item => item.endsWith(ext));
}

function getPopulation(arrayOfCountries, selectedCountries) {
    return arrayOfCountries.reduce((totalPopulation, country) => {
      //If selectedCountries is empty, add the population of all countries
      //If selectedCountries is not empty, only add the population of countries that are in the selectedCountries array
      if (selectedCountries.length === 0 || selectedCountries.includes(country.name)) {
        return totalPopulation + country.population;
      }
      return totalPopulation;
    }, 0);
  }


function keyifyArrayOfObjects(key, arr) {
    return arr.reduce((acc, obj) => {
      acc[obj[key]] = obj;
      return acc;
    }, {});
  };


function powerLevelAverage(superheroes) {
    return Math.round(
      superheroes.reduce((acc, hero) => acc + hero.powerLevel, 0) / superheroes.length
    );
  };


function mapReduce(arr, funC){
 return arr.reduce((acc, val) => {
  acc.push(funC(val));
  return acc;
 }, []);
};
  
  
function filterReduce(arr, func) {
  return arr.reduce((acc, val) => {
    if (func(val)) acc.push(val);
    return acc;
  }, []);
};


function inYourBudget(budget, items){
  return items.filter(item => item.price <= budget).map(item => item.item);
};
  


function separateAndReturnNames(superheroes, nameType, maxLength) {
  return superheroes
    .map(hero => {
      // Split the name into firstName and lastName
      const [firstName, lastName] = hero.name.split(' ');
      // Return a new object with firstName and lastName added
      return { ...hero, firstName, lastName };
    })
    .filter(hero => hero[nameType].length <= maxLength)
    .map(hero => hero[nameType]);
}


function priorityTodoDuration(todoList) {
  return todoList
    .filter(task => task.priority === 'high')
    .reduce((total, task) => total + task.duration, 0);
};