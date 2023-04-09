function solution(numbers) {
   let arr = numbers.sort((a,b)=>a-b);
    let minMulti = arr[0]*arr[1];
    let maxMulti= arr[arr.length-1]*arr[arr.length-2];
    console.log(minMulti);
    console.log(maxMulti);
    
    if(minMulti>maxMulti){
        return minMulti;
    }else{
        return maxMulti;
    }
  
}