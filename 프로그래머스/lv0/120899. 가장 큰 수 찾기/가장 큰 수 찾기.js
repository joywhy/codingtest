function solution(array) {
    let maxnum = Math.max(...array);
     let i =0;
    array.map((x,idx)=>{
        if(x===maxnum){
            i = idx;
        }
    });
   return [maxnum,i];
}