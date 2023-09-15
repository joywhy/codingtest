function solution(n) {
    const squareRoot =Math.sqrt(n);
    console.log(squareRoot);
    const answer = Number.isInteger(squareRoot);

    return answer?Math.pow(squareRoot+1,2):-1;
}