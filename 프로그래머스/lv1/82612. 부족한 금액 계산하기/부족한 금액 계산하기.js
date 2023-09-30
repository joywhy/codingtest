function solution(price, money, count) {
    let costArray = Array(count).fill(price).map((el,idx)=>{
        return el*(idx+1)
    })
    let cost = costArray.reduce((acc,cur)=>acc+=cur);
    console.log(cost);
    let answer =cost-money;

    return answer<0?0:answer;
}