/* eslint-disable no-unused-vars, no-extend-native */

Array.prototype.doNotInclude = function(indices) {
    //Check if indices is an array, even if a single number is passed
    const excludeIndices = Array.isArray(indices) ? indices : [indices];
    
    //Filter out elements whose index is in the excludeIndices array
    return this.filter((_, index) => !excludeIndices.includes(index));
  };
  