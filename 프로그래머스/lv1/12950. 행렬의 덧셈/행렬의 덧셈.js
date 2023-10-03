function solution(arr1, arr2) {
    // const arr = Array(arr1[0].length).fill(0);
    // let answer = Array.from({length: arr1.length}, (v) => arr);
    const length = arr1[0].length;
    let answer = arr1.map((el,index,arr)=>{
        
        return Array.from({length: length},(v,idx)=>arr1[index][idx]+arr2[index][idx]);
    });
  
    return answer;
}