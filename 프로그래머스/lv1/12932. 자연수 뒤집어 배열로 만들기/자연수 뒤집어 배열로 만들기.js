function solution(n) {
    const num = n+ '';
    var answer =  Array(num.length).fill(0)
    .map((x, idx)=>{
        const value = num.length-1-idx;
    
        return Number(num[value]);
    });
    return answer;
}