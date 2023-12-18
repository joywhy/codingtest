function solution(progresses, speeds) {
    let deadline = 0;
    let count = 0; 
    
    let dueDate = progresses.map((el,idx)=>{
     let task = (100-el)/speeds[idx];              
     return  Math.ceil(task);
    });
   
    console.log(dueDate);
    let answer =[];
     dueDate.forEach((el,idx,arr)=>{
        //  console.log(deadline);
        // console.log(count);
          if(deadline<el){
              deadline = el;  
           }
          if(deadline>=el){
            count=count+1;
           }
           if((deadline>=el)&&(deadline<arr[idx+1])){
             let dat=count;
             count=0;
               console.log(dat);
            answer.push(dat);   
           }
         if(idx === arr.length-1){
            return  answer.push(count);  
         }
    });
    return answer;
}