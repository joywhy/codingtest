function solution(d, budget) {
    const arr = d.sort((a, b) => a - b);
    let count = 0;
    
    if(arr[0]>d){
        return 0;
    }
    
   for(let i = 0; i< arr.length; i++){
       count += arr[i];
       if(count > budget){
           return i;
       }
       if(count === budget){
           return i+1;
       }
   }
    return arr.length;
}