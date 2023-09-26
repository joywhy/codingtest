function solution(numbers) {
    let arr = new Array(10).fill(false);
    numbers.forEach((el)=>{
        arr[el]=true;
    })
    let answer= arr.reduce((acc,cur,idx)=>{
        if (!cur) {
            acc =acc+idx;
        }
        return acc;
    },0);
    return answer;
}