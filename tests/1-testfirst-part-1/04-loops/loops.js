/* eslint-disable no-unused-vars */

function repeat(str, num){
    let finalStr = '';
    for(let i=0;i<num;i++){
        finalStr+=str;
    }
    return finalStr;
}



function sum(arr){
    let total=0;
  for(let i=0;i<arr.length;i++){
    total+=arr[i];
  }
  return total;
}


function join(arr, delimiter=''){
    let str='';
    for(let i=0;i<arr.length;i++){
        if(arr.hasOwnProperty(i)){
        if(i>0){
            str+= delimiter;
        }
        str+=arr[i];
        }
}
return str;
}



function gridGenerator(input){
    let grid ='';
    if(input===0){
        return grid;
    }else{
        for(let i=0;i<input;i++){
            for(let j=0;j<input;j++){
                if ((i + j) % 2 === 0) {
                    grid += '#';
                  } else {
                    grid += ' ';
                  }
            }
            grid += '\n';
        }
        return grid;
    };
}




function paramify(obj){
    let str=[];
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
        str.push(`${key}=${obj[key]}`);
     }
    }
    return str.sort().join('&');
}



function paramifyObjectKeys(obj){
  const keyArray = Object.keys(obj);
 keyArray.sort();
  let str='';
  for(let i=0;i<keyArray.length;i++){
    let key = keyArray[i];
    str+=`${key}=${obj[key]}`;
    if(i !== keyArray.length-1){
        str+='&';
    }
  }
  return str;
}




function sort(arr) {
    let n = arr.length;
  
    for (let i = 0; i < n; i++) {
      // Find the minimum element in the remaining unsorted array
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the found minimum element with the first element of the unsorted array
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  
    return arr;
  }
  