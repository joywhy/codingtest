// function solution(n) {
//     var answer = 0;
//     if(n === 1){
//             return 1;
//         }
//    let halfN = Math.floor(Math.sqrt(n));
//     for(let i =1; i<=halfN; i++){
//         if(i===1){
//             answer=i+ n;
//         }
//        if(n%i===0&& i !==1){
//            console.log(i,n/i);
//            answer=answer+ i+ n/i;
//        }
        
//     }
//     return answer;
// }
function solution(n) {
    let answer = 0;
    for (let i = 0; i <= n; i++) {
        if( n % i === 0) { answer += i}
    }
    return answer
}