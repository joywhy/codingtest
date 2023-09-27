function solution(arr) {
    if(arr.length===1){
        return [-1];
    }
    let el = [arr[0],0];
   arr.forEach((ell,idx)=>{
       if(el[0]>ell){
           el = [ell,idx];
       }
   })
    const answer = arr.filter((ell,idx)=>{
        return ell!==el[0];
    });

    return answer;
}