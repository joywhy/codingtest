function solution(nums) {
 let newarr= [];
    nums.map((x,idx)=>{
        if(idx=0||newarr.indexOf(x)===-1){ 
            //indexOf 배열의 앞쪽부터 비교해서 차례 나감으로 해시로 푼것이 아님
            //
            newarr.push(x); 
        }
    });
    return (nums.length/2<newarr.length?nums.length/2:newarr.length);
}