/* eslint-disable no-unused-vars, no-prototype-builtins */
function soup(phrase, bank){
 for( let char of phrase){
    const index = bank.indexOf(char);
    if(index===-1){
        return false;
    }
    bank=bank.slice(0,index) + bank.slice(index+1);
 }
 return true;
}