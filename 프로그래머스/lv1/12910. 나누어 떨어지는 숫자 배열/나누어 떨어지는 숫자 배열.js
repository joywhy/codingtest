function solution(arr, divisor) {
    var answer = arr.filter((el)=>el%divisor===0)
    const sortarr = answer.sort((a,b)=>a-b);
    return sortarr.length===0?[-1]:sortarr;
}