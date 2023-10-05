function solution(strArr) {
    var answer = strArr.map((el,idx)=>{
        if(idx===0|| idx%2===0){
            return el.toLowerCase();
        }else{
            return el.toUpperCase();
        }
    });
    return answer;
}