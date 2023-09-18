function solution(num) {
    let count =1;
    
    while(count!==500&& num!==1){
        if(num%2===0){
          num= num/2;
        }else
      {
           num= num*3 +1;
        }
        console.log(num);
        count++;
    }
    return count===500?-1:count-1;
}