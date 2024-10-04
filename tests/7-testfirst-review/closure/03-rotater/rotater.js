/* eslint-disable no-unused-vars */

function rotater(str) {
  let flip = false; //Tracks the current rotation direction

  return function(steps) {
    //If steps equals the string length, reverse direction
    if (steps === str.length) {
      flip = !flip;
    }

    //Normalize steps for rotations larger than string length
    steps = steps % str.length;

    //Rotate the string based on the current direction
    if (!flip) {
      return str.slice(steps) + str.slice(0, steps); //Rotate forward
    } else {
      return str.slice(-steps) + str.slice(0, str.length - steps); //Rotate backward
    }
  };
}
