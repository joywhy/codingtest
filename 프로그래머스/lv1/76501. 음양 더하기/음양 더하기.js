function solution(absolutes, signs) {
    var answer = absolutes.reduce((acc,cur,idx)=>
                                  {return signs[idx]?acc=acc+cur:acc=acc-cur;}
                                ,0
                                 );
    return answer;
}