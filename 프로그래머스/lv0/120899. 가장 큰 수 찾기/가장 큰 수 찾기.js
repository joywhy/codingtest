function solution(array) {
    let maxnum = Math.max(...array);
    
 
   return [maxnum,array.indexOf(maxnum)];
}