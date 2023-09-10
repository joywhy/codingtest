function solution(x, n) {
    var answer = [];
    let count =0;
    let value = x;
    while(count<n){
        answer.push(value);
        value +=x;
        count ++;
    }
    return answer;
}