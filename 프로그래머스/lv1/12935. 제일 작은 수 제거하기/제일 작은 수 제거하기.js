function solution(arr) {
//     if(arr.length===1){
//         return [-1];
//     }
//     let el = [arr[0],0];
//    arr.forEach((ell,idx)=>{
//        if(el[0]>ell){
//            el = [ell,idx];
//        }
//    })
//     const answer = arr.filter((ell,idx)=>{
//         return ell!==el[0];
//     });

//     return answer;
    let arrr = [1,1,2,3,1,4]
    arrr.splice(1,1);
    console.log(arrr);
      arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}