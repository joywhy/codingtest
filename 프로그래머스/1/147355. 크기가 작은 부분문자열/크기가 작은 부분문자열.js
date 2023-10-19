function solution(t, p) {
    //p 문자열의 길이 구하기 
    //문자열 t 에서  부문문자열의 배열 구하기 
    //배열을 돌려 p의 문자열보다 작거나 같은 수의 배열을 filter 하고 그 배열의  길이 구하기 .length

    const textLength = p.length;
    const tLength = t.length;
    let arr =[];
    for(let i = 0; i<=tLength-textLength; i++){//5-2 3
        const text = t.substr(i,textLength);
        arr.push(text);
    }
        console.log(arr);
    const answer = arr.filter((el)=>Number(el)<=Number(p))
    console.log(answer);
    return answer.length;
}