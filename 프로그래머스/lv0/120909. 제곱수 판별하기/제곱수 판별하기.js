function solution(n) {
 //제곱근이랑 제곱근 버림한 수랑 같으면 1 아니면 2 리턴 
    return (Math.sqrt(n) === Math.floor(Math.sqrt(n))?1:2);
}