function solution(arr1, arr2) {
    var answer = 0;
   if( arr1.length !== arr2.length){
       return arr1.length >arr2.length?1 :-1;
   }
const sum1 = arr1.reduce((acc,cur)=>acc+cur);
const sum2 = arr2.reduce((acc,cur)=>acc+cur);
    
    if(sum1 !== sum2){
        return sum1>sum2?1:-1;
    }
    return 0;
}