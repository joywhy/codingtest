function solution(a, b) {
    var answer = a.reduce((acc,cur,idx)=>{
       return acc=acc+cur*b[idx]
    },0)
    return answer;
}