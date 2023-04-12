function solution(nums) {
 let newarr= [];
    nums.map((x,idx)=>{
        if(idx=0||newarr.indexOf(x)===-1){
            newarr.push(x); 
        }
    });
    return (nums.length/2<newarr.length?nums.length/2:newarr.length);
}