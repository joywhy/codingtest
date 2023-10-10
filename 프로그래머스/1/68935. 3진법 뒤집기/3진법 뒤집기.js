function solution(n) {
    var ternary = n.toString(3);
    const num = [...ternary].reverse().join("");
    return parseInt(num, 3);
}