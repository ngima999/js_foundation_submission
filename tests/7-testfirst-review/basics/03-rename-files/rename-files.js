/* eslint-disable no-unused-vars */

function renameFiles(fileArr) {
   
    let renamedFiles = [];
  
   
    let uniquFiles = new Set();
  
    //Iterate over each file in the input array.
    for (const file of fileArr) {

      let newName = file;
  
      
      let count = 1;
  
      //While the new name is already in the set of unique files:
      while (uniquFiles.has(newName)) {
        //Increment the counter and create a new name with the appended number.
        newName = `${file}(${count++})`;
      }
  
      //Add the renamed file to the renamed files array.
      renamedFiles.push(newName);
  
      //Add the renamed file to the set of unique files to prevent duplicates.
      uniquFiles.add(newName);
    }
  
    //Return the array of renamed files.
    return renamedFiles;
  }