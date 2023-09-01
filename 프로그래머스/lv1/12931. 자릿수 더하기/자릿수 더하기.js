function solution(n)
{

    const str = n.toString();
 const answer = [...str].reduce((acc,cur)=>acc+Number(cur),0);
    return answer;
}