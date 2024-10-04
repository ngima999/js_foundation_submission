/* eslint-disable no-unused-vars */

function multipleMaps(arr, maps) {
    //Use map function to iterate over each element in arr
    return arr.map(item => {
      //Loop over each map object in the maps array
      for (const map of maps) {
        //If the item exists as a key in the map, return the mapped value
        if (map.hasOwnProperty(item)) {
          return map[item];
        }
      }
      //If no map matches the item, return the item itself (not covered in tests but good practice)
      return item;
    });
  }