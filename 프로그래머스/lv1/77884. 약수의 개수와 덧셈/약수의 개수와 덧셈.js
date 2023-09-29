function solution(left, right) {
    let answer = 0;
   for(let i = left; i<=right; i++){
       let num = getmeasure(i);
       
   if(num%2===0){
       answer=answer+ i;
   }else{
       answer=answer- i;
   }
       
   }
    function getmeasure(i){
    let result = []
    let index = 1;
    
    while (index <= i) {
      if (i % index === 0) result.push(index)
      index++
    }
        return result.length;
    }
    return answer;
}