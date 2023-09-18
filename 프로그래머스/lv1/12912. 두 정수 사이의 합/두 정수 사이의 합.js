function solution(a, b) {
    if(a>b){
        [a, b] = [b, a];
        console.log(a,b);//345
    }
     var answer = a;
    while(a <b){//3 5
        a++;
        answer=answer+a;
        
    }
   
    return answer;
}