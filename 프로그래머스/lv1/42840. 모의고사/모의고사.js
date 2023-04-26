function solution(answers) {//[1,2,3,4,5,6]
    let arr1 =[1,2,3,4,5];
    let arr2 =[2,1,2,3,2,4,2,5];
    let arr3 =[3,3,1,1,2,2,4,4,5,5];
    
    
    function makeAnswerSheet (arr){//[1,2,3,4,5,6];
         let newarr =[]; 
        for(let i = 0 ; i<answers.length; i++ ){ //0~5  i = 4
            if(i >=arr.length){  //5 5
                 let num = i % arr.length;
                newarr.push(arr[num]);
            }else{
                newarr.push(arr[i]);
            }
        }
        return newarr;
    }
    
    let newarr =makeAnswerSheet(arr1); 
     let newarr2 =makeAnswerSheet(arr2); 
     let newarr3 =makeAnswerSheet(arr3); 
    
    let answer= [0,0,0,0];
  console.log(newarr);
  console.log(newarr2);
  console.log(newarr3);
    for(let j =0;j<answers.length;j ++){
        
        if(answers[j]===newarr[j]){
           answer[1] = answer[1]+ 1;
        }
        if(answers[j]===newarr2[j]){
            answer[2] =answer[2]+ 1;
        }
        if(answers[j]===newarr3[j]){
            answer[3]=answer[3]+1;
        }   
    }
   // console.log(answer);
    let whois =  Math.max(...answer);
    
    let result =[];
  answer.forEach((el,idx)=>{
      if(el===whois){
          result.push(idx);
      }
  });
    return result;
    
    
}