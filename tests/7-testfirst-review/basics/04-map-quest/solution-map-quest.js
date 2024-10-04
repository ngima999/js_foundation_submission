/* eslint-disable no-unused-vars */

function mapQuest(directions) {
    return directions.reduce((acc, curr) => {
      const last = acc[acc.length - 1];
  
      //Check for opposite directions
      if (
        (curr === 'N' && last === 'S') ||
        (curr === 'S' && last === 'N') ||
        (curr === 'E' && last === 'W') ||
        (curr === 'W' && last === 'E')
      ) {
        //If they are opposites, remove the last direction
        acc.pop();
      } else {
        //Otherwise, add the current direction
        acc.push(curr);
      }
  
      return acc;
    }, []);
  }
  