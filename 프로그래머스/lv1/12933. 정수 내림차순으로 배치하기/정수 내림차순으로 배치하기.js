function solution(n) {
   let arr = String(n).split("");
    arr = arr.sort((a,b) => b - a);
    const value = arr.join("");
    return Number(value);
}