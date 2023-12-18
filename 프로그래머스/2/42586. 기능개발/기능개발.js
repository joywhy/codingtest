function solution(progresses, speeds) {
    let releaseDate = 0;
    let features = 0; 
    
    let dueDate = progresses.map((el,idx)=>{
     let task = (100-el)/speeds[idx];              
     return  Math.ceil(task);
    });
   
    let answer =[];
     dueDate.forEach((el,idx,arr)=>{
    
          if(releaseDate<el){
              releaseDate = el;  
           }
          if(releaseDate>=el){
            features=features+1;
           }
           if((releaseDate>=el)&&(releaseDate<arr[idx+1])){
             let dat=features;
             features=0;
     
            answer.push(dat);   
           }
         if(idx === arr.length-1){
            return  answer.push(features);  
         }
    });
    return answer;
}