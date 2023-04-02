function solution(hp) {
    //입 사냥감 hp
    //출 병력 
    //hp를 계속 누적해 나눈다. 5일때 나눈 몫을 병력에 넣고
    //5로 나눈 나머지를 누적한다 나머지에 3을 나눈 몫을 병력에 넣고 
    //나머지를 누적한다. 0에 1 나눈 몫을 병력에 넣고 
    
    //곱하기?hp 되기 전까지 곱하기 
  let antsoldier =[5,3,1];
    let result =0; 
    antsoldier.reduce((acc,cur)=>{
        result = result+Math.floor(acc/cur);
        return acc%cur;
    },hp);
     return result;
    
}