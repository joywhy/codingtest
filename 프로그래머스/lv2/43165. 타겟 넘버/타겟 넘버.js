// function solution(numbers, target,num =numbers.length ) {
// //경우의 수를 전부 이차원배열로 만든다음  새로운배열에 합한 배열 의 랭스 리턴 [3, 1, 4, ]
// // 1 1      
// //      -1
// //    -1 
    
    
// //     //[1,1,1] 3  3 //([1,1],3 ,2)
    
// //     let result =[];
// //     if(num ===1){return [numbers,[Math.abs(...numbers)] }
// //   //  numbers.forEach((el,idx,arr)=>{ 
// //       //  let fix = el;
// //        let fix = numbers[0];//1 1
// //         //let rest = arr.filter((_,idxx) => idxx !== idx);
// //         let rest = numbers.slice(1); //[1,1]
// //         let restarr = solution(rest,target,num-1);//([1,1],3 ,2)
// //         let plusarr = [el,...restarr];
// //         let minusarr = [Math.abs(el),...restarr];
// //       result.push(...firstNum,...firstNum2)
        
// //    });
    
    
// }
function solution(numbers, target) {
  let count = 0;

  function dfs(result, depth) {
    if (depth === numbers.length) {
      if (result === target) count += 1;
    } else {
      dfs(result - numbers[depth], depth + 1);
      dfs(result + numbers[depth], depth + 1);
    }
  }

  // result, depth
  dfs(0, 0);

  return count;
}