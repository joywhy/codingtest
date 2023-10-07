function solution(n, m) {
    var answer =Array(2).fill(1);
    let Max = 1; 
    
    for(let i = 1; i<= Math.min(n,m);i++ ){
        if((n%i===0 )&& (m%i===0)){
            Max = i;
        }
    }
    
    answer[0]= Max; 
    answer[1]= Max*(n/Max)*(m/Max)
    return answer;
}