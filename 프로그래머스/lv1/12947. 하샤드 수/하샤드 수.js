function solution(x) {
    const arr = String(x).split("");
    const y = arr.reduce((acc,cur)=>acc+Number(cur),0);
    const isharshad = x%y===0?true:false;
    return isharshad;
}